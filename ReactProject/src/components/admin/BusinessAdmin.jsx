import { red } from "@mui/material/colors"
import { Outlet, Link } from "react-router-dom"
import BusinessData from "../dataBusiness/BusinessData"
function BusinessAdmin() {
  

    return (
      <>
<BusinessData></BusinessData>
<aside id="side">
   <Link className="link" to="./services">services</Link>
          
          <Link className="link" to="./meetings">meeting</Link>
          <br/>
          <br/> 
          </aside>
          <Outlet />
    
   </>
    )
  }
  
  export default BusinessAdmin