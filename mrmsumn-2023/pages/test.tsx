import { useContext } from "react";
import UserContext from "@/contexts/UserContext";

export default function Test(){

    const {user, setUser} = useContext(UserContext);

    return <h1>Ini Protected Route</h1>
}