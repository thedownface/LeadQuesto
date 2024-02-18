import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';

const SignupForm = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='max-w-md w-full p-4 bg-white rounded-lg shadow-md'>
                <h1 className='text-2xl font-semibold mb-4'>Sign Up</h1>
                <p className='text-gray-600'>Create your Account</p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='mb-4'>
                        <input
                            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
                            type='text'
                            placeholder='First Name*'
                            name='first_name'
                            value={first_name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
                            type='text'
                            placeholder='Last Name*'
                            name='last_name'
                            value={last_name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
                            type='email'
                            placeholder='Email*'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
                            type='password'
                            placeholder='Password*'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary'
                            type='password'
                            placeholder='Confirm Password*'
                            name='re_password'
                            value={re_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                    <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-80' type='submit'>Register</button>
                </form>
                <button className='w-full mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-opacity-80' onClick={continueWithGoogle}>
                    Continue With Google
                </button>
                <br />
                <button className='w-full mt-3 bg-primary text-white py-2 rounded-lg hover:bg-opacity-80' onClick={continueWithFacebook}>
                    Continue With Facebook
                </button>
                <p className='mt-3 text-gray-600'>
                    Already have an account? <Link to='/login' className='text-primary'>Sign In</Link>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignupForm);
