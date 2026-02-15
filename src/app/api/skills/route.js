import { NextResponse } from "next/server";
import connect from "@/libs/mongodb";
import skillsModel from "@/models/skills.model";
import cloudinary from "@/libs/cloudinary";

export async function POST(req){
    try {
        await connect();

        //get data sent by the form
        const formData = await req.formData();

        //assign each data to value of the model
        const skillName = formData.get("skillName");
        const imageFile = formData.get("image");
        const descriptif = formData.get("descriptif");
        const scale = Number(formData.get("scale"));
        const skillLevel = formData.get("skillLevel");

        if (!imageFile) {
            return NextResponse.json({ error: "Image required" }, { status: 400 });
            }


        // edit image
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        //transformer l'image en url
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({ folder: "skills" }, (error, result) => {
                if (error) reject(error);
                else resolve(result);
                })
                .end(buffer);
        });

        //create data in the database
        const skill = await skillsModel.create({
            skillName,
            descriptif,
            scale,
            skillLevel,
            image: uploadResult.secure_url,
        })

        return NextResponse.json(skill, {status:201 } );        
        

    } catch (error) {
        //
        return NextResponse.json({error: error.message}, {status: 500} );
    }
}

export async function GET(req) {
    try {
        await connect();

        const skills = await skillsModel.find();

        if (skills.length === 0) {
            return NextResponse.json({ message: "No skills found" }, { status: 404 });
        }


        return NextResponse.json(skills, {status: 200} );

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500} );
    }
}

