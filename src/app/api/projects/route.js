import { NextResponse } from "next/server";
import connect from "@/libs/mongodb";
import projectsModel from "@/models/projects.model";
import cloudinary from "@/libs/cloudinary";

export async function POST(req) {
    try {
        await connect();

        //recupere les données envoyer par le formulaire
        const formData = await req.formData();

        //ranger chaque donner dans une variable individuelle
        const name = formData.get("name");
        const imageFile = formData.get("image");
        const technologies = formData.get("technologies");
        const skillUse = formData.get("skillUse");
        const completeDate = formData.get("completeDate");
        const description = formData.get("description");
        const comment = formData.get("comment");
        const link = formData.get("link");
        const repositoryLink = formData.get("repositoryLink");

        if (!imageFile) {
            return NextResponse.json({ error: "Image required" }, { status: 400 });
            }


        //edit the image
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        //transformer l'image en url
        const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream({ folder: "projects" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
            })
            .end(buffer);
        });

        //creer la donner dans la base de données
        const project = await projectsModel.create({
        name,
        technologies,
        skillUse,
        completeDate,
        comment,
        link,
        repositoryLink,
        description,
        image: uploadResult.secure_url,
        });

        return NextResponse.json(project, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function GET(req) {
    try {
        await connect();

        const projects = await projectsModel.find();

        return NextResponse.json(projects, {status: 200});

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

