import "../styles/filters.css";

export default function StatusFilters({ statusId, setStatusId }) {
  return (
    <div>
      <label
        htmlFor="all-statuses"
        className={"filter-label " + (!statusId ? "active" : "")}
      >
        All
      </label>
      <input
        type="radio"
        id="all-statuses"
        name="status-id"
        className="visually-hidden"
        onChange={() => setStatusId("")}
      />

      <label
        htmlFor="upcoming"
        className={"filter-label " + (statusId === "1" ? "active" : "")}
      >
        Upcoming
      </label>
      <input
        type="radio"
        id="upcoming"
        name="status-id"
        className="visually-hidden"
        onChange={() => setStatusId("1")}
      />

      <label
        htmlFor="live"
        className={"filter-label " + (statusId === "2" ? "active" : "")}
      >
        Live
      </label>
      <input
        type="radio"
        id="live"
        name="status-id"
        className="visually-hidden"
        onChange={() => setStatusId("2")}
      />

      <label
        htmlFor="completed"
        className={"filter-label " + (statusId === "3" ? "active" : "")}
      >
        Completed
      </label>
      <input
        type="radio"
        id="completed"
        name="status-id"
        className="visually-hidden"
        onChange={() => setStatusId("3")}
      />
    </div>
  );
}
