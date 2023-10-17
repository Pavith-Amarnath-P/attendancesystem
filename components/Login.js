import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { Button } from '@mui/material';

function Login({ username, password, setUsername, setPassword, login }) {
    console.log('Rendering Login');
    return (
        <form className='flex mt-2 flex-col h-72 rounded-md  border-4 border-blue-400  w-1/5 items-center justify-center'
            onSubmit={(e) => login(e)}
        >
            <h1 className='-top-8 text-xl font-semibold relative'>Admin / Staff Login</h1>
            <div className='flex items-center justify-center p-2'>
                <PersonIcon />
                <input className='border-none outline-none background-none pl-2'
                    type="text"
                    id='username'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='flex items-center justify-center p-2'>
                <KeyIcon />
                <input
                    className='border-none outline-none background-none pl-2'
                    type="password"
                    id='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='flex items-center justify-center mt-4'>
                <Button variant='contained' type='submit'>Login</Button>
            </div>
            <Button style={{ top: '20px' }} variant='contained'>Student</Button>
        </form>
    )
}

export default Login