"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const formValidation = () => {
    if (
      username.length < 3 ||
      email.length < 4 ||
      password.length < 4 ||
      secondPassword.length < 4 ||
      password !== secondPassword
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const rawStatus = await fetch("/api/v0.1/user", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // const status = await rawStatus.json();
      // console.log("status", rawStatus);

      if (!rawStatus.ok) {
        throw new Error("register failed");
      }

      console.log("here");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="mx-4" autoComplete="off" onSubmit={handleSubmit}>
      <label
        htmlFor="username"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Username <span className="text-red-500">*</span>
      </label>
      <input
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="username"
        placeholder="Johndoe"
        type="text"
        autoComplete="name"
        autoCorrect="off"
        autoCapitalize="none"
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></input>

      <label
        htmlFor="email"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Email <span className="text-red-500">*</span>
      </label>
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="name@example.com"
        type="email"
        autoComplete="username"
        autoCorrect="off"
        autoCapitalize="none"
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></input>

      <label
        htmlFor="password"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Password <span className="text-red-500">*</span>
      </label>
      <input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        autoComplete="new-password"
        autoCorrect="off"
        autoCapitalize="none"
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></input>
      <label
        htmlFor="secondpassword"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Re-type Password <span className="text-red-500">*</span>
      </label>
      <input
        required
        value={secondPassword}
        onChange={(e) => setSecondPassword(e.target.value)}
        id="secondpassword"
        type="password"
        autoComplete="new-password"
        autoCorrect="off"
        autoCapitalize="none"
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></input>

      <button
        disabled={!formValidation()}
        className={`rounded my-2 py-1 px-2 ${
          formValidation() ? "bg-blue-500 hover:bg-blue-600" : ""
        }`}
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
