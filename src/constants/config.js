//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message : 'Data is being loaded, Please wait'
    },
    success: {
        title:'success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching reponse from the server, Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server, Please check internet connectivity and try later'
    }
}

//API SERVICE CALL
//sample request
// NEED SERVICE CALL : {URL:'\', METHOD:'POST/GET/DELETE' PARAMS: true/false, query:true/false}
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: 'POST' },
    uploadFile: { url: '/file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET',params: true }
    
}