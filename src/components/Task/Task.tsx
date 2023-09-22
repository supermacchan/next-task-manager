import { Checkbox } from "@/components/Checkbox"

import { TaskProps } from "@/types"

export const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <li 
            className="h-[150px] p-4 flex items-start gap-3 bg-platinum rounded"
        >
            <Checkbox
                status={task.done}
                className=""
            />

            {task.text}
        </li>
    )
}