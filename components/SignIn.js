import React, { useState } from 'react';
import './style.css'; // Assuming you have a style file for your component

const SignIn = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleUsernameChange = (e) => {
      setUsername(e.target.value);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Username:', username);
      console.log('Password:', password);
   };

   return (
      <section>
         <div className="signin">
            <div className="content">
               <h2>KCT</h2>
               <img src="logo2.png" alt="Your Logo" width="150" height="150" />
               <div className="form">
                  <form onSubmit={handleSubmit}>
                     <div className="inputBox">
                        <input
                           type="text"
                           value={username}
                           onChange={handleUsernameChange}
                           required
                        />
                        <i>Username</i>
                     </div>
                     <div className="inputBox">
                        <input
                           type="password"
                           value={password}
                           onChange={handlePasswordChange}
                           required
                        />
                        <i>Password</i>
                     </div>
                     <div className="links">
                        <a href="#">Forgot Password</a>
                        <a href="#"></a>
                     </div>
                     <div className="inputBox">
                        <input type="submit" value="Login" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignIn;
