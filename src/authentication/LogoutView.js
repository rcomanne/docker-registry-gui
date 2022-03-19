import {logOut} from "./AuthHelper";

export default function LogoutView() {
    logOut();
    return (
        <h2>Logged out successfully</h2>
    )
}