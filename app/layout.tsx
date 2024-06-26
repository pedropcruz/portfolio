import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { HeartIcon } from 'lucide-react'
import Script from 'next/script'

import '@/styles/globals.css'

import { Navigation } from '@/components/Navigation'
import { cn } from '@/lib/utils'

const font = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title:
		'Pedro Cruz - Frontend Developer Portfolio | Web Design & Development Projects',
	description:
		"Explore Pedro Cruz's impressive frontend developer portfolio showcasing a diverse range of web design and development projects. Find inspiration and innovative solutions for your next digital endeavor.",
	metadataBase: new URL('https://pedropcruz.pt'),
	openGraph: {
		images: ['./seo.png'],
	},
}

export const dynamic = 'force-static'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body
				className={cn(
					'bg-primary font-sans text-slate-50 antialiased',
					font.className,
				)}
			>
				<main className="w-full container mx-auto px-8 xl:px-0">
					<Navigation />
					<div className="mt-16">{children}</div>
				</main>
				<footer className="prose-lg w-full my-16 text-gray-300">
					<p className="flex flex-row justify-center items-center">
						Made by me with{' '}
						<HeartIcon className="text-red-400 mx-3 animate-pulse" />©{' '}
						{new Date().getFullYear()}
					</p>
				</footer>
				{process.env.NODE_ENV === 'production' && (
					<Script
						strategy="afterInteractive"
						src="https://pedropcruz-analytics.netlify.app/script.js"
						data-website-id="f455612f-9e06-45f0-a266-e2238d7953b7"
					/>
				)}
			</body>
		</html>
	)
}
