import { Task } from "@/components/Task"
import { TaskType } from "@/types";
import tasks from "@/data/tasks.json";

export const TaskList: React.FC = () => {
    return (
        <ul className="grid grid-cols-3 gap-3">
            {tasks &&
                tasks.map((task: TaskType) =>
                    <Task key={task.id} task={task}/>
                )
            }
        </ul>
    )
}