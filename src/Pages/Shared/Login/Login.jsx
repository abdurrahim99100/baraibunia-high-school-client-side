import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {

    const { signInUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // social media login button design;
    const style = {
        background: "#09E7F1"
    }

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
                            <span>Login</span>
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <!-- Email input --> */}
                            <div className="relative mb-2" data-te-input-wrapper-init>
                                <label>
                                    <span className="text-xl">Email</span>
                                </label>
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address"
                                    {...register("email")}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label>
                                    <span className="text-xl">Password</span>
                                </label>
                                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"
                                    {...register("password")}
                                />
                            </div>

                            {/* <!-- Remember me checkbox --> */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-info" />
                                    </div>
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer text-[#09E7F1]">
                                        Remember me
                                    </label>
                                </div>
                                {/* <!-- Forgot password link --> */}
                                <a href="#"
                                    className="transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-[#09E7F1]"
                                >Forgot password?</a>
                            </div>
                            {/* <!-- Submit button --> */}
                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                style={style}
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Login
                            </button>
                        </form>
                        <div>
                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Don't have an account?
                                <Link to="/signUp" className="text-green-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"> Register</Link>
                            </p>

                            {/* <!-- Divider --> */}
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>
                            {/* social login */}
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

export default Login;