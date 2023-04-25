import './App.css'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <Header></Header>
      <a className='headerOfferImg'> 
        <img src="../public/assets/img/header.jpg"></img>
      </a>
      <SearchBar></SearchBar>
      <div className="homeBody">
        <div className='navLineTransport'>
          <a>Train
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M15.8469 6.43996C15.4723 4.55846 14.434 2.87425 12.9213 1.69433C11.4086 0.514423 9.52227 -0.0826078 7.60616 0.0120747C5.69006 0.106757 3.87178 0.886848 2.48278 2.21014C1.09379 3.53344 0.226575 5.31181 0.0392289 7.22108C-0.148117 9.13036 0.356882 11.0434 1.46217 12.6114C2.56745 14.1795 4.19942 15.2981 6.06057 15.7634C7.92173 16.2288 9.88812 16.0098 11.6013 15.1464C13.3145 14.283 14.6604 12.8328 15.3936 11.06C15.998 9.59862 16.1558 7.99092 15.8469 6.43996ZM11.2403 9.99996C11.1864 10.0597 11.1205 10.1074 11.0469 10.14C10.9739 10.1741 10.8943 10.1923 10.8136 10.1933C10.732 10.1922 10.6515 10.1745 10.577 10.1413C10.5025 10.108 10.4356 10.06 10.3803 9.99996L8.00028 7.40663L5.64695 9.94663C5.59017 10.0107 5.51947 10.0608 5.44028 10.0933C5.36048 10.1286 5.27419 10.1468 5.18695 10.1468C5.0997 10.1468 5.01341 10.1286 4.93361 10.0933C4.85442 10.0608 4.78372 10.0107 4.72695 9.94663C4.62717 9.82684 4.57253 9.67586 4.57253 9.51996C4.57253 9.36406 4.62717 9.21309 4.72695 9.0933L7.51361 6.08663C7.57597 6.02002 7.65134 5.96692 7.73505 5.93062C7.81877 5.89432 7.90904 5.87559 8.00028 5.87559C8.09152 5.87559 8.1818 5.89432 8.26551 5.93062C8.34922 5.96692 8.42459 6.02002 8.48695 6.08663L11.2403 9.0933C11.3546 9.21657 11.4181 9.3785 11.4181 9.54663C11.4181 9.71476 11.3546 9.87668 11.2403 9.99996Z" fill="currentColor"/></svg>
          </a>
          <a>Bus & covoiturage
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M15.8469 6.43996C15.4723 4.55846 14.434 2.87425 12.9213 1.69433C11.4086 0.514423 9.52227 -0.0826078 7.60616 0.0120747C5.69006 0.106757 3.87178 0.886848 2.48278 2.21014C1.09379 3.53344 0.226575 5.31181 0.0392289 7.22108C-0.148117 9.13036 0.356882 11.0434 1.46217 12.6114C2.56745 14.1795 4.19942 15.2981 6.06057 15.7634C7.92173 16.2288 9.88812 16.0098 11.6013 15.1464C13.3145 14.283 14.6604 12.8328 15.3936 11.06C15.998 9.59862 16.1558 7.99092 15.8469 6.43996ZM11.2403 9.99996C11.1864 10.0597 11.1205 10.1074 11.0469 10.14C10.9739 10.1741 10.8943 10.1923 10.8136 10.1933C10.732 10.1922 10.6515 10.1745 10.577 10.1413C10.5025 10.108 10.4356 10.06 10.3803 9.99996L8.00028 7.40663L5.64695 9.94663C5.59017 10.0107 5.51947 10.0608 5.44028 10.0933C5.36048 10.1286 5.27419 10.1468 5.18695 10.1468C5.0997 10.1468 5.01341 10.1286 4.93361 10.0933C4.85442 10.0608 4.78372 10.0107 4.72695 9.94663C4.62717 9.82684 4.57253 9.67586 4.57253 9.51996C4.57253 9.36406 4.62717 9.21309 4.72695 9.0933L7.51361 6.08663C7.57597 6.02002 7.65134 5.96692 7.73505 5.93062C7.81877 5.89432 7.90904 5.87559 8.00028 5.87559C8.09152 5.87559 8.1818 5.89432 8.26551 5.93062C8.34922 5.96692 8.42459 6.02002 8.48695 6.08663L11.2403 9.0933C11.3546 9.21657 11.4181 9.3785 11.4181 9.54663C11.4181 9.71476 11.3546 9.87668 11.2403 9.99996Z" fill="currentColor"/></svg>
          </a>
          <a>Location de voiture
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M15.8469 6.43996C15.4723 4.55846 14.434 2.87425 12.9213 1.69433C11.4086 0.514423 9.52227 -0.0826078 7.60616 0.0120747C5.69006 0.106757 3.87178 0.886848 2.48278 2.21014C1.09379 3.53344 0.226575 5.31181 0.0392289 7.22108C-0.148117 9.13036 0.356882 11.0434 1.46217 12.6114C2.56745 14.1795 4.19942 15.2981 6.06057 15.7634C7.92173 16.2288 9.88812 16.0098 11.6013 15.1464C13.3145 14.283 14.6604 12.8328 15.3936 11.06C15.998 9.59862 16.1558 7.99092 15.8469 6.43996ZM11.2403 9.99996C11.1864 10.0597 11.1205 10.1074 11.0469 10.14C10.9739 10.1741 10.8943 10.1923 10.8136 10.1933C10.732 10.1922 10.6515 10.1745 10.577 10.1413C10.5025 10.108 10.4356 10.06 10.3803 9.99996L8.00028 7.40663L5.64695 9.94663C5.59017 10.0107 5.51947 10.0608 5.44028 10.0933C5.36048 10.1286 5.27419 10.1468 5.18695 10.1468C5.0997 10.1468 5.01341 10.1286 4.93361 10.0933C4.85442 10.0608 4.78372 10.0107 4.72695 9.94663C4.62717 9.82684 4.57253 9.67586 4.57253 9.51996C4.57253 9.36406 4.62717 9.21309 4.72695 9.0933L7.51361 6.08663C7.57597 6.02002 7.65134 5.96692 7.73505 5.93062C7.81877 5.89432 7.90904 5.87559 8.00028 5.87559C8.09152 5.87559 8.1818 5.89432 8.26551 5.93062C8.34922 5.96692 8.42459 6.02002 8.48695 6.08663L11.2403 9.0933C11.3546 9.21657 11.4181 9.3785 11.4181 9.54663C11.4181 9.71476 11.3546 9.87668 11.2403 9.99996Z" fill="currentColor"/></svg>
          </a>
          <a>Taxi & VTC
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M15.8469 6.43996C15.4723 4.55846 14.434 2.87425 12.9213 1.69433C11.4086 0.514423 9.52227 -0.0826078 7.60616 0.0120747C5.69006 0.106757 3.87178 0.886848 2.48278 2.21014C1.09379 3.53344 0.226575 5.31181 0.0392289 7.22108C-0.148117 9.13036 0.356882 11.0434 1.46217 12.6114C2.56745 14.1795 4.19942 15.2981 6.06057 15.7634C7.92173 16.2288 9.88812 16.0098 11.6013 15.1464C13.3145 14.283 14.6604 12.8328 15.3936 11.06C15.998 9.59862 16.1558 7.99092 15.8469 6.43996ZM11.2403 9.99996C11.1864 10.0597 11.1205 10.1074 11.0469 10.14C10.9739 10.1741 10.8943 10.1923 10.8136 10.1933C10.732 10.1922 10.6515 10.1745 10.577 10.1413C10.5025 10.108 10.4356 10.06 10.3803 9.99996L8.00028 7.40663L5.64695 9.94663C5.59017 10.0107 5.51947 10.0608 5.44028 10.0933C5.36048 10.1286 5.27419 10.1468 5.18695 10.1468C5.0997 10.1468 5.01341 10.1286 4.93361 10.0933C4.85442 10.0608 4.78372 10.0107 4.72695 9.94663C4.62717 9.82684 4.57253 9.67586 4.57253 9.51996C4.57253 9.36406 4.62717 9.21309 4.72695 9.0933L7.51361 6.08663C7.57597 6.02002 7.65134 5.96692 7.73505 5.93062C7.81877 5.89432 7.90904 5.87559 8.00028 5.87559C8.09152 5.87559 8.1818 5.89432 8.26551 5.93062C8.34922 5.96692 8.42459 6.02002 8.48695 6.08663L11.2403 9.0933C11.3546 9.21657 11.4181 9.3785 11.4181 9.54663C11.4181 9.71476 11.3546 9.87668 11.2403 9.99996Z" fill="currentColor"/></svg>
          </a>
          <a>Transport en commun
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M15.8469 6.43996C15.4723 4.55846 14.434 2.87425 12.9213 1.69433C11.4086 0.514423 9.52227 -0.0826078 7.60616 0.0120747C5.69006 0.106757 3.87178 0.886848 2.48278 2.21014C1.09379 3.53344 0.226575 5.31181 0.0392289 7.22108C-0.148117 9.13036 0.356882 11.0434 1.46217 12.6114C2.56745 14.1795 4.19942 15.2981 6.06057 15.7634C7.92173 16.2288 9.88812 16.0098 11.6013 15.1464C13.3145 14.283 14.6604 12.8328 15.3936 11.06C15.998 9.59862 16.1558 7.99092 15.8469 6.43996ZM11.2403 9.99996C11.1864 10.0597 11.1205 10.1074 11.0469 10.14C10.9739 10.1741 10.8943 10.1923 10.8136 10.1933C10.732 10.1922 10.6515 10.1745 10.577 10.1413C10.5025 10.108 10.4356 10.06 10.3803 9.99996L8.00028 7.40663L5.64695 9.94663C5.59017 10.0107 5.51947 10.0608 5.44028 10.0933C5.36048 10.1286 5.27419 10.1468 5.18695 10.1468C5.0997 10.1468 5.01341 10.1286 4.93361 10.0933C4.85442 10.0608 4.78372 10.0107 4.72695 9.94663C4.62717 9.82684 4.57253 9.67586 4.57253 9.51996C4.57253 9.36406 4.62717 9.21309 4.72695 9.0933L7.51361 6.08663C7.57597 6.02002 7.65134 5.96692 7.73505 5.93062C7.81877 5.89432 7.90904 5.87559 8.00028 5.87559C8.09152 5.87559 8.1818 5.89432 8.26551 5.93062C8.34922 5.96692 8.42459 6.02002 8.48695 6.08663L11.2403 9.0933C11.3546 9.21657 11.4181 9.3785 11.4181 9.54663C11.4181 9.71476 11.3546 9.87668 11.2403 9.99996Z" fill="currentColor"/></svg>
          </a>
        </div>
        <Cards></Cards>
      </div>
    </>
  )
}

export default App
