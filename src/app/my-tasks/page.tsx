import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { TaskBar } from "@/components/TaskBar";
import { Title } from "@/components/Title";
import { TaskList } from "@/components/TaskList";

export default async function MyTasks() {
    const session = await getServerSession(options);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/my-tasks')
    }

    return (
      <main className="p-6">

        <TaskBar />

        <div className="pl-[200px]">
          <Title className="mb-4 text-center">Make it happen!</Title>
          <TaskList />
        </div>
        
      </main>
    )
  }