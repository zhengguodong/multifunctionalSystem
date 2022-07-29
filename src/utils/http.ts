import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
const instance = axios.create({
    baseURL: '',
    timeout: 120 * 1000,
    withCredentials: true
});

// 错误处理
const err = (error:any) => {
    if (error.message.includes('timeout')) {
        ElMessage({
            message: '请求超时，请刷新网页重试',
            type: 'error'
        });
    }
    if (error.response) {
        const data = error.response.data;
        if (error.response.status === 403) {
            ElMessage({
                message: 'Forbidden',
                type: 'error'
            });
        }
        if (error.response.status === 401) {
            ElMessage({
                message: 'Unauthorized',
                type: 'error'
            });
        }
    }
    return Promise.reject(error);
};

type Config = AxiosRequestConfig & {successNotice? : boolean, errorNotice? : boolean}

// 请求拦截
instance.interceptors.request.use((config: Config) => {
    // @ts-ignore
    config.headers['Access-Token'] = localStorage.getItem('token') || '';
    return config;
}, err);

// 响应拦截
instance.interceptors.response.use((response: AxiosResponse) => {
    const config: Config = response.config;

    const code = Number(response.data.status);
    if (code === 200) {
        if (config && config.successNotice) {
            ElMessage({
                message: response.data.msg,
                type: 'success'
            });
        }
        return response.data;
    } else {
        let errCode = [402, 403];
        if (errCode.includes(response.data.code)) {
            ElMessage({
                message: response.data.msg,
                type: 'warning'
            });
        }
    }
}, err);

export default instance;
