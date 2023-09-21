import Link from "next/link"
import { getServerSession } from "next-auth/next";

import { options } from "@/app/api/auth/[...nextauth]/options"

import { Logo } from "@/components/Logo"

export const Header = async () => {
    const session = await getServerSession(options);

    return (
        <header className="px-12 py-3 flex justify-between items-center border-b-2">
            <Logo className="" />

            <Link href={"/my-tasks"}>My Tasks</Link>

            <div className="flex gap-4">
                {session 
                    ? (<Link href={"/api/auth/signout"}>Sign out</Link>)
                    : (<Link href={"/api/auth/signin"}>Sign in</Link>)
                }
            </div>
        </header>
    )
}