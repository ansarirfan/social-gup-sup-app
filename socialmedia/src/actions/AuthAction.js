import * as AuthApi from '../API/AuthRequest'



export const logIn =(formData) => async (dispatch) =>{
    dispatch ({type: "AUTH_START"})
 try {
        const {data} = await AuthApi.logIn(formData)
        dispatch ({type: "AUTH_SUCCESS", data: data})
    //  navigate("../home", { replace: true });
    } catch (error) {
       console.log(error) 
       dispatch ({type: "AUTH_FAIL"})
    }
}

export const singUp =(formData) => async (dispatch) =>{
    dispatch ({type: "AUTH_START"})
 try {
        const {data} = await AuthApi.singUp(formData)
        dispatch ({type: "AUTH_SUCCESS", data: data})
    //    navigate("../home", { replace: true });
    } catch (error) {
       console.log(error) 
       dispatch ({type: "AUTH_FAIL"})
    }
}

export const logOut =() => async (dispatch) =>{
    dispatch ({type: "LOG_OUT"})
}