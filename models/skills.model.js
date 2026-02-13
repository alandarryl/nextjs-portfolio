
import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema(
    {
        skillName:{
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        descriptif: {
            type: String,
            required: true
        },
        scale: {
            type: Number,
            min: 1,
            max: 5
        },
        skillLevel:{
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
            default: "Beginner"
        }
    },
    {timestamps: true}
);

export default mongoose.models.Skills || mongoose.model("Skills", SkillsSchema);
