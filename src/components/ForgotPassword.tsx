import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAtom } from "jotai";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { userAtom } from "./atoms/userAtom";


export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [users] = useAtom(userAtom);
  const [message, setMessage] = useState("")
  const [resetLink, setResetLink] = useState("")

const result = users?.find(ele => ele.email == email)


 let res = window.btoa(result?.email)
 let link = `http://localhost:5173/reset-password/${res}`
console.log(link)

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("")
    setResetLink("")
    
    if(result) {
        setResetLink(link)
    }
  else{
    setMessage("Email does not exist.")
  }
  }
  console.log("aaa",resetLink)
  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <TextField
        type="email"
        sx={{ m: 2 }}
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br></br>
      {message && <p style={{color:"red"}}>{message}</p>}
      <Button type="submit" variant="contained">
        Reset Password
      </Button>
    { resetLink && <a href={`${resetLink}`}>Reset-Link</a>}
    </form>
  );
};
