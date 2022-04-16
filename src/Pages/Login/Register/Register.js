import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Social Login/SocialLogin';
import { Form } from 'react-bootstrap';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let errorElement;

    const navigateLogin = () => {
        navigate('./login')
    }
    if (error) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message}</p>
        );
    }

    if (user) {
        console.log(user)
    }

    const handaleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')

    }

    return (
        <div className='container w-50 mx-auto mt-5 register-form'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handaleRegister}>
                <input type="text" name="name" id="" placeholder='type your name' required />
                {/* <br /> */}
                <input type="email" name="email" id="" placeholder='type your email' required />
                {/* <br /> */}
                <input type="password" name="password" id="" placeholder='type password' required />
                <div class="form-check">
                    <input onClick={() => setAgree(!agree)} class="form-check-input" name='terms' type="checkbox" value="" id="flexCheckDefault" />
                    <label className={agree ? 'text-primary' : 'text-danger'} for="flexCheckDefault">
                        Accept Genius Car <Link to='/termsAndConditions' className='pe-auto text-decoration-none'>
                            Terms and Conditions
                        </Link>
                    </label>
                </div>
                <input disabled={!agree} className='btn bg-primary text-white mt-2' type="submit" value="Register" />
                <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </form>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;