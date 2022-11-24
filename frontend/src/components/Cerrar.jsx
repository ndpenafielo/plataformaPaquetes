import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const Cerrar = () => {

    const {user, setUser} = useAuth();

    setUser(null);

    return <Navigate to="/" />

}

export default Cerrar;

