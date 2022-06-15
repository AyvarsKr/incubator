import React, {ChangeEvent} from "react";

type propsCheckbox= {
    callBack: (isDone:boolean) => void
    isDone: boolean
}

export const Checkbox = (props: propsCheckbox) => {

    const changeIsDoneHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    }

    return <input onChange={changeIsDoneHandler}
                  type="checkbox"
                  checked={props.isDone}/>
}