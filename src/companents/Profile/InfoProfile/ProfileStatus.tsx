import React from 'react';


type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    // constructor(props : ProfileStatusType) {
    //     super(props);
    // }
    state = {
        editMode: false
    }
    changeEditMode(){
        this.setState({
            editMode : !this.state.editMode
        })
    }


    render() {
        const {status} = this.props

        return <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={this.changeEditMode.bind(this)}>{status}</span>
            </div>}
            {this.state.editMode &&
                <div>
                    <input type="text" value={status} autoFocus onBlur={this.changeEditMode.bind(this)}/>
                </div>}

        </div>;
    }
};

