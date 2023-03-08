import {profileAPI, ProfileUserStatusType} from '../../api/api';
import {Dispatch} from 'redux';
import {setAppStatusAC} from "../../app/appReducer";
import {randomId} from "../../common/utils/randomId";
import {PhotosType} from "../Users/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {stopSubmit} from "redux-form";


let initialProfileState: InitialProfileStateType = {
  postData: [
    {
      id: randomId(),
      message: 'Web programming is a section of programming focused on the development of web applications (programs that ensure the functioning of dynamic World Wide Web sites). Web programming languages are languages that are primarily designed to work with web technologies. Web programming languages can be roughly divided into two overlapping groups: client-side and server-side.',
      likesCount: 5
    },
    {
      id: randomId(),
      message: 'React can be used to develop single page and mobile applications. Its goal is to provide high development speed, simplicity and scalability. As a library for developing user interfaces, React is often used with other libraries such as MobX, Redux, and GraphQL.',
      likesCount: 16
    },
    {
      id: randomId(),
      message: 'TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript. The developer of the TypeScript language is Anders Hejlsberg, who previously created Turbo Pascal, Delphi, and C#.',
      likesCount: 25
    },

  ],
  profile: null,
  status: '-----'
}

export const profileReducer = (state = initialProfileState, action: AddPostType): InitialProfileStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      const newPost: PostDataType = {
        id: randomId(),
        message: action.newPostText,
        likesCount: 0,
      }
      console.log('newPost', newPost)
      return {
        ...state,
        postData: [newPost, ...state.postData],
      }
    }
    case 'SET-USER-PROFILE': {
      return {
        ...state,
        profile: action.profile
      }
    }
    case 'SET-USER-STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'DELETE-POST':
      return {
        ...state,
        postData: state.postData.filter(el => el.id !== action.id)
      }
    case "SAVE-PHOTO-SUCCESS":
      // @ts-ignore
      return {...state, profile: {...state.profile, photos: action.data}}
    default:
      return state
  }
}

export type AddPostType = ReturnType<typeof addPostAC>
  // | ReturnType<typeof onPostChangeAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof savePhotoSuccessAC>

export const addPostAC = (newPostText: string) => {
  return {
    type: 'ADD-POST',
    newPostText: newPostText
  } as const
}
export const deletePostAC = (id: number) => {
  return {
    type: 'DELETE-POST',
    id
  } as const
}

export const setUserProfile = (profile: ProfileUserStatusType) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  } as const
}

export const setStatus = (status: string) => {
  return {
    type: 'SET-USER-STATUS',
    status
  } as const
}
export const savePhotoSuccessAC = (data: PhotosType) => ({
  type: 'SAVE-PHOTO-SUCCESS',
  data
} as const)

export const getUserProfileTC = (userId: number): any => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))

  try {
    const response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(setAppStatusAC("idle"))
  }
}

export const getUserStatusTC = (userId: number): any => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))

  try {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))
  } finally {
    dispatch(setAppStatusAC("idle"))
  }
}

export const updateStatusTC = (status: string): any => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"))

  try {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } finally {
    dispatch(setAppStatusAC("idle"))
  }
}
export const saveProfileTC = (formData: ProfileUserStatusType): any => async (dispatch: Dispatch, getState: () => AppStateType) => {
  dispatch(setAppStatusAC("loading"))
  const userId = getState().auth.userId
  try {
    const res = await profileAPI.saveProfile(formData)
    if (res.data.resultCode === 0) {
      if (userId) {
        dispatch(getUserProfileTC(userId))
      }
    }else {
      const action: any = stopSubmit('profileData', {_error: res.data.messages[0]})
      dispatch(action)
      return Promise.reject(res.data.messages[0])
    }
  } catch (err) {
    console.error(err)
  } finally {
    dispatch(setAppStatusAC("idle"))
  }
}

export const savePhotoTC = (file: File): any => async (dispatch: Dispatch, getState: () => AppStateType) => {
  dispatch(setAppStatusAC("loading"))
  const userId = getState().auth.userId
  try {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
      if (userId) {
        dispatch(getUserProfileTC(userId))
      }
    }
  } catch (err) {
    console.error(err)
  } finally {
    dispatch(setAppStatusAC("idle"))
  }
}


export type PostDataType = {
  id: number
  message: string
  likesCount: number
}

export type InitialProfileStateType = {
  postData: PostDataType[]
  profile: ProfileUserStatusType | null
  status: string
}

