'use client';

import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { CheckboxProps } from "@/types"

export const Checkbox: React.FC<CheckboxProps> = ({
    status,
    className
}) => {
    const [checked, setChecked] = useState(status);

    const checkboxStyles = classNames(
        "relative w-[25px] h-[25px] cursor-pointer",
        className
    )

    const iconStyles = classNames(
        "absolute top-0 left-0",
    )

    return (
        <div className={checkboxStyles}> 
            <input 
                type="checkbox" 
                checked={checked}
                onChange={() => setChecked(prevState => !prevState)}
                className="visually-hidden"
            />
            {
                checked
                    ? <Image 
                        src="/icons/checkbox-filled.svg"
                        alt="filled checkbox"
                        aria-hidden
                        width={25}
                        height={25}
                        className={iconStyles}
                        onClick={() => setChecked(prevState => !prevState)}
                    />
                    : <Image 
                        src="/icons/checkbox-blank.svg"
                        alt="empty checkbox"
                        aria-hidden
                        width={25}
                        height={25}
                        className={iconStyles}
                        onClick={() => setChecked(prevState => !prevState)}
                    />
            }  
        </div>
    )
}