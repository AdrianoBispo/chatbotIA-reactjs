import React, { useRef } from "react";

export const ChatForm = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Atualiza o histórico de conversa com a mensagem do usuário
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // O bot responde "Thinking", enquanto a IA não processou a mensagem, quando o usuário envia uma mensagem.
    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking..." },
        ]),

      // Chama a função que gera a resposta do bot
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]),
      600
    );
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">keyboard_arrow_up</button>
    </form>
  );
};
