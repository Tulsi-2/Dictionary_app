let input = document.querySelector('#input')

let search_btn = document.querySelector('#search')

let notFound = document.querySelector('.not_found')

let defBox = document.querySelector('.def')

search_btn.addEventListener('click',(e)=>{
    e.preventDefault()

    //get input data

    let word = input.value

    // call api to get data

    if(word == ''){
        alert('Enter a word')

    }

    getData(word)

})
// async function getData(word){
//     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

//     const data = await response.json()

//     // if empty result

//     if(!data.length){
//         notFound.innerText ='No result found'
//         return;
//     }

//     let definition = data[0].meanings[0].definitions[0];
    
//     defBox.innerText = definition


//     console.log(data)

// }

function getData(word){
    let fetchData = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
 
fetchData.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)

    // if empty result

    if(!data.length){
        notFound.innerText ='No result found'
        return;
    }

    let define = data[0].meanings[0].definitions[0].definition;
    
    defBox.innerText = define

    


})

}



