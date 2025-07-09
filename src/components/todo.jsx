import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Lists(){

let [tasks,settasks]=useState([])
let [newtask,setnewtask]=useState("")

let addtask =()=>{
    if(!(newtask.trim() == "")){
     settasks([...tasks,{work:newtask,id:uuidv4()}]);
    }

}


let update =(event)=>{

    setnewtask(()=>(
    event.target.value)
);


}

let deltask =(id)=>{
    let data =tasks.filter((task)=>(task.id!=id));   
settasks([...data]) 
}

let upperCaseAll = ()=>{
    
    settasks((all)=>(
        all.map((elm)=>{
            return{
              ...elm,
                work:elm.work.toUpperCase(),
            };
        })
    ))

}

    return(<>
    
    <input type="text" placeholder="enter the task"onChange={update} value={newtask}/> <br /><br />
    <button style={{backgroundColor:"darkgray",color:"white"}} onClick={addtask} >add task</button>
<br /><br />
        <ul>
            {
                tasks.map((elm)=>(
                    <li key={elm.id}>{elm.work} &nbsp; &nbsp; <button onClick={()=>deltask(elm.id)} style={{backgroundColor:"blueviolet",color:"white" }}>del</button></li>
                ))
            }
        </ul>
            <br /><br /><br />
            <button style={{backgroundColor:"green",color:"white"}} onClick={upperCaseAll} >uppercase all tasks</button>


    </>);
}