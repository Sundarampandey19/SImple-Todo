import prisma from "@/lib/db/prisma";
import Link from "next/link";
import DeleteTodoButton from "@/components/DeleteTodoButton";

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <>
      {todos.map((todo) => (
        <div
          className="border flex gap-4 justify-center p-4 mt-4"
          key={todo.id}
        >
          <p>{todo.title}</p>
          <p>{todo.description}</p>
          <DeleteTodoButton todo={todo}></DeleteTodoButton>
        </div>
      ))}
      <Link href={"/add-todo"} className="btn btn-accent p-4 mt-4 ">
        Create New Todos
      </Link>
    </>
  );
}
