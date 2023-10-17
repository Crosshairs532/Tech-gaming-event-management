import { useContext, useEffect, useState } from "react";
import { socialContext } from "../../AuthProvider/Authprovider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import Aos from "aos";
import 'aos/dist/aos.css';
const Register = () => {
    // e.preventDetails()
    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)
    const navigate = useNavigate();
    const { createUser } = useContext(socialContext);
    const [emailer, setEmailer] = useState(null)
    const [passworder, setPassworder] = useState(null)
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    const handleCreateuser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const name= e.target.name.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const isEmailvalid = emailRegex.test(email);
        const isPasswordValid = passwordRegex.test(password);

        if (!isEmailvalid) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Email?',
                footer: '<p> check your email</p>'
            })
            e.target.reset();

        }

        else {
            if (!isPasswordValid) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password must include 6 characters, capital letter, and special characters',
                    footer: '<p> check your password</p>'
                })
                e.target.reset()
            }
            else {
                createUser(email, password)
                    .then((rslt) => {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'navigating to logging page....',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        updateProfile(rslt.user, {
                            displayName:name,
                            photoURL:url

                        } )
                        console.log(rslt.user)
                        navigate('/login')

                    })
                    .catch(er => { setEmailer(er); setPassworder(er) })
            }


        }


    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200" >
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateuser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name:</span>
                                      

                                </label>
                                <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                    <span className=" text-red-700">{
                                        emailer ? "something wrong with email" : ''}</span>

                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-Url</span>

                                </label>
                                <input name="url" type="text" placeholder="your photo url" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <span className=" text-red-700">{passworder ? passworder : ''}</span>

                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Now</button>

                            </div>
                        </form>

                        <p className=" px-8 py-2">Already registered? <Link to='/login'><span className=" text-teal-950 font-bold text-xl">Login</span></Link></p>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Register;