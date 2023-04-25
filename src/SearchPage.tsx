import './SearchPage.css'
import Header from './components/Header'
import React, {useEffect, useState, useCallback} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

function SearchPage() {
    const location = useLocation();
    const [searchWord, setSearchWord] = useState("");
    const [town, setTown] = useState<any[]>([]);
    const [townDeparture, setTownDeparture] = useState<any[]>([]);
    const [townPopular, setTownPopular] = useState<any[]>([]);
    const [selectedTown, setSelectedTown] = useState('');
    const [searchText, setSearchText] = useState('');

    function searchState(test: string){
        setSearchWord(test)
    }

    function capitalize(str : string){
        if (str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }

    // const closeOverlay = () => {
    //     setIsSearchBarActive(false);
    // };

    const handleClick = useCallback((localName: string) => () => {
        setSelectedTown(localName);
        setSearchWord(localName);
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
        fetch(`https://api.comparatrip.eu/cities/popular/from/${location.state.arrival}/5`)
            .then(response => response.json())
            .then(data => setTown(data))
            .catch(error => console.error(error));
    }, [location.state.arrival])
    console.log(town)

    useEffect(() =>{
        fetch(`https://api.comparatrip.eu/cities/popular/from/${location.state.departure}/5`)
            .then(response => response.json())
            .then(data => setTown(data))
            .catch(error => console.error(error));
    }, [location.state.departure])
    console.log(town)

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
                        type= "text"
                        placeholder="D'où partons-nous ?" 
                        value ={searchWord}
                        defaultValue={selectedTown || capitalize(location.state.departure)}
                        onChange= {event => {searchState(event.target.value)}}
                        ></input>
                    </div>
                    <div className='searchPageInput arrivalInput'>
                        Arrivée :
                        <input placeholder="Où allons nous ?" defaultValue={capitalize(location.state.arrival)}></input>
                    </div>
                </div>
                {/* <div className={`overlay ${isSearchBarActive ? 'active' : ''}`} onClick={closeOverlay}/> */}
                {town.length > 0 && (
                    <ul>
                    {town.map(t => (
                        <li onClick={handleClick(t.local_name)} key={t.unique_name}>
                            <span>{t.local_name}</span>
                        </li>
                    ))}
                    </ul>
                )}
                
            </body>
        </>
    )
}

export default SearchPage
