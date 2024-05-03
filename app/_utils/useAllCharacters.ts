import useSWR from "swr";
import fetcher from "./fetcher";

const useAllCharacters = () => {
	const { data, error, isLoading } = useSWR(`https://api.gameofthronesquotes.xyz/v1/characters`, fetcher);
	return {
		data: data,
		isLoading,
		isError: error,
	};
};

export default useAllCharacters;
