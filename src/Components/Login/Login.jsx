import { useContext, useEffect, useState } from "react";
import { socialContext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
const Login = () => {
    const location = useLocation();
    const { LogIn, setLoader, signGoogle } = useContext(socialContext);
    const [loginError, setLoginerror] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        LogIn(email, password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setLoader(false)
                Swal.fire({
                    icon: 'error',
                    title: `password error`,
                    width:'200',
                    text: '',
                    footer: '<p>check your password or email</p>'
                })
                setLoginerror(error)


                e.target.reset()
                navigate('/')
            })
    }

    const handleWithGoogle = () => {
        signGoogle()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }
                )
                navigate(location?.state ? location.state : '/')
            }
            )
            .catch(() =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'something went wrong',
                    footer: '<p> check your email</p>'
                })
            )



    }

    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-poppins font-bold font-5xl text-white">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <span>{loginError ? loginError : ''}</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>


                            </div>
                        </form>
                        <button onClick={handleWithGoogle} className="btn btn-primary px-8 w-[338px] mx-auto">Sign in google</button>
                        <p className=" px-8 py-2">Not Registered? <Link to='/register'><span className=" text-teal-950 font-bold text-xl">Register Now</span></Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;