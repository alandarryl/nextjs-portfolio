
import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema(
    {
        //
    },
    {timestamps: true}
);

export default mongoose.models.Messages || mongoose.model("Messages", MessagesSchema);
