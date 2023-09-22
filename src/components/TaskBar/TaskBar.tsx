import classNames from "classnames"

import { Filters } from "@/components/Filters"

export const TaskBar: React.FC = () => {
    const menuStyles = classNames(
        "bg-pale relative",
        "md:w-[200px] md:h-[90vh] md:border-r-2",
        "md:fixed md:left-0 md:top-[96px]"
    )

    return (
        <aside className={menuStyles}>
            <button type="button" className="px-2 py-3 bg-l-gray rounded">Add new task</button>
            <Filters />
            <input type="text" name="search" placeholder="Input text..."/>
            <button type="button" className="px-2 py-3 bg-l-gray rounded">Search</button>
        </aside>
    )
}