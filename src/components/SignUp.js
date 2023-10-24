import React, { useState } from "react";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { storeuserdata } from "./firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function SignUp(props) {
  const [displayName , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const createUser = async () => {
    console.log("Button Clicked");
    if (password !== "" && password === confirm) {
     await  createUserWithEmailAndPassword(auth, email, password)
        .then((e) => {
           sendEmailVerification(auth.currentUser)
           .then(()=>{
            props.showAlert("Email verification link sent", "success");
           })
          props.showAlert("Registered Successfully", "success");
          storeuserdata(displayName , email, password);
          navigate("/login");
        })
        .catch((err) => {
          if (password.length < 6)
            props.showAlert(
              "Password Length should be greater than or equal to 6",
              "warning"
            );
          if (err.message === "Firebase: Error (auth/email-already-in-use).")
            props.showAlert("Email already Used ", "warning");
          if (err.message === "Firebase: Error (auth/invalid-email).")
            props.showAlert("Invalid Email", "warning");
          console.log("ok", err.message);
        });
    }
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <div className="mb-3 row">
        <h5 className="text-primary d-flex justify-content-center">
          Create a DEV@Deakin Account
        </h5>
        <label className="col-sm-2 col-form-label">Name*</label>
        <div className="col-sm-10">
          {" "}
          <input
            onChange={(e) => setName(e.target.value)}
            value={displayName}
            type="displayName"
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">
          Email*
        </label>
        <div className="col-sm-10">
          {" "}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="exampleInputPassword1"
          className="col-sm-2 col-form-label"
        >
          Password*
        </label>
        <div className="col-sm-10">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="exampleInputPassword1"
          className="col-sm-2 col-form-label"
        >
          Confirm Password*
        </label>
        <div className="col-sm-10">
          <input
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
            type="password"
            className="form-control"
            id="exampleconfirmPassword1"
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        {" "}
        <button
          disabled={confirm === "" || password !== confirm}
          type="button"
          className="btn btn-primary"
          onClick={(e)=>createUser()}
        >
          Create
        </button>
      </div>
    </div>
  );
}
