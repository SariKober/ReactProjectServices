import { observer } from "mobx-react"
import Globalstore from "../Globalstore"
import { Today } from "@mui/icons-material";
import "../../App.css";
import MenuAdmin from "./MenuAdmin";
const DailyMeetings = observer(() => {


  const validDate = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);

    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime())
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (diffDays < 0)
      return 'non'
    else
      if (diffDays === 1) {
        return 'red';
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // עתיד

      }

  };
  return (
    <>

      {[...Array(Globalstore.appointments.length)].map((item, i) => <div ><div>{Globalstore.appointments[i].id}</div>
        <div>{Globalstore.appointments[i].serviceType}</div>

        <div className={validDate(Globalstore.appointments[i].dateTime)}>{Globalstore.appointments[i].dateTime}</div>

        <div>{Globalstore.appointments[i].clientName}</div>
        <div>{Globalstore.appointments[i].clientPhone}</div>
        <div>{Globalstore.appointments[i].clientEmail}</div>
      </div>)}


    </>)
}

)

export default DailyMeetings