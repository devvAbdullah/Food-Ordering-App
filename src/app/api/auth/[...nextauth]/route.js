import mongoose from "mongoose"

import bcrypt from "bcrypt";
import { User } from "../../../models/User"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongoConnect";
const handler =  NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise ),
    providers: [
        CredentialsProvider({
          name: 'Credentials',
        
          credentials: {
            username: { label: "Email", type: "email", placeholder: "test@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
             
            // console.log({credentials})
            const {email , password}=credentials
            mongoose.connect(process.env.MONGO_URL)
            const user = await User.findOne({email})
            const passwordok = user &&  bcrypt.compareSync(password, user.password);
            if (passwordok) {
           console.log(user)
              return user;
            }
            console.log('Could not find', user)
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }