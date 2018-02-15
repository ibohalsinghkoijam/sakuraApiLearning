import {Routable, SakuraApi, SapiRoutableMixin} from '@sakuraapi/core';
import {UserModel} from '../models/user-model';

export {SakuraApi};

@Routable({
  baseUrl: 'user',
  model: UserModel
})
export class UserApi extends SapiRoutableMixin() {

  // @Route()
  // someRoute(req: Request, res: Response, next: NextFunction) {
  //   next();
  // }
}
