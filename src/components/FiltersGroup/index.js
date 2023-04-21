import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onCategoryChange,
    onRatingChange,
    onSearchChange,
    searchValue,
    onClearFilter,
    enterSearchInput,
  } = props

  const renderProductsCategory = () => (
    <div>
      <h1>Category</h1>
      <ul className="category-container">
        {categoryOptions.map(eachCategory => {
          const {categoryId, name} = eachCategory
          const onButtonClick = () => {
            onCategoryChange(categoryId)
          }
          return (
            <li key={categoryId}>
              <p type="button" onClick={onButtonClick}>
                {name}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const renderProductsRating = () => (
    <div>
      <h1>Rating</h1>
      <ul className="ratings-container">
        {ratingsList.map(eachCategory => {
          const {ratingId, imageUrl} = eachCategory
          const onRatingButtonClick = () => onRatingChange(ratingId)
          return (
            <li key={ratingId}>
              <button type="button" onClick={onRatingButtonClick}>
                <img src={imageUrl} alt={`rating ${ratingId}`} /> &up
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-container">
        <input
          type="search"
          onChange={onSearchChange}
          value={searchValue}
          placeholder="Search"
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
      {renderProductsCategory()}
      {renderProductsRating()}

      <button type="button" className="clear-button" onClick={onClearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
