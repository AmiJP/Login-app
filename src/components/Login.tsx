import { Button, TextField, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { currentUserAtom, userAtom } from "./atoms/userAtom";
import CryptoJS from 'crypto-js'


export const Login = () => {
    const navigate = useNavigate()
   const [,setCurrentUser] = useAtom(currentUserAtom)

    const [users] = useAtom(userAtom);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage ] = useState("")

    let hashPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
   
    const loginUser = (e:any) => {
        e.preventDefault();
        setMessage("")
       
         let res = (users?.find(ele => ele.email == email && ele.password == hashPassword))
        if (res) {
        setCurrentUser(res.email)

        navigate("/dashboard");

        } else {
        setMessage("Please enter valid email and password")
        }
    }

    return (
        <form onSubmit={loginUser}>
        <Navbar />
        <Card sx={{ width:300 }}>
        <CardContent>
        <Typography sx={{ fontSize: 25 }}>Login</Typography>
        <TextField type="email" sx={{ m: 2 }}  label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} required />
        <br></br>
        <TextField type="password" sx={{ m: 2 }} label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} required  />
        <br></br>
        {message && <p style={{color:"red"}}>{message}</p>}
        <Button type="submit" variant="contained">Login</Button>
        <br></br>
        <a href="/forgot-password">Forgot Password?</a>
        </CardContent>
        </Card>
        </form>
    )
}