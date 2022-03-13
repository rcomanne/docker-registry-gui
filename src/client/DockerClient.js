import axios from "axios";

export function listRepositories() {
    return axios
        .get(`${window.Configuration.REGISTRY_URL}/v2/_catalog`, {
            auth: {
                username: process.env.REACT_APP_REGISTRY_USERNAME,
                password: process.env.REACT_APP_REGISTRY_PASSWORD
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

export function getManifest(repository, tag) {
    return axios
        .get(`${window.Configuration.REGISTRY_URL}/v2/${repository}/manifests/${tag}`, {

        })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}