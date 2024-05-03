export interface Quote {
	sentence: string;
	character: {
		name: string;
		slug: string;
		house: {
			name: string;
			slug: string;
		};
	};
}

export interface NameAndSlug {
	slug: string;
	name: string;
}

export interface House {
	name: string;
	slug: string;
	members: NameAndSlug[];
}

export interface Character {
	name: string;
	slug: string;
	house: NameAndSlug;
	quotes: string[];
}
