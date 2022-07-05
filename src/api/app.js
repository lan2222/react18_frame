import request from '../utils/request';

export async function getList(params) {
    return request('https://cnodejs.org/api/v1/topics',{
        method: 'get',
        params,
    })
}