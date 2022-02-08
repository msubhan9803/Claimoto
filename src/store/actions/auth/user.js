
import { REGISTER_USER, SET_TOKEN } from '../../types/types'
import { SweetAlert } from '../../../functions'
// import instance from '../../../config/axios/instance'


// Register User 
export const RegisterUser = (name, value) => async dispatch => {
    try {
        dispatch({
            type: REGISTER_USER,
            payload: { name, value }
        })
    }
    catch (err) {

    }
}

// Login User 


export const loginUser = (data) => async dispatch => {
    try {
        let dummy = {
            email: "laherasif@gmail.com",
            pass: "1234567"
        }

        // api fetch

        // instance.get('/')

        if (data.email === dummy.email && data.password === dummy.pass) {
            const token = Math.random().toString().slice(2)
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            
        }
        else if (data.email !== dummy.email || data.password === dummy.pass) {
            SweetAlert({ title: "Bad Job!", text: "Email not found", icon: "warning" })

        }
        else if (data.email === dummy.email || data.password !== dummy.pass) {
            SweetAlert({ title: "Bad Job!", text: "Password not correct", icon: "warning" })

        }
        else {
            SweetAlert({ title: "Bad Job!", text: "Please use correct credentials", icon: "warning" })
        }



    }
    catch (err) {

    }
}


