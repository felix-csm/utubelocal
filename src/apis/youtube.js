import axios from 'axios';

const KEY = 'AIzaSyBwUVX47Mu_NsHNOoZb_E90Gy8pvh8Oo5c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});