export default function Input({ value, onChange, type, placeholder, error }) {
  return (
    <span className="input-container">
      <input
        value={value || ""}
        onChange={(e) => onChange && onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={"input " + (error ? "input-error" : "")}
      />
      <span className="input-error-msg">{error}</span>
    </span>
  );
}
