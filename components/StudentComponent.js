import React, { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';
function StudentComponent({ student }) {
    const [isPresent, setIsPresent] = useState(false);
    const handleClick = () => {
        setIsPresent(!isPresent);
    }
    return (
        <div className='grid grid-cols-3 gap-2 max-w-[300px] border-2 rounded-lg border-slate-200 bg-gray-200 hover:bg-slate-400 p-2'>
            <div className='col-span-1 w-full'>
                <img className='rounded-full h-20 w-20 object-cover' src="cr7.jpg" alt="Profile" />
            </div>
            <div className='col-span-2'>
                <p className=''>{student.username}</p>
                <p className=''>{student.rollno}</p>
                <Button onClick={() => handleClick()} variant='contained' color={isPresent ? 'primary' : 'warning'} size='small'>
                    {isPresent ? 'Present' : 'Absent'}
                </Button>
            </div>
        </div>
    )
}

export default StudentComponent