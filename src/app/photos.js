const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
	{
		src: '/photos/1 Street.jpg',
		width: 1818,
		height: 1229,
		alt: '1 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/2 Street.jpg',
		width: 3130,
		height: 2075,
		alt: '2 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/3 Street.jpg',
		width: 1671,
		height: 2520,
		alt: '3 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/4 Street.jpg',
		width: 4600,
		height: 3680,
		alt: '4 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/5 Street.jpg',
		width: 2022,
		height: 1342,
		alt: '5 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/6 Street.jpg',
		width: 13776,
		height: 8530,
		alt: '6 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/7 Street.jpg',
		width: 2048,
		height: 1369,
		alt: '7 Street.jpg PLACEHOLDER'
	},
	{
		src: '/photos/8 Portrait.jpg',
		width: 1638,
		height: 2048,
		alt: '8 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/9 Portrait.jpg',
		width: 2383,
		height: 2479,
		alt: '9 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/10 Portrait.jpg',
		width: 1671,
		height: 2048,
		alt: '10 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/11 Portrait.jpg',
		width: 1464,
		height: 2048,
		alt: '11 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/12 Portrait.jpg',
		width: 1358,
		height: 2048,
		alt: '12 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/13 Portrait.jpg',
		width: 4055,
		height: 5168,
		alt: '13 Portrait.jpg PLACEHOLDER'
	},
	{
		src: '/photos/14 Aqueduct Racetrack Documentary.jpg',
		width: 1839,
		height: 2774,
		alt: '14 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/15 Aqueduct Racetrack Documentary.jpg',
		width: 3053,
		height: 2024,
		alt: '15 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/16 Aqueduct Racetrack Documentary.jpg',
		width: 2048,
		height: 1358,
		alt: '16 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/17 Aqueduct Documentary.jpg',
		width: 3130,
		height: 2075,
		alt: '17 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/18 Aqueduct Racetrack Documentary.jpg',
		width: 3088,
		height: 2048,
		alt: '18 Aqueduct Racetrack Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/19 Aqueduct Documentary.jpg',
		width: 2075,
		height: 2594,
		alt: '19 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/20 Aqueduct Documentary.jpg',
		width: 4832,
		height: 4760,
		alt: '20 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/21 Aqueduct Documentary.jpg',
		width: 4832,
		height: 4760,
		alt: '21 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/22 Aqueduct Documentary.jpg',
		width: 3927,
		height: 3927,
		alt: '22 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/23 Aqueduct Documentary.jpg',
		width: 3130,
		height: 2075,
		alt: '23 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/24 Aqueduct Documentary.jpg',
		width: 2590,
		height: 1717,
		alt: '24 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/25 Aqueduct Documentary.jpg',
		width: 3130,
		height: 2075,
		alt: '25 Aqueduct Documentary.jpg PLACEHOLDER'
	},
	{
		src: '/photos/26 Grand Leaners Vintage Store Profile.jpg',
		width: 4459,
		height: 6725,
		alt: '26 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
	},
	{
		src: '/photos/27 Grand Leaners Vintage Store Profile.jpg',
		width: 4492,
		height: 6738,
		alt: '27 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
	},
	{
		src: '/photos/28 Grand Leaners Vintage Store Profile.jpg',
		width: 1365,
		height: 2048,
		alt: '28 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
	},
	{
		src: '/photos/29 Grand Leaners Vintage Store Profile.jpg',
		width: 1358,
		height: 2048,
		alt: '29 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
	},
	{
		src: '/photos/30 Grand Leaners Vintage Store Profile.jpg',
		width: 6738,
		height: 4492,
		alt: '30 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
	},
	{
		src: '/photos/31 Grand Leaners Vintage Store Profile.jpg',
		width: 2048,
		height: 1365
        ,
		alt: '31 Grand Leaners Vintage Store Profile.jpg PLACEHOLDER'
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