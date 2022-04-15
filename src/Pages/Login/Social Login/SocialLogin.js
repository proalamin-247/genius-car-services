import React from 'react';
import googleLogo from '../../../images/social/googleLogo.png';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';


const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height: '1px'}} className="bg-primary w-25"></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-25"></div>
            </div>
            <div>
                <button className='btn btn-white w-75 border border-info d-block mx-auto'>
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