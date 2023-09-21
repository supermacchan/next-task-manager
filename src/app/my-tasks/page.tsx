import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function MyTasks() {
    const session = await getServerSession(options);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/my-tasks')
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>my tasks shalala</div>
      </main>
    )
  }