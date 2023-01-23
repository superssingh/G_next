import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import { BrandLogo, Logo } from '../../../components';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_ID,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET,
      // version: '2.0', // opt-in to Twitter OAuth 2.0
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: '<no-reply@example.com>',
    // }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  theme: {
    colorScheme: 'light', // "auto" | "dark" | "light"
    brandColor: '', // Hex color code
    logo: 'https://www.gogixer.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgogixerlogo.324c2afe.png&w=128&q=75', // Absolute URL to image
    buttonText: '', // Hex color code
  },
};
export default NextAuth(authOptions);
