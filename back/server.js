const express = require("express");
const connectDB = require("./Config/database");
const cors = require("cors");

const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const statusRoutes = require("./Routes/statusRoutes");
const BuyRoutes = require("./Routes/BuyRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(statusRoutes);
app.use(BuyRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
