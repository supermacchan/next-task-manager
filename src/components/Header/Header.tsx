import { Logo } from "@/components/Logo"
import { Navigation } from "@/components/Navigation"
import { LangMenu } from "@/components/LangMenu"

export const Header: React.FC = async () => {
    return (
        <header className="py-3 border-b-2">
            <div className="container flex justify-between items-center">
                <Logo className="" />
                <div className="flex gap-12">
                    <Navigation />
                    <LangMenu />
                </div>
            </div>
        </header>
    )
}