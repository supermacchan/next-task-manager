import { Logo } from "@/components/Logo"
import { Navigation } from "@/components/Navigation"

export const Header: React.FC = async () => {
    return (
        <header className="py-3 border-b-2">
            <div className="container flex justify-between items-center">
                <Logo className="" />
                <Navigation />
            </div>
        </header>
    )
}