const express = require("express");
const cors = require("cors");
const g4f = require("g4f"); // Biblioteca g4f

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para o chatbot
app.post("/api/chat", async (req, res) => {
  
  console.log("Métodos disponíveis no g4f:", Object.keys(g4f));
  console.log("Métodos disponíveis no g4f.G4F:", Object.keys(g4f.G4F));
  

  try {
    const { question } = req.body;

    const response = await g4f.G4F.chatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Você responde perguntas sobre Eduardo Gerhardt." },
        { role: "user", content: question },
      ],
    });
    

    res.json({ answer: response });
  } catch (error) {
    console.error("Erro ao conectar com o g4f:", error);
    res.status(500).json({ error: "Erro ao buscar resposta." });
  }
});

// Inicia o servidor na porta 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
