import axios from 'axios';
import CryptoJS from 'crypto-js';

import { kucoinFuturesBaseUrl } from '../../constants/kucoinConstants';

const kucoinFuturesAxiosApi = axios.create({
	baseURL: kucoinFuturesBaseUrl,
	headers: {
		'Content-Type': 'application/json',
		'KC-API-KEY': process.env.REACT_APP_KUCOIN_FUTURES_API_KEY,
	},
});

kucoinFuturesAxiosApi.interceptors.request.use((config) => {
	const timestamp = Date.now();
	const message = `${timestamp}${config.method}${config.url}${JSON.stringify(config.data || '')}`;
	const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(message, process.env.REACT_APP_KUCOIN_FUTURES_API_SECRET!));

	config.headers['KC-API-TIMESTAMP'] = timestamp;
	config.headers['KC-API-SIGN'] = signature;
	config.headers['KC-API-PASSPHRASE'] = process.env.REACT_APP_KUCOIN_FUTURES_PASSPHRASE;

	return config;
});

export default kucoinFuturesAxiosApi;