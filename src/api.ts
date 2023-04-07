const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
        response.json()
    );
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json()
    );
}

export function fetchCoin(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`)
        .then((response) => response.json())
        .then((data) => {
            return {
                id: data.id,
                symbol: data.symbol,
                name: data.name,
                price_usd: parseFloat(data.quotes.USD.price),
            };
        });
}

export function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 23;
    return fetch(
        `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    ).then((response) => response.json());
}
