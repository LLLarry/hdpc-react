import { handleLogin } from '@/require/login'
import { CHANGE_USER_INFO } from '../../actionTypes/login'
import { adminRouter,superAdminRouter } from '@/router/router.config'
// import {push} from 'react-router-redux';
export const changeUserInfo = (userInfo,route) => {
    return {
        type: CHANGE_USER_INFO,
        userInfo,
        route
    }
}
export const handleSendLogin = (data) => {
    return async (dispatch, getState) => {
        let result = await handleLogin(data)
        if (result.userInfo && result.userInfo.code === 200) {
            let route= []
            route= result.userInfo.classify ==='Admin' ? adminRouter : superAdminRouter
            dispatch(changeUserInfo(result.userInfo,route))
            // dispatch(push('/'))
        }
    }
}