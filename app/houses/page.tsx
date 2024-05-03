"use client";

import Link from "next/link";
import useAllHouses from "../_utils/useAllHouses";
import { House } from "../_interface/interface";

const Houses = () => {
	const { data, isError, isLoading } = useAllHouses();
	if (isLoading) return <main className="text-center">...Loading...</main>;
	if (isError) return <main className="text-center">...Error...</main>;
	return (
		<main className="text-center flex gap-4 flex-col ">
			<h5 className=" text-6xl font-bold">All Great Houses</h5>
			{data.map((house: House, idx: number) => (
				<div className="text-left text-2xl" key={house.slug}>
					<Link href={`/house/${house.slug}`}>
						<p>
							{idx + 1}. {house.name}
						</p>
					</Link>
					{house.members.map((mem, id: number) => (
						<Link key={mem.slug} href={`/character/${mem.slug}`} className="ml-8">
							<p>
								{id + 1}. {mem.name}
							</p>
						</Link>
					))}
				</div>
			))}
		</main>
	);
};

export default Houses;
