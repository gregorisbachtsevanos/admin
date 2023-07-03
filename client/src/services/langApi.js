import axios from 'axios';
import { accessToken, refreshToken } from '../utils/tokenFactory.js';

import { SERVER_URL } from "src/app/data/data"

export class LangService {
    // constructor(fetchService) {
    //     this.fetchService = fetchService
    // }

    getSupportedLang = async () => {
        const res = await axios.get(`${SERVER_URL}/dashboard/settings/get-all-supported-languages`)

        if (res.status === 200)
            return res.data.languagesCode
    }

    addNewLang = async (data) => {
        const res = await axios(`${SERVER_URL}/dashboard/settings/add-new-language`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data
        }).then(res => res)

        if (res.status === 200)
            return res.data
    }

    deleteLang = async (data) => {
        const res = await axios(`${SERVER_URL}/dashboard/settings/delete-language?id=${data}`, {
            method: 'DELETE',
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