const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
	{
		src: '/photos/1 Street.jpg',
		width: 454,
		height: 307,
		alt: '1 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/2 Street.jpg',
		width: 782,
		height: 518,
		alt: '2 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/3 Street.jpg',
		width: 417,
		height: 630,
		alt: '3 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/4 Street.jpg',
		width: 1150,
		height: 920,
		alt: '4 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/5 Street.jpg',
		width: 505,
		height: 335,
		alt: '5 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/6 Street.jpg',
		width: 3444,
		height: 2132,
		alt: '6 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/7 Street.jpg',
		width: 512,
		height: 342,
		alt: '7 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/8 Portrait.jpg',
		width: 409,
		height: 512,
		alt: '8 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/9 Portrait.jpg',
		width: 595,
		height: 619,
		alt: '9 Portrait.jpg PLACEHOLDER'
	},

	{
		src: '/photos/11 Portrait.jpg',
		width: 366,
		height: 512,
		alt: '11 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/12 Portrait.jpg',
		width: 339,
		height: 512,
		alt: '12 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/13 Portrait.jpg',
		width: 1013,
		height: 1292,
		alt: '13 Portrait.jpg PLACEHOLDER'
	},

	{
		src: '/photos/15 Aqueduct Racetrack Documentary.jpg',
		width: 763,
		height: 506,
		alt: '15 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},

	{
		src: '/photos/18 Aqueduct Racetrack Documentary.jpg',
		width: 772,
		height: 512,
		alt: '18 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/19 Aqueduct Documentary.jpg',
		width: 518,
		height: 648,
		alt: '19 Aqueduct Documentary.jpg PLACEHOLDER'
	},

	{
		src: '/photos/21 Aqueduct Documentary.jpg',
		width: 1208,
		height: 1190,
		alt: '21 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/23 Aqueduct Documentary.jpg',
		width: 782,
		height: 518,
		alt: '23 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/24 Aqueduct Documentary.jpg',
		width: 647,
		height: 429,
		alt: '24 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/26 Grand Leaners Vintage Store Profile.jpg',
		width: 1114,
		height: 1681,
		alt: '26 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
	}
].map(({ src, alt, width, height }) => ({
	src,
	alt,
	width,
	height,
	srcSet: breakpoints.map((breakpoint) => ({
		src,
		width: breakpoint,
		height: Math.round((height / width) * breakpoint)
	}))
}));

export default photos;
