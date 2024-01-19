import MainProvider from '../app/providers/MainProvider'
import type { AppProps } from 'next/app'

import '../app/assets/styles/globals.scss'

type TypeAppProps = AppProps

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp