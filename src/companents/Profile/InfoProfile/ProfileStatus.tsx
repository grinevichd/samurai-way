import React, {ChangeEvent} from 'react';
import {setState} from "../../../redux/user-reducer";


type ProfileStatusType = {
    status: string
    updateStatusThunk : (status : string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    // constructor(props : ProfileStatusType) {
    //     super(props);
    // }

    state = {
        editMode: false,
        status : this.props.status
    }
    offEditMode(){
        this.setState({
            editMode : false
        })

            this.props.updateStatusThunk(this.state.status)


    }
    onEditMode = ()=>{
        this.setState({
            editMode : true
        })
    }
    statusChange(e:ChangeEvent<HTMLInputElement>){
        this.setState({
            status : e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }


    render() {
        const {status} = this.props

        return <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={this.onEditMode}>{status}</span>
            </div>}
            {this.state.editMode &&
                <div>
                    <input onChange={this.statusChange.bind(this)} type="text" value={this.state.status} autoFocus onBlur={this.offEditMode.bind(this)}/>
                </div>}

        </div>;
    }
};

