import { useEffect, useState } from "react";
import BusinessData from "../dataBusiness/BusinessData";
import Globalstore from "../Globalstore";
import Services from "../services/Services"
import a from "../../assets/pictures/a.jpg"
import e from "../../assets/pictures/e.jpg"
import c from "../../assets/pictures/c.jpg"
import d from "../../assets/pictures/d.jpg"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Apointment from "./Apointment";
import { RoomService } from "@mui/icons-material";

function User() {
  const [open, setOpen] = React.useState(false);
  useEffect(()=>{
    Globalstore.initBusiness();
    Globalstore.initServices()
  },[])
  const [appointment,setAppointment]=useState(false);
  return (
    <>
 <BusinessData></BusinessData>

<div id="flex-image">
<img class="img" src={a}></img>
<img class="img" src={e}></img>
<img class="img" src={d}></img>
<img class="img" src={c}></img>
</div>
 <Services></Services>
 {/* {!Globalstore.services.length===0?<Services/>:<></>} */}

 
 <Apointment></Apointment>
 </>
  )
}

export default User


//////
