import { AuthStorageService } from '../services/authStorage.service';
import { Account } from './Account';

describe('test Account class', () => {
  const account = new Account();
  describe('login', () => {
    it('login is called', () => {
      const setTokenSpy = jest.spyOn(AuthStorageService.prototype, 'setToken');
      account.login();
      expect(setTokenSpy).toBeCalledTimes(1);
      expect(setTokenSpy).toBeCalledWith('token');
    });
  });
  describe('logout', () => {
    it('logout is called', () => {
      const removeTokenSpy = jest.spyOn(AuthStorageService.prototype, 'removeToken');
      account.logout();
      expect(removeTokenSpy).toBeCalledTimes(1);
      expect(removeTokenSpy).toBeCalledWith();
    });
  });
  describe('isAuthenticated', () => {
    it('isAuthenticated is called', () => {
      const getTokenSpy = jest.spyOn(AuthStorageService.prototype, 'getToken');
      account.isAuthenticated();
      expect(getTokenSpy).toBeCalledTimes(1);
      expect(getTokenSpy).toBeCalledWith();
    });
  });
});
