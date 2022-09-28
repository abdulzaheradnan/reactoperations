import React, { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';


const Todolist = () => {
    const [text, settext] = useState("zaher")
    const [list, setlist] = useState([])
    const [bee, setbee] = useState(false)
    const [editindex, seteditindex] = useState()
    const [container, setcontainer] = useState(false)
    const [search,setsearch]=useState()
    const [error,seterror]=useState(false)
    const charatercount = 200;
    function handleinput(event) {
        if(charatercount - event.target.value.length >=0){
            settext(event.target.value)

        }

    }
    function handlelist() {
        setlist([...list, text])
        localStorage.setItem("notes",JSON.stringify(list))
        settext("")
    }
    function deletehandle(i) {
        list.splice(i, 1);
        setlist([...list])
    }
    function edithandel(index) {
        settext(list[index])
        setbee(true)
        seteditindex(index)

    }
    function update() {
        list.splice(editindex, 1, text)
        setbee(false)
        settext("")
    }
    console.log(list)
    useEffect(()=>{
        if(search === "")return;
        const filternotes=list.filter((text)=>{

            
        if(text.match(search)){
            return true;

        }else{
            return false;
        }
    })
    setlist(filternotes)

    },[search])
    return (
        <div className='todolist'>
            {container === false ?
                <Button variant='contained' onClick={() => { setcontainer(true) }}>for notes please click</Button> :
                <div className='setitem'>
                  

                  

                    {error===false?

                    <div className='inputtext'>
                        <Button variant='contained' onClick={()=>{seterror(true)}}>search</Button>
                        <TextField sx={{ width: 600 }} style={{ background: "white" }} value={text} onChange={(event) => { handleinput(event) }} multiline><Button>hello</Button></TextField>
                                <p> {charatercount - text.length} : remaining character</p>
                        {
                            bee === false ?
                                <Button style={{ height: "55px" }} onClick={() => { handlelist() }} variant="contained" >add</Button> :
                                <Button style={{ height: "55px" }} onClick={() => { update() }} variant="contained" >update</Button>

                        }

                    </div>:
                                                          <TextField style={{background:"white"}} onChange={(event)=>{setsearch(event.target.value)}} value={search}></TextField>

                    }

                    <div>{list.map((text, index) => {
                        return (
                            <div className='containermain'>

                                <div className='li' key={index}>: {text}</div> <br></br>

                                <div className='action'>
                                    <Button onClick={() => { deletehandle(index) }} className='but' variant="contained" style={{ height: "25px" }}>delete</Button>
                                </div>
                                <div className='action'>
                                    <Button onClick={() => { edithandel(index) }} className='but' variant="contained" style={{ height: "25px" }}>edit</Button>
                                </div>


                            </div>
                        )


                    })}</div>
                </div>}
        </div>
    );
}

export default Todolist;
