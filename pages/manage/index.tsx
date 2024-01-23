import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import Admin from '@/components/screens/admin/Admin'

const AdminPanel: NextPageAuth = () => {
	return <Admin />
}

AdminPanel.isOnlyAdmin = true

export default AdminPanel
