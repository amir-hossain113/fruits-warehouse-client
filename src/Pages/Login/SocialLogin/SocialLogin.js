import React from 'react';
import './SocialLogin.css';
import googleLogo from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error.message}</p>
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="line w-50"></div>
                <p className="mt-2 px-2 para">or</p>
                <div className="line w-50"></div>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-warning w-100">
                    <img src={googleLogo} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;