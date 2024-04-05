import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin, setUser, facebookLogin } = useContext(AuthContext);
  //console.log(loginUser);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const results = result.user;
      setUser(results);
    })
    .catch(error => {
      console.error(error)
    })
  }

  const handleFacebookLogin = () => {
    facebookLogin()
    .then(result => {
      setUser(result.user)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="w-[40%] mx-auto min-w-[500px] border-2 border-red-500 p-5 rounded-xl">
      <form onSubmit={handleLogin}>
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

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="btn btn-link">Google Login</button>
      <button onClick={handleFacebookLogin} className="btn btn-link">Facebook Login</button>
    </div>
  );
};

export default Login;
