// import React, { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import toast from 'react-hot-toast';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

// const Login = () => {
//     const [error, setError] = useState('');
//     const { signIn, setLoading } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || '/';

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 form.reset();
//                 setError('');
//                 if(user.emailVerified){
//                     navigate(from, {replace: true});
//                 }
//                 else{
//                     toast.error('Your email is not verified. Please verify your email address.')
//                 }
//             })
//             .catch(error => {
//                 console.error(error)
//                 setError(error.message);
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control name="email" type="email" placeholder="Enter email" required />

//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control name="password" type="password" placeholder="Password" required />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Login
//             </Button>
//             <Form.Text className="text-danger">
//                 {error}
//             </Form.Text>
//         </Form>
//     );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        // if (user.emailVerified) {
        //   navigate(from, { replace: true });
        // } else {
        //   toast.error(
        //     "Your email is not verified. Please verify your email address."
        //   );
        // }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to={"/register"}
                  className="label-text-alt link link-hover"
                >
                  I don't have an account
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="label-text text-red-500" >{error}</p>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
