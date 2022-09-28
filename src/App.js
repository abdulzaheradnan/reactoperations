import React, { useState } from "react"
import './App.css';
// import EmployeeList from "./Components/EmployeeList";
// import List from "./Components/List"
// import Ageupdate from "./Components/ageupdate";
// import Registration from "./Components/Registration";
import {Button,TextField} from "@mui/material";
function App() {

  const obj={
    firstname:"",
    lastname:"",
    mobile:"",
    city:"",
  }

  const [data,setdata]=useState(obj);
  const [list,setlist]=useState([]);
  const [show,setshow]=useState(false);
  const [editindex,seteditindex]=useState();

  function handleinput(event){
    setdata({...data,[event.target.name]:event.target.value});

  }
  function tableinfo(){
    setlist([...list,data])
    setdata(obj)

  }
  function handledelete(index){
    list.splice(index,1)
    setlist([...list])
     
   
    console.log(list)

  }
  function handleedit(index){
    setdata(list[index])
    setlist([...list])
    setshow(true)
    seteditindex(index)
    


  }
  function updatehandle(){
    list.splice(editindex,1,data)
    setdata(obj)
    setshow(false)

  }

console.log(list)
  return (
    <div className="App">
      <h1>submit details</h1>
      <TextField id="outlined-basic" label="firstname" variant="outlined" value={data.firstname} name="firstname"onChange={(event)=>handleinput(event)}/><br></br><br></br>
      <TextField id="outlined-basic" label="lastname" variant="outlined" value={data.lastname} name="lastname"onChange={(event)=>handleinput(event)}/><br></br><br></br>
      <TextField id="outlined-basic" label="mobile" variant="outlined"value={data.mobile}  name="mobile"onChange={(event)=>handleinput(event)}/><br></br><br></br>
      <TextField id="outlined-basic" label="city" variant="outlined"value={data.city}  name="city"onChange={(event)=>handleinput(event)}/><br></br><br></br>

      
{show===false?<Button variant="contained" color="success" onClick={()=>tableinfo()}>
  submit
</Button>:
<Button variant="contained" color="success" onClick={()=>updatehandle()}>
  update
</Button>}
      
<table border="1">
        <tr>
            <th>first Name</th>
            <th>last Name</th>
            <th>mobile</th>
            <th>city</th>
            <th>action</th>


        </tr>
        {list.map((item,index)=>(
            <tr>
            <td key={index}>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.mobile}</td>
            <td>{item.city}</td>
            <td><Button onClick={()=>{handledelete(index)}}>delete</Button></td>
            <td><Button onClick={()=>{handleedit(index)}}>edit</Button></td>


 
        </tr>
        ))
         
        }
    </table>
    </div>

  );
}

export default App;
