import { Logo } from "@/components/Logo"
import { Navigation } from "@/components/Navigation"

export const Header = async () => {

    return (
        <header className="px-12 py-3 flex justify-between items-center border-b-2">
            <Logo className="" />
            <Navigation />
        </header>
    )
}