import { serverHttp } from "./app";

serverHttp.listen(4000, () => {
    console.log("Server is runnung: http://localhost:4000.");
});