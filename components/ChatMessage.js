export default function ChatMessage({ message, isBot }) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} m-4`}>
      <div
        className={`max-w-lg p-3 rounded-lg ${
          isBot ? "bg-blue-100" : "bg-green-100"
        }`}
      >
        <p style={{ whiteSpace: "pre-line" }} className="text-gray-800 text-sm text-justify">
          {message.text}
          </p>
      </div>
    </div>
  );
}
