
import Globalstore from "../Globalstore"
import BusinessAdmin from "./BusinessAdmin"
import Login from "./Login"
import { observer } from "mobx-react"
import { useEffect } from "react"

const Admin = observer(() => {
    useEffect(()=>{
        Globalstore.initBusiness();
        Globalstore.initServices();
        Globalstore.initAppointments();
      },[])
    
    return (
        <>
            {!Globalstore.isLogin ?<Login/>:
            <BusinessAdmin/>
             
            }
        </>
    )
})
  
  export default Admin