
import mongoose from " mongoose"

let isConnected = false

const connect = async () =>{
    if(isConnected) return;

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        } )
    } catch (error) {
        console.error("Erreur de connexion MongoDB : ", error.message );
        throw new error("Error in connection");
    }
}


export default connect;

