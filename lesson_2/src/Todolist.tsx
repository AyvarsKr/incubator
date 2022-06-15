import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number) => void

}

export function Todolist(props: PropsType) {

    const[filterForColander, setfilterForColander] = useState('All')

    let callander = props.tasks;

    const changeFilter = (filterValue: string) => {
        setfilterForColander(filterValue);
        console.log(callander)
    }

    if(filterForColander === "Active"){
        callander = props.tasks.filter((el) => el.isDone === false)
    }

    if(filterForColander == "Completed"){
        callander = props.tasks.filter((el) => el.isDone === true)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                callander.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => changeFilter('All')}>All</button>
            <button onClick={() => changeFilter('Active')}>Active</button>
            <button onClick={() => changeFilter('Completed')}>Completed</button>
        </div>
    </div>
}
