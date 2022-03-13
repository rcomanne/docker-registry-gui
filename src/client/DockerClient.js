import axios from "axios";

export function listRepositories() {
    return axios
        .get(`${window.Configuration.REGISTRY_URL}/v2/_catalog`, {
            auth: {
                username: window.Configuration.REGISTRY_USERNAME,
                password: window.Configuration.REGISTRY_PASSWORD
            }
        })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}

export function listTags(repository) {
    return axios
        .get(`${window.Configuration.REGISTRY_URL}/v2/${repository}/tags/list`, {
            auth: {
                username: window.Configuration.REGISTRY_USERNAME,
                password: window.Configuration.REGISTRY_PASSWORD
            }
        })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}