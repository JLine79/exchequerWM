/* Carousel slides */

const articles = document.getElementsByClassName("article");
//const carouselDisplay = document.querySelector("#articles-inner");
//console.log(articles)

function startPosition ()

function carouselData (array) {

    let startPosition = 0
    let displayArticles = []
    displayArticles.push(array[startPosition], array[startPosition+1], array[startPosition+2]);

    const showArticle = (item) => {
        if (item.classList.contains("hide")) {
            item.classList.remove("hide")
            item.classList.add("active")
        }
    }

    displayArticles.forEach(showArticle)
    
    let updateArticles = (startPosition) => {
        displayArticles.pop()
        displayArticles.push(array[startPosition], array[startPosition+1], array[startPosition+2]);
        displayArticles.forEach(showArticle)
    }
    
    const handleLeft = () => {
        if (startPosition !== 0) {
        let leftMove = startPosition - 1
        console.log(leftMove)
        updateArticles(leftMove)
        startPosition = leftMove
        }
    }

    const moveLeft = document.querySelector("#leftCarousel");
    moveLeft.addEventListener("click",handleLeft);

    const handleRight = () => {
        if (startPosition !== array.length) {
          let rightMove = startPosition + 1
          console.log(rightMove)      
          updateArticles(rightMove)
          startPosition = rightMove
        }
    }

    const moveRight = document.querySelector("#rightCarousel");
    moveRight.addEventListener("click", handleRight);
    console.log(startPosition)
};

carouselData(articles)