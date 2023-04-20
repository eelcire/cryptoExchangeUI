import kucoinSpotAxiosApi from "../config/kucoin/kucoinAxiosSpotConfig";

// list all trading pairs with their tickers including current price, trading volume, highest and lowest prices in the last 24 hours
export const kucoinAllTickers = () => {
	kucoinSpotAxiosApi.get('/market/allTickers')
		.then(res => {
			console.log(res.data)
		}).catch(err => {
			console.log(err)
		})
}


// /api/v1/market/orderbook/level1
// /api/v1/market/orderbook/level2
// /api/v1/market/orderbook/level3
// /api/v1/market/histories
// /api/v1/market/candles
// Trading endpoints:
// /api/v1/orders
// /api/v1/orders/{orderId}
// /api/v1/orders/{orderId}/matchResults
// /api/v1/orders/active
// /api/v1/orders/{symbol}/openOrders
// /api/v1/orders/{symbol}/recentOrders
// /api/v1/orders/{symbol}/historicalOrders
// User Account endpoints:
// /api/v1/sub/user
// /api/v1/sub/master
// /api/v1/sub/user/info
// /api/v1/sub/user/accounts
// /api/v1/sub/user/account/{currency}
// /api/v1/sub/user/holds
// /api/v1/sub/user/holds/{currency}