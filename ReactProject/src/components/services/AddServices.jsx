
  import { useState } from "react"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Globalstore from "../Globalstore";
import Box from '@mui/material/Box';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function AddServices() {

    const[id,setId]=useState();
    const[name,setName]=useState();
    const[description,setDescription]=useState();
    const[price,setPrice]=useState();
    const[duration,setDuration]=useState();
    const handleEdit=async()=>{
      Globalstore.addService(id,name,description,price,duration).then(()=>{ Globalstore.initServices();
      handleClose();})
   
  
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
  <React.Fragment>
    <Button variant="outlined" onClick={handleClickOpen} >
   הוספת שירות
      </Button>  
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          add service
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
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['dateTime']}>
        <DateTimePicker label="dateTime" onChange={(e)=>setDateTime(e.target.value)}/>
      </DemoContainer>
    </LocalizationProvider> */}
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
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">price</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="price"
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">duration</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={duration}
        onChange={(e)=>setDuration(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
           
          </InputAdornment>
        }
        label="duration"
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
 
       </> 
    )
  }
  
  export default AddServices;
