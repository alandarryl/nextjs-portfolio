
import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
    {
        enterprise:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        debutDate:{
            type: Date
        },
        endDate: {
            type: Date
        },
        skillUse: {
            type: String
        }
    },
    {timestamps: true}
);

export default mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
