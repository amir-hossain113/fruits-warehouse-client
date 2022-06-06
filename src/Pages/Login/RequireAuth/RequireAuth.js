import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location}} replace></Navigate>
    }

    // if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
    //     return <div className='container text-center mt-5 mb-5 w-50' style={{border: '2px dashed red', padding: '40px 20px'}}>
    //         <h3 className='text-danger'>Your Email is not verified!!</h3>
    //         <h5 className='text-success'> Please Verify your email address</h5>
    //         <button
    //         className='btn btn-primary'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 toast('Sent email');
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
    //         <ToastContainer></ToastContainer>
    //     </div>
    // }

    return children;
};

export default RequireAuth;