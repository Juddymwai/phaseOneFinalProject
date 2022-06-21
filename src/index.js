function displayImages(book){
    const div = document.querySelector('#nav')
    const span= document.createElement('span')
    div.appendChild(span)
    const img= document.createElement('img')
    span.appendChild(img)
    img.src= book.image
}
// displayImages()


function fetchImages(){
    fetch ('http://localhost:3000/characters')
    .then (function(response){
        return response.json()

    })
    .then(function(data){
        // console.log(data)
        return data.forEach(book => {displayImages(book)})

    })
}
fetchImages()