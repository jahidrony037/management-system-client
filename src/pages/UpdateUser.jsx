import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { _id, email, name, gender, status } = user;
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    //console.log(form);
    const email = form.email.value;
    const name = form.name.value;
    const getRadioValue = (name) => {
      const genders = document.getElementsByName(name);
      for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
          return genders[i].value;
        }
      }
    };
    const gender = getRadioValue("gender");
    const status = getRadioValue("status");

    // console.log(email, name, gender, status);
    const user = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };

    const postData = async () => {
      const res = await fetch(
        `https://management-system-server-five.vercel.app/users/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const result = await res.json();
      if (result.modifiedCount > 0) {
        alert(`update successfully done!`);
        navigate("/");
      }
    };
    postData();
  };
  return (
    <div className="mt-[100px]">
      <h2 className="text-center text-4xl text-blue-950 font-bold">
        Please Update User Here
      </h2>
      <div className="mt-4">
        <div className="md:px-24 px-6">
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                defaultValue={name}
                className="input input-bordered focus:outline-none focus:to-blue-900"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                name="email"
                disabled
                defaultValue={email}
                className="input input-bordered focus:outline-none focus:to-blue-900"
                required
              />
            </div>
            <div className="form-control mt-3">
              <fieldset className="flex items-center">
                <label className="label-text text-xl pr-5">Gender</label>
                <label htmlFor="active" className="label cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    defaultChecked={gender === "male" ? true : false}
                    id="male"
                    className="radio checked:bg-success"
                  />
                  <span className="label-text pl-3">Male</span>
                </label>
                <label htmlFor="inactive" className="label cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    defaultChecked={gender === "female" ? true : false}
                    className="radio checked:bg-success"
                  />
                  <span className="label-text pl-3">Female</span>
                </label>
              </fieldset>
            </div>
            <div className="form-control mt-3">
              <fieldset className="flex items-center">
                <label className="label-text text-xl pr-5">Status</label>
                <label htmlFor="active" className="label cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    id="active"
                    value="active"
                    defaultChecked={status === "active" ? true : false}
                    className="radio checked:bg-success"
                  />
                  <span className="label-text pl-3">Active</span>
                </label>
                <label htmlFor="inactive" className="label cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    id="inactive"
                    value="inactive"
                    defaultChecked={status === "inactive" ? true : false}
                    className="radio checked:bg-success"
                  />
                  <span className="label-text pl-3">Inactive</span>
                </label>
              </fieldset>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success text-blue-900 text-lg">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
