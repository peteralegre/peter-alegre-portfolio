const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
	{
		src: '/photos/1 Street.jpg',
		width: 1080,
		height: 780,
		alt: '1 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/2 Street.jpg',
		width: 1080,
		height: 1620,
		alt: '2 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/3 Street.jpg',
		width: 1080,
		height: 720,
		alt: '3 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/4 Street.jpg',
		width: 1080,
		height: 720,
		alt: '4 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/5 Street.jpg',
		width: 1080,
		height: 1620,
		alt: '5 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/6 Street.jpg',
		width: 1080,
		height: 607,
		alt: '6 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/7 Street.jpg',
		width: 1080,
		height: 608,
		alt: '7 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/8 Portrait.jpg',
		width: 1080,
		height: 720,
		alt: '8 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/9 Portrait.jpg',
		width: 1080,
		height: 1549,
		alt: '9 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/10 Portrait.jpg',
		width: 1080,
		height: 720,
		alt: '10 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/11 Portrait.jpg',
		width: 1080,
		height: 694,
		alt: '11 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/12 Portrait.jpg',
		width: 1080,
		height: 1620,
		alt: '12 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/13 Portrait.jpg',
		width: 1080,
		height: 720,
		alt: '13 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/14 Aqueduct Racetrack Documentary.jpg',
		width: 1080,
		height: 1440,
		alt: '14 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/15 Aqueduct Racetrack Documentary.jpg',
		width: 1080,
		height: 1620,
		alt: '15 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/16 Aqueduct Racetrack Documentary.jpg',
		width: 1080,
		height: 810,
		alt: '16 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/17 Aqueduct Documentary.jpg',
		width: 1080,
		height: 595,
		alt: '17 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/18 Aqueduct Racetrack Documentary.jpg',
		width: 1080,
		height: 160,
		alt: '18 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/19 Aqueduct Documentary.jpg',
		width: 1080,
		height: 810,
		alt: '19 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/20 Aqueduct Documentary.jpg',
		width: 1080,
		height: 720,
		alt: '20 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/21 Aqueduct Documentary.jpg',
		width: 1080,
		height: 1440,
		alt: '21 Aqueduct Documentary.jpg PLACEHOLDER'
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
