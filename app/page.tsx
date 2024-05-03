"use client";

import Link from "next/link";
import useRandomQuote from "./_utils/useRandomQuote";

export default function Home() {
	const { data, isLoading, isError } = useRandomQuote();
	if (isLoading) return <main className="text-center">...Loading...</main>;
	if (isError) return <main className="text-center">...Error...</main>;
	return (
		<main className="text-center flex gap-4 flex-col ">
			<div className="flex justify-center">
				<Link href={`/character/${data.character.slug}`}>
					<h5 className=" text-6xl font-bold">{data.character.name}</h5>
				</Link>
			</div>
			{data.character.house?.slug && (
				<div className="flex justify-center">
					<Link href={`/house/${data.character.house.slug}`}>
						<p className="text-xl">{data.character.house.name}</p>
					</Link>
				</div>
			)}
			<p className="text-2xl mt-12">&quot;{data.sentence}&quot;</p>
			<div className="flex justify-around text-2xl mt-60 w-full">
				<Link href={`/houses`}>
					<p>See All Great Houses</p>
				</Link>
				<Link href={`/characters`}>
					<p>See All Characters</p>
				</Link>
			</div>
		</main>
	);
}
