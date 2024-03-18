import { action, makeObservable, observable, toJS } from "mobx"



class GlobalStore{
    isLogin=false
     business = {
        id: "",
        name: "",
        address: "",
        phone: "",
        owner: "",
        logo: "",
        description: "",
    }
appointments=[];
services=[];
     setIsLogin=(val)=>{this.isLogin=val}
      initBusiness=
        async ()=>{
            const response = await fetch("http://localhost:8787/businessData");
            const data = await response.json();
            // this.business=data;
            this.setBusiness(data)
            console.log( this.business);
            console.log( this.business.id);
          
      }
     
      updateIsLogin= async (name, password) => {
        console.log('login');
    
        const response = await fetch("http://localhost:8787/login", {// כתיבה עם fetch
          method: "POST",
          body: JSON.stringify({
            name, password
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.status;
      }

     setService(val){
          this.services=val
      }
      addAppointment=async(id,serviceType,dateTime,clientName,clientPhone,clientEmail)=>{
        const response = await fetch("http://localhost:8787/appointment", {// כתיבה עם fetch
    method: "POST",
    body:JSON.stringify({id,serviceType,dateTime,clientName,clientPhone,clientEmail}),
    headers: {
      "Content-Type": "application/json",
    },
    }); 
    return response.status;
};

      addService=async(id,name,description,price,duration)=>{
        const response = await fetch("http://localhost:8787/service", {// כתיבה עם fetch
    method: "POST",
    body:JSON.stringify({id,name,description,price,duration}),
    headers: {
      "Content-Type": "application/json",
    },
    });
   
}

      initAppointments=
        async ()=>{
            const response = await fetch("http://localhost:8787/appointments");
            const data = await response.json();
            // this.business=data;       
            this.appointments=([...data].sort((x,y)=>new Date(y.dateTime)-new Date(x.dateTime)))
           
         
           
          
      }
      initServices=
      async ()=>{
          const response = await fetch("http://localhost:8787/services");
         const data = await response.json();
         console.log(data)
         this.services=([...data])
          console.log(this.services)
         

    }
    updateBusinessData=async(id,name,address,phone,logo,description)=>{
        const response = await fetch("http://localhost:8787/businessData", {// כתיבה עם fetch
    method: "POST",
    body:JSON.stringify({id,name,address,phone,logo,description}),
    headers: {
      "Content-Type": "application/json",
    },
    });
};
    
      setBusiness(val){
          this.business=val;
      }
   
      setApointments(val){
        this.appointments=val;
    }

    constructor(){
        makeObservable(this,{isLogin:observable,setIsLogin:action,business:observable,initBusiness:action,setBusiness:action,initAppointments:action,appointments:observable
        ,initServices:action,services:observable,setApointments:action,updateBusinessData:action,addAppointment:action,addService:action, updateIsLogin:action})
    }

}
export default new GlobalStore;