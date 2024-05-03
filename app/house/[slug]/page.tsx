"use client";
import { NameAndSlug } from "@/app/_interface/interface";
import useOneOutOfHouse from "@/app/_utils/useOneOutOfHouse";
import Link from "next/link";
import { useParams } from "next/navigation";

const House = () => {
	const params = useParams<{ slug: string }>();
	const { slug } = params;
	const { data, isError, isLoading } = useOneOutOfHouse(slug);
	const dataHouse = data ? data[0] : {};
	if (isLoading) return <main className="text-center">...Loading...</main>;
	if (isError) return <main className="text-center">...Error...</main>;
	return (
		<main className="text-center flex gap-4 flex-col ">
			<h5 className=" text-6xl font-bold">{dataHouse.name}</h5>

			<div className="text-left  flex flex-col gap-4">
				{dataHouse.members.map((member: NameAndSlug, idx: number) => (
					<Link key={idx} href={`/character/${member.slug}`} className="first:mt-12">
						<p className="text-2xl">
							{idx + 1}. {member.name}
						</p>
					</Link>
				))}
			</div>
		</main>
	);
};

export default House;
