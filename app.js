const quoteText = document.querySelector('.quote')
const authorName = document.querySelector('.name')
const quoteBtn = document.querySelector('button')
const soundBtn = document.querySelector('.sound')
const copyBtn = document.querySelector('.copy')



quoteBtn.addEventListener('click', randomQuote)

// random quote function
function randomQuote() {
    quoteBtn.innerText = 'Loading Quote...'
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(result => {
            console.log(result)
            quoteText.innerText = result.content
            authorName.innerText = result.author
            quoteBtn.innerText = 'New Quote'
        })
}



// Voice Speech 
soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance)
})

// copying the text on click
copyBtn.addEventListener('click', () => {
    // writeText() writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText)
})
