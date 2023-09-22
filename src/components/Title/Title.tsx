import classNames from "classnames"

import { TitleProps } from "@/types"

export const Title: React.FC<TitleProps> = ({
    children, 
    className
}) => {
    const titleStyles = classNames(
        "uppercase text-2xl font-normal",
        className
    )
    return (
        <h2 className={titleStyles}>
            {children}
        </h2>
    )
}