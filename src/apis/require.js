/**
 * Created by Administrator on 2017/3/24.
 */
import axios from 'axios';

export function addUser (data) {
    return axios({
        method: 'POST',
        url: 'http://localhost:4000/user',
        data
    });
}