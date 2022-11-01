import React from 'react'
import {create} from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";

describe("Profile Status Component", ()=>{
    test("status from props should be in the state", ()=>{
        const component = create(<ProfileStatus updateStatusThunk={()=>{}} status='hello'/> )
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('hello')
    })
    test("span should be with status after rendering", ()=>{
        const component = create(<ProfileStatus updateStatusThunk={()=>{}} status='hello'/> )
        const root = component.root
        const span = root?.findByType('span')
        expect(span?.children[0]).toBe('hello')
    })
    test("input should be displayed", ()=>{
        const component = create(<ProfileStatus updateStatusThunk={()=>{}} status='hello'/> )
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')

        expect(input.props.value).toBe('hello')
    })
    test("callback should be called", ()=>{
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus updateStatusThunk={mockCallback} status='hello'/> )
        const instance = component.getInstance()
        // @ts-ignore
        instance.offEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})