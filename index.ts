import app from "./app";
import { AppDataSource } from "./src/data-source";

const PORT = 3000;
AppDataSource.initialize().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server listening on port",PORT);
    });
})
.catch((err)=>{
    console.log(err);
})