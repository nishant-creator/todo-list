import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { DndContext,closestCenter,PointerSensor,useSensor,useSensors } from "@dnd-kit/core";
import { arrayMove,    SortableContext,    verticalListSortingStrategy  } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";


export default function Lists(){

let [tasks,settasks]=useState([])
let [newtask,setnewtask]=useState("")

const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 }
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex(item => item.id === active.id);
      const newIndex = tasks.findIndex(item => item.id === over.id);
      settasks(items => arrayMove(items, oldIndex, newIndex));
    }
  };

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

// let upperCaseOne=(id)=>{

//         settasks((all)=>(
//         all.map((elm)=>{
//  if(elm.id===id){            return{
//               ...elm,
//                 work:elm.work.toUpperCase(),
//             };}
// else{            return elm;}
//         })
//     ))

// }

let enter=(evt)=>{
    if(evt.key === 'Enter'){
        addtask();
      
    }
 
}

    return(<>
    
    <input type="text" placeholder="enter the task"onChange={update} value={newtask} onKeyDown={enter}  /> <br /><br />
    <button style={{backgroundColor:"darkgray",color:"white"}} onClick={addtask} >add task</button>
<br /><br />


        {/* <ul>
            {
                tasks.map((elm)=>(
                    <li key={elm.id}>{elm.work} &nbsp; &nbsp; 
                    <button onClick={()=>deltask(elm.id)} style={{backgroundColor:"blueviolet",color:"white" }}>del</button>
                    <button onClick={()=>upperCaseOne(elm.id)} style={{backgroundColor:"blueviolet",color:"white" }}>capitalize </button>
                    </li>
                ))
            }
        </ul> */}


                <DndContext  sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext  items={tasks.map(item => item.id)} strategy={verticalListSortingStrategy}>
                {tasks.map(elm => (
      <SortableItem
        key={elm.id} 
        id={elm.id} 
        text={elm.work} 
        deltask={deltask}
        // upperCaseOne={upperCaseOne}
      />
    ))}
                    
                </SortableContext>
                </DndContext>

            <br /><br /><br />
            <button style={{backgroundColor:"green",color:"white"}} onClick={upperCaseAll} >uppercase all tasks</button>


    </>);
}