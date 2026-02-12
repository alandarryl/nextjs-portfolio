
import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema(
    {
        //
    },
    {timestamps: true}
);

export default mongoose.models.Skills || mongoose.model("Skills", SkillsSchema);
