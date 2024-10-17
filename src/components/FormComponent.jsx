import React, { useRef } from "react";

const FormComponent = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    };

    console.log(formData);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-1/4 justify-center mx-auto mt-5 "
    >
      <input
        type="text"
        ref={firstNameRef}
        placeholder="Name"
        className="border p-2 rounded-md"
      />
      <input
        type="text"
        ref={lastNameRef}
        placeholder="Surname"
        className="border p-2 rounded-md"
      />
      <input
        type="email"
        ref={emailRef}
        placeholder="Email"
        className="border p-2 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Send
      </button>
    </form>
  );
};

export default FormComponent;
