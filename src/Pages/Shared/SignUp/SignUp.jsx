import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SignUp = () => {

    const { createUser, updateUserProfile } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.displayName, data.photoURL)
                    .then(() => {
                        const sevUser = { name: data.displayName, email: data.email, roll: 'user' };
                        axiosSecure.post('/users', sevUser)
                            .then(data => {
                                console.log("data is coming",data);
                                if (data.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 2100
                                    });
                                    navigate('/');
                                }
                            });
                    });
            })
            .catch(error => {
                console.log(error);
            })
    };

    const style = {
        background: "#09E7F1"
    };
    return (
        <section className="container mx-auto">
            <div className="container h-full px-6 py-24">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* <!-- Left column container with background--> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image" />
                    </div>

                    {/* <!-- Right column container with form --> */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <label className="block text-center font-bold text-4xl my-2">
                            <span>Sign Up</span>
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <!-- Name --> */}
                            <div className="relative mb-2" data-te-input-wrapper-init>
                                <label>
                                    <span className="text-xl">Name</span>
                                </label>
                                <input type="name" placeholder="Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("displayName", { required: true })}
                                />
                            </div>
                            {/* <!-- Photo Url --> */}
                            <div className="relative mb-2" data-te-input-wrapper-init>
                                <label>
                                    <span className="text-xl">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("photoURL", { required: true })}
                                />
                            </div>
                            {/* <!-- Email input --> */}
                            <div className="relative mb-2" data-te-input-wrapper-init>
                                <label>
                                    <span className="text-xl">Email</span>
                                </label>
                                <input type="email" placeholder="Email address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("email", { required: true })}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label>
                                    <span className="text-xl">Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("password", { required: true })}
                                />
                            </div>

                            {/* <!-- Remember me checkbox --> */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <div className="form-control">
                                        <input type="checkbox"
                                            className="checkbox checkbox-info" />
                                    </div>
                                    <label
                                        className="inline-block text-[#09E7F1] pl-[0.15rem] hover:cursor-pointer">
                                        Remember me
                                    </label>
                                </div>
                                {/* <!-- Forgot password link --> */}
                                <a href="#"
                                    className="text-[#09E7F1] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                >Forgot password?</a>
                            </div>
                            {/* <!-- Submit button --> */}
                            <input
                                type="submit"
                                style={style}
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                value={"Sign In"}
                                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" />
                        </form>
                        <div>
                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Have an account?
                                <Link to="/login" className="text-green-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"> Login</Link>
                            </p>

                            {/* <!-- Divider --> */}
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>
                            <div>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;