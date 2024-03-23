import {UserIdentity} from 'react-admin';
import {User} from 'oidc-client-ts';

const getIdentityFromUser = (user: User): UserIdentity => {
  return {
    id: user.profile.sub,
    fullName: user.profile.name || `${user.profile.family_name} ${user.profile.given_name}`.trim() || user.profile.email || '',
    ...user,
  };
};

export default getIdentityFromUser;
