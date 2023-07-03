import axios from 'axios';
import { accessToken, refreshToken } from 'src/utils/tokenFactory.js';

import { SERVER_URL } from "src/app/data/data"

export class EmailService {
    // constructor(fetchService) {
    //     this.fetchService = fetchService
    // }

    getAllEmails = async () => {
        const res = await axios.get(`${SERVER_URL}/emails/get-all-emails`)

        if (res.status === 200)
            return res.data
    }

    getReadEmails = async () => {
        const res = await axios.get(`${SERVER_URL}/emails/get-read-emails`)

        if (res.status === 200)
            return res.data
    }
    getUnreadEmails = async () => {
        const res = await axios.get(`${SERVER_URL}/emails/get-unread-emails`)

        if (res.status === 200)
            return res.data
    }

    addNewEmailMessage = async (data) => {
        const res = await axios(`${SERVER_URL}/site/send-email-message`, {
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

    deleteEmail = async (data) => {
        const res = await axios(`${SERVER_URL}/emails/delete-email-message?id={}`, {
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