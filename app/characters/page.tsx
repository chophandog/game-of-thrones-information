"use client";

import Link from "next/link";
import { Character } from "../_interface/interface";
import useAllCharacters from "../_utils/useAllCharacters";

const Characters = () => {
	const { data, isError, isLoading } = useAllCharacters();
	if (isLoading) return <main className="text-center">...Loading...</main>;
	if (isError) return <main className="text-center">...Error...</main>;
	return (
		<main className="text-center flex gap-4 flex-col ">
			<h5 className=" text-6xl font-bold">All Characters</h5>
			{data.map((character: Character, idx: number) => (
				<div className="text-left text-2xl" key={character.slug}>
					<Link href={`/character/${character.slug}`}>
						<p>
							{idx + 1}. {character.name}
						</p>
					</Link>
					{character.quotes.map((quo, id: number) => (
						<p key={id} className="pl-8">
							{id + 1}. {quo}
						</p>
					))}
				</div>
			))}
		</main>
	);
};

export default Characters;
