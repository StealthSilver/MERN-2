import mongoose, { Schema, Types, model } from 'mongoose';
mongoose.connect("mongodb://localhost:27017/Brainly")

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const tagSchema = new Schema({
  title: { type: String, required: true, unique: true },
});


const contentTypes = ['image', 'video', 'article', 'audio']; // extend as required

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});


const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});


export const UserModel = model('User', userSchema);
export const TagModel = model('Tag', tagSchema);
export const ContentModel = model('Content', contentSchema);
export const LinkModel = model('Link', linkSchema);
