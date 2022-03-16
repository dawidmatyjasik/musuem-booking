import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="flex h-screen flex-col">
      <Layout>
        {session ? <h1>Zalogowany</h1> : <h1>Wylogowany</h1>}
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </Layout>
    </div>
  )
}

export default Login
