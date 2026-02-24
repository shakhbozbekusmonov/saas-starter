import {
	FacebookIcon,
	GithubIcon,
	InstagramIcon,
	TwitterIcon,
} from 'lucide-react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type TeamMember = {
	image: string
	alt: string
	name: string
	role: string
	description: string
	socialLinks: {
		facebook: string
		twitter: string
		github: string
		instagram: string
	}
}[]

const teamMembers: TeamMember = [
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-1.png',
		alt: 'Phillip Bothman',
		name: 'Phillip Bothman',
		role: 'Founder & CEO',
		description: 'A visionary leader driving innovation and collaboration.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-2.png',
		alt: 'James Kenter',
		name: 'James Kenter',
		role: 'Engineering Manager',
		description: 'Leading teams to build smart, scalable solutions.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-3.png',
		alt: 'Cristofer Kenter',
		name: 'Cristofer Kenter',
		role: 'Product Designer',
		description: 'Crafting intuitive and engaging user experiences.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-4.png',
		alt: 'Alena Lubin',
		name: 'Alena Lubin',
		role: 'Frontend Developer',
		description: 'Bringing designs to life with seamless interfaces.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-8.png',
		alt: 'Jayden Lipshultz',
		name: 'Jayden Lipshultz',
		role: 'Sales Lead',
		description: 'Driving business growth and strong client relationships.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-7.png',
		alt: 'Maria Donin',
		name: 'Maria Donin',
		role: 'Product Manager',
		description: 'Bridging business needs with impactful solutions.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-6.png',
		alt: 'Carter Saris',
		name: 'Carter Saris',
		role: 'UX Researcher',
		description: 'Uncovering insights to enhance user experiences.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
	{
		image:
			'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-5.png',
		alt: 'Ahmad Donin',
		name: 'Ahmad Donin',
		role: 'Customer Success',
		description: 'Ensuring customer satisfaction and long-term success.',
		socialLinks: {
			facebook: '#',
			twitter: '#',
			github: '#',
			instagram: '#',
		},
	},
]

const Team = () => {
	return (
		<section className='py-8 sm:py-16 lg:py-24'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mb-12 text-center sm:mb-16 lg:mb-24'>
					<h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'>
						Get to Know Our Amazing Team
					</h2>
					<p className='text-muted-foreground text-xl'>
						Meet the Passionate Experts Behind Our Success and Learn More About
						Their Roles.
					</p>
				</div>

				{/* Team Members */}
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 xl:grid-cols-4'>
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							className='hover:border-primary overflow-hidden py-0 shadow-none transition-colors duration-300'
						>
							<CardContent className='px-0'>
								<div className='bg-muted pt-10'>
									<img
										src={member.image}
										alt={member.alt}
										className='mx-auto h-60 w-auto'
									/>
								</div>
								<div className='space-y-3 p-6'>
									<CardTitle className='text-lg'>{member.name}</CardTitle>
									<Separator />
									<div className='text-muted-foreground'>
										<p className='mb-1 font-medium'>{member.role}</p>
										<p>{member.description}</p>
									</div>
									<div className='flex gap-3'>
										<a href={member.socialLinks.facebook}>
											<FacebookIcon className='size-5' />
										</a>
										<a href={member.socialLinks.twitter}>
											<TwitterIcon className='size-5' />
										</a>
										<a href={member.socialLinks.github}>
											<GithubIcon className='size-5' />
										</a>
										<a href={member.socialLinks.instagram}>
											<InstagramIcon className='size-5' />
										</a>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Team
