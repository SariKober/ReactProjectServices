import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import Globalstore from '../Globalstore';
import Edit from '../admin/Edit';
import { observer } from 'mobx-react';
import  logo from "../../assets/pictures/logo.jpg"
import "../../App.css"

const BusinessData = observer(() => {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <>
      <div>

      <header className="business-header">
          {/* {businessDetails.isLogin?<FormUpdateBusinessData></FormUpdateBusinessData>:<></>} */}
          
      <div className="business-details">
        {Globalstore.isLogin?
       <Edit></Edit>:<></>}
        <div className="business-info">
          <h1 className="business-name">{Globalstore.business.name}</h1>
          <div className="business-contact">
            <h2 className="business-address">  {Globalstore.business.address}</h2>
            <h2 className="business-phone"> {Globalstore.business.phone}</h2>
            <h2 className="business-owner">  {Globalstore.business.owner}</h2>
            {/* <h5 className="business-des" >  {businessDetails.businessDetails.description}</h5> */}

          </div>
        </div>
        <img
          src={logo}
          alt="Business Logo"
          className="business-logo"

        />

      </div>
    
    </header>
       
            
          
        

        {isEdit ? (
       
            <Edit></Edit>
           
        ) : (
          <></>
        )}
      </div>
    </>
  );
});

export default BusinessData;
