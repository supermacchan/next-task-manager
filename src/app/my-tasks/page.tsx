import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { Title } from "@/components/Title";
import { TaskList } from "@/components/TaskList";

export default async function MyTasks() {
    const session = await getServerSession(options);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/my-tasks')
    }

    return (
      <main className="flex flex-col items-center p-24">
        <Title>my tasks shalala</Title>

        <TaskList />
      </main>
    )
  }