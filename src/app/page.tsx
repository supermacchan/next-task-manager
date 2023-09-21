import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { Title } from "@/components/Title";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session 
      ? (<Title>shalala</Title>)
      : <Title>You shall not pass</Title>}
    </main>
  )
}
