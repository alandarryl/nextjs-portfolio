
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
            type: String
        }
    },
    {timestamps: true}
);

export default mongoose.models.Skills || mongoose.model("Skills", SkillsSchema);
