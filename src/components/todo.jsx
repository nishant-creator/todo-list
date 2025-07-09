import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Lists(){

let [tasks,settasks]=useState([{id:uuidv4(),work:"one"}])
let [newtask,setnewtask]=useState("")

let addtask =()=>{
 
     settasks([...tasks,{work:newtask,id:uuidv4()}]);

}


let update =(event)=>{

    setnewtask(()=>(
    event.target.value)
);


}

    return(<>
    
    <input type="text" placeholder="enter the task"onChange={update} value={newtask}/> <br /><br />
    <button style={{backgroundColor:"darkgray",color:"white"}} onClick={addtask} >add task</button>
<br /><br />
        <ul>
            {
                tasks.map((elm)=>(
                    <li key={elm.id}>{elm.work}</li>
                ))
            }
        </ul>



    </>);
}