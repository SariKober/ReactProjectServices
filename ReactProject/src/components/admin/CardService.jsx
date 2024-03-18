


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
const CardService = observer((props) => {
 const item = props.item

  return (
    <>
    <p>card</p>
    <p>{item}</p>
<Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image="/blue-car-speed.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          מספר מזהה: {Globalstore.services[{item}].id}<br></br>
         
          מחיר: {item.price}<br></br>
          תאור: {item.name}<br></br>
        
          </Typography>
        </CardContent>
      </CardActionArea>
      {!Globalstore.isLogin?<CardActions>
        <Button size="small" color="primary" onClick={()=>setIsAppointment(true)}>
          קביעת פגישה
        </Button>
      </CardActions>:<></>}
      
    </Card>
 </>)
}
  
)

export default CardService