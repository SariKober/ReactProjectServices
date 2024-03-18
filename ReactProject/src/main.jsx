import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Alert from '@mui/material/Alert';
import User from './components/user/User.jsx'
import Login from './components/admin/Login.jsx'
import BusinessAdmin from './components/admin/BusinessAdmin.jsx'
import DailyMeetings from './components/admin/DailyMeetings.jsx'
import Admin from './components/admin/Admin.jsx'
import Services from './components/services/Services.jsx'
// import Globalstore from './components/Globalstore.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <User/>,
    errorElement: <Alert variant="outlined" severity="error">
    This is an error alert — check it out!
  </Alert>

  },
  {
    path: '/admin',
    element: <Admin/>,
    errorElement:<Alert variant="outlined" severity="error">
    This is an error alert — check it out!
  </Alert>
,
    children: [
     
      {
        path: 'services',
        element:<Services/>,
        errorElement: <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      },
      {
        path: 'meetings',
        element: <DailyMeetings/>,
        errorElement: <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      }
    ]
  }
])
console.log("diti")
const business = {
  id: "1",
  name: "Sari&Diti",
  address: "King George 45 jerusalem",
  phone: "0556736349",
  owner: "Sari",
  logo:  "../../assets/pictures/לכידהg.jpg",
  description: "The best coding academy in the world",
};
console.log(business)

;
console.log(JSON.stringify(business))
// const response = await fetch("http://localhost:8787/businessData", {// כתיבה עם fetch
// method: "POST",
// body:JSON.stringify(business),
// headers: {
//   "Content-Type": "application/json",
// },
// }).catch(console.log("error"))
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

