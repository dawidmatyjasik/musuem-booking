import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials, req) {
        /*         const user = {
          id: 1,
          name: 'Dawid Spisak',
          email: 'dawidspisak@example.com',
        } */

        if (
          credentials.username === 'mpm' &&
          credentials.password === 'admin'
        ) {
          return {
            id: 2,
            name: 'Admin',
            email: 'mpm@gmail.com',
          }
        }

        return null

        /*         if (user) {
          return user
        } else {
          return null
        } */
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }

      return token
    },
    session: ({ token, session }) => {
      if (token) {
        session.id = token.id
      }
      return session
    },
  },
  secret: 'mpm',
  jwt: {
    secret: 'mpm',
  },
})
