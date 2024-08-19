import { useState } from "react";
import { Button, TextField } from "@mui/material";
import CryptoJS from "crypto-js";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { userAtom } from "./atoms/userAtom";

export const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useAtom(userAtom);
  const [message, setMessage] = useState("");

  let hashPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  let hashConfirmPassword = CryptoJS.SHA256(confirmPassword).toString(
    CryptoJS.enc.Hex
  );

  const { token } = useParams();
  let email = window.atob(token);

  let result = users?.find((ele) => ele.email == email)?.password;
  result = hashPassword;

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (hashPassword === hashConfirmPassword) {
      const index = users.findIndex(ele => ele.email == email)
      if(index !== -1){
        users[index].password = result
      }
      setUsers(users);
      setMessage("Password updated successfully");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>RESET PASSWORD</h1>
      <TextField
        type="password"
        sx={{ m: 2 }}
        label="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        required
      />
      <TextField
        type="password"
        sx={{ m: 2 }}
        label="Cofirm Password"
        name="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        variant="outlined"
        required
      />
      {message && <p style={{ color: "green" }}>{message}</p>}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

