import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrder] = useState([]);
    const [isUpdated, setIsUpdated] = useState(null);

    useEffect(()=>{
        fetch('https://thawing-harbor-39490.herokuapp.com/myOrders')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[isUpdated]);

    const handleCancel = id =>{
        const proceed = window.confirm('Are you sure to cancel the booking ?');
        if(proceed){
            fetch(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`,{
            method:"DELETE",
        })
            .then(res => res.json())
            .then(result=> {
                if(result.deletedCount){
                    alert('Delete Successfully');
                    setIsUpdated(true);
                }
                else{
                    setIsUpdated(false);
                }
            });
        }
    }
    const handleApproved = id =>{
        fetch(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
    .then(result=> {
            if(result.acknowledged){
                alert('Approved Successfully');
                setIsUpdated(true);
            }
            else{
                setIsUpdated(false);
            }
            console.log(result);
        });
    }
    return (
        <div id="manageOrders" className="mt-5">
            <h1 className="my-3">There are All Orders</h1>
            <Table striped bordered hover className=" table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Package Name</th>
                        <th>Package Price</th>
                        <th>Your Mobile</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
            {
                orders.map(or=> 
                    <tbody key={or._id}>
                        <tr>
                            <td>{or.packageName}</td>
                            <td>${or.packagePrice}</td>
                            <td>{or.mobile}</td>
                            <td>{or.from}</td>
                            <td>{or.to}</td>
                            <td>{or.status}</td>
                            <td>
                                <button onClick={()=>handleCancel(or._id)} className="btn btn-danger mx-3">Cancel</button>
                                <button onClick={()=>handleApproved(or._id)} className="btn btn-success">Approve</button>
                            </td>
                        </tr>
                    </tbody>
                    )
            }
            </Table>
        </div>
    );
};

export default ManageAllOrders;