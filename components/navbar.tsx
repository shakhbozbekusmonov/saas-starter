const navigationData = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Products',
		href: '/products',
	},
	{
		title: 'About Us',
		href: '/about',
	},
	{
		title: 'Contacts',
		href: '/contacts',
	},
]

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Apple, MenuIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<header className='bg-background sticky top-0 z-50'>
			<div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
				<div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
					<Link href='/' className='hover:text-primary max-md:hidden'>
						Home
					</Link>
					<Link href='/products' className='hover:text-primary max-md:hidden'>
						Products
					</Link>
					<Link href='/' className='hover:text-primary'>
						<Apple className='text-foreground gap-3' />
					</Link>
					<Link href='/about' className='hover:text-primary max-md:hidden'>
						About Us
					</Link>
					<Link href='/contacts' className='hover:text-primary max-md:hidden'>
						Contacts
					</Link>
				</div>

				<div className='flex items-center gap-6'>
					<Button variant='ghost' size='icon'>
						<SearchIcon />
						<span className='sr-only'>Search</span>
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger className='md:hidden' asChild>
							<Button variant='outline' size='icon'>
								<MenuIcon />
								<span className='sr-only'>Menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-56' align='end'>
							<DropdownMenuGroup>
								{navigationData.map((item, index) => (
									<DropdownMenuItem key={index}>
										<Link href={item.href}>{item.title}</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	)
}

export default Navbar
