import React from 'react';

function SearchForm(props) {
  return(
    <form action="" method="get" className="search-form">
      <div class="search-form">
        <input type="text" name="search-term" id="search-input" />
      </div>
      <div class="search-submit">
        <input type="submit" value="Search..." />
      </div>
    </form>
  );
}

export default SearchForm;