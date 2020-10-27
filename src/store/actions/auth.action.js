import { Http } from '../../config/globalconfig';

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE'
}

export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token
})

export const removeToken = () => ({
    type: actionTypes.LOGOUT
   
})

export const loginSucces = bool => ({
    type: actionTypes.SUCCESS,
    payload
})

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
})

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isloading:{
        active:bool, 
        msg: msg
    }
})

export const getUserToken = () => dispatch =>

localStorage.getItem('access_token')
       .then(res => {
           dispatch(loading(false))
           if(typeof res !== undefined){

            dispatch(getToken(res));

           }
       })

export const setUserToken = () => dispatch =>{
    localStorage.setItem('access_token',token);
    dispatch(loading(false))
    dispatch(loginSucces(true))
}