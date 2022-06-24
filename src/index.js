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
    // adds item to the cart
   
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
// delete an item from the cart
        const btn2 = document.getElementById("btn2")
        btn2.style.visibility="visible"

        btn2.addEventListener("click", () => {
            p.remove()
            // if (click === true){}
            // btn2.style.visibility="hidden"
            location.reload()
        })

        

        form.reset()

        
    })
   
}

// // displayImages()



function fetchImages(){
    fetch ('https://juddymwai.github.io/phaseOneFinalProject/db.json')
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
