import { NextPageAuth } from 'providers/AuthProvider/auth.types'

const UserListPage: NextPageAuth = () => {
	return <div>users</div>
}

UserListPage.isOnlyAdmin = true

export default UserListPage