export interface LogoProps {
    className?: string
}

export interface GreetingProps {
    name: string | null | undefined
}

export type TaskType = {
    id: number | string,
    text: string,
    done: boolean,
    filters: string[]
}

export interface TaskProps {
    task: TaskType
}

export interface TitleProps {
    children: React.ReactNode;
    className?: string
}

export interface CheckboxProps {
    status: boolean;
    className?: string;
}