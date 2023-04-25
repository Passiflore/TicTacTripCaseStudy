import './SearchPage.css'
import Header from './components/Header'
import React, {useEffect, useState, useCallback, ChangeEvent} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

function SearchPage() {
    const location = useLocation();
    const [searchWord, setSearchWord] = useState("");
    const [searchWordArrival, setSearchWordArrival] = useState("");
    const [town, setTown] = useState<any[]>([]);
    const [townArrival, setTownArrival] = useState<any[]>([]);
    const [departure, setDeparture] = useState(location.state.departure || "");
    const [arrival, setArrival] = useState(location.state.arrival || "");
    const [townPopular, setTownPopular] = useState<any[]>([]);
    const [townArrivalPopular, setTownArrivalPopular] = useState<any[]>([]);

    function searchState(event: ChangeEvent<HTMLInputElement>){
        setDeparture(event.target.value)
        setSearchWord(event.target.value)
    }
    function searchStateArrival(event: ChangeEvent<HTMLInputElement>){
        setArrival(event.target.value)
        setSearchWordArrival(event.target.value)
    }

    function capitalize(str : string){
        if (str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }

    const handleClick = useCallback((localName: string) => () => {
        setSearchWord(localName);
        setDeparture(localName)
    }, []);

    const handleClickArrival = useCallback((localName: string) => () => {
        setSearchWordArrival(localName);
        setArrival(localName)
    }, []);

    useEffect(() =>{
        if (searchWord !== "") {
        fetch(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchWord}`)
            .then(response => response.json())
            .then(data => setTown(data))
            .catch(error => console.error(error));
        } else {
            setTown([]);
        }
    }, [searchWord])

    useEffect(() =>{
        if (searchWordArrival !== "") {
        fetch(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchWordArrival}`)
            .then(response => response.json())
            .then(data => setTownArrival(data))
            .catch(error => console.error(error));
        } else {
            setTown([]);
        }
    }, [searchWordArrival])

    useEffect(() =>{
        if(arrival !== "" ){
            fetch(`https://api.comparatrip.eu/cities/popular/from/${arrival.toLowerCase()}/5`)
            .then(response => response.json())
            .then(data => setTownArrivalPopular(data))
            .catch(error => console.error(error));
        } else {
            setTownArrival([]);
        }
    }, [townArrival, arrival])

    useEffect(() =>{
        if (departure !== ""){
            fetch(`https://api.comparatrip.eu/cities/popular/from/${departure.toLowerCase()}/5`)
            .then(response => response.json())
            .then(data => setTown(data))
            .catch(error => console.error(error));
        }else{
            setTown([]);
        }
        }, [departure])

    // useEffect(() =>{
    //     if (searchWord == "") {
    //     fetch(`https://api.comparatrip.eu/cities/popular/5 `)
    //         .then(response => response.json())
    //         .then(data => setTownPopular(data))
    //         .catch(error => console.error(error));
    //     } else {
    //         setTownPopular([]);
    //     }
    // }, [searchWord])

    return (
        <>
            <Header></Header>
            <h4 className='TitleSearchPage'>Rechercher</h4>
            <body className='bodySearchPage'>
                <div className='searchBar'>
                    <div className='searchPageInput departureInput'>
                        Départ :
                        <input
                            type="text"
                            placeholder="D'où partons-nous ?"
                            value={capitalize(departure)}
                            onChange={searchState}
                        ></input>
                    </div>
                    <div className='searchPageInput arrivalInput'>
                        Arrivée :
                        <input
                        placeholder="Où allons nous ?"
                        value={capitalize(arrival)}
                        onChange={searchStateArrival}
                        ></input>
                    </div>
                </div>
                {searchWord !== "" && (
                    <ul>
                        {town.map(t => (
                        <li onClick={handleClick(t.local_name)} key={t.unique_name}>
                            <span>{t.local_name}</span>
                        </li>
                        ))}
                    </ul>
                    )}
                    {searchWordArrival !== "" && (
                    <ul>
                        {townArrival.map(t => (
                        <li onClick={handleClickArrival(t.local_name)} key={t.unique_name}>
                            <span>{t.local_name}</span>
                        </li>
                        ))}
                    </ul>
                    )}
                    {townArrival.length === 0 &&(
                    <ul>
                        <p className='textSeparator'>Destinations populaires :</p>
                        {townArrivalPopular.map(t => (
                            <li onClick={handleClick(t.local_name)} key={t.local_name}>
                                <span>{t.local_name}</span>
                            </li>
                        ))}
                    </ul>
                    )}
                    {town.length === 0 &&(
                    <ul>
                        <p className='textSeparator'>Destinations populaires :</p>
                        {townPopular.map(t => (
                            <li onClick={handleClickArrival(t.local_name)} key={t.local_name}>
                                <span>{t.local_name}</span>
                            </li>
                        ))}
                    </ul>
                    )
                }
            </body>
        </>
    )
}

export default SearchPage
