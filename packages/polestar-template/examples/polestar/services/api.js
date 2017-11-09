import axios from 'axios';

export function fetchPostsApi(reddit) {
    // console.log(`${reddit}`);
    return axios.get(`http://www.reddit.com/r/${reddit}.json`)
            .then( response => response.data.data.children.map(child => child.data) )
            .catch( error => { console.log(error) } );
}