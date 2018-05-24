import { Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/user';

export class Routes {
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route('/asdf').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!'
      });
    });

    // User
    app
      .route('/api/user')
      .get(this.userController.getUsers)

      // POST endpoint
      .post(this.userController.addNewUser);

    // Contact detail
    app
      .route('/api/user/:userId')
      // get specific user
      .get(this.userController.getUserWithID)
      .put(this.userController.updateUser)
      .delete(this.userController.deleteUser);
  }
}
