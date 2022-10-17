//hello good moring, my name is adnan and im a front end developer.

import React from 'react'

function EmployeeList({list}) {
  return (
    <div className='list'>
      <h1>EmployeeList</h1>

    <div>
      <span>first name</span> &nbsp; &nbsp;&nbsp;&nbsp;
      
     <span>last name</span> &nbsp; &nbsp;&nbsp;&nbsp;
      <span>disignation</span> &nbsp; &nbsp;&nbsp;&nbsp;
       <span>salary</span> &nbsp; &nbsp;&nbsp;&nbsp;
       </div>
       {list.map((item,index)=>(
        <div key={index}>
        <span>{item.fname}</span> &nbsp; &nbsp;&nbsp;&nbsp;
        
       <span>{item.lname}</span> &nbsp; &nbsp;&nbsp;&nbsp;
        <span>{item.designation}</span> &nbsp; &nbsp;&nbsp;&nbsp;
         <span>{item.salary}</span> &nbsp; &nbsp;&nbsp;&nbsp;
         </div>
       ))}
    

    </div>
  
  )
}

export default EmployeeList


//hello good moring, my name is faraz fz and im a front end developer.
