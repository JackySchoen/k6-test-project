import express from "express";
import fs from "fs";

const app = express();
const port = 3000;
const testSummaryDir = "test/summary";

if (!fs.existsSync(testSummaryDir)) fs.mkdirSync(testSummaryDir);

app.get("/", (_req, res) => {
    res.send("hi, this is my k6 test project! :)");
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});