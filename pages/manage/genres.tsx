import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import GenreList from '@/screens/admin/genres/GenreList'

const GenreListPage: NextPageAuth = () => {
	return <GenreList />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage