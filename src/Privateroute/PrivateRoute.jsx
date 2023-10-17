import { useContext } from "react";
import { socialContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location, "jekhane jete chacchilam")
    const { loader, user } = useContext(socialContext);
    if (loader) {
        return (

                <Dna className='text-center'
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />)
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} ></Navigate>


};

export default PrivateRoute;