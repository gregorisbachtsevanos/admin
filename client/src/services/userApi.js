import axios from 'axios';

import { SERVER_URL } from "src/app/data/data"

export class UserService {
    // constructor(fetchService) {
    //     this.fetchService = fetchService
    // }

    getUserInfo = async (userId) => {
        const res = await axios.get(`${SERVER_URL}/dashboard/settings/get-user-information?id=${userId}`)
        // console.log(res.data)
        if (res.status === 200)
            return res.data
    }

    updateUserInfo = async (data, userId) => {
        const res = await axios(`${SERVER_URL}/dashboard/settings/update-user-information?id=${userId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data
        }).then(res => res)

        if (res.status === 200)
            return res.data
    }
}