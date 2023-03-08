import {addPostAC, deletePostAC, profileReducer} from './profileReducer';

let state = {
  postData: [
    {id: 1, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 5},
    {id: 2, message: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!', likesCount: 15},

  ],
  profile: {
    aboutMe: '---------',
    contacts: {
      facebook: 'facebook.com',
      website: null,
      vk: 'vk.com/@vlad',
      twitter: 'https://twitter.com/@sdf',
      instagram: 'instagra.com/sds',
      youtube: null,
      github: 'github.com',
      mainLink: null
    },
    lookingForAJob: false,
    lookingForAJobDescription: 'ищу работу ',
    fullName: 'Влад',
    userId: 23422,
    photos: {
      small: 'null',
      large: 'null',
    }
  },
  status: '-----'
}


it('lenght of posts should be incremented', () => {
  let action = addPostAC('it-kamasutra.com')

  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(3)
  expect(newState.postData[2].message).toBe('it-kamasutra.com')
})

it('after deleting length of messages should be decrement', () => {
  let action = deletePostAC(1)

  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(1)
})

it('after deleting length should be decrement if id is incorrect', () => {
  let action = deletePostAC(100)

  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(2)
})