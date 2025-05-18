import * as dotenv from 'dotenv';

dotenv.config({ override: true });

function requireEnvVariable(envVariable: string): string {
  const envVariableValue = process.env[envVariable] ?? '[NOT SET]';
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable ${envVariable} is not set.`);
  }
  return envVariableValue;
}

export const BASE_URL = requireEnvVariable('BASE_URL');
export const USER_EMAIL_ADDRESS = `test-${Math.floor(
  Math.random() * 10000
)}@example.com`;
export const USER_PASSWORD = requireEnvVariable('USER_PASSWORD');
export const USER_FIRST_NAME = requireEnvVariable('USER_FIRST_NAME');
export const USER_LAST_NAME = requireEnvVariable('USER_LAST_NAME');
export const USER_PHONE = requireEnvVariable('USER_PHONE');
