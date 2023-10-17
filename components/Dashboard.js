import React, { useEffect, useState } from 'react';
import List from './List';
import studentlist1 from './student.json';
import studentlist2 from './students.json';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
function Dashboard({ data, loggedIn, setLoggedIn, password, setPassword }) {
    const [classroom, setClassroom] = useState("I-MCA");
    const handleClassroomChange = (e) => {
        setClassroom(e.target.value);
        console.log(classroom);
    };

    const logout = (e) => {
        e.preventDefault();
        setPassword('');
        setLoggedIn(false);
    }

    const selectedStudentList = classroom === 'I-MCA' ? studentlist1 : studentlist2;
    const [marking, setMarking] = useState([{}]);

    // const handleSubmitAttendance = () => {
    //     selectedStudentList.map((student) => {
    //         const newObj = {
    //             username: student.username,
    //             rollno: student.rollno,
    //             subject: student.subject,
    //             present: 
    //         }
    //     })
    // }


    return (
        <div className='w-full'>
            <header className='flex justify-between items-center bg-black text-white'>
                <div className='flex justify-center items-center'>
                    <Avatar style={{ cursor: 'pointer' }} src={`${data.username}.jpg`} />
                    <h1 className='font-bold m-4 text-2xl'>{data.username}</h1>
                </div>
                <button onClick={(e) => logout(e)} type='submit'>
                    <LogoutIcon style={{ cursor: 'pointer', marginRight: '20px' }} />
                </button>

            </header>
            <div className='flex flex-col justify-center h-20 items-center mx-auto'>
                <select
                    className='border-none outline-none background-none pl-2 w-40 text-[25px]'
                    id='classroom'
                    value={classroom}
                    onChange={handleClassroomChange}
                >
                    <option value="I-MCA">I - Year</option>
                    <option value="II-MCA">II - Year</option>
                </select>
                <p className='text-[20px] font-bold'>{data.subject[classroom]}</p>
            </div>

            <List key={classroom} studentslist={selectedStudentList} />
            <footer className='flex justify-evenly'>
                <Button variant='contained' color='success'>Save Attendance</Button>

                <Button variant='contained' color='error'>Save and Close Attendance</Button>
            </footer>
        </div>
    );
}

export default Dashboard;
