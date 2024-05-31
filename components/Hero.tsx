import Image from 'next/image'
import Link from 'next/link'

import Marquee from 'react-fast-marquee'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { socialLinks } from '@/lib/socialLinks'
import { technologies } from '@/lib/technologies'
import { FileDownIcon, MailIcon } from 'lucide-react'

import bgJPG from '@/public/bg.jpeg'

export const Hero = () => {
	return (
		<>
			<div className="grid auto-rows grid-cols-12 gap-4 gap-x-2 gap-y-2 mt-16 mb-2">
				<div className="relative overflow-hidden justify-center flex flex-col col-span-12 lg:col-span-7 bg-[#1b1b1b] p-12 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl max-mdd:max-w-none max-md:p-8 text-white">
					<div className="flex flex-col w-full md:flex-row items-center">
						<Avatar className="h-12 w-12">
							<AvatarImage
								className="object-cover"
								src="/me.png"
								alt="@pedropcruz"
							/>
							<AvatarFallback>PC</AvatarFallback>
						</Avatar>
						<div className="prose-sm prose-headings:font-bold flex flex-col ml-4 items-center md:items-start">
							<h3 className="mb-0">Hi, I'm Pedro Cruz.</h3>
							<p className="mt-0 text-gray-400">Frontend developer</p>
						</div>
						<div className="flex flex-row mt-8 sm:mt-0 md:ml-auto md:mr-0 mx-auto items-center">
							{socialLinks.map(({ alias, Icon, link }, key) => (
								<Button variant="ghost" key={key} asChild className="mx-1 p-2">
									<Link
										href={link}
										data-umami-event={`${alias}-click`}
										target="_blank"
										aria-label={`${alias} pedropcruz`}
									>
										<Icon />
									</Link>
								</Button>
							))}
						</div>
					</div>
					<div className="flex flex-col prose-headings:lg:text-7xl prose-headings:text-white prose-p:text-gray-400 prose-p:mt-0 max-w-none prose my-8 text-center sm:text-left">
						<h1>I build things for the web.</h1>
						<p>
							Love minimal and brutalism design. Turning ideas into real life
							products is my calling. Love life, nature and family.
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden row-span-1 justify-center flex flex-col col-span-12 h-80 lg:h-auto lg:col-span-5 gap-x-8 gap-y-8 bg-meAvatar bg-cover bg-center bg-opacity-60 rounded-tr-3xl rounded-tl-lg rounded-br-lg rounded-bl-3xl max-mdd:max-w-none max-md:p-8 text-primary"></div>
				<div className="relative overflow-hidden row-span-1 justify-center flex flex-col col-span-12 lg:col-span-4 bg-[#1b1b1b] p-12 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl max-mdd:max-w-none max-md:p-8 text-white">
					<div className="relative prose-sm md:prose-2xl text-center">
						<Image
							className="h-full w-full m-auto px-4 absolute top-0 left-0 right-0 bottom-0 opacity-5 z-0"
							src="/logo-white.svg"
							width={456}
							height={548}
							alt="@pedropcruz"
							loading="lazy"
						/>
						<h2 className="min-w-full p-2 font-bold text-center text-transparent rounded bg-clip-text bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1b1b1b] to-secondary m-0">
							Currently working at
						</h2>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<h1 className="relative block text-slate-50 text-center mb-0 font-bold">
										VWDS
									</h1>
								</TooltipTrigger>
								<TooltipContent side="bottom">
									<p className="my-0">Volkswagen Digital Solutions</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
				<div className="relative overflow-hidden row-span-1 justify-center flex flex-col col-span-12 lg:col-span-4 bg-[#1b1b1b] p-12 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl max-mdd:max-w-none max-md:p-8 text-white">
					<div className="prose text-center prose-p:text-white prose-p:font-bold">
						<Link
							href="/PedroCruz_CV_30-05-2024.pdf"
							target="_blank"
							className="flex justify-center items-center"
						>
							<p className="m-0">Download CV</p>
							<Button
								data-umami-event="download-cv"
								variant="link"
								className="animate-bounce p-2 text-white"
								type="button"
								aria-label="Download CV"
							>
								<FileDownIcon />
							</Button>
						</Link>
					</div>
				</div>
				<div className="relative overflow-hidden row-span-1 justify-center flex flex-col col-span-12 lg:col-span-4 bg-[#1b1b1b] p-12 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl max-mdd:max-w-none max-md:p-8 text-white">
					<div className="prose prose-xl text-slate-50 text-center max-w-none">
						<Badge variant="no-hover-secondary">Frontend Developer</Badge>
						<Badge variant="no-hover-secondary">Ambitious</Badge>
						<Badge variant="no-hover-secondary">Enthusiast</Badge>
						<Badge variant="no-hover-secondary">Podcaster</Badge>
						<Badge variant="no-hover-secondary">Streamer</Badge>
					</div>
				</div>
				<div className="relative overflow-hidden row-span-1 justify-center flex flex-col col-span-12 lg:col-span-9 bg-[#1b1b1b] p-12 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl max-md:max-w-none max-md:p-8 text-white">
					<Image
						className="h-full w-full m-auto absolute top-0 left-0 right-0 bottom-0 opacity-10 z-0"
						fill
						src={bgJPG}
						alt="coding background"
					/>

					<div className="prose-sm prose-h4:text-gray-500 z-10">
						<h3>Constantly trying to improve myself</h3>
						<h1>
							Currently learning more about{' '}
							<strong className="text-secondary">AWS</strong>.
						</h1>
						<h4>Building stuff using React and Node</h4>
					</div>
					<Marquee>
						{technologies.map(({ name, icon }, index) => (
							<div className="mx-4 py-12" key={index}>
								<Image
									className="p-3 rounded-full bg-secondary/5"
									loading="lazy"
									src={icon}
									alt={name}
									width={80}
									height={80}
								/>
							</div>
						))}
					</Marquee>
				</div>
				<div className="relative overflow-hidden row-span-1 justify-center flex flex-col col-span-12 lg:col-span-3 bg-[#1b1b1b] rounded-tr-3xl rounded-tl-lg rounded-br-lg rounded-bl-3xl max-mdd:max-w-none max-md:p-8 text-white p-12">
					<div className="prose-lg prose-headings:text-white prose-headings:font-bold max-w-none">
						<h3>Contact me</h3>
						<p>
							Let's collaborate to build something extraordinary. Whether it's a
							sleek website, a powerful app, or a custom solution tailored to
							your unique needs, I'm here to make it happen.
						</p>
						<Button variant="ghost" asChild className="p-2 relative">
							<a href="mailto:me@pedropcruz.pt" target="_blank">
								<span className="absolute -top-1 -right-1 flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
								</span>
								<MailIcon />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
