import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session 
      ? (<div>shalala</div>)
      : <h2>You shall not pass</h2>}
    </main>
  )
}
