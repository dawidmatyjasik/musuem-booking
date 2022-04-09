import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import AdminLayout from '../components/Layout/AdminLayout'

const Panel = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="flex h-screen flex-col">
      <AdminLayout session={session}>
        {session ? <h1>Zalogowany</h1> : <h1>Wylogowany</h1>}
      </AdminLayout>
    </div>
  )
}

export default Panel
