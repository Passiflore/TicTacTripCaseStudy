import './SearchPage.css'
import Header from './components/Hearder'

function SearchPage() {

    return (
        <>
            <Header></Header>
            <h4>Rechercher</h4>
            <body className='bodySearchPage'>
                <div className='searchBar'>
                    <div className='searchPageInput departureInput'>
                        Départ :
                        <input placeholder="D'où partons-nous ?"></input>
                    </div>
                    <div className='searchPageInput departureInput'>
                        Arrivée :
                        <input placeholder="Où allons nous ?">
                        </input>
                    </div>
                </div>
                
            </body>
        </>
    )
}

export default SearchPage
