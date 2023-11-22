import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PostNewClass = () => {

    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        // console.log(data);

        const postApiKey = import.meta.env.VITE_POST_PHOTO_KEY;
        const file = data.banner[0];
        const formData = new FormData();
        formData.append('image', file);

        fetch(`https://api.imgbb.com/1/upload?key=${postApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageUrl = imageResponse.data.display_url;
                    const { bio, className, name, phoneNumber, subject } = data;
                    const newClass = { className, name, phoneNumber, subject, bio, image: imageUrl }

                    axiosSecure.post('/class', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "YOUR CLASS HAS BEEN SAVED",
                                    showConfirmButton: false,
                                    timer: 1900
                                });
                            }
                        });
                }
            });

    }

    return (
        <div className="container mx-auto">
            <h3 className="text-center text-4xl font-bold p-10">Post a new class</h3>
            <div className="lg:w-6/12 mx-auto mt-5 mb-20">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid gap-4">
                    <div>
                        <label className="block">Class name</label>
                        <input type="text" placeholder="Enter your class name"
                            className="input input-bordered w-full h-[40px] px-2"
                            {...register("className", { required: true })} />
                    </div>
                    <div>
                        <label className="block">Banner</label>
                        <input type="file" name="banner"
                            className="file-input input-bordered w-full h-[40px]"
                            {...register("banner", { required: true })} />
                    </div>
                    <div>
                        <label className="block">Subject</label>
                        <input type="text" name="subject" placeholder="Enter your subject"
                            className="input input-bordered w-full h-[40px] px-2"
                            {...register("subject", { required: true })} />
                    </div>
                    <div>
                        <label className="block">Instructor name</label>
                        <input type="text" name="name" placeholder="Enter your name"
                            className="input input-bordered w-full h-[40px] px-2"
                            {...register("name", { required: true })} />
                    </div>
                    <div>
                        <label className="block">Your phone number</label>
                        <input type="number" name="phoneNumber" placeholder="Enter your phone number"
                            className="input input-bordered w-full h-[40px] px-2"
                            {...register("phoneNumber", { required: true })} />
                    </div>
                    <div>
                        <textarea placeholder="Bio"
                            className="textarea textarea-bordered textarea-md w-full"
                            {...register("bio", { required: true })} ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="SUBMIT"
                            className="btn w-full btn-success" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostNewClass;