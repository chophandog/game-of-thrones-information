import useSWR from "swr";
import fetcher from "./fetcher";

const useRandomQuote = (number?: Number) => {
	const { data, error, isLoading } = useSWR(
		`https://api.gameofthronesquotes.xyz/v1/random${number ? `/${number}` : ""}`,
		fetcher
	);
	return {
		data: data,
		isLoading,
		isError: error,
	};
};

export default useRandomQuote;
