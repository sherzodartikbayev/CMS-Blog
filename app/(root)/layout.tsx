import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<div className='container mx-auto'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
