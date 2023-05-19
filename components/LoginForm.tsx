"use client";

import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const searchParams = useSearchParams();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) throw new Error("some values aren't present");

    // console.log({ email, password });
    try {
      const signInResult = await signIn("credentials", {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: searchParams?.get("from") || "/",
      });

      // console.log(signInResult);
      if (signInResult?.error && !signInResult.ok) {
        throw new Error(signInResult.error);
      }
      // don't need this since the redirect callback is set to true
      // if (signInResult?.ok) {
      //   console.log("login worked");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-4">
      <label
        htmlFor="email"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Email
      </label>
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="name@example.com"
        type="email"
        autoComplete="email"
        autoCorrect="off"
        autoCapitalize="none"
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></input>

      <label
        htmlFor="password"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Password
      </label>
      <input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        autoComplete="current-password"
        autoCorrect="off"
        autoCapitalize="none"
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      ></input>

      <button
        className="bg-blue-500 rounded my-2 py-1 px-2 hover:bg-blue-600"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
