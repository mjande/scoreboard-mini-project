import "./App.css";

export default function App() {
  const currentDate = new Date().toISOString().substring(0, 10);

  return (
    <form>
      <input type="date" defaultValue={currentDate} />
    </form>
  );
}
