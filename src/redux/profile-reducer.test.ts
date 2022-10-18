import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";


const state = {
    postsData: [
        {id: 1, message: "Hello how are u?", countLikes: 15},
        {id: 2, message: "yup it's my first post", countLikes: 25},
    ],

    profileUser : null,
    status : ""
}
it('length of posts should be incremented',()=>{
    const action = addPostActionCreator("My post")
    const newState = profileReducer(state,action)
    expect(newState.postsData.length).toBe(3)

})
it('message of post should be correct',()=>{
    const action = addPostActionCreator("My post")
    const newState = profileReducer(state,action)
    expect(newState.postsData[2].message).toBe("My post")
})
it('length of posts should be  decrement',()=>{
    const action = deletePost(1)
    const newState = profileReducer(state,action)
    expect(newState.postsData.length).toBe(1)
})
