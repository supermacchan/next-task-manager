import { GreetingProps } from "@/types"

export const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return (
        <span className="mr-8">
            Hello, {name}!
        </span>
    )
}