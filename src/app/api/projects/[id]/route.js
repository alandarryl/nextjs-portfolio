import { NextResponse } from "next/server";
import connect from "@/libs/mongodb";
import projectsModel from "@/models/projects.model";
import cloudinary from "@/libs/cloudinary";
import { skillsApi } from "@/utils/apiUrl";

export async function GET(req, {params}) {
    
    try {
        await connect();

        const project = await projectsModel.findById(params.id);

        if(!project) return NextResponse.json({message: "Projects not found"}, {status: 404});

        return NextResponse.json(project, {status: 200})

    } catch (error) {
        
    }

}

export async function PUT(req, {params}) {
    try {
        await connect();

        const formData = await req.formData();

        const name = formData.get("name");
        const imageFile = formData.get("image");
        const technologies = formData.get("technologies");
        const skillUse = formData.get("skillUse");
        const completeDate = formData.get("completeDate");
        const description = formData.get("description");
        const comment = formData.get("comment");
        const link = formData.get("link");
        const repositoryLink = formData.get("repositoryLink");

        const updateData = {
            name,
            technologies,
            skillUse,
            completeDate,
            description,
            comment,
            link,
            repositoryLink
        };

        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({ folder: "projects" }, (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    })
                    .end(buffer);
                });

        updateData.image = uploadResult.secure_url;

        const updateProject = await skillsApi.findByIdAndUpdate(
            params.id,
            updateData,
            {new: true}
        );

        return NextResponse.json(updateProject, {status: 200});


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
};


export async function DELETE(req, {params}) {
    try {
        await connect();

        await projectsModel.findByIdAndDelete(params.id);

        return NextResponse.json({message: "Deleted successfully"}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

