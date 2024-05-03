"use client";

import { useParams } from "next/navigation";
import useOneOutOfCharacter from "@/app/_utils/useOneOutOfCharacter";
import Link from "next/link";

const Character = () => {
	const params = useParams<{ slug: string }>();
	const { slug } = params;
	const { data, isError, isLoading } = useOneOutOfCharacter(slug);
	const dataCharacter = data ? data[0] : {};
	if (isLoading) return <main className="text-center">...Loading...</main>;
	if (isError) return <main className="text-center">...Error...</main>;
	return (
		<main className="text-center flex gap-4 flex-col ">
			<h5 className=" text-6xl font-bold">{dataCharacter.name}</h5>
			{dataCharacter.house?.slug && (
				<div className="flex justify-center">
					<Link href={`/house/${dataCharacter.house.slug}`}>
						<p className="text-xl">{dataCharacter.house.name}</p>
					</Link>
				</div>
			)}
			<div className="text-left flex flex-col gap-4">
				{dataCharacter.quotes.map((quote: string, idx: number) => (
					<p key={idx} className="text-2xl first:mt-12">
						&quot;{idx + 1}. {quote}&quot;
					</p>
				))}
			</div>
		</main>
	);
};

export default Character;
