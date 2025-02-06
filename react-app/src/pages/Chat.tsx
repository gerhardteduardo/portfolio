import { useState } from "react";
import { askQuestion } from "../utils/openai"; // Ajuste o caminho conforme a sua estrutura

const Chat = () => {
  const [input, setInput] = useState<string>(""); // Estado para a pergunta
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]); // Histórico de mensagens

  const handleSend = async () => {
    if (!input.trim()) return;

    // Adiciona a pergunta ao histórico
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    // Chama a API para obter a resposta
    const response = await askQuestion(input);

    // Adiciona a resposta da IA ao histórico
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);

    // Limpa o campo de entrada
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Pergunte ao Chatbot!</h1>

      <div className="mb-4">
        {/* Histórico de mensagens */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg mb-2 ${
              msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <strong>{msg.role === "user" ? "Você" : "Chatbot"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>

      {/* Campo de entrada */}
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          placeholder="Faça sua pergunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
