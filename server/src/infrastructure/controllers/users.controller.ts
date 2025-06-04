import { NextFunction, Request, Response } from "express";
import { UsersServices } from "../../core/services/users.services";
import {
  UserLoginInput,
  UserRegistrationInput,
} from "../../core/validation/user-validation";
import { UnauthorizedError } from "../../core/errors/app-error";

export class UsersController {
  constructor(readonly usersServices: UsersServices) {
    // Bind methods to ensure `this` is correct in Express routes
    this.registration = this.registration.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.activate = this.activate.bind(this);
    this.refresh = this.refresh.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as UserRegistrationInput;

      const userData = await this.usersServices.registration(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as UserLoginInput;

      const userData = await this.usersServices.login(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const token = await this.usersServices.logout(refreshToken);

      res.clearCookie("refreshToken");
      res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async activate() {}

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await this.usersServices.refresh(refreshToken);

      if (!userData)
        throw new UnauthorizedError("Refresh token is not correct!");

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.usersServices.getAllUsers();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}
