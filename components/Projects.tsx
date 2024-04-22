import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { projects } from '@/lib/projects'

export const Projects = () => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
		{projects.map((project, index) => (
			<Link href={project.link} target="_blank" key={index}>
				<Card className="group hover:cursor-pointer bg-[#1b1b1b] rounded-tr-3xl rounded-tl-lg rounded-br-lg rounded-bl-3xl shadow-2xl my-0">
					<CardHeader className="prose max-w-none flex flex-col items-start p-12">
						<CardTitle className="flex justify-between w-full items-center">
							{project.title}
							<Button
								className="h-10 w-10 bg-slate-50 text-slate-950 rounded-full ml-auto p-3 group-hover:text-slate-50 group-hover:bg-transparent"
								variant="link"
							>
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 18"
								>
									<path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
									<path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
								</svg>
							</Button>
						</CardTitle>
						<CardDescription className="font-bold text-gray-500">
							{project.caption}
						</CardDescription>

						<div className="prose">
							<p className="text-slate-50 font-bold">
								{project.smallDescription}
							</p>
						</div>
					</CardHeader>
					<CardContent className="overflow-hidden">
						<Image
							width={1400}
							height={1050}
							alt={project.title}
							src={project.src}
							className="group-hover:scale-110 transition duration-500 cursor-pointer object-cover opacity-45 group-hover:opacity-100"
						/>
					</CardContent>
				</Card>
			</Link>
		))}
	</div>
)
