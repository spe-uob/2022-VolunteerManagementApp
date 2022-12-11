import axios from 'axios'

const request = axios.create({
    //global backend
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

// request interceptor
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config
}, error => {
    return Promise.reject(error)
});

// response
request.interceptors.response.use(
    response => {
        let res = response.data;

        if (response.config.responseType === 'blob') {
            return res
        }

        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default request

