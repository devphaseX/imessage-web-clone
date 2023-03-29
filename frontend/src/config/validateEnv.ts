import { z } from 'zod';

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().min(32),
  GOOGLE_CLIENT_SECRET: z.string().min(8),
  DATABASE_URL: z.string(),
});

const parseEnvironmentVars = envSchema.parse(process.env) as NodeJS.ProcessEnv;
type ZodEnvType = typeof envSchema._output;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ZodEnvType {}
  }
}

export { parseEnvironmentVars };
