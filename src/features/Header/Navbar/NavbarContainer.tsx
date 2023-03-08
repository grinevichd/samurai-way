import {FriendsType} from '../../../redux/TypeRedux';
import {connect} from 'react-redux';
import {Navbar} from './Navbar';
import {AppStateType} from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    friends: state.sidebarPage.friends

  }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)

type mapStateToPropsType = {
  friends: FriendsType[]
}
