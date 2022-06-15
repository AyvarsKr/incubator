import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import styles from './Todolist.module.css'
import {Checkbox} from "./Components/Checkbox";

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
    changeIsDone: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    let [active, setActive] = useState(true)

    const addTask = () => {

        if(title.trim() !== ''){
            props.addTask(title.trim());
            setTitle("");
        } else{
            setError('input is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   className={error ? styles.error : ''}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const changeIsDoneHandler = (tId:string, isDone:boolean) => {
                        props.changeIsDone(tId, isDone)
                    }

                    return <li key={t.id} className={t.isDone == true ? styles.isDone: ""}>
                        {/*<input onChange={(event:ChangeEvent<HTMLInputElement>) => changeIsDoneHandler(t.id,event.currentTarget.checked)} type="checkbox" checked={t.isDone}/>*/}
                        <Checkbox callBack={(isDone) => changeIsDoneHandler(t.id, isDone)} isDone={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter == "all" ? styles.activeFilter : ""} onClick={ onAllClickHandler }>All</button>
            <button className={props.filter == "active" ? styles.activeFilter : ""} onClick={ onActiveClickHandler }>Active</button>
            <button className={props.filter == "completed" ? styles.activeFilter : ""} onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
