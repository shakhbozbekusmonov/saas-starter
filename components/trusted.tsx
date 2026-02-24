import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type Logos = {
	image: string
	alt: string
}

const logos: Logos[] = [
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo-bw.png',
		alt: 'Amazon',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo-bw.png',
		alt: 'HubSpot',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo-bw.png',
		alt: 'Walmart',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo-bw.png',
		alt: 'Microsoft',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/evernote-icon-bw.png',
		alt: 'Evernote',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-logo-bw.png',
		alt: 'PayPal',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo-bw.png',
		alt: 'Airbnb',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo-bw.png',
		alt: 'Adobe',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-logo-bw.png',
		alt: 'Shopify',
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo-bw.png',
		alt: 'Huawei',
	},
]

const Trusted = () => {
	return (
		<section className='bg-muted py-8 sm:py-16 lg:py-24'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
					<h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
						<span>A thriving</span>{' '}
						<span className='relative z-1'>
							community of businesses
							<span className='bg-primary absolute bottom-1 left-0 -z-1 h-px w-full'></span>
						</span>{' '}
						<span>driving innovation</span>
					</h2>
					<p className='text-muted-foreground text-xl'>
						Proudly partnering with top brands to drive success.
					</p>
				</div>

				<Card className='py-14 shadow-lg'>
					<CardContent className='px-14'>
						<div className='flex flex-wrap items-center justify-center gap-x-16 gap-y-8 max-sm:flex-col'>
							{logos.map((logo, index) => (
								<Image
									key={index}
									src={logo.image}
									width={100}
									height={30}
									alt={logo.alt}
									className='h-7'
								/>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default Trusted
