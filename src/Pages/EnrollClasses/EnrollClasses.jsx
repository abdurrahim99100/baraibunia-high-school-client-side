import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const EnrollClasses = () => {

    const [classes, setClasses] = useState();
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/class')
            .then(data => setClasses(data.data))
    }, [axiosSecure]);

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-center lg:my-10 uppercase text-3xl font-semibold text-red-300">Eligible classes for admission</h2>
            <div className="grid lg:grid-cols-3 gap-5 justify-items-center lg:p-0 p-4">
                {
                    classes?.map((singleClass, index) =>
                        <div key={singleClass._id}
                            className="bg-gray-100 lg:w-10/12 p-2 rounded">
                            <div className="relative">
                                <img src={singleClass.image} alt=""
                                    className="w-[400px] h-[300px] rounded mx-auto" />
                                <p className="absolute top-1 left-2 bg-yellow-400 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white border-double border-4 border-white-500">{index + 1}</p>
                            </div>
                            <p>Class name: {singleClass.className}</p>
                            <p>Subject: {singleClass.subject}</p>
                            <p>Name: {singleClass.name}</p>
                            <p>Phone number: {singleClass.phoneNumber}</p>
                            <p>Details: {singleClass.bio}</p>
                            <button className="btn btn-success w-full">Enroll nwo</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default EnrollClasses;