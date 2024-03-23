import {AuthProvider} from './types';
import {useAuthProvider as useRaAuthProvider} from 'react-admin';

const useAuthProvider = (): AuthProvider => useRaAuthProvider() as AuthProvider;

export default useAuthProvider;
