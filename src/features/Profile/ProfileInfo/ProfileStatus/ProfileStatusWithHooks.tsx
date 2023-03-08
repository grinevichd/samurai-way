import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import styles from './ProfileStatus.module.scss'
import {SvgSelector} from "../../../../common/components/SvgSelector/SvgSelector";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onKeyPressHandler = (el: KeyboardEvent<HTMLInputElement>) => {
        if (el.key === 'Enter') deactivateEditMode()
    }

    const onChangeHandler = (el: ChangeEvent<HTMLInputElement>) => setStatus(el.currentTarget.value)

    const styleCursor = props.isOwner ? {cursor: 'pointer'} : {}

    return (
        <div className={styles.statusComponent}>
            {!editMode
                ?
                <span className={styles.statusBox} style={styleCursor} onDoubleClick={activateEditMode}>
                    <span className={styles.status}>{props.status ? props.status : '...'} </span>
                    {props.isOwner && <SvgSelector svgName={"Pencil"}/>}
                </span>

                :
                <input
                    className={styles.input}
                    value={status}
                    onChange={onChangeHandler}
                    onBlur={deactivateEditMode}
                    onKeyPress={onKeyPressHandler}
                    autoFocus={true}
                />
            }
        </div>
    )
}