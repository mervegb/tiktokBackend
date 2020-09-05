import mongoose from "mongoose";

//schema tells database what kind of structures will be in it
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//Collection inside the database
//collection is like table in sql
//basically we have collection of tiktok videos which has tiktok schema data structure
export default mongoose.model("tiktokVideos", tiktokSchema);
