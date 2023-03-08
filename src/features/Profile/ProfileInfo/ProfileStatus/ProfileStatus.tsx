import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './ProfileStatus.module.scss'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) { // сравнивает с преыдущими проасами (при прошлой отрисовке)
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler(value: ChangeEvent<HTMLInputElement>) {
        this.setState({
            status: value.currentTarget.value
        })
    }

    onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') this.deactivateEditMode()
    }

    render() {
        return (
            <div className={styles.status}>
                {!this.state.editMode

                    ? <span
                        onDoubleClick={this.activateEditMode.bind(this)}
                    > &#9998; {this.props.status ? this.props.status : '...'}</span>

                    : <input
                        value={this.state.status}
                        onChange={this.onChangeHandler.bind(this)}
                        onBlur={this.deactivateEditMode.bind(this)}
                        onKeyPress={this.onKeyPressHandler.bind(this)}
                        autoFocus={true}
                    />
                }

            </div>
        )
    }
}