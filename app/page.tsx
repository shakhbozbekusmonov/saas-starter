import CTA from '@/components/cta'
import FAQ from '@/components/faq'
import Features from '@/components/features'
import Hero from '@/components/hero'
import PricingCards from '@/components/pricing'
import TestimonialsComponent from '@/components/testimonials'
import Trusted from '@/components/trusted'

export default function Home() {
	return (
		<main>
			<Hero />
			<Trusted />
			<Features />
			<PricingCards />
			<FAQ />
			<TestimonialsComponent />
			<CTA />
		</main>
	)
}
