import { TaskProps } from "@/types"

export const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <li>
            {task.text}
        </li>
    )
}