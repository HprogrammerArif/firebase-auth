import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { registerUser, setUser } = useContext(AuthContext);
  // console.log(registerUser);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(name, photo, email, password, confirmPassword);

    if (!/@gmail\.com$/.test(email)) {
      setEmailError("Please correct your email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must bs 6 character or more");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    if (!/\d{1,}$/.test(password)) {
      setError("Password ends with at least 1 number");
      return;
    }
    setError("");
    setEmailError("");

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        setError(error.message.split('/')[1]);
      });
  };

  return (
    <div className="w-[40%] mx-auto min-w-[500px] border-2 border-red-500 p-5 rounded-xl">
      <form onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            name="photo"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        {error && <small className="text-red-600">{error}</small>}
        {emailError && <small className="text-red-600">{emailError}</small>}
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
