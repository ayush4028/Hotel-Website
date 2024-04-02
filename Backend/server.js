import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js"

const PORT = process.env.PORT || 4003;

app.listen(PORT ,(error) => {
    if(error) {
        console.log(error);
        process.exit(1);
    }
    dbConnection();
    console.log(`Server is running on the PORT ${process.env.PORT}`);
});