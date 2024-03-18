import { Outlet, Link } from "react-router-dom"
import Globalstore from "../Globalstore"
function MenuAdmin() {
  

    return (
      <>{
        Globalstore.isLogin?<>
        <Link className="link" to="./services">services</Link>
          
          <Link className="link" to="./meeting">meeting</Link>
          <br/>
         
          <br/>
          <Outlet />
       </>:<></>
      }
 
  </>
    )
  }
  
  export default MenuAdmin