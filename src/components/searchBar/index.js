const SearchBar = () => {

  const handleUpdate = (event) => {
    console.log(event.target.value);
  }
  return (
    <input type="text" className="form-control form-search"
    onChange={handleUpdate}/>
  );
}

export default SearchBar;
