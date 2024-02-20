import { z } from 'zod';

// TODO: Custom parser for the upload folder to make sure it exists for real
const envSchema = z.object({
  UPLOAD_DIR: z.string().min(1),
  DATABASE_URL: z.string().min(1),
});

const env = envSchema.parse(process.env);

export default env;
