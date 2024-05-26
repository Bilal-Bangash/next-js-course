import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongo/client'
import { sendVerificationRequest } from '@/utils/sendVerificationRequest'

export const authOptions = {
  providers: [
    // EmailProvider({
    //   server: {
    //     host: process.env.MAIL_SERVER_HOST,
    //     port: process.env.MAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.MAIL_SERVER_USER,
    //       pass: process.env.MAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile?.sub,
          name: profile?.name,
          email: profile?.email,
          image: profile?.picture,
          role: profile?.role ?? 'user'
        }
      }
    }),
    {
      id: 'resend',
      type: 'email',
      sendVerificationRequest
    }
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      if (trigger === 'update' && session?.name) {
        token.name = session.name
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token?.id
      return session
    }
  },
  pages: {
    signIn: '/signin'
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt'
  }
}
