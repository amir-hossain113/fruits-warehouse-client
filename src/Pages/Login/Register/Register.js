import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateToLogin = event => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
       console.log('user', user);
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className="container mt-5 mb-5 registerForm">
            <h2 className="text-center text-success mb-2 p-2">Please Register</h2>
            <form onSubmit={handleRegister}>
                <label className="mb-2">Name</label><br />
                <input type="text" name="name" id="" placeholder="Your Name" required />
               
                <label className="mb-2">Email Address</label><br />
                <input type="email" name="email" id="" placeholder="Your Email" required />
             
                <label className="mb-2">Password</label><br />
                <input type="password" name="password" id="" placeholder="Password" required />
                
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree? '' : 'text-danger'}`} htmlFor="terms">Accept Fruits Warehouse Terms & Conditions</label>
                <input disabled={!agree} className="btn btn-success mt-2" type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className="text-primary pe-auto text-decoration-none" onClick={navigateToLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;