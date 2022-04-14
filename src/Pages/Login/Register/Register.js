import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('./login')
    }

    if(user){
        navigate('/home')
    }

    const handaleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
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
                <input className='bg-primary text-white' type="submit" value="Register" />
                <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;