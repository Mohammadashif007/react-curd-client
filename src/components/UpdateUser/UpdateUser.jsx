import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {

    const data = useLoaderData();
  

    const {_id, name, email, address} = data;

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const address = data.address;

        const newUser = { name, email, address };
        reset();

        fetch(`http://localhost:3000/users/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div>
            <div className="w-4/6 mx-auto mt-10">
                <div className="flex flex-col items-center">
                    <div className=" w-full">
                        <h1 className="text-3xl font-extrabold text-center mb-8">
                            React CURD Application
                        </h1>
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label>Name</label>
                                    <div>
                                        <input
                                            type="text"
                                            {...register("name")}
                                            placeholder="Name"
                                            defaultValue={name}
                                            className="border-2 mx-auto px-2 py-2 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Email</label>
                                    <div>
                                        <input
                                            type="text"
                                            {...register("email")}
                                            placeholder="email"
                                            defaultValue={email}
                                            className="border-2  mx-auto px-2 py-2 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Address</label>
                                    <div>
                                        <input
                                            type="text"
                                            {...register("address")}
                                            placeholder="Address"
                                            defaultValue={address}
                                            className="border-2 mx-auto px-2 py-2 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <button className="btn btn-secondary text-center">
                                        Update User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
