import dotenv from 'dotenv';

export function loadEnvironmentVariables() {
  dotenv.config();
  
  return {
    port: parseInt(process.env.PORT || '5000'),
    mongoDbUri: String(process.env.MONGODB_URI) 
  };
}