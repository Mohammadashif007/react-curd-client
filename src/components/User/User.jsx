import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const User = ({ user }) => {
    const { name, email, address, _id } = user;
    const navigate = useNavigate();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    const handleUpdate = () => {
        navigate(`/updateUser/${_id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <div>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-warning"
                >
                    Delete
                </button>
                <button
                    onClick={handleUpdate}
                    className="btn btn-primary mx-2"
                >
                    Update
                </button>
                <button className="btn btn-secondary">View</button>
            </div>
        </tr>
    );
};

export default User;
