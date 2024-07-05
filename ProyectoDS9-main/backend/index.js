import app from "./app.js";
import { connectDB } from "./src/db/db.js";
 
connectDB();

const PORT = process.env.PORT ?? 2389;
app.listen(PORT, () => {
  console.log(`server listen on port http://localhost:${PORT}`);
});
