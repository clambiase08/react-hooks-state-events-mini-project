import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  
  const categoryButtons = categories.map((category) => {

    function handleCatClick() {
      onSelectedCategory(category)
    }

    const className = category === selectedCategory ? "selected" : null
    
    return <button 
    key={category}
    className = {className}
    onClick={handleCatClick}>
      {category}
      </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
