export default function DateInput({ date, setDate }) {
  return (
    <input
      id="date-input"
      aria-label="date-input"
      type="date"
      defaultValue={date}
      onChange={(e) => setDate(e.target.value)}
    />
  );
}
