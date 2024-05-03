import useSWR from "swr";
import fetcher from "./fetcher";

const useAllHouses = () => {
	const { data, error, isLoading } = useSWR(`https://api.gameofthronesquotes.xyz/v1/houses`, fetcher);
	return {
		data: data,
		isLoading,
		isError: error,
	};
};

export default useAllHouses;
