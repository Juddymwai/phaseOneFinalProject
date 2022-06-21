function displayImages(book){
    const div = document.querySelector('#nav')
    const span= document.createElement('span')
    div.appendChild(span)
    const img= document.createElement('img')
    span.appendChild(img)
    img.src= book.image

// fetch image details
    img.addEventListener('click', function(e){
        const div2= document.querySelector('#details')
        const p= document.createElement('p')
        div2.appendChild(p)
        
        
    })

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