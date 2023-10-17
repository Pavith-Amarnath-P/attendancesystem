import React, { useState } from 'react'
import StudentComponent from './StudentComponent';
function List({ studentslist }) {
    const [students, setStudents] = useState(studentslist);

    return (
        <div>
            <ul className='grid grid-cols-6 gap-2 mb-2'>
                {
                    students.map((student) => (
                        <li key={student.rollno}>
                            <StudentComponent student={student} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List