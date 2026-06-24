function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        margin: "20px 0",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    />
  );
}

export default SearchBar;