import useSWR from "swr";
import fetcher from "./fetcher";

const useOneOutOfHouse = (house: string) => {
	const { data, error, isLoading } = useSWR(`https://api.gameofthronesquotes.xyz/v1/house/${house}`, fetcher);
	return {
		data: data,
		isLoading,
		isError: error,
	};
};

export default useOneOutOfHouse;
