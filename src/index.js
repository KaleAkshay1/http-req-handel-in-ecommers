import express from "express";
import home from "./routes/home.route.js";
import connections from "./db/connections.js";

connections();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
