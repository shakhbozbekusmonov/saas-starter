import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

type FAQs = {
	question: string
	answer: string
}[]

const faqItems: FAQs = [
	{
		question: 'Do you charge for each upgrade?',
		answer:
			'Some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.',
	},
	{
		question: 'Do I need to purchase a license for each website?',
		answer:
			'Yes, you need to purchase a separate license for each website where you plan to use our components. Each license is tied to a single domain and its subdomains. This ensures proper licensing compliance and helps us maintain and improve our products for all users.',
	},
	{
		question: 'What is regular license?',
		answer:
			'A regular license grants you the right to use our components on a single website or project. It includes access to all basic features, documentation, and standard support. This license is perfect for individual developers or small businesses working on a single project.',
	},
	{
		question: 'What is extended license?',
		answer:
			'An extended license provides additional rights and features beyond the regular license. It includes usage rights for multiple websites, priority support, access to premium components, and the ability to use components in commercial projects that you sell to end customers. Perfect for agencies and large enterprises.',
	},
]

const FAQ = () => {
	return (
		<section className='py-8 sm:py-16 lg:py-24'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				{/* FAQ Header */}
				<div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
					<h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
						Need Help? We&apos;ve Got Answers
					</h2>
					<p className='text-muted-foreground text-xl'>
						Explore Our Most Commonly Asked Questions and Find the Information
						You Need.
					</p>
				</div>

				<Accordion
					type='single'
					collapsible
					className='w-full'
					defaultValue='item-1'
				>
					{faqItems.map((item, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger className='text-lg'>
								{item.question}
							</AccordionTrigger>
							<AccordionContent className='text-muted-foreground'>
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}

export default FAQ
