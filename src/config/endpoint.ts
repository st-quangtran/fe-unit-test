import { environment } from './environment';

const RESOURCES = {
  auth: 'auth',
  user: environment.apiUser
};

export const ENDPOINT = {
  auth: {
    index: `${RESOURCES.auth}`,
    login: `${RESOURCES.auth}/login`
  },
  user: {
    index: `${RESOURCES.user}`
  }
};
