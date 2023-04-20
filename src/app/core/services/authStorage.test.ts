import { AuthStorageService } from './authStorage.service';

describe('test auth service', () => {
  const authStorageService = new AuthStorageService();
  it('getToken is called', () => {
    Storage.prototype.getItem = jest.fn();
    authStorageService.getToken();
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith('token');
  });

  it('setToken is called', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    authStorageService.setToken('token');
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledWith('token', 'token');
  });

  it('removeToken is called', () => {
    Storage.prototype.removeItem = jest.fn();
    authStorageService.removeToken();
    expect(localStorage.removeItem).toBeCalledTimes(1);
    expect(localStorage.removeItem).toBeCalledWith('token');
  });
});
