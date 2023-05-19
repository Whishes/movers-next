import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Movers - Register",
  description: "Register an account",
};

const RegisterPage = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-blue-500">
            Welcome
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to create an account
          </p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm">
          <Link
            href="/login"
            className="hover:text-gray-600 underline underline-offset-4"
          >
            Already have an account? Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
