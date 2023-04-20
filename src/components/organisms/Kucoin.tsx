import React, { useState, useEffect } from 'react';

import kucoinSpotAxiosApi from "../../config/kucoin/kucoinAxiosSpotConfig";
import kucoinFuturesAxiosApi from "../../config/kucoin/kucoinFuturesAxiosConfig";

const Kucoin = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		kucoinSpotAxiosApi.get('/contracts', { params: { status: 'live' } })
			.then((res: any) => setData(res.data))
			.catch((err: any) => console.log(err));
	}, []);

	return (
		<div>
			{data.map((item: any) => (
				<p key={item.symbol}>{item.symbol}</p>
			))}
		</div>
	);
};

export default Kucoin;