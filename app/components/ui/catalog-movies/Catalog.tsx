import { getMovieUrl } from 'config/url.config'
import { FC } from 'react'

import GalleryItem from '@/components/ui/gallery/GalleryItem'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import { Meta } from '@/utils/meta'

import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{Array.isArray(movies)
					? movies.map((movie) => (
							<GalleryItem
								key={movie._id}
								variant="horizontal"
								item={{
									name: movie.title,
									posterPath: movie.bigPoster,
									url: getMovieUrl(movie.slug),
									content: {
										title: movie.title,
									},
								}}
							/>
					  ))
					: null}
			</section>

			{/* <div className="text-center">
				<button className={styles.button}>Load more</button>
			</div> */}
		</Meta>
	)
}

export default Catalog
