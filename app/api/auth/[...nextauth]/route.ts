import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "$2a$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1m",
    role: "user",
    demographic: "professionals",
    location: "Mumbai, Maharashtra",
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = users.find(user => user.email === credentials.email);
        if (!user) return null;
        
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) return null;
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          demographic: user.demographic,
          location: user.location,
        };
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.demographic = user.demographic;
        token.location = user.location;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
        session.user.demographic = token.demographic as string;
        session.user.location = token.location as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-here",
});

export { handler as GET, handler as POST };
