import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.send({ say: "hello" });
});

const port = 6001;

app.listen(port, () => console.log("listening on " + port));

export default app;
