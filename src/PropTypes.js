import PropTypes from 'prop-types'

const SearchAuthorPropTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quoteCount: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
    selectedAuthor: PropTypes.string,
    quotes: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
    errorMessage: PropTypes.string,
    handleAuthorClick: PropTypes.func.isRequired,
    handleFavorite: PropTypes.func.isRequired,
};

const HomepagePropTypes = {
  quote: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};

const AppPropTypes = {};

export { SearchAuthorPropTypes, HomepagePropTypes, AppPropTypes };