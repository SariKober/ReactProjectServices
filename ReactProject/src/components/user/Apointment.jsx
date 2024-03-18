
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';





import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
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

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { observer } from 'mobx-react';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Apointment=observer(()=> {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [open, setOpen] = React.useState(false);
  const handleChange = (newValue) => {
    setValue(newValue);
    setDateTime(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const[id,setId]=useState();
    const[serviceType,setServiceType]=useState();
    const[dateTime,setDateTime]=useState("2022-06-20T10:00:00.000Z");
    const[clientName,setClientName]=useState();
    const[clientPhone,setClientPhone]=useState();
    const[clientEmail,setClientEmail]=useState();
    const[validDate,setValidDate]=useState("valid");

    const handleEdit=async()=>{
  Globalstore.addAppointment(id,serviceType,dateTime,clientName,clientPhone,clientEmail).then((x)=>{if(x===200) {Globalstore.initAppointments();
      handleClose();}else {setValidDate("notValid")}})
    
     
  

  }
     const handleChangeTypeService = (event) => {
       setServiceType(event.target.value);
     };
    return (
      <>

     
<React.Fragment>
<Button variant="outlined" onClick={handleClickOpen} className="buttonMeeting">
        קביעת פגישה
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          הוספת פגישה
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
        <InputLabel id="demo-simple-select-label">type service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={serviceType}
          label="service type"
          onChange={handleChangeTypeService}
        >
            {Globalstore.services.map((item,index)=><MenuItem value={item.name} >{item.name}</MenuItem>)}

    
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className={validDate}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <DateTimePicker
          label="date"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
     
    </LocalizationProvider>
    </FormControl>
    
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">clientName</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={clientName}
        onChange={(e)=>setClientName(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="clientName"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">clientPhone</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={clientPhone}
        onChange={(e)=>setClientPhone(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="clientPhone"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">clientEmail</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={clientEmail}
        onChange={(e)=>setClientEmail(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="clientEmail"
      />
    </FormControl>
   
    
    </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEdit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>


    {/* </Box> */}
  
    { console.log(Globalstore.services)}

 
       </>
    )
  })
  
  export default Apointment