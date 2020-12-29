import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_RESET, USER_UPDATE_SUCCESS } from "../CONSTANTS/UserConstants"


export const UserLoginReducer = ( state = {}, action) => { 

    switch(action.type) { 

    
        case USER_LOGIN_SUCCESS:
        return { loading: false , userInfo: action.payload }
        
        case USER_LOGIN_REQUEST:
        return { loading: true }
    
        case USER_LOGIN_FAIL:
        return { loading: false , error: action.payload }
        
        case USER_LOGIN_LOGOUT:
            return {}
    
    
        default:
            return state
    
    
    } 
}

export const UserDetailsReducer = ( state= {user: {} }  , action) => { 

    switch(action.type) { 

    
        case USER_DETAILS_SUCCESS:
        return { loading: false , user: action.payload }
        
        case USER_DETAILS_REQUEST:
        return {...state ,  loading: true  }
    
        case USER_DETAILS_FAIL:
        return { loading: false , error: action.payload }
        
    
        default:
            return state
    
    
    } 
}



export const UserUpdateReducer = ( state= {}  , action) => { 

    switch(action.type) { 

    
        case USER_UPDATE_SUCCESS:
        return { loading: false , userInfo: action.payload , success: true }
        
        case USER_UPDATE_REQUEST:
        return {...state ,  loading: true  }
    
        case USER_UPDATE_FAIL:
        return { loading: false , error: action.payload }
        
        case USER_UPDATE_RESET:
            return  {}
        default:
            return state
    
    
    } 
}