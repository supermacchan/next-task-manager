import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"

import { LogoProps } from "@/types"

export const Logo: React.FC<LogoProps> = ({ className }) => {
    const logoStyles = classNames(
        "flex items-center gap-2",
        className
    )
    return (
        <Link href={"/"} className={logoStyles}>
            <Image 
                src="/Logo.png"
                alt="task manager logo"
                width={70}
                height={70}
                priority
            />
            <h1 className="uppercase">Task manager</h1>
        </Link>
    )
}