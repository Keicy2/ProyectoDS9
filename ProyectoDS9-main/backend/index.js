import app from "./app.js";
import { connectDB } from "./src/db/db.js";
import { PORT } from "./config.js";
 
connectDB();


app.listen(PORT, () => {
  console.log(`server listen on port http://localhost:${PORT}`);
});
