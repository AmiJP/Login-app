import { Button } from "@mui/material"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai";
import { currentUserAtom, userAtom } from "./atoms/userAtom";
import { useEffect } from "react";


export const Dashboard = () => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useAtom(currentUserAtom)
    const [users] = useAtom(userAtom);

 useEffect(() => {
  if (!currentUser) {
    navigate("/login")
  }
 },[])

    const user = users.find(ele=>ele.email == currentUser)
  
    function handleLogout(){ 
        navigate("/login")
        setCurrentUser("") 
    }

    return (
        <>
        <Navbar />
        <h1>Hello {user?.name}</h1>
        <Button onClick={handleLogout} variant="contained">Logout</Button>
        </>
    )
}