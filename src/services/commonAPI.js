import axios from "axios";

const commonAPI = async(httpMethod,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method: httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type" : "application/json"} //media undo? undengil that media(reqheader) 
    }
    return await axios(reqConfig).then(res=>res).catch(err=>err)

}

export default commonAPI












//api call cheyyan ,what all we need?
//    url
//    http method
//    reqBody 
//    reqHeader (media file (like getting profile pic from our system)paranju kodukkunnath header il aan)