import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task, toggleComplete,deleteToDo, editToDo}) => {
  return (
    <div className="Todo">
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{
          editToDo(task.id)
        }}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>{
          deleteToDo(task.id)
        }}/>
      </div>
    </div>
  );
};
