

import React from 'react';

function Studentdetails() {
  return (
    <div className="font-bold">
      {/* Header */}

      <div className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl text-center">STUDENT DETAILS</h1>
      </div>


      {/* Student Information Section */}
      <div className="bg-white p-4 my-4 border rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Basic Information</h2>
        <hr className="my-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <strong>Name:</strong>
            <p></p>
          </div>
          <div>
            <strong>Roll No:</strong>
            <p></p>
          </div>
          <div>
            <strong>Department:</strong>
            <p></p>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="bg-white p-4 my-4 border rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Personal Details</h2>
        <hr className="my-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <strong>Father's Name:</strong>
            <p></p>
          </div>
          <div>
            <strong>Mother's Name:</strong>
            <p></p>
          </div>
          <div>
            <strong>Date Of Birth:</strong>
            <p></p>
          </div>
          <div>
            <strong>Blood Group:</strong>
            <p></p>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white p-4 my-4 border rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Contact Details</h2>
        <hr className="my-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <strong>Phone No:</strong>
            <p></p>
          </div>
          <div>
            <strong>Email ID:</strong>
            <p></p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white p-4 my-4 border rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Address</h2>
        <hr className="my-2" />
        <address>
          <br />
          <br />

        </address>
      </div>
    </div>
  );
}

export default Studentdetails;

