import { HeroVideo } from './hero-video'

const Hero = () => {
	return (
		<section className='bg-muted py-8 sm:py-16 lg:py-24 px-5'>
			<div className='container mx-auto'>
				<h1 className='text-4xl font-bold mb-4 text-center'>Welcome to Our Store</h1>
				<p className='max-w-lg mx-auto text-base text-muted-foreground mb-6 text-center'>
					Discover a world of quality products and exceptional service. Shop
					with us today and experience the difference!
				</p>

				<div className='flex items-center gap-4'>
					<HeroVideo />
				</div>
			</div>
		</section>
	)
}

export default Hero
