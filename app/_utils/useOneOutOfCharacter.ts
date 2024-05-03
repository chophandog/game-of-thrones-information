import useSWR from "swr";
import fetcher from "./fetcher";

const useOneOutOfCharacter = (character: string) => {
	const { data, error, isLoading } = useSWR(`https://api.gameofthronesquotes.xyz/v1/character/${character}`, fetcher);
	return {
		data: data,
		isLoading,
		isError: error,
	};
};

export default useOneOutOfCharacter;
