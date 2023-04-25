import './SearchPage.css'
import Header from './components/Hearder'
import React, {useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

function SearchPage() {
    const location = useLocation();
    console.log(location.state.arrival)
    const [town, setTown] = useState<any[]>([]);

    useEffect(() =>{
        // if (searchWord !== "") {
        fetch(`https://api.comparatrip.eu/cities/popular/from/${location.state.arrival}/5`)
            .then(response => response.json())
            .then(data => setTown(data))
            .catch(error => console.error(error));
        // } else {
        //     setTown([]);
        // }
    }, [location.state.arrival])
    console.log(town)

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
                    <div className='searchPageInput arrivalInput'>
                        Arrivée :
                        <input placeholder="Où allons nous ?">
                        </input>
                        {location.state.arrival}
                    </div>
                </div>
                {town.length > 0 && (
                    <ul>
                    {town.map(t => (
                        <li key={t.unique_name}>
                            <Link 
                                to=
                                    '/searchPage'
                                state = {{
                                    arrival: t.unique_name
                            }}>
                                <a>{t.local_name}</a>
                            </Link>
                        </li>
                    ))}
                    </ul>
                )}
                
            </body>
        </>
    )
}

export default SearchPage
