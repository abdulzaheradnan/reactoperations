import React,{useState} from 'react';

const Ageupdate = () => {

const [data,setdata]=useState([{
    name:'adnan',
    age:0
},
{
    name:"faraz",
    age:23
},
{
    name:'imran',
    age:0
}])
console.log(data)

function handlechange(){
    const list=data.map((item)=>
    item.age
    )
    console.log(list)
    

}

    return (
        <div>
            <button onClick={()=>handlechange()}>click</button>
        </div>
    );
}

export default Ageupdate;
