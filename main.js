function submitScore() {
    const scores = document.getElementsByName('rating')
    const thankYouStatement = document.getElementById('#thank-you-statement')
    
    scores.forEach(score => {
        if (score.checked) {
            console.log(score.value)
            
            document.querySelector('.component__content').innerHTML = thankYouStatement
            const message = `You selected ${score.value} out of 5`
            document.querySelector('.thank-you-message').innerHTML = message
            document.getElementById('thank-you-statement').style.display = 'initial'
            
        }
    })
}
