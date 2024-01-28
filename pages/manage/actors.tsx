import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import ActorList from '@/screens/admin/actors/ActorList'

const ActorListPage: NextPageAuth = () => {
	return <ActorList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage