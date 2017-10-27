const BASE_URL = 'https://mtorbit.herokuapp.com/';
export default class MissionSocialAPI {

    static attemptLogin(username, password) {
        return fetch(BASE_URL+'/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': '1jjdk2300dkk99we98fuhj923r9uh20hfm',
            },
            body: JSON.stringify({username: username, password: password})
        }).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            console.error(error);
        });
    }
}