import { noAuthProcedure, router } from '@backend/server/trpc';
import { userCredentialsSchema } from './auth.dtos';
import { signIn, signUp } from './auth.service';

export const authRouter = router({
  signUp: noAuthProcedure
    .input(userCredentialsSchema)
    .mutation(async ({ input }) => signUp(input)),

  signIn: noAuthProcedure
    .input(userCredentialsSchema)
    .mutation(async ({ input }) => signIn(input)),
});
