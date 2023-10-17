import React, { useState } from "react";

function ChangePasswordForm() {
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {

  };

  return (
    <form onSubmit={handleChangePassword}>
      <input
        type="new-password"
        placeholder="Enter your new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      /><br/>
      <input
        type="confirm-password"
        placeholder="Retype the new Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      /><br/>
      <button type="submit">Change Password</button>
    </form>
  );
}

export default ChangePasswordForm;