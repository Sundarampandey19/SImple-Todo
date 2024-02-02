"use client"
import { Todo } from "@prisma/client"
import DeleteTodo from "./DeleteAction"

interface TodoProps{
    todo:Todo,
}

const DeleteTodoButton = ({todo}:TodoProps) => {
  return (
    <>
    <br />
    <button onClick={()=>{DeleteTodo(todo.id)}} >Delete</button>
    </>
  )
}

export default DeleteTodoButton