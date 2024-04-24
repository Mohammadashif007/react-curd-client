import "./App.css";

function App() {
    return (
        <div className="w-4/6 mx-auto mt-10">
            <div className="flex flex-col items-center">
                <div className=" w-full">
                    <h1 className="text-3xl font-extrabold text-center mb-8">
                        React CURD Application
                    </h1>
                    <div className="">
                        <form>
                            <div>
                                <label>Name</label>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
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
                                        name="email"
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
                                        name="address"
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
        </div>
    );
}

export default App;
