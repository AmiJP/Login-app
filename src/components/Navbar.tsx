import { Link } from "react-router-dom";
import { Button } from "@mui/material"


 const Navbar = () => {
   return (
     <>
       
         <Button variant="contained" sx={{mr:2}}>
           <Link to="/login">Login</Link>
         </Button>
         <Button variant="contained">
           <Link to="/signup">Sign up</Link>
        </Button>
       
     </>
   );
 }

 export default Navbar