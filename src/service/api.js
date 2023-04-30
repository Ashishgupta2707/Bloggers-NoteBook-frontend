import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config.js';
import { getAccessToken ,getType } from '../utils/common-utils.js';

const API_URL = 'http://127.0.0.1:8000';

const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout: 10000,
    header: {
        "content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params;
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
            
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        //stop global loader here
        return processResponse(response);
    },
    function (error) {
        //stop global loader here
        return Promise.reject(processError(error));
    }

)

//////////////////////////
//if success -> return { isSuccess: true , data: object}
//if failure -> return { isFailure: true , status: String, msg: String , code: int}
//////////////////////////

const processResponse = (response) => {
    if (response?.status === 200) {
        return {
            isSuccess: true,
            data: response.data
        }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}


//////////////////////////
//if success -> return { isSuccess: true , data: object}
//if failure -> return { isFailure: true , status: String, msg: String , code: int}
//////////////////////////

const processError = (error) => {
    if (error.response) {
        //request made and server responded with a status other
        //that falls out of the range 2.x.x
        console.log('ERROR IN RESPONSE:', error.toJson());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    } else if (error.request) {
        //request made but no response was recived
        console.log('ERROR IN REQUEST:', error.toJson());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else {
        //something happened in setting uprequest that triggers an error
        console.log('ERROR IN NETWORK:', error.toJson());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code:""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showuploadProgress, showdownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken()
                // "Accept": "applicaton/json,form-data",
                // "Content-Type":"applicaton/json"
            },
            TYPE: getType(value,body),
            onuploadProgress: function (progressEvent) {
                if (showuploadProgress) {
                    let precentagecompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showuploadProgress(precentagecompleted);
                }
            },
            ondownloadProgress: function (progressEvent) {
                if (showdownloadProgress) {
                    let precentagecompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showdownloadProgress(precentagecompleted);
                }
            }
        })
}

export { API };