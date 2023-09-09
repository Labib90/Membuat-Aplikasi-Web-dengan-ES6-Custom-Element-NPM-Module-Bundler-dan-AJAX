import '../component/search-bar.js';
import '../component/app-header.js';
import '../component/app-footer.js';
import DataSource from '../data/data-source.js';
import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    movieListElement.movie = results;
  };
 
  const fallbackResult = message => {
    movieListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;


// 
// const main = () => {
//    const searchElement = document.querySelector("search-bar");
  
 
//    const onButtonSearchClicked = async () => {
//        try {
//            const result = await DataSource.searchMeal(searchElement.value);
//            renderResult(result);
//        } catch (message) {
//            fallbackResult(message)
//        }
//    };
 
//    const renderResult = results => {
//        mealListElement.meals = results;
//    };
 
//    const fallbackResult = message => {
//        mealListElement.renderError(message);
//    };
 
//    searchElement.clickEvent = onButtonSearchClicked;
    
// };
 
// export default main;