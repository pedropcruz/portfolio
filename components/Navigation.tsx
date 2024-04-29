'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { navLinks } from '@/lib/navlinks'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

export const Navigation = () => {
	const [show, setShow] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const controlNavbar = () => {
			if (window.scrollY > lastScrollY) {
				setShow(false)
			} else {
				setShow(true)
			}

			setLastScrollY(window.scrollY)
		}

		window.addEventListener('scroll', controlNavbar)

		return () => window.removeEventListener('scroll', controlNavbar)
	}, [lastScrollY])

	return (
		<NavigationMenu
			className={`p-12 py-6 transition duration-200 m-0 w-full md:mx-auto max-w-none flex justify-between bg-[#000] rounded-2xl top-8 sticky left-0 right-0 z-10 ${
				show ? 'ease-in' : 'ease-out opacity-0'
			}`}
		>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Image
						src="/logo_white.png"
						alt="pedropcruz logo"
						loading="lazy"
						width={120}
						height={41}
					/>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuList>
				{navLinks.map(({ link, name }, key) => (
					<NavigationMenuItem key={key}>
						<Link href={link} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
