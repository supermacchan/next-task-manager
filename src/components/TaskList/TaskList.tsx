import { Task } from "@/components/Task"
import { TaskType } from "@/types";
import tasks from "@/data/tasks.json";

export const TaskList = () => {
    return (
        <ul>
            {tasks &&
                tasks.map((task: TaskType) =>
                    <Task key={task.id} task={task}/>
                )
            }
        </ul>
    )
}