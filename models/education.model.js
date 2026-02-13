
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
    {
        formationCenter:{
            type: String,
            required: true
        },
        formationName: {
            type: String,
            required: true
        },
        debutDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        description :{
            type: String
        },
        skillLearn: {
            type: String
        }
    },
    {timestamps: true}
);

export default mongoose.models.Education || mongoose.model("Education", educationSchema);
