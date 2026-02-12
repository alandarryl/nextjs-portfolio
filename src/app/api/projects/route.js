
import { NextResponse } from "next/server";
import connect from "@/libs/mongodb";
import projectsModel from "../../../../models/projects.model";

export async function POST(req) {
    try {
        await connect();

    const body = await req.json();

    const projects = await projectsModel.create(body);

    return NextResponse.json(projects, {status: 201});
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

