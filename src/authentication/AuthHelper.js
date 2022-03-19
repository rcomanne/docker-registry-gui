
export function isLoggedIn() {
    return window.sessionStorage.getItem('address') !== null;
}

export function logOut() {
    window.sessionStorage.clear();
}