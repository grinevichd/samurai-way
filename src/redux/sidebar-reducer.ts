// import {RootPropsType} from "./state";
//
// export const sidebarReducer = (state : RootPropsType,action) =>{
//     return state
// }


import {ActionsTypes, AddFriendAT, ChangeFriendAT} from "./store";

type FriendsType = {
    name: string
}

export type SidebarType = {
    friends: Array<FriendsType>
    newFriend : string
}

let initialState : SidebarType ={
    friends: [

        {name: "Kate"},
        {name: "Dima"},
        {name: "Victoria"}

    ],
    newFriend : ""
}

export function sidebarReducer(state : SidebarType =initialState , action : ActionsTypes) : SidebarType{
    switch (action.type){
        case "ADD-FRIEND" :{
            // let clone = {...state}
            // // const newFriend = {name : state.newFriend}
            // //
            // // state.friends.push(newFriend)
            return {...state, friends : [...state.friends,{name : state.newFriend}] ,newFriend : "" }
        }
        case "CHANGE-FRIEND-NAV":{

            let clone = {...state}
            clone.newFriend = action.message
            return clone
        }
        default :
            return state
    }

}

export const changeFriend = (text : string) : ChangeFriendAT =>{
    return {type : "CHANGE-FRIEND-NAV", message : text}
}
export const addFriend = () : AddFriendAT =>{
    return {type : "ADD-FRIEND"}
}


