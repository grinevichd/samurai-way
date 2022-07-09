// import {RootPropsType} from "./state";
//
// export const sidebarReducer = (state : RootPropsType,action) =>{
//     return state
// }
import {SidebarType} from "./store";

let initialState ={
    friends: [

        {name: "Kate"},
        {name: "Dima"},
        {name: "Victoria"}

    ]
}

export function sidebarReducer(state : SidebarType =initialState , action : string){
    return state
}