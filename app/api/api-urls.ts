const ELECTION_API = 'api/election';
const CODE_TABLE_API = 'api/codeTable';
const FACTION_API = 'api/faction';
const PUBLISHER_API = 'api/publisher';

export const GET_ACTIVE_LOCAL_ELECTIONS = `${ELECTION_API}/activeLocalElections`;

export const GET_COUNTRIES = `${CODE_TABLE_API}/countries`;
export const GET_CITIES = `${CODE_TABLE_API}/cities`;
export const GET_CODE_ENTITY_LIST = `${CODE_TABLE_API}/codeTable`;

export const GET_FACTION_CITIES = `${FACTION_API}/cities`;
export const GET_FACTIONS = `${FACTION_API}/factions`;

export const LOCAL_PUBLICATION_SEARCH = `${PUBLISHER_API}/localPublicationSearch`;
