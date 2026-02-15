// import { NextResponse } from "next/server";
// import connect from "@/libs/mongodb";
// import Skills from "@/models/skills.model";
// import cloudinary from "@/libs/cloudinary";

// export async function GET(req, {params}) {
//     try{
//         await connect();

//         const skill = await Skills.findById(params.id);

//         if(!skill) return NextResponse.json({message: "Skill not found"},{status: 404});

//         return NextResponse.json(skill, {status: 200});

//     }catch(error){
//         //
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }


// export async function PUT(req, {params}) {
//     try {
//         await connect();

//         const formData =await req.formData();

//         const skillName = formData.get("skillName");
//         const descriptif = formData.get("descriptif");
//         const scale = Number(formData.get("scale"));
//         const skillLevel = formData.get("skillLevel");
//         const imageFile = formData.get("image");

//         const updateData = {
//             skillName,
//             descriptif,
//             scale,
//             skillLevel
//         }

//         //si nouvelle image
//         const bytes = await imageFile.arrayBuffer();
//         const buffer = Buffer.from(bytes);


//         const uploadResult = await new Promise((resolve, reject) => {
//         cloudinary.uploader
//             .upload_stream({ folder: "skills" }, (error, result) => {
//                 if (error) reject(error);
//                 else resolve(result);
//             })
//             .end(buffer);
//         });

//         updateData.image = uploadResult.secure_url;


//         const updateSkill = await Skills.findByIdAndUpdate(
//             params.id,
//             updateData,
//             {new: true}
//         );

//         return NextResponse.json(updateSkill, {status: 200});



//     } catch (error) {
//         return NextResponse.json({error: error.message}, {status: 500});
//     }
// }

// export async function DELETE(re, {params}) {
//     try {
//         await connect();

//         await Skills.findByIdAndDelete(params.id);

//         return NextResponse.json({message: "Deleted successfully"}, {status:200});

//     } catch (error) {
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }

