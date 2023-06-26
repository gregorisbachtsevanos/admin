import axios from 'axios';

import { SERVER_URL } from "src/app/data/data"

export class AuthService {
    // constructor(fetchService) {
    //     this.fetchService = fetchService
    // }

    register = async (data) => {
        const res = await axios(`${SERVER_URL}/admin/authenticate-user-signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data
        }).then(res => res)
        console.log(res.data)
        if (res.status === 201)
            return res.data
    }

    login = async () => {
        const res = await axios.post(`${SERVER_URL}/admin/authenticate-user-login`)
        console.log(res.data)
        if (res.status === 200)
            return res.data
    }

    refresh = async () => {
        const res = await axios.get(`${SERVER_URL}/admin/authenticate-user-refresh`)

        if (res.status === 200)
            return res.data
    }

    logout = async () => {
        const res = await axios.get(`${SERVER_URL}/admin/authenticate-user-logout`)

        if (res.status === 200)
            return res.data
    }

}