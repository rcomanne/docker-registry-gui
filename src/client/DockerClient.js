import axios from "axios";

export function login(address, username, password) {

    // if HTTP(S) is not added, add it
    if (!/^https?:\/\//.test(address)) {
        window.sessionStorage.setItem('address', `https://${address}`);
    } else {
        window.sessionStorage.setItem('address', address);
    }

    window.sessionStorage.setItem('username', username);
    window.sessionStorage.setItem('password', password);

    return checkRegistry();
}

export function checkRegistry() {
    return axios
        .get('/v2/', {
            baseURL: window.sessionStorage.getItem('address'),
            auth: {
                username: window.sessionStorage.getItem('username'),
                password: window.sessionStorage.getItem('password')
            }
        })
        .then()
        .catch(error => {
            console.log(error);
            alert(error);
        })
}

export function listRepositories() {
    return axios
        .get(`/v2/_catalog`, {
            baseURL: window.sessionStorage.getItem('address'),
            auth: {
                username: window.sessionStorage.getItem('username'),
                password: window.sessionStorage.getItem('password')
            }
        })
        .then(response => response.data)
        .catch(error => {alert(error)})
}

export function listTags(repository) {
    return axios
        .get(`/v2/${repository}/tags/list`, {
            baseURL: window.sessionStorage.getItem('address'),
            auth: {
                username: window.sessionStorage.getItem('username'),
                password: window.sessionStorage.getItem('password')
            }
        })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}

// GET digest
// curl -u rcomanne -H 'Accept: application/vnd.docker.distribution.manifest.v2+json' https://docker.rcomanne.nl/v2/homepage-service/manifests/9 | jq -r '.config.digest'

// GET blob
// https://docker.rcomanne.nl/v2/homepage-service/blobs/sha256:10235db69ca63ddc9fe52d47c28c5afa8d38fcafdf4498087aab4c72d19344f3
export function getDigest(repository, tag) {
    return axios
        .get(`/v2/${repository}/manifests/${tag}`, {
            baseURL: sessionStorage.getItem('address'),
            auth: {
                username: window.sessionStorage.getItem('username'),
                password: window.sessionStorage.getItem('password')
            },
            headers: {
                'Accept': 'application/vnd.docker.distribution.manifest.v2+json'
            }
        })
        .then(response => response.data.config.digest)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}

export function getBlob(repository, digest) {
    return axios
        .get(`/v2/${repository}/blobs/${digest}`, {
            baseURL: sessionStorage.getItem('address'),
            auth: {
                username: window.sessionStorage.getItem('username'),
                password: window.sessionStorage.getItem('password')
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
        .get(`/v2/${repository}/manifests/${tag}`, {
            baseURL: sessionStorage.getItem('address'),
            auth: {
                username: window.sessionStorage.getItem('username'),
                password: window.sessionStorage.getItem('password')
            }
        })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            alert(error);
        })
}