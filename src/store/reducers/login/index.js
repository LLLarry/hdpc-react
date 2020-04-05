import { CHANGE_USER_INFO } from '../../actionTypes/login'
const defaultState= {
    userName: "",
    message: "",
    token: 0,
    route: []
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_USER_INFO :
            return { ...state,...action.userInfo, route:action.route }
        default : return state ;
    }  
}