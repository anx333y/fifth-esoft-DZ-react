export const typeData = [
  {
    "name": "Мульт-сериал",
    "slug": "animated-series"
  },
  {
    "name": "Аниме",
    "slug": "anime"
  },
  {
    "name": "Мультфильм",
    "slug": "cartoon"
  },
  {
    "name": "Фильм",
    "slug": "movie"
  },
  {
    "name": "ТВ-шоу",
    "slug": "tv-series"
  }
];

const types = {
	"movie": "Фильм",
	"tv-series": "ТВ-шоу",
	"animated-series": "Мульт-сериал",
	"cartoon": "Мультфильм",
	"anime": "Аниме",
	"Фильм": "movie",
	"ТВ-шоу": "tv-series",
	"Мульт-сериал": "animated-series",
	"Мультфильм": "cartoon",
	"Аниме": "anime",
};

export const switchTypes = (type) => {
	return (type in types) ? types[type] : type;
};