/**
 * 
 * 基于axios封装的请求模块
 * 
*/

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://conduit.productionready.io'
});

export default instance;