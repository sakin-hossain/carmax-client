import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';
const MyOrders = () => {
    const { user } = useAuth();
    const [isdeleted, setIsDeleted] = useState(false);
    const [items, setItems] = useState([]);
    const email = user.email;
    useEffect(() => {
        fetch(`https://thawing-harbor-39490.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [email, isdeleted])
    const deleteBooking = (id) => {
        const proceed = window.confirm('Cancel Booking!Are you sure?');
        if (proceed) {
            fetch(`https://thawing-harbor-39490.herokuapp.com/myOrders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Delete Successful!')
                        setIsDeleted(true);
                    }
                })
        }
    }
    return (
        <div className='myorder-container'>
            <div className='text-center container myorder-custom-font'>
                <h3 className="p-4">Manage Your Booking</h3>
                {!items && (<div className="text-center">
                    <div className="spinner-grow text-danger text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)}
                {items.map(item => <div key={item._id} className="shadow-sm p-3 mb-5 bg-body rounded">
                    <h5>{item.orderTitle}</h5>
                    <p>Name: {item.name}</p>
                    <p>Contact: {item.contact}</p>
                    <p>Email: {item.email}</p>
                    <p>Booked On: {item.orderTime}</p>
                    <p>Status: {item.status}</p>
                    <button onClick={() => deleteBooking(item._id)} className="btn btn-danger"><FontAwesomeIcon icon={faEraser} /> Cancel</button>
                </div>)}
            </div>
        </div>
    );
};

export default MyOrders;