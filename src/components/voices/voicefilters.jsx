import "./voicefilters.css";

function VoiceFilters({ filters, setFilters }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      language: "",
      gender: "",
      age: "",
      accent: "",
      category: "",
    });
  };

  return (
    <div className="voice-filters">

      <div className="voice-filters__header">
        <span>FILTER VOICES</span>

        <button onClick={clearFilters}>
          CLEAR ALL
        </button>
      </div>

      <div className="voice-filters__fields">

        <div className="voice-filter">
          <label htmlFor="language">
            LANGUAGE
          </label>

          <select
            id="language"
            name="language"
            value={filters.language}
            onChange={handleChange}
          >
            <option value="">All languages</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div className="voice-filter">
          <label htmlFor="gender">
            GENDER
          </label>

          <select
            id="gender"
            name="gender"
            value={filters.gender}
            onChange={handleChange}
          >
            <option value="">All voices</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>

        <div className="voice-filter">
          <label htmlFor="age">
            AGE
          </label>

          <select
            id="age"
            name="age"
            value={filters.age}
            onChange={handleChange}
          >
            <option value="">All ages</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Mature">Mature</option>
          </select>
        </div>

        <div className="voice-filter">
          <label htmlFor="accent">
            ACCENT
          </label>

          <select
            id="accent"
            name="accent"
            value={filters.accent}
            onChange={handleChange}
          >
            <option value="">All accents</option>
            <option value="British">British</option>
            <option value="American">American</option>
            <option value="Australian">Australian</option>
            <option value="European">European</option>
            <option value="French">French</option>
            <option value="Indian">Indian</option>
          </select>
        </div>

        <div className="voice-filter">
          <label htmlFor="category">
            CATEGORY
          </label>

          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All categories</option>
            <option value="Commercial">Commercial</option>
            <option value="Corporate">Corporate</option>
            <option value="E-Learning">E-Learning</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default VoiceFilters;