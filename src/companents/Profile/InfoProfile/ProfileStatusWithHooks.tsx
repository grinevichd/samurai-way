import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export function ProfileStatusWithHooks(props: ProfileStatusType) {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{setStatus(props.status)},[props.status])

    const offEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }
    const onEditMode = () => {
        setEditMode(true)
    }
    const statusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }


    return <div>
        {!editMode && <div>
            <span onDoubleClick={onEditMode}>{props.status}</span>
        </div>}
        {editMode &&
            <div>
                <input type="text" value={status} autoFocus
                       onBlur={offEditMode} onChange={statusChange}/>
            </div>}

    </div>;
}



