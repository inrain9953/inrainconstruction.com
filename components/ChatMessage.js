export default function ChatMessage({ message, isBot }) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} m-4`}>
      <div
        className={`max-w-lg p-3 rounded-lg ${
          isBot ? "bg-blue-200" : "bg-green-200"
        }`}
      >
        <p style={{ whiteSpace: "pre-line" }} className="text-black text-sm md:text-xs font-normal text-justify">
          {message.text}
          </p>
      </div>
    </div>
  );
}
