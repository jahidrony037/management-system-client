import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    const userDelete = async () => {
      const res = await fetch(
        `https://management-system-server-five.vercel.app/users/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();
      if (result.deletedCount > 0) {
        const remainingUsers = users.filter((user) => user._id !== id);
        setUsers(remainingUsers);
        alert(`user deleted successfully`);
      }
    };
    userDelete();
  };
  return (
    <div className="mt-[100px]">
      <Link
        to="/addUser"
        className="btn  border-[1px] border-solid shadow-xl text-lg"
      >
        New User <CiUser size={20} fill="blue" />
      </Link>
      <div className="text-center mt-[100px] mx-auto ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-blue-950 text-white text-center h-14">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i = 1) => (
                <tr key={user._id} className="hover text-center">
                  <th>{i + 1}</th>
                  <td>{user?.name || "NOT FOUND"}</td>
                  <td>{user?.email || "NOT FOUND"}</td>
                  <td>{user?.gender || "not found"}</td>
                  <td>{user?.status || "not found"}</td>
                  <th className="flex gap-4 justify-center ">
                    <td
                      onClick={() => handleDelete(user?._id)}
                      className="cursor-pointer btn btn-error "
                    >
                      Delete
                    </td>
                    <Link to={`/update/${user._id}`}>
                      <td className="cursor-pointer btn btn-success">Update</td>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
