import { createContext } from 'react';

const UserContext = createContext({
    logged: "",
    setLogged: () => {}
});

export default UserContext;