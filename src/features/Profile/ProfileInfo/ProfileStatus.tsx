import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<ProfileStatustype> {

  state = {
    editeMode: false,
    status: this.props.status
  }
  activateEditeMode = () => {
    this.setState({
      editeMode: true
    })
  }
  daActivateEditeMode = () => {
    this.setState({
      editeMode: false
    })
    this.props.updateStatus(this.state.status !== null ? this.state.status : '')
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatustype>, prevState: Readonly<{}>, snapshot?: any) {

    if (prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  render() {
    return (
      <div>
        {!this.state.editeMode
          ? <div>
            <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'no status'}</span>
          </div>
          : <div>
            <input onChange={this.onStatusChange}
                   value={this.state.status !== null ? this.state.status : ''}
                   onBlur={this.daActivateEditeMode} autoFocus/>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus

type ProfileStatustype = {
  status: string | null
  updateStatus: (status: string) => void
}
