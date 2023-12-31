import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from '@/utils/database'
import User from '../../../../models/user'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session }) {
    try {
      const sessionUser = await User.findOne({ email: session.user.email })

      if (sessionUser) {
        session.user = { ...session.user, id: sessionUser._id.toString() }
      }
      return session
    } catch (error) {
      console.log('There was an error retrieving user details:', error)
    }
  },
    async signIn ({ profile }) {
      try {
        await connectToDb()

        // Check if user already exists
        const userExists = await User.findOne({ email: profile.email })

        // If not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            fullname: profile.name,
            image: profile.picture
          })
        }

        return true
      } catch (error) {
        console.log('There was an error signing in user:', error)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
