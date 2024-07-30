// apiClient.js
import axios from 'axios';
import Cookie from 'js-cookie';

const authorizationbase = 'Authorization';
const TSDbackend = 'Taiwansmartdriving';


const apiClient = axios.create({
    baseURL: 'https://api.smartbustw.com/',
});
export const AuthenticateLogin = async () => {
    const Authorizationdata = {
        "email": "twsc20240402@gmail.com",
        "password": "TWSC@2024"
    }
    const response = await apiClient.post(`${authorizationbase}/AuthenticateControll/GetToken`, Authorizationdata);

    if (response.data.status) {
        const token = response.data.message;
        // 使用 Cookie.set 方法來儲存 token 和它的過期時間
        Cookie.set('token', token, { expires: 6 });  // 假設 token 的生存時間為 6 小時
    }
};
const checkToken = async () => {
    let token = Cookie.get('token');
    let expiry = Cookie.get('expiry');

    if ((token === undefined || expiry === undefined) || (!token || (expiry && new Date(expiry) < new Date()))) {
        await AuthenticateLogin();
        token = Cookie.get('token');
        if (!token) {
            throw new Error('Failed to refresh token');
        }
    }
    return token;
};
export const createResource = async (resource, data) => {
    const token = await checkToken();
    const headers = { Authorization: `Bearer ${token}` };
    const response = await apiClient.post(`${TSDbackend}/${resource}`, data, { headers });
    return response.data;
};

export const readResource = async (resource, id) => {
    const token = await checkToken();
    const headers = { Authorization: `Bearer ${token}` };
    const response = await apiClient.get(`${TSDbackend}/${resource}/${id}`, { headers });
    return response.data;
};

export const readResourceList = async (resource) => {
    const token = await checkToken();
    const headers = { Authorization: `Bearer ${token}` };
    const response = await apiClient.get(`${TSDbackend}/${resource}`, { headers });
    return response.data;
};

export const updateResource = async (resource, id, data) => {
    const token = await checkToken();
    const headers = { Authorization: `Bearer ${token}` };
    const response = await apiClient.put(`${TSDbackend}/${resource}/${id}`, data, { headers });
    return response.data;
};

export const deleteResource = async (resource, id) => {
    const token = await checkToken();
    const headers = { Authorization: `Bearer ${token}` };
    const response = await apiClient.delete(`${TSDbackend}/${resource}/${id}`, { headers });
    return response.data;
};