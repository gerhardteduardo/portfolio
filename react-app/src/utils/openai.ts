export const askQuestion = async (question: string): Promise<string> => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    return data.answer;
  } catch (error) {
    console.error("Erro ao conectar com o backend:", error);
    return "Desculpe, algo deu errado!";
  }
};
