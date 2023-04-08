import {createContext} from "react";

const UserContext = createContext({
    user : null,
    setUser : (data : any) => {}
});

export default UserContext;