

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import MenuAdmin from './MenuAdmin';
import Globalstore from '../Globalstore';
import { Box } from '@mui/material';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [incorect, setIncorect] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
console.log(password)
console.log(name)

  const handleLogin =async()=>{Globalstore.updateIsLogin(name, password).then((x)=>{
    if (x=== 200) {
  setName("")
  setPassword("")
  Globalstore.setIsLogin(true)
  if(localStorage.getItem("numofEnters")===undefined)
  localStorage.setItem("numofEnters","1")
  else
  localStorage.setItem("numofEnters",localStorage.getItem("numofEnters")+1)
    }
    else{
      setName("")
      setPassword("")
      setIncorect(true)
    }
  })}
  return (
    <>
    <h1>Login</h1>
    <Box sx={{ display: 'flex', flexWrap: 'wrap',flexDirection:"column" }}>
     
    
     
        
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
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
        <Button variant="outlined" onClick={handleLogin}>submit</Button>
        {incorect?<Alert severity="error">This is error— check it out!</Alert>:<></>}
    </Box>
    </>
  );

       }   
