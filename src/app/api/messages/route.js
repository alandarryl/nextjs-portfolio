
import connect from "@/libs/mongodb";
import { NextResponse } from "next/server";
import messagesModel from "../../../../models/messages.model";

export async function POST(req) {
    try {
        await connect();

        //get data sent
        const formData = await req.formData();

        const data = Object.fromEntries(formData.entries());

        if(!data) return NextResponse.json({message: "Error of entry"}, {status: 404});

        //create the message in our model
        const messageCreated = await messagesModel.create(data);

        return NextResponse.json({result: messageCreated},{status:201} );


    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500} );
    }
}

export async function GET(req) {
    try {
        await connect();

        //get all message
        const messages = await messagesModel.find();

        return NextResponse.json(messages, {status: 200});

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

