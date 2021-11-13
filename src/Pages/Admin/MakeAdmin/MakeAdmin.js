import axios from 'axios';
import { useForm } from 'react-hook-form';
import "./MakeAdmin.css";
const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.put(`https://thawing-harbor-39490.herokuapp.com/users`)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert("Admin added successful")
                }
                if (res.data.isAdmin) {
                    alert("User already a Admin")
                }
                if(!res.data.registered){
                    alert("Please Register this user, we cannot find him/her in out database")
                }
            })
    };
    return (
        <>
            <h2 className="text-center">Make Admin</h2>
            <div className="mt-5 d-flex justify-content-center admin-form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Enter Email Address"{...register("email", { required: true })} />
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;