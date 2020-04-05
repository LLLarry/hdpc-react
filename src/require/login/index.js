import ajax from '../ajax'

export const handleLogin= (data)=>{
    return ajax({
        url: '/api/webenter/accountEnter',
        data
    })
}