/* eslint-disable */
import axious from 'axious';

const instance = axious.create({
    baseURL : "https://api.themoviedb.org/3",
    params:{
        api_key: "886dba6c33e264d34c0abd935132f119",
        language: "ko-KR",
    },
});

export default instance;