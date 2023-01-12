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
      <select name="sport">
        <option value="1">Basketball</option>
        <option value="2">Football</option>
        <option value="3">Baseball</option>
        <option value="4">Softball</option>
        <option value="5">Lacrosse</option>
        <option value="6">Soccer</option>
        <option value="7">Volleyball</option>
        <option value="8">Field Hockey</option>
        <option value="9">Ice Hockey</option>
        <option value="10">Water Polo</option>
        <option value="11">Cross Country</option>
        <option value="12">Golf</option>
        <option value="13">Tennis</option>
      </select>
    </form>
  );
}
