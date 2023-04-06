
const categoriesList = document.querySelectorAll('.item'); 
// console.log(categoriesList);

const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const subCategoryNumber = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle} 
    Elements: ${subCategoryNumber}`);
});

