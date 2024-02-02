"use server"
import prisma from "@/lib/db/prisma"
import { redirect } from "next/navigation"

const DeleteTodo = async (id:string) => {
    await prisma.todo.delete({
        where:{id}
    })
    redirect("/")
}

export default DeleteTodo