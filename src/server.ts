import { app } from "@/app";
import { env } from "./env";

const PORT = 3333;

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});
