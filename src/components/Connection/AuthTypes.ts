import { UserCredential } from 'firebase/auth';

export type ISignIn = (email: string, password: string) => Promise<UserCredential>;
