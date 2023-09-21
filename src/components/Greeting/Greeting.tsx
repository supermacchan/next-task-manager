import { GreetingProps } from "@/types"

export const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return (
        <span>
            Hello, {name}!
        </span>
    )
}