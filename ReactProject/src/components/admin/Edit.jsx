

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import * as React from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Globalstore from '../Globalstore';
import "../../App.css"


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Edit() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [id,setId]=useState(Globalstore.business.id);
  const [name,setName]=useState(Globalstore.business.name);
  const [address,setAddress]=useState(Globalstore.business.address);
  const [phone,setPhone]=useState(Globalstore.business.phone);
  const [logo,setLogo]=useState(Globalstore.business.logo);
  const [description,setDescription]=useState(Globalstore.business.description);
const isFirst=()=>{
  if(localStorage.getItem("numofEnters")==="1")
  return "first"
  else return "none"
}
 const handleEdit=async()=>{
 Globalstore.updateBusinessData(id,name,address,phone,logo,description).then(()=>{Globalstore.initBusiness();
  handleClose();})

 }

  return (
    <React.Fragment>
      <div id={isFirst()} >
    <Button    variant="outlined" onClick={handleClickOpen} >
עריכה
      </Button> 
      </div> 
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          עריכת פרטי עסק
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Box sx={{ display: 'flex', flexWrap: 'wrap',flexDirection:"column" }}>
     
    
     
        
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">id</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="id"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">name</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="name"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">address</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="address"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">phone</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="phone"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">logo</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={logo}
        onChange={(e)=>setLogo(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="logo"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">description</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="description"
      />
    </FormControl>
  
    </Box>
 
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEdit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}





   