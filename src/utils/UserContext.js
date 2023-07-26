import { createContext } from 'react';

const UserContext = createContext({
	loggedInUser: 'Default Name'
});

UserContext.displayName = 'UserContext';
export default UserContext;
