
import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
    {
        //
    },
    {timestamps: true}
);

export default mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);
