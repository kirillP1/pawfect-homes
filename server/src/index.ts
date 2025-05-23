import { loadEnvironmentVariables } from './config'
import { connectToDatabase, disconnectFromDatabase } from './database'
import { createServer, startServer } from './server';

async function startApplication() {
  try {
    // Load configuration
    const { port, mongoDbUri } = loadEnvironmentVariables();
    
    // Initialize database connection
    await connectToDatabase(mongoDbUri);
    
    // Create and start server
    const app = await createServer();
    await startServer(app, port);

    // Handle graceful shutdown
    process.on('SIGTERM', async () => {
      await disconnectFromDatabase();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      await disconnectFromDatabase();
      process.exit(0);
    });

  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
}

startApplication();