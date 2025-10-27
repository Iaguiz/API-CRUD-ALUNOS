import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// rota de saúde (teste)
app.get("/health", (_req, res) => {
    res.status(200).json({ok: true, api: "express+ts"});
});

export default app;