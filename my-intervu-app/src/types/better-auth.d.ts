import 'better-auth';

declare module 'better-auth' {
  export interface User {
    id: string;
    name?: string;
    email?: string;
    image?: string;
  }

  export interface Session {
    user?: User;
    expires: string;
  }

  export interface SignInOptions {
    email?: string;
    password?: string;
    redirect?: boolean;
    callbackUrl?: string;
  }

  export function createBetterAuth(options: any): {
    auth: any;
    signIn: (provider: string, options?: SignInOptions) => Promise<any>;
    signOut: (options?: { callbackUrl?: string }) => Promise<void>;
    getSession: () => Promise<Session | null>;
  };
}

declare module 'better-auth/react' {
  import { ReactNode } from 'react';
  import { Session, User } from 'better-auth';

  export interface BetterAuthProviderProps {
    children: ReactNode;
  }

  export function BetterAuthProvider(props: BetterAuthProviderProps): JSX.Element;
  export function useSession(): [Session | null, boolean];
  export function useUser(): [User | undefined, boolean];
}