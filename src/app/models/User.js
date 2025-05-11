import { error } from "console";
import bcrypt from "bcrypt";
const { Schema, models, model } = require("mongoose");


const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
   validate: pass=>{
    if(pass.length < 5){
        new error("Passwords must be at least 5 characters");
      return false;
    }
   }
  }
}, { timestamps: true });

UserSchema.post('validate', function(user){
  const unhashedPassword = user.password
  const salt = bcrypt.genSaltSync(10);
 user.password = bcrypt.hashSync(unhashedPassword, salt);

})
 export const User = models?.User || model('User',UserSchema);
