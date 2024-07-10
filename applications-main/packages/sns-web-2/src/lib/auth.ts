import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import { getServerSession as originalGetServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any), // eslint-disable-line
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // ユーザの確認
      const dbUser = await prisma.user.findFirst({
        where: { email: token.email },
      });
      // いなければ新規ユーザ
      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      //いればそのユーザ情報を使う
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },

    // Sessionに追加
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
};

export const getServerSession = async () => {
  // ❌: React.cache で囲んでいない
  return originalGetServerSession(authOptions);
};
