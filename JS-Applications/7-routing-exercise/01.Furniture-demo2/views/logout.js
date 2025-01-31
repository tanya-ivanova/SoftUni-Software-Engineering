import page from "../node_modules/page/page.mjs";
import { updateInfo } from "../app.js";

export const logout = () => {
    fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': localStorage.token
        }
    });

    localStorage.clear();
    updateInfo();
    page.redirect('/catalog');
}