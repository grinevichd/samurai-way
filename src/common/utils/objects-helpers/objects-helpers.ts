import {ItemsUsersType} from '../../../api/api';

export const updateObjectsInArray = (items: ItemsUsersType[], itemsId: number, objPropName: keyof (ItemsUsersType), newObjProps: { followed: boolean; }): ItemsUsersType[] => {
  return items.map(u => u[objPropName] === itemsId ? {...u, ...newObjProps} : u)
}
