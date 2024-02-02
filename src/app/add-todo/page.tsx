import prisma from "@/lib/db/prisma"
import { Metadata } from "next";
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Add Todo",
  description: "Add Todo Here",
};

async function addTodo(formData:FormData) {
    "use server"
    const title = formData.get("title")?.toString()
    const description = formData.get("description")?.toString()

    if(!title || !description){
        throw Error("Missing Required Field ")
    }

    await prisma.todo.create({
      data:{
        title:title,
        description:description,
      },
    })

    redirect("/")


}

const addTodoPage = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl font-bold">Add Todo</h1>
      <form action={addTodo}>
        <input
          className="input input-bordered mb-3 max-w-sm"
          type="text"
          name="title"
          required
          placeholder="Title"
        />
        <input
          className="input input-bordered mb-3 max-w-2xllg m-4"
          type="text"
          name="description"
          required
          placeholder="Description"
        />
      <button type="submit" className="btn my-4 btn-secondary">Submit</button>
      </form>
      
    </>
  );
};

export default addTodoPage;
