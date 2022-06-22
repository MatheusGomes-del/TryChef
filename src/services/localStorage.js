// export function getMealsToken() {
//   if (localStorage.length > 0) {
//     const storage = localStorage.getItem('mealsToken');
//     return storage;
//   }
// }

export function setMealsToken(token) {
  localStorage.setItem('mealsToken', token);
}

// export function getCocktailsToken() {
//   if (localStorage.length > 0) {
//     const storage = localStorage.getItem('cocktailsToken');
//     return storage;
//   }
// }

export function setCocktailsToken(token) {
  localStorage.setItem('cocktailsToken', token);
}

// export function getEmail() {
//   if (localStorage.length > 0) {
//     const storage = JSON.parse(localStorage.getItem('user'));
//     return storage;
//   }
// }

export function saveEmail(email) {
  localStorage.setItem('user', JSON.stringify(email));
}

export function getDoneRecipes() {
  if (localStorage.length > 0) {
    const storage = JSON.parse(localStorage.getItem('doneRecipes'));
    return storage;
  }
}

export function setDoneRecipes(doneRecipe) {
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
}

export function getInProgressRecipes() {
  const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return storage;
}

export function setInProgressRecipes(inProgressRecipe) {
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipe));
}

export function getFavoriteRecipes() {
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return storage;
}

export function setFavoriteRecipes(favoriteRecipe) {
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipe));
}
