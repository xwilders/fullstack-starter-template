import { authRouter } from '@backend/modules/auth/auth.router';
import { router } from './trpc';

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
