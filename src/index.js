function displayImages(book){
    const div = document.querySelector('#nav')
    // const span= document.createElement('span')
    // div.appendChild(span)
    const img= document.createElement('img')
    div.appendChild(img)
    img.src= book.image

// fetch image details
    img.addEventListener('mouseover', function(e){
        const div2= document.querySelector('#details')
        const subtitles= document.querySelector('#subtitles')
        const title= document.querySelector('#title')
        const vote= document.querySelector('#vote')
        const price= document.querySelector('#price')
        title.textContent=book.name
        vote.textContent= book.votes

    })
   
    const btn1= document.querySelector('form')
    btn1.addEventListener('submit', function(e){
        e.preventDefault()
       
        const p = document.createElement("p")
        car.appendChild(p)
        // const cart=document.querySelector('#cart')
        // const p=document.querySelector('#items')

        // const span2= document.querySelector('#price1')
        // const p = document.createElement("p")
        // car.appendChild(p)
        // p.innerHTML = ` 
        // // Title: ${title.textContent} <br>
        // // price: ${vote.textContent} <br>
        // // Vote: Trial
        // ${title.textContent} ${vote.textContent}
        // `
        p.innerHTML=`
        ${title.textContent}   ${vote.textContent}
        `
        
        // span2.innerText = vote.textContent
        
        

        
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



