import {useState, useEffect} from 'react';
import Axios from 'axios'
import Quote from './Quote';

const AnimeQuotes = ({name}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [animeQuotes, setAnimeQuotes] = useState([])

    useEffect(() => {
        Axios.get(`https://animechan.vercel.app/api/quotes/character?name=${name}`)
        .then(res => {
            console.log(res)
            setAnimeQuotes(res.data)
            setIsLoading(false)
        }).catch(err => console.log("Error getting anime Quotes", err))

    }, [name])

    if (isLoading) {
        return <p> Loading ... </p>
    }

    if(!isLoading && animeQuotes.length === 0) {
        return <p> Could not find quotes for {name} </p>
    }

    return(
        <div>
            {animeQuotes.map((quote, index) => {
               return <Quote key={index} quote={quote.quote} character={quote.character} />
            })}
        </div>
    )
}

export default AnimeQuotes