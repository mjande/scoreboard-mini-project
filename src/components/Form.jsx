export default function Form({ date, setDate }) {
  return (
    <form>
      <input
        id="date-input"
        aria-label="date-input"
        type="date"
        defaultValue={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </form>
  );
}
