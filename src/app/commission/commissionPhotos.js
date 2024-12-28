const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const commissionPhotos = [
	{
		src: '/commission/party1.jpg',
		width: 800,
		height: 533,
		alt: 'party1.jpg PLACEHOLDER'
	},
	{
		src: '/commission/party2.jpg',
		width: 800,
		height: 533,
		alt: 'party2.jpg PLACEHOLDER'
	},
	{
		src: '/commission/party3.jpg',
		width: 800,
		height: 533,
		alt: 'party3.jpg PLACEHOLDER'
	},
	{
		src: '/commission/party4.jpg',
		width: 800,
		height: 533,
		alt: 'party4.jpg PLACEHOLDER'
	},
	{
		src: '/commission/party5.jpg',
		width: 800,
		height: 533,
		alt: 'party5.jpg PLACEHOLDER'
	},
	{
		src: '/commission/polaroidNico.jpg',
		width: 800,
		height: 1013,
		alt: 'polaroidNico.jpg PLACEHOLDER'
	},
	{
		src: '/commission/street1.jpg',
		width: 800,
		height: 533,
		alt: 'street1.jpg PLACEHOLDER'
	},
	{
		src: '/commission/studio1.jpg',
		width: 600,
		height: 800,
		alt: 'studio1.jpg PLACEHOLDER'
	},
	{
		src: '/commission/studio2.jpg',
		width: 600,
		height: 800,
		alt: 'studio2.jpg PLACEHOLDER'
	},
	{
		src: '/commission/studio3.jpg',
		width: 800,
		height: 533,
		alt: 'studio3.jpg PLACEHOLDER'
	},
	{
		src: '/commission/studio4.jpg',
		width: 584,
		height: 800,
		alt: 'studio4.jpg PLACEHOLDER'
	},
	{
		src: '/commission/wedding1.jpg',
		width: 800,
		height: 533,
		alt: 'wedding1.jpg PLACEHOLDER'
	},
	{
		src: '/commission/wedding2.jpg',
		width: 800,
		height: 533,
		alt: 'wedding2.jpg PLACEHOLDER'
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

export default commissionPhotos;
