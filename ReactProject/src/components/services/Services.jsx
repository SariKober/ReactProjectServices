



import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import Globalstore from '../Globalstore';

import { observer } from "mobx-react"
import Apointment from "../user/Apointment";
import CardService from "../admin/CardService";
import AddServices from "./AddServices";
import "../../App.css"
import logo from '../../assets/pictures/logo.jpg'
import MenuAdmin from '../admin/MenuAdmin';



  

const Services = observer(() =>{
  // console.log(Globalstore.services[0].id)

  const x = () => {
    if(Globalstore.isLogin) 
    return "service-admin";
    else 
    return "service-user"; 
 
  };

  const [isAppointment,setIsAppointment]=useState(false);
    return (
      <>

      <div  className={x()}>
        
   
      {
    
                [...Array(Globalstore.services.length)].map((item, i) =>
     
                  <Card id="card">
          <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         <div className="service-name">{Globalstore.services[i].name}</div> 
          </Typography>
          <Typography variant="body2" color="text.secondary"  >
          <div  className="service_card">{Globalstore.services[i].id}</div><br></br>
          <div  className="service_card">{Globalstore.services[i].price}</div><br></br>
          <div  className="service_card">{Globalstore.services[i].description}</div><br></br>
         

        
        
          </Typography>
        </CardContent>
      </CardActionArea>
    
      
    </Card>

              )
            }
     
</div>

       {Globalstore.isLogin?
        <AddServices/>
      :<></>}
    
      
    

 
      </>
    )
       })
   
  export default Services