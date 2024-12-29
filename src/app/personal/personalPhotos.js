const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const personalPhotos = [
	{
		src: '/personal/architecture1.jpg',
		width: 800,
		height: 533,
		alt: 'architecture1.jpg PLACEHOLDER'
	},
	{
		src: '/personal/band1.jpg',
		width: 800,
		height: 533,
		alt: 'band1.jpg PLACEHOLDER'
	},
	{
		src: '/personal/BTS1.jpg',
		width: 800,
		height: 533,
		alt: 'BTS1.jpg PLACEHOLDER'
	},
	{
		src: '/personal/BTS2.jpg',
		width: 800,
		height: 533,
		alt: 'BTS2.jpg PLACEHOLDER'
	},
	{
		src: '/personal/candid1.jpg',
		width: 800,
		height: 533,
		alt: 'candid1.jpg PLACEHOLDER'
	},
	{
		src: '/personal/candid2.jpg',
		width: 800,
		height: 1013,
		alt: 'candid2.jpg PLACEHOLDER'
	},
	{
		src: '/personal/candid3.jpg',
		width: 800,
		height: 533,
		alt: 'candid3.jpg PLACEHOLDER'
	},
	{
		src: '/personal/candidCheers.jpg',
		width: 600,
		height: 800,
		alt: 'candidCheers.jpg PLACEHOLDER'
	},
	{
		src: '/personal/landscapeBirdsSky.jpg',
		width: 600,
		height: 800,
		alt: 'landscapeBirdsSky.jpg PLACEHOLDER'
	},
	{
		src: '/personal/portrait1.jpg',
		width: 800,
		height: 533,
		alt: 'portrait1.jpg PLACEHOLDER'
	},
	{
		src: '/personal/portait3.jpg',
		width: 584,
		height: 800,
		alt: 'portait3.jpg PLACEHOLDER'
	},
	{
		src: '/personal/skylineLandscape.jpg',
		width: 800,
		height: 533,
		alt: 'skylineLandscape.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street1.jpg',
		width: 800,
		height: 533,
		alt: 'street1.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street2.jpg',
		width: 800,
		height: 533,
		alt: 'street2.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street3.jpg',
		width: 800,
		height: 533,
		alt: 'street3.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street4.jpg',
		width: 800,
		height: 533,
		alt: 'street4.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street5.jpg',
		width: 800,
		height: 533,
		alt: 'street5.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street6.jpg',
		width: 800,
		height: 533,
		alt: 'street6.jpg PLACEHOLDER'
	},
	{
		src: '/personal/street7.jpg',
		width: 800,
		height: 533,
		alt: 'street7.jpg PLACEHOLDER'
	},
	{
		src: '/personal/streetBaloon.jpg',
		width: 800,
		height: 533,
		alt: 'streetBaloon.jpg PLACEHOLDER'
	},
	{
		src: '/personal/streetCat.jpg',
		width: 800,
		height: 533,
		alt: 'streetCat.jpg PLACEHOLDER'
	},
    {
		src: '/personal/streetDog.jpg',
		width: 800,
		height: 533,
		alt: 'streetDog.jpg PLACEHOLDER'
	},
    {
		src: '/personal/streetMotorcycle.jpg',
		width: 800,
		height: 533,
		alt: 'streetMotorcycle.jpg PLACEHOLDER'
	},
    {
		src: '/personal/streetSubway.jpg',
		width: 800,
		height: 533,
		alt: 'streetSubway.jpg PLACEHOLDER'
	},
    {
		src: '/personal/streetSubway2.jpg',
		width: 800,
		height: 533,
		alt: 'streetSubway2.jpg PLACEHOLDER'
	},
    {
		src: '/personal/streetWindow.jpg',
		width: 800,
		height: 533,
		alt: 'streetWindow.jpg PLACEHOLDER'
	},
	
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

export default personalPhotos;
