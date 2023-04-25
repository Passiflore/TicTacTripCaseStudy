import '../styles/SearchBar.css'
import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom';


const SearchBar: React.FC = () => {
    const searchBarRef = useRef<HTMLDivElement>(null);
    const [searchWord, setSearchWord] = useState("");
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);


   //raise the search bar
    const handleClick = () => {
        if (searchBarRef.current) {
            const offsetTop = searchBarRef.current.offsetTop;
            const offsetY = 20;
            
            window.scrollTo({
            top: offsetTop - offsetY,
            behavior: 'smooth',
            });
        }
        setIsSearchBarActive(true);
    };

    const closeOverlay = () => {
        setIsSearchBarActive(false);
    };

// collect what the user writes
    function searchState(str: string){
        setSearchWord(str)
    }


    const [town, setTown] = useState<any[]>([]);
    const [townDeparture, setTownDeparture] = useState<any[]>([]);
    const [townPopular, setTownPopular] = useState<any[]>([]);

//fetch the api according to the city
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

//fetch the popular cities according to the city
useEffect(() =>{

    if (searchWord !== "") {
        fetch(`https://api.comparatrip.eu/cities/popular/from/${searchWord.toLowerCase()}/5`)
        .then(res => res.json())
        .then(data => setTownDeparture(data))
        .catch(err => {setTownDeparture([]); console.log(err)})
    }
}, [town, searchWord])

//fetch the popular cities
useEffect(() =>{
    if (searchWord == "") {
    fetch(`https://api.comparatrip.eu/cities/popular/5 `)
        .then(response => response.json())
        .then(data => setTownPopular(data))
        .catch(error => console.error(error));
    } else {
        setTownPopular([]);
    }
}, [searchWord])

    return (
    <div className="searchBarComponent">
        <h1 className="seachBarTitle">Recherchez vos voyages, trajets courts et bien plus encore...</h1>
        <div className='searchBarComponentResult'>
            <div ref={searchBarRef} onClick={handleClick} className="seachBarInput">
                <input
                    type="text"
                    placeholder='Une destination, demande...'
                    onChange= {event => {searchState(event.target.value)}}
                    >
                </input>
                <button className='searchButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none"><path d="M5.98214 2.55966C4.10066 2.55966 2.55688 4.10511 2.55688 5.98864C2.55688 6.3267 2.84634 6.61648 3.18404 6.61648C3.52174 6.61648 3.8112 6.3267 3.8112 5.98864C3.8112 4.78125 4.77606 3.81534 5.98214 3.81534C6.31984 3.81534 6.6093 3.52557 6.6093 3.1875C6.6093 2.84943 6.31984 2.55966 5.98214 2.55966ZM16.7886 15.9375L12.0608 11.2045C13.0739 9.99716 13.6045 8.4517 13.6045 6.85795C13.6045 5.02273 12.8809 3.33239 11.6266 2.02841C10.3723 0.724432 8.63551 0 6.80227 0C4.96904 0 3.28053 0.724432 1.97797 1.98011C0.723646 3.28409 0 5.02273 0 6.80966C0 8.59659 0.723646 10.3352 1.97797 11.6392C3.28053 12.9432 4.96904 13.6193 6.80227 13.6193C8.39429 13.6193 9.93807 13.0881 11.1441 12.0739L15.872 16.8068C16.0167 16.9517 16.1614 17 16.3062 17C16.4509 17 16.6439 16.9517 16.7403 16.8068C17.078 16.5653 17.078 16.179 16.7886 15.9375ZM10.7582 10.7699C8.58727 12.9432 5.06552 12.9432 2.89458 10.7699C1.83324 9.70739 1.25432 8.30682 1.25432 6.85795C1.25432 5.3608 1.83324 3.96023 2.89458 2.94602C3.95593 1.93182 5.35498 1.30398 6.80227 1.30398C8.29781 1.30398 9.69686 1.88352 10.71 2.94602C11.7713 4.00852 12.3502 5.40909 12.3502 6.85795C12.3502 8.30682 11.7713 9.70739 10.7582 10.7699Z" fill="#0C131F"/></svg>
                </button>
            </div>
            <div className={`overlay ${isSearchBarActive ? 'active' : ''}`} onClick={closeOverlay}/>
            {town.length > 0 && (
                <ul>
                    <p className='textSeparator'>Destinations :</p>
                    {town.map(t => (
                        <li key={t.local_name}>
                            <Link 
                                to=
                                    '/searchPage'
                                state = {{
                                    arrival: t.unique_name
                            }}>
                                <span>{t.local_name}</span>
                            </Link>
                        </li>
                    ))}
                    <p className='textSeparator'>Départ de :</p>
                    {townDeparture.length > 0 ? townDeparture.map(t => (
                        <li key={t.local_name}>
                            <Link 
                                to=
                                    '/searchPage'
                                state = {{
                                    departure: t.unique_name
                            }}>
                                <span>{t.local_name}</span>
                            </Link>
                        </li>
                    )): null}
                </ul>
            )} 
            {town.length === 0 && isSearchBarActive == true &&(
                <ul>
                    <p className='textSeparator'>Destinations populaires :</p>
                    {townPopular.map(t => (
                        <li key={t.local_name}>
                            <Link 
                                to=
                                    '/searchPage'
                                state = {{
                                    arrival: t.unique_name
                                    
                            }}>
                                <span>{t.local_name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                )
            }
        </div>
    </div>
    )
}

export default SearchBar