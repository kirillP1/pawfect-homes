import express, { Express } from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { petsRouter } from './infrastructure/routes/pets.routes'
import { baseRouter } from './infrastructure/routes/base.routes'
import { usersRouter } from './infrastructure/routes/users.routes'
import { ErrorHandler } from './infrastructure/middlewares/error-handler'

export async function createServer(): Promise<Express> {
  const app = express();
  
	// Middlewares
  app.use(express.json());
  app.use(cookieParser());
	app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }))

	// Routes
  app.use('/api', baseRouter)
  app.use('/api/users', usersRouter)
	app.use('/api/pets', petsRouter);

  // Error Handling Middleware
  app.use(ErrorHandler);
  
  return app;
}

export async function startServer(app: Express, port: number) {
  const server = await app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    });

	return server;
}