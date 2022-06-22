function displayImages(book){
    const div = document.querySelector('#nav')
    // const span= document.createElement('span')
    // div.appendChild(span)
    const img= document.createElement('img')
    div.appendChild(img)
    img.src= book.image
    

// // fetch image details
    img.addEventListener('click', function(e){
        const div2= document.querySelector('#details')
        const subtitles= document.querySelector('#subtitles')
        const title= document.querySelector('#title')
        const link= document.querySelector('#vote')
        const price= document.querySelector('#price1')
        title.textContent=book.title
        price.textContent= book.price
        subtitles.textContent=book.subtitle
        link.textContent=book.url

    })
   
    const btn1= document.querySelector('form')
    btn1.addEventListener('submit', function(e){
        e.preventDefault()
        // const p = document.createElement("p")
        // car.appendChild(p)
        const p=document.querySelector('#items')
        p.innerHTML=`
        ${title.textContent} ---
        ${price1.textContent}
`

//         // const cart=document.querySelector('#cart')
//         // const p=document.querySelector('#items')

//         // const span2= document.querySelector('#price1')
//         // const p = document.createElement("p")
//         // car.appendChild(p)
//         // p.innerHTML = ` 
//         // // Title: ${title.textContent} <br>
//         // // price: ${vote.textContent} <br>
//         // // Vote: Trial
//         // ${title.textContent} ${vote.textContent}
//         // `
        
//         // span2.innerText = vote.textContent
        
        

        
    })
   
}

// // displayImages()



function fetchImages(){
    fetch ('http://localhost:3000/books')
    .then (function(response){
        return response.json()

    })
    .then(function(data){
        console.log(data)
        
       
        return data.forEach(book => {displayImages(book)})
       
        

    })
}
fetchImages()

// make payment
function makePurchase(){
    const element=document.querySelector('#purchase-form')
    element.addEventListener('submit',function(e){
    
        alert('Purchase made Successfully')
    })
}
makePurchase()
