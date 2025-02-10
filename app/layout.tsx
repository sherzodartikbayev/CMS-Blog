import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})

const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Sammi dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklarc, va dasturlash sohasidagi eng so`nggi xabarlar. Bizning blogda dasturlashni o`rganish va rivojlantirish uchun qo`llanma topishingiz mumkin.',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	)
}
