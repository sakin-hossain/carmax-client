import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [properties, setProperties] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('https://thawing-harbor-39490.herokuapp.com/addCar')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [isDeleted])

    const deleteService = (id) => {
        const proceed = window.confirm('Cancel Booking!Are you sure?');
        if (proceed) {
            axios.delete(`https://thawing-harbor-39490.herokuapp.com/addCar/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Delete Successful!')
                        setIsDeleted(true);
                    }
                })
        }
    }
    return (
        <>
            <h3 className="text-center">Manage Service</h3>
             {!properties && (<div className="text-center">
                        <div className="spinner-grow text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
            <div class="table-responsive ">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Project Name</th>
                            <th scope="col">Handle</th>
                        </tr>

                        {
                            properties.map(item =>
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td>
                                        <button onClick={() => deleteService(item._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </thead>
                </table>
            </div>
        </>
    );
};

export default ManageService;