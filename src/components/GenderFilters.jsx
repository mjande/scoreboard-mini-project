export default function GenderFilters({ genderId, setGenderId }) {
  return (
    <div>
      <label
        htmlFor="all-genders"
        className={"filter-label " + (genderId ? "" : "active")}
      >
        All
      </label>
      <input
        type="radio"
        id="all-genders"
        name="gender-id"
        className="visually-hidden"
        onChange={() => setGenderId("")}
      />

      <label
        htmlFor="mens"
        className={"filter-label " + (genderId === "1" ? "active" : "")}
      >
        Men's
      </label>
      <input
        type="radio"
        id="mens"
        name="gender-id"
        className="visually-hidden"
        onChange={() => setGenderId("1")}
      />

      <label
        htmlFor="womens"
        className={"filter-label " + (genderId === "2" ? "active" : "")}
      >
        Women's
      </label>
      <input
        type="radio"
        id="womens"
        name="gender-id"
        className="visually-hidden"
        onChange={() => setGenderId("2")}
      />

      <label
        htmlFor="coed"
        className={"filter-label " + (genderId === "3" ? "active" : "")}
      >
        CoEd
      </label>
      <input
        type="radio"
        id="coed"
        name="gender-id"
        className="visually-hidden"
        onChange={() => setGenderId("3")}
      />
    </div>
  );
}
