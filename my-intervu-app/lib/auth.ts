import { createBetterAuth } from 'better-auth';

// For demo purposes - replace with actual database calls in production
const users = [
  {
    id: '1',
    name: 'Demo User',
    email: 'user@example.com',
    password: 'password123', // In a real app, this would be hashed
    image: 'https://ui-avatars.com/api/?name=Demo+User',
  },
];

export const { auth, signIn, signOut, getSession } = createBetterAuth({
  providers: {
    credentials: {
      authorize: async ({ email, password }) => {
        if (!email || !password) return null;
        
        // In a real app, you would fetch the user from a database
        const user = users.find(user => user.email === email);
        
        if (user && user.password === password) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        }
        
        return null;
      },
    },
    github: {
      clientId: process.env.GITHUB_ID || 'placeholder-github-id',
      clientSecret: process.env.GITHUB_SECRET || 'placeholder-github-secret',
    },
    google: {
      clientId: process.env.GOOGLE_ID || 'placeholder-google-id',
      clientSecret: process.env.GOOGLE_SECRET || 'placeholder-google-secret',
    },
    facebook: {
      clientId: process.env.FACEBOOK_ID || 'placeholder-facebook-id',
      clientSecret: process.env.FACEBOOK_SECRET || 'placeholder-facebook-secret',
    },
    apple: {
      clientId: process.env.APPLE_ID || 'placeholder-apple-id',
      clientSecret: process.env.APPLE_SECRET || 'placeholder-apple-secret',
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.AUTH_SECRET || 'your-secret-key-for-development-only',
  debug: process.env.NODE_ENV === 'development',
});