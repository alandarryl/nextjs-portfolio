
import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        image: {
            type: String,
        }
        ,
        technologies: {
            type: [String],
            required: true
        },
        skillUse:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skills"
        }],
        completedDate:{
            type: Date
        },
        description: {
            type: String,
        },
        comment:{
            type: String,
        },
        link:{
            type: String
        },
        repositoryLink: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

export default mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);
