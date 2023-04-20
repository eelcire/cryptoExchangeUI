import axios from 'axios';
import CryptoJS from 'crypto-js';

import { kucoinBaseUrl } from '../../constants/kucoinConstants';

const kucoinSpotAxiosApi = axios.create({
	baseURL: kucoinBaseUrl,
	headers: {
		'Content-Type': 'application/json',
		'KC-API-KEY': process.env.REACT_APP_KUCOIN_API_KEY,
	},
});

kucoinSpotAxiosApi.interceptors.request.use((config) => {
	const timestamp = Date.now();
	const message = `${timestamp}${config.method}${config.url}${JSON.stringify(config.data || '')}`;
	const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(message, process.env.REACT_APP_KUCOIN_API_SECRET!));

	config.headers['KC-API-TIMESTAMP'] = timestamp;
	config.headers['KC-API-SIGN'] = signature;
	config.headers['KC-API-PASSPHRASE'] = process.env.REACT_APP_KUCOIN_PASSPHRASE;

	return config;
});

export default kucoinSpotAxiosApi;