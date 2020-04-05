import React from 'react'
import { Switch, Route } from "react-router-dom";
import Layout from '@/components/Layout'
export const superAdminRouter= [
    {
        path: '/',
        exact: false,
        component: Layout,
        children: [
            {
                path: '/home',
                exact: false,
                component: Home,
            },
            {
                path: '/user',
                exact: false,
                component: User
            },
            {
                path: '/record',
                exact: false,
                component: Record,
            }
        ]
    }
]

export const adminRouter= [
    {
        path: '/',
        exact: false,
        component: Layout,
        children: [
            {
                path: '/home',
                exact: false,
                component: Home,
            },
            {
                path: '/user',
                exact: false,
                component: User
            },
            {
                path: '/record',
                exact: false,
                component: Record,
            }
        ]
    }
]










export function Home(props){
    return (<div>
        home
        {/* <Route path="/home/a" component={HomeA}></Route>
                        <Route path="/home/b" component={HomeB}></Route> */}
        </div>)
}
export function User(){
    return <div>user</div>
}
export function Record(){
    return <div>record</div>
}

export function Test(){
    return <div>Test</div>
}

export function HomeA(props){
    console.log('AAAAAAAAAAAAAa')
    return <div>homeA</div>
}
export function HomeB(props){
    console.log('BBBBBBBBBBBBBBBB')
    return <div>homeB</div>
}

