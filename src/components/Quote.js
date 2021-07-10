
const Quote = ({quote, character}) => {


    return (
        <div>
            <h4>
                {quote}
            </h4>
            <p>- {character}</p>
        </div>
    )
}

export default Quote