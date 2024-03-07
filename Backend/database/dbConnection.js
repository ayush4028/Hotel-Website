import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HOTEL",
    }).then(() => {
        console.log("Connected to database successfully!");
    }).catch((error) => {
        console.log(`DB facing connection issues ${error}`);
        process.exit(1);
    })
}