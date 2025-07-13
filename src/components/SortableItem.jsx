import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

export default function SortableItem({ id, text, deltask, upperCaseOne }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  let [done,setdone]=useState(false);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "8px",
    margin: "5px 0",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "grab",
    display: "flex",
    gap:"50px",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    color: "black",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
     <div  style={{ textDecoration: done ? "line-through" : "none" }}> {text}&nbsp;</div>   
     
      <div style={{display:"flex",gap:"10px"}}>
      <button onClick={() => deltask(id)} style={{ backgroundColor: "red", color: "black" }}>del</button>
      <button onClick={() =>setdone(!done)} style={{ backgroundColor: "gray", color: "white" }}>mark as done</button>
      </div>
    </div>
  );
}
