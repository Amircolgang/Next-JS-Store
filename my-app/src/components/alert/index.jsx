// components/Alert.js

const Alert = ({ type = "info", message, onClose }) => {
  const baseStyle =
    "flex items-center justify-between px-4 py-3 rounded relative mb-4";
  const typeStyle = {
    info: "bg-blue-100 text-blue-800 border border-blue-300",
    success: "bg-green-100 text-green-800 border border-green-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    error: "bg-red-100 text-red-800 border border-red-300",
  };

  return (
    <div className={`${baseStyle} ${typeStyle[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button
          className="ml-4 text-xl font-bold focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;