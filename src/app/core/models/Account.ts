import { AuthStorageService } from '../services/authStorage.service';

export class Account {

  login() {
    const authService = new AuthStorageService();
    //TODO: call API to get access token
    const accessToken = 'token';
    authService.setToken(accessToken);
  }

  logout() {
    const authService = new AuthStorageService();
    authService.removeToken();
  }

  isAuthenticated() {
    const authService = new AuthStorageService();
    return !!authService.getToken();
  }
}
