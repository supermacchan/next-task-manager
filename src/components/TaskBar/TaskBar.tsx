import classNames from "classnames"

export const TaskBar: React.FC = () => {
    const menuStyles = classNames(
        "w-[200px] h-[90vh] border-r-2",
        "fixed left-0 top-[96px]"
    )
    return (
        <aside className={menuStyles}>
            I am a menu
        </aside>
    )
}