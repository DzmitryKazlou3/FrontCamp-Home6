/* -------------- imports -------------- */
// external
import { Md5 } from 'ts-md5/dist/md5';

//locals
import User from '../bloglog.models/userModel.js';
import { userRepository } from '../bloglog.repositories';
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';


/* -------------- implementation -------------- */
export default class UserService {
  constructor() {
  }

  /*
   * gets user
   */
  get(email) {

    return userRepository.get(email);
    
  };

  /*
   * adds user
   */
  add(userModel) {

    if (checkUser(userModel)) {
      // we must not keep password as it is - so we hash it.
      userModel.password = Md5.hashStr(userModel.password);
      return new userRepository.add(userModel);
    }

    return Promise.reject(new Result(null, false, "", ResultCodes.InvalidObject()));

  };

  checkPassword(user, password){
    return user.password === Md5.hashStr(password);
  }
};

function checkUser(user) {
  if (!user.email
    || user.email.length === 0
    || user.email.length > 100) {
    return false;
  }

  if (!user.name
    || user.name.length === 0
    || user.name.length > 100) {
    return false;
  }

  if (!user.password
    || user.password.length === 0
    || user.password.length > 100) {
    return false;
  }

  return true;
}