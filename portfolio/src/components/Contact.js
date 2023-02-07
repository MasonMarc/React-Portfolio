import React from 'react';
import { useForm } from "react-hook-form";

export default function Contact() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
    <main className="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit(onSubmit)}>
    <h1 className="h3 mb-3 fw-normal">Contact Me:</h1>
    <div className="form-floating">
      <input type="name" className="form-control" id="nameInput" placeholder="Name"
      {...register("Name", { required: true })} 
      aria-invalid={errors.Name ? "true" : "false"} ></input>
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
      <label htmlFor="nameInput">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"
      {...register("email", { required: "Email Address is required" })} 
      aria-invalid={errors.email ? "true" : "false"} ></input>
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      <label htmlFor="emailInput">Email address</label>
    </div>
    <div className="form-floating">
      <textarea name="message" className="form-control" id="messageInput" placeholder="message"></textarea>
      <label htmlFor="messageInput">Type your message here</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
</div>
  );
}
