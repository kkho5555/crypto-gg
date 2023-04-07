// Price.tsx
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoin, fetchCoinTickers } from "../api";

interface ICoin {
    id: string;
    symbol: string;
    name: string;
    price_usd: number;
}
interface PriceProps {
    coinId: string;
}
function Price({ coinId }: PriceProps) {
    const { isLoading, data } = useQuery<ICoin>(["coin", coinId], () =>
        fetchCoin(coinId)
    );

    return (
        <div>
            {isLoading ? (
                "Loading price..."
            ) : (
                <>
                    <h2>{data?.name}</h2>
                    <p>Current price: ${data?.price_usd.toFixed(2)}</p>
                </>
            )}
        </div>
    );
}

export default Price;
