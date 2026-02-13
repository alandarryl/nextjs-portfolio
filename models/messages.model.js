
import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

export default mongoose.models.Messages || mongoose.model("Messages", MessagesSchema);
