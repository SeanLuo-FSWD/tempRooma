import react, {useState} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/CalendarCustom.css';

const Cont = styled.div`
display: flex;
flex-direction: column;
width:360px;
height:290px;
border-radius:10px;
margin-top:15px;
background-color:white;
box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.2);
font-family:"Open Sans", sans-serif;
justify-content:center;
align-items:center;
`


const CalendarComp =({

})=>{
  const [date, setDate] = useState(new Date());
return<Cont>
<Calendar 
onChange={setDate}
value={date}
selectRange={true}
/>
  {/*{date.length > 0 ? (
  <p>
    <span>Start:</span>{' '}
    {date[0].toDateString()}
    &nbsp;|&nbsp;
    <span>End:</span> {date[1].toDateString()}
  </p>
) : (
  <p>
    <span>Default selected date:</span>{' '}
    {date.toDateString()}
  </p>
)}*/}
</Cont>
}
export default CalendarComp;