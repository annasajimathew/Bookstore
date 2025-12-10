import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api : called by authent component when register button is clicked
export const registerAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`, userDetails) 

}

//login api : called by authent component when register button is clicked
export const loginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`, userDetails) 

}

//google/sign-in google login api : called by authent component when login using google btn
export const googleLoginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`, userDetails) 

}

