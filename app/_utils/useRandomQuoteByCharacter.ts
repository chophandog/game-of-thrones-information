import useSWR from "swr";
import fetcher from "./fetcher";

const useRandomQuoteByCharacter = (character: string, number?: Number) => {
	const { data, error, isLoading } = useSWR(
		`https://api.gameofthronesquotes.xyz/v1/author/${character}${number ? `/${number}` : ""}`,
		fetcher
	);
	return {
		data: data,
		isLoading,
		isError: error,
	};
};

export default useRandomQuoteByCharacter;
