import axios from "axios";

class AuthenticationService {
    isAuthenticated = false;
    user = null;
    token = "";


    constructor() {
        let auth = window.localStorage.getItem('auth')
        if (auth) {
            auth = JSON.parse(auth);
            this.setData(auth);
        }
    }

    async signIn(request) {
        let response = await axios.post('http://localhost:8000/apis/userlogin', request);
        if (response.data.success) {
            this.setData(response.data.data);
            window.localStorage.setItem('auth', JSON.stringify(response.data.data));
        } else {
            alert(response.data.message);
        }
        return this.isAuthenticated;
    }

    setData(auth) {
        this.isAuthenticated = true;
        this.user = auth.user;
        this.token = auth.accessToken
    }

    async logout() {
        this.isAuthenticated = false;
        this.token = '';
        this.user = null;
    }

}

export default new AuthenticationService();