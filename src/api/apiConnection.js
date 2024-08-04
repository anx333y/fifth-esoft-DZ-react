const url = 'https://api.kinopoisk.dev/v1.4/';
const options = {
  method: 'GET',
  headers: {
		accept: 'application/json', 
		'X-API-KEY': 'ANKVSJ4-MZZ4D35-HNGM1RZ-W46S8VC'}
};

export { url, options };


export const parseNames = (arr) => {
	return arr.map(item => item.name)
};

export const parseActors = (persons) => {
	return parseNames(persons.filter(person => person.enProfession === 'actor'))
};

export const fetchPoster = async (url) => {
	try {
		const response = await fetch(url);
		return response;
	} catch (err) {
		return;
	}
};