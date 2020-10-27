import Axious from 'axios';


export const rootUrl = 'http://localhost/';

export const Http = Axious.create ({
    baseUrl: rootUrl
})
