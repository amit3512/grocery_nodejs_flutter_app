const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const errors = require("./middleware/errors.js");
const swaggerUI = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_DB_CONFIG.DB, {
    useNewUriParser: true,
    useUnifiedTechnology: true,
  })
  .then(
    () => {
      console.log("Database Connected");
    },
    (error) => {
      console.log("Database cant be connected" + error);
    }
  );

app.use(express.json());
app.use("/uploads/", express.static("uploads"));
app.use("/api/", require("./routes/app.routes"));
app.use(errors.errorHandlers);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(process.env.port || 4000, function () {
  console.log("Ready to Go!");
});
