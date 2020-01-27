import axios from 'axios';
import Log from 'lib/log'
import Store from 'lib/store'

var token = null;

var Iridium = {
    login: async function (username, password) {
        try {
            let response = await axios.post(
                'http://localhost:3000/login',
                {
                    username: `${username}`,
                    password: `${password}`
                },
                {
                    withCredentials: true
                }
            );

            Store.activeSession.set(true);
            
            Log.debug(`Login succeeded for ${username}`);
            return null;
        } catch (error) {
            Log.error('Login threw an error');
            
            if (error.response && error.response.data) {
                return error.response.data;
            }

            return error;
        }
    },

    logout: async function () {
        try {
            let response = await axios.post(
                'http://localhost:3000/logout',
                null,
                {
                    withCredentials: true
                }
            );

            Store.activeSession.set(false);
            
            Log.debug(`Logout succeeded`);
        } catch (error) {

            Log.error('Logout threw an error', error)
        }
    }
};

export default Iridium