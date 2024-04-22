import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'rounded-2xl bg-stone-900 text-slate-50 shadow-sm my-16 overflow-hidden',
			className,
		)}
		{...props}
	/>
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'flex w-full flex-row justify-between space-y-1.5 p-6 items-center',
			className,
		)}
		{...props}
	/>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			'text-4xl font-bold leading-none tracking-tight text-slate-50 mb-0',
			className,
		)}
		{...props}
	/>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn('text-lg', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex items-center p-6 pt-0', className)}
		{...props}
	/>
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
