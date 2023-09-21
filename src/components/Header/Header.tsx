import Link from "next/link"

import { Logo } from "@/components/Logo"

export const Header = () => {
    return (
        <header className="px-12 py-3 flex justify-between items-center border-b-2">
            <Logo className="" />

            <Link href={"/my-tasks"}>My Tasks</Link>

            <div className="flex gap-4">
                <button type="button">Sign up</button>
                <button type="button">Log in</button>
                <button type="button">Log out</button>
            </div>
        </header>
    )
}