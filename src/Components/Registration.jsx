import React,{useState} from 'react'
import EmployeeList from './EmployeeList'

function Registration({list,setList}) {
const [fName,setFName] = useState("")
const [lName,setLName] = useState("")
const [desig,setDesig] = useState("")
const [salary,setSalary] = useState("")

const handleChange=(e,field)=>{
    switch (field){
        case "firstName":
            setFName(e.target.value)
            break
        case "lastName":
            setLName(e.target.value)
            break
        case "designation":
            setDesig(e.target.value)
            break
        case "salary":
            setSalary(e.target.value)
            break
        default:
           return field     
    }
}
const handleAdd = ()=>{
    const obj = {
    fname:fName,
    lname:lName,
    designation:desig,
    salary:salary
    }
    // const arr = [...list]
    // arr.push(obj)
    setList([...list,obj])
    setFName("")
    setLName("")
    setDesig("")
    setSalary("")
}

  return (
    <div>
        <span>fist name: </span><input type="text" name="firstName" value={fName} 
        onChange={(e)=>handleChange(e,"firstName")}
        />
        <br />
        <span>last name: </span> <input type="text" name="lastName" value={lName}
        onChange={(e)=>handleChange(e,"lastName")}
        />
        <br />
        <span> designation: </span><input type="text" name="designation" value={desig}
        onChange={(e)=>handleChange(e,"designation")}
        />
        <br />
        <span>salary: </span><input type="text" name="salary"  value={salary} 
        onChange={(e)=>handleChange(e,"salary")}
        />
        <br />
        <button onClick={()=>handleAdd()}>add</button>
        <EmployeeList list={list} />


    </div>
  )
}

export default Registration