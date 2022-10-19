import {UsersType} from "../redux/user-reducer";

export const updateObjectInArray = <T>(items : UsersType[], id : number , newObjProps : T , objPropName  : string) => {
   return  items.map((u:any) => u[objPropName] === id ? {...u, ...newObjProps} : u)
}