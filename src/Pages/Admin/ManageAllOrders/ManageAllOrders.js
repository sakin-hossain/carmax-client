import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
//     const [orders, setOrder] = useState([]);
//     const [isUpdated, setIsUpdated] = useState(null);

//     useEffect(()=>{
//         fetch('https://thawing-harbor-39490.herokuapp.com/myOrders')
//         .then(res=>res.json())
//         .then(data=>{
//             setOrder(data)
//         })
//     },[isUpdated]);

//     const handleCancel = id =>{
//         const proceed = window.confirm('Are you sure to cancel the booking ?');
//         if(proceed){
//             fetch(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`,{
//             method:"DELETE",
//         })
//             .then(res => res.json())
//             .then(result=> {
//                 if(result.deletedCount){
//                     alert('Delete Successfully');
//                     setIsUpdated(true);
//                 }
//                 else{
//                     setIsUpdated(false);
//                 }
//             });
//         }
//     }
//     const handleApproved = id =>{
//         fetch(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`,{
//             method:"PUT",
//             headers:{
//                 'content-type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//     .then(result=> {
//             if(result.acknowledged){
//                 alert('Approved Successfully');
//                 setIsUpdated(true);
//             }
//             else{
//                 setIsUpdated(false);
//             }
//             console.log(result);
//         });
//     }
//     return (
//         <div id="manageOrders" className="mt-5">
//             <h1 className="my-3">There are All Orders</h1>
//             <Table striped bordered hover className=" table-responsive-sm">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th>Package Name</th>
//                         <th>Package Price</th>
//                         <th>Your Mobile</th>
//                         <th>From</th>
//                         <th>To</th>
//                         <th>Order Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//             {
//                 orders.map(or=> 
//                     <tbody key={or._id}>
//                         <tr>
//                             <td>{or.packageName}</td>
//                             <td>${or.packagePrice}</td>
//                             <td>{or.mobile}</td>
//                             <td>{or.from}</td>
//                             <td>{or.to}</td>
//                             <td>{or.status}</td>
//                             <td>
//                                 <button onClick={()=>handleCancel(or._id)} className="btn btn-danger mx-3">Cancel</button>
//                                 <button onClick={()=>handleApproved(or._id)} className="btn btn-success">Approve</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                     )
//             }
//             </Table>
//         </div>
//     );
// };


const [status, setStatus] = useState("");
    const [bookings, setBookings] = useState([]);
    const [isdeleted, setIsDeleted] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(() => {
        fetch('https://thawing-harbor-39490.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [isdeleted, isUpdated])
    const handleDelete = id => {
        const proceed = window.confirm('Cancel Booking!Are you sure?');
        if (proceed) {
            axios.delete(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Delete Successful!')
                        setIsDeleted(true);
                    }
                })
        }
    }
    const statusChange = e => {
        setStatus(e.target.value)
    }

    const handleUpdate = (id) => {
        if (!status) {
            window.alert("Please select status")
            return
        }

        axios.put(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`, {
            status: status
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Approved! Status updated")
                    setStatus("")
                    setIsUpdated(true);
                }
            })
    }

    return (
        <div>
            <div className='allbooking-container'>
                <div className='text-center allbooking-main-container allbooking-custom-font'>
                    <h1 className="p-4">Manage Orders</h1>
                    {!bookings && (<div className="text-center">
                        <div className="spinner-grow text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    {
                        bookings.map(booking => <div key={booking._id} className="container">
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-body">
                                    <div className="card-header">Order Details</div>
                                    <p>Client's Name: {booking.name}</p>
                                    <p>Booked Apartment: {booking.orderTitle}</p>
                                    <small>Email: {booking.email}</small> <br />
                                    <small>Current Status: {booking.status}</small>
                                    <div className="mt-2 d-flex justify-content-center">
                                        <div className="ms-2">
                                            <select className="form-select" onChange=
                                                {statusChange} aria-label="Default select example">
                                                <option selected>Change Status</option>
                                                <option value="Approved">Approve</option>
                                                <option value="Rejected">Reject</option>
                                                <option value="Completed">Handover</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 d-flex  justify-content-center">
                                    <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Delete</button>
                                    <button className="ms-2 btn btn-success" onClick={() => handleUpdate(booking._id)}>Update Status</button>

                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div >
        </div >
    );
};


export default ManageAllOrders;