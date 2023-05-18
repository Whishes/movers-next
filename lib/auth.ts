import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import userData from "../app/api/v0.1/user/data.json";

export const getUserFromData = (email: string) => {
  const data = userData.data;
  return data.filter((user) => user.email === email)[0];
};

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johnsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        //  add logic to search for user using credentials
        // console.log({ credentials });
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // console.log(email, password);
        //validate
        if (!email || !password) throw new Error("invalid credentials");

        const user = getUserFromData(email);
        // console.log(user);

        if (!user) throw new Error("user doesn't exist");

        if (user.password !== password)
          throw new Error("invalid email or password");

        return { id: user.user_id, name: user.username, email: user.email };
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      // console.log("line 48 auth.ts", { token, session });
      session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      // console.log("line 64 auth.ts", { token, user });

      if (user) {
        token.id = user.id;
      }
      return { id: token.id, name: token.name, email: token.email };
    },
  },
};
