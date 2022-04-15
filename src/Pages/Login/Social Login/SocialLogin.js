import React from 'react';
import googleLogo from '../../../images/social/googleLogo.png';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement= (
            <div>
                <p className='text-danger'>login failed</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        // navigate('/home')
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height: '1px'}} className="bg-primary w-25"></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
            </div>
            <p>{errorElement}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-white w-75 border border-info d-block mx-auto'>
                    {/* <img src={googleLogo} alt="" /> */}
                    <span><FcGoogle /></span> <span className='px-1 mt-2'>Continue with  Google </span>
                </button>
                <button className='btn btn-white w-75 border border-info d-block mx-auto mt-2'>
                    {/* <img src={googleLogo} alt="" /> */}
                    <span><BsFacebook /></span> <span className='px-1 mt-2'>Continue with  Facebook </span>
                </button>
                <button className='btn btn-white w-75 border border-info d-block mx-auto mt-2'>
                    {/* <img src={googleLogo} alt="" /> */}
                    <span><SiGithub /></span> <span className='px-1 mt-2'>Continue with  Github </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;