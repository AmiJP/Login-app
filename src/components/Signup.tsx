import { Button, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Navbar from "./Navbar";
import { useAtom } from "jotai";
import { useState } from "react";
import { userAtom } from "./atoms/userAtom";
import {  useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';


export const Signup = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useAtom(userAtom);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("")



   let hashPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);


  const registerUser = (e:any) => {
    e.preventDefault();
    setError("");
    setMessage("");

    let isEmailExist = users.some((ele:any) => ele.email === email);

    if (isEmailExist) {
      setError("Email already exist")
      return;
    }

    setUsers((prev) => [...prev, { name, email, password: hashPassword }])
    setMessage("Register Successfully")
    navigate("/login")
  };

  return (
    <form onSubmit={registerUser}>
      <Navbar />
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }}>Sign-up</Typography>
          <TextField
            sx={{ m: 2 }}
            label="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            required
          />
          <br></br>
          <TextField
            type="email"
            sx={{ m: 2 }}
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
          />
          <br></br>
          <TextField 
            type="password"
            sx={{ m: 2 }}
            label="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            required
          />
          <br></br>
          {error && <p style={{color:"red"}}>{error}</p>}
          {message && <p style={{color: "green"}}>{message}</p>}
          <Button type="submit" variant="contained">Sign up</Button>
        </CardContent>
      </Card>
    </form>
  );
};
