// import React, { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

// const Register = () => {
//     const [error, setError] = useState('');
//     const [accepted, setAccepted] = useState(false);
//     const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const photoURL = form.photoURL.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         // console.log(name, photoURL, email, password);

//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 setError('');
//                 form.reset();
//                 handleUpdateUserProfile(name, photoURL);
//                 handleEmailVerification();
//                 toast.success('Please verify your email address.')
//             })
//             .catch(e => {
//                 console.error(e);
//                 setError(e.message);
//             });
//     }

//     const handleUpdateUserProfile = (name, photoURL) => {
//         const profile = {
//             displayName: name,
//             photoURL: photoURL
//         }

//         updateUserProfile(profile)
//             .then(() => { })
//             .catch(error => console.error(error));
//     }

//     const handleEmailVerification  = () => {
//         verifyEmail()
//         .then(() =>{})
//         .catch(error => console.error(error));
//     }

//     const handleAccepted = event => {
//         setAccepted(event.target.checked)
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Your Name</Form.Label>
//                 <Form.Control name="name" type="text" placeholder="Your Name" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Photo URL</Form.Label>
//                 <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control name="email" type="email" placeholder="Enter email" required />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control name="password" type="password" placeholder="Password" required />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check
//                     type="checkbox"
//                     onClick={handleAccepted}
//                     label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
//             </Form.Group>
//             <Button variant="primary" type="submit" disabled={!accepted}>
//                 Register
//             </Button>
//             <Form.Text className="text-danger">
//                 {error}
//             </Form.Text>
//         </Form>
//     );
// };

// export default Register;

import { Link } from "react-router-dom";
import loginPhoto from "../../../assets/login.webp";
import { FaArrowAltCircleRight  } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const Register = () => {

    const [error, setError] = useState('');
    //     const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
      //   const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name , email, password);
      
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            form.reset();
            // toast.success('Please verify your email address.')
          })
          .catch((e) => {
            console.error(e);
            setError(e.message);
          });
      };
      

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/* <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <h1 className="text-3xl font-bold">
            Register <span className="text-yellow-400">now!</span>
          </h1>
          <img src={loginPhoto} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
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
                <Link to={"/login"} className="label-text-alt link link-hover">
                  Already have an account? Sign in
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-warning ">
                Register <span className="text-2xl btn btn-warning ">< FaArrowAltCircleRight /></span>
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
