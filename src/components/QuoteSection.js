import React, {useState, useEffect} from 'react'

const QuoteSection = () => {
    const [quote, setQuote] = useState('')
    let options = {
        method: 'GET',
        url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
        params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_API_KEY,
          'x-rapidapi-key': process.env.REACT_APP_API_HOST
        }
      };

    

    const getQuote = (options) => {
        fetch('https://healthruwords.p.rapidapi.com/v1/quotes/')
        .then(res => res.json())
        .then(data => setQuote(data.content))
    }
    return (
        <div>
            
        </div>
    )
}

export default QuoteSection
