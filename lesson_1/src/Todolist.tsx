import React from "react";

type TodolistPropsType = {
    title?: string
    name?:number
    tasks: Array<inArrayType>
}
type inArrayType ={
    id:number,
    title: string,
    isDone: boolean
}

export const Todolist = (props:TodolistPropsType) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>{props.name}</div>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el:inArrayType) => {
                    return (
                        <li><input type='checkbox' checked={el.isDone}/><span>{el.title}</span></li>
                    )
                })}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}