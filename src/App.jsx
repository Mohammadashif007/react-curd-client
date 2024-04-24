import "./App.css";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import User from "./components/User/User";

function App() {
    const users = useLoaderData();

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

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
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
                                        className="border-2 mx-auto px-2 py-2 w-full"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <button className="btn btn-secondary text-center">
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            
                                {users.map((user) => (
                                    <User key={user._id} user={user}></User>
                                ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
