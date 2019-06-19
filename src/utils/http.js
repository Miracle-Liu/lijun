import http from "@/utils/request";
import { Loading } from 'element-ui';
export var get = (url, params) => {
    return http.get(url, { params }).then(({ data }) => {
        return data;
    })
}

export var post = (url, data) => {
    return http.post(url, data).then(({ data }) => {
        return data;
    })
}

/**
 * 
 * @param {*} options 
 */
export var fetch = (options) => {
    const { headers = {}, url, autoLogin = true, loading = false, loadingText, method = 'get', errShow = true } = options;
    if (loading) {
        var loadingInstance = Loading.service({
            text: loadingText || (method.toLocaleLowerCase() === 'get' ? '加载中...' : '处理中...')
        });
    }
    return http({
        ...options,
        url: url
    }).then(({ data }) => {
        var { code, msg, data } = data
        if (loading) {
            loadingInstance.close();
        }
        if (code == 0) {
            return data
        }
    })
}

