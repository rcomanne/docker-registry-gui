import {logOut} from "./LoginHelper";

export default function Logout() {
    logOut();
    return (
        <h2>Logged out successfully</h2>
    )
}