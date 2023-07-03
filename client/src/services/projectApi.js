import axios from "axios"
import { SERVER_URL } from "src/app/data/data"
import { accessToken, refreshToken } from '../utils/tokenFactory.js';

export class ProjectService {
    // constructor(fetchService) {
    //     this.fetchService = fetchService
    // }

    fetchAllProjects = async () => {
        const res = await axios.get(`${SERVER_URL}/dashboard/projects/get-all-projects`, {
            headers: {
                // 'Authorization': `Bearer ${accessToken}`
            },
        })
        if (res.status === 200)
            return res.data
    }

    renderProject = async () => {
        const res = await axios.get(`${SERVER_URL}/render-projects`)

        if (res.status === 200)
            return res.data.languagesCode
    }

    fetchAllOfflineProjects = async () => {
        const res = await axios.get(`${SERVER_URL}/dashboard/projects/get-offline-projects`)

        if (res.status === 200)
            return res.data.languagesCode
    }

    fetchAllOnlineProjects = async () => {
        const res = await axios.get(`${SERVER_URL}/dashboard/projects/get-online-projects`)

        if (res.status === 200)
            return res.data.languagesCode
    }

    addNewProject = async (data) => {
        const res = await axios(`${SERVER_URL}/dashboard/projects/add-new-project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data
        }).then(res => res)
        console.log(res.data)
        if (res.status === 200)
            return res.data
    }

    updateProject = async (data) => {
        const res = await axios(`${SERVER_URL}/dashboard/projects/edit-project?id=${data}`, {
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

    updateProjectStatus = async (data) => {
        console.log(data)
        const res = await axios(`${SERVER_URL}/dashboard/projects/update-project-status?id=${data}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(res => res).catch(er => console.error(er))

        if (res?.status === 200)
            return res.data
    }

    deleteProject = async (data) => {
        const res = await axios(`${SERVER_URL}/dashboard/projects/delete-project?id=${data}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then(res => res)

        if (res.status === 200)
            return res.data
    }

}