import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}


export function Todolist(props: PropsType) {

    const [title, setTitle] = useState('')

    const onClickInputHandler = () => {
        props.addTask(title)
        setTitle('')
    } 

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            onClickInputHandler()
        }
    }

    const changeFilterHandler = (value:FilterValuesType) =>{
        props.changeFilter(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyPress={onKeyPressHandler} value={title} onChange={onChangeHandler}/>
            <button onClick={onClickInputHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map((t) => {
                    const removeTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return(
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={removeTaskHandler}>x</button>
                        </li>)
                })
            }
        </ul>
        <div>
            <button onClick={() => {changeFilterHandler('all')}}>
                All
            </button>
            <button onClick={() => {changeFilterHandler('active')}}>
                Active
            </button>
            <button onClick={() => {changeFilterHandler('completed')}}>
                Completed
            </button>
        </div>
    </div>
}
