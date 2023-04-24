import '../styles/Header.css'
import React, {useEffect, useState} from 'react'

function Header() {

    return (
        <header>
            <a className="headerLogo">
                <svg className="logoSncf" version="1.1" id="logo-sncf-connect" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 523.7 259.1">
                    <path fill="#8de8fe" d="M136 48.4H41.6C18.6 48.4 0 67.1 0 90.1c0 23 18.6 41.6 41.6 41.6H136c23 0 41.6-18.6 41.6-41.6S159 48.4 136 48.4z"></path>
                    <path fill="#8de8fe" d="M18.5 171.2c-3.6 0-7.3 1.3-7.3 4.9 0 3.5 3.5 4.3 9.8 5.8 6.7 1.6 14.6 4.6 14.6 13.6 0 11-9 15.1-18.9 15.1-5 0-10.7-1.4-14.2-4.1C.5 205 0 203.3 0 202c0-2.6 2-4.8 4.7-4.8 1.2 0 2.4.4 3.9 1.5 2.6 2.1 5.5 3.2 8.7 3.2 3.3 0 7.4-1.3 7.4-5.4 0-3.8-3.6-4.8-10.5-6.4C7.5 188.5.8 185.8.8 177.2c0-10.1 9-14.4 18-14.4 4.5 0 9.3 1.1 12.5 3.5 2.2 1.6 2.7 3.1 2.7 4.4 0 2.5-1.8 4.6-4.6 4.6-1 0-2.1-.4-3.3-1.3-2.4-2-4.9-2.8-7.6-2.8zm26.9-2.1c0-5.1 3.7-5.9 5.4-5.9 1.7 0 5.4.8 5.4 5.9v2.2h.2c2-4.5 7.4-8.6 14-8.6 11.8 0 16.7 9 16.7 18.3v22.8c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-19.6c0-5.4-1.2-12.1-8.5-12.1-7.2 0-10.6 6.2-10.6 12.3v19.4c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-34.7zm86.8 28.7c2.9 0 4.6 2.2 4.6 4.5 0 1.6-.5 3.2-3 5-3.2 2.3-8.2 3.3-12.1 3.3-13.5 0-24.1-8.9-24.1-23.9 0-14.7 10.9-23.9 24.2-23.9 4.3 0 8.7 1 11.9 3.2 2.6 1.8 3.2 3.6 3.2 4.9 0 2.5-1.9 4.9-4.9 4.9-1 0-2.1-.3-3.8-1.5-1.5-1.1-3.7-2.1-6.4-2.1-8.3 0-12.4 7.4-12.4 14.5s4 14.4 12.4 14.4c2.5 0 4.7-.6 6.7-1.9 1.5-1 2.7-1.4 3.7-1.4zm16.6-24.7c-4.3 0-5.1-3-5.1-4.5s.8-4.5 5.1-4.5h4.3v-6.7c0-10.8 4.2-20.5 17.3-20.5 4.7 0 7.2 1.6 7.2 5 0 2.5-1.7 4.6-5.3 4.6-6.1 0-7.9 3.9-7.9 10.2v7.4h6.2c4.3 0 5.1 3 5.1 4.5s-.8 4.5-5.1 4.5h-6.2v30.7c0 5.4-3.8 6.3-5.7 6.3-1.8 0-5.7-.9-5.7-6.3v-30.7h-4.2z"></path>
                    <path fill="#FFF" d="M227.2 48.4c-23 0-41.6 18.6-41.6 41.6s18.6 41.6 41.6 41.6S268.8 113 268.8 90s-18.6-41.6-41.6-41.6z"></path>
                    <path fill="#FFF" d="M220.2 197.8c2.9 0 4.6 2.2 4.6 4.5 0 1.6-.5 3.2-3 5-3.2 2.3-8.2 3.3-12.1 3.3-13.5 0-24.2-8.9-24.2-24 0-14.7 11-24 24.3-24 4.3 0 8.7 1 11.9 3.2 2.6 1.8 3.2 3.6 3.2 4.9 0 2.5-1.9 4.9-4.9 4.9-1 0-2.1-.3-3.8-1.5-1.5-1.1-3.7-2.1-6.4-2.1-8.3 0-12.5 7.5-12.5 14.5 0 7.1 4 14.4 12.5 14.4 2.5 0 4.7-.6 6.7-1.9 1.5-.7 2.7-1.2 3.7-1.2zm35.5 12.9c-13.7 0-24.6-9.9-24.6-24.2 0-14.3 11-23.8 24.6-23.8 13.7 0 24.6 9.5 24.6 23.8 0 14.2-10.9 24.2-24.6 24.2zm0-38.8c-9 0-13.1 7.5-13.1 14.5 0 7.1 4.2 14.7 13.1 14.7 9 0 13.1-7.6 13.1-14.7 0-7-4.2-14.5-13.1-14.5zm34.3-2.8c0-5.1 3.7-6 5.4-6 1.7 0 5.4.8 5.4 6v2.2h.2c2-4.5 7.4-8.6 14.1-8.6 11.8 0 16.7 9.1 16.7 18.3v22.9c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-19.6c0-5.4-1.2-12.1-8.5-12.1-7.2 0-10.6 6.2-10.6 12.3V204c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-34.9zm53 0c0-5.1 3.7-6 5.4-6 1.7 0 5.4.8 5.4 6v2.2h.2c2-4.5 7.4-8.6 14.1-8.6 11.8 0 16.7 9.1 16.7 18.3v22.9c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-19.6c0-5.4-1.2-12.1-8.5-12.1-7.2 0-10.6 6.2-10.6 12.3V204c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-34.9zm62.4 21.2c.5 6.4 6.3 11.1 12.9 11.1 4.7 0 7.6-1.5 10.4-3.9 1.6-1.3 2.6-1.6 3.9-1.6 2.5 0 4.5 1.8 4.5 4.5 0 .9-.4 2.6-1.9 4.1-4.4 4.2-9.5 6.1-16.8 6.1-14 0-24.4-9-24.4-23.7 0-14.6 10.3-24.3 24-24.3 11 0 19.8 6.2 21.6 19.5.1.9.2 1.6.2 2.4 0 4-2.2 5.7-5.9 5.7h-28.5zm23.2-8.2c0-5.9-3.3-11-10.7-11-6.7 0-12.1 4.6-12.6 11h23.3zm53 15.7c2.9 0 4.6 2.2 4.6 4.5 0 1.6-.5 3.2-3 5-3.2 2.3-8.2 3.3-12.1 3.3-13.5 0-24.2-8.9-24.2-24 0-14.7 11-24 24.3-24 4.3 0 8.7 1 11.9 3.2 2.6 1.8 3.2 3.6 3.2 4.9 0 2.5-1.9 4.9-4.9 4.9-1 0-2.1-.3-3.8-1.5-1.5-1.1-3.7-2.1-6.4-2.1-8.3 0-12.5 7.5-12.5 14.5 0 7.1 4 14.4 12.5 14.4 2.5 0 4.7-.6 6.7-1.9 1.5-.7 2.7-1.2 3.7-1.2zm33.4 12.5c-12 0-14.6-7.4-14.6-16.1V173h-3.7c-4.3 0-5.1-3-5.1-4.5s.8-4.5 5.1-4.5h3.7v-7.8c0-5.2 3.7-6.1 5.6-6.1 1.9 0 5.6.9 5.6 6.1v7.8h7.1c4.3 0 5.1 3 5.1 4.5s-.8 4.5-5.1 4.5h-7.1v21.1c0 4.4 1.5 6.8 4.3 6.8.5 0 1.1-.1 1.8-.2.8-.1.9-.1 1.3-.1 2.8 0 4.3 2.1 4.3 4.2 0 1.8-1 3.3-2.7 4.2-1.6.8-3.5 1.3-5.6 1.3z"></path>
                    <circle transform="rotate(-63.435 134.269 90.075)" cx="134.3" cy="90.1" r="30.3"></circle>
                </svg>
            </a>
            <nav>
                <a className="headerNavButton headerTravel">
                    <svg fill="#FFF" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M19 15a3 3 0 0 0-2.95 2.5h-8.4a4 4 0 0 1-2.29-.62 2 2 0 0 1-.86-1.65 2.5 2.5 0 0 1 .88-2.09 3.69 3.69 0 0 1 2.27-.64H16a3.93 3.93 0 0 0 2.34-.85 3.58 3.58 0 0 0 1.16-2.88 3 3 0 0 0-1.17-2.45 4.4 4.4 0 0 0-2.68-.82H8a3 3 0 1 0 0 1h7.7a3.32 3.32 0 0 1 2.06.61 2 2 0 0 1 .79 1.66 2.59 2.59 0 0 1-.81 2.1 3.05 3.05 0 0 1-2 .63h-8a4.6 4.6 0 0 0-2.89.86 3.46 3.46 0 0 0-1.35 2.87 2.92 2.92 0 0 0 1.28 2.46 4.94 4.94 0 0 0 2.87.81h8.4A3 3 0 1 0 19 15Zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path></svg>
                    <h5>Voyager</h5>
                </a>
                <a className="headerNavButton headerTicket">
                    <svg fill="#FFF" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 6h-2v2h2V6Z"></path><path d="M13 3v8h8V3h-8Zm7 7h-6V4h6v6ZM8 16H6v2h2v-2Z"></path><path d="M3 21h8v-8H3v8Zm1-7h6v6H4v-6Zm14 2h-2v2h2v-2ZM5 9H3v2h2V9Zm6-6H9v2h2V3ZM8 6H6v2h2V6ZM5 3H3v2h2V3Zm6 6H9v2h2V9Zm4 4h-2v2h2v-2Zm6 0h-2v2h2v-2Zm-6 6h-2v2h2v-2Z"></path></svg>
                    <h5>Billets</h5>
                </a>
                <a className="headerNavButton headerOffer">
                    <svg fill="#FFF" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 6.34H5.47a.84.84 0 0 0-.55.28.8.8 0 0 0 0 1.12.89.89 0 0 0 .55.26H9a.94.94 0 0 0 .56-.28.82.82 0 0 0 0-1.12.89.89 0 0 0-.56-.26Zm0 3.35H5.47a.84.84 0 0 0-.55.31.8.8 0 0 0 0 1.12.84.84 0 0 0 .55.28H9a.89.89 0 0 0 .56-.28.82.82 0 0 0-.04-1.12.89.89 0 0 0-.52-.31ZM5.47 13a.83.83 0 0 0-.48.15.84.84 0 0 0-.33.37.82.82 0 0 0 .19.92.9.9 0 0 0 1 .18.8.8 0 0 0 .39-.31.81.81 0 0 0-.11-1.06.871.871 0 0 0-.66-.25ZM9 13h-.91a.89.89 0 0 0-.36 0 1.093 1.093 0 0 0-.32.17.86.86 0 0 0-.21.29.77.77 0 0 0 0 .68c.049.11.12.21.21.29.091.082.201.14.32.17a.887.887 0 0 0 .36 0H9a.89.89 0 0 0 .56-.28.82.82 0 0 0 0-1.12A.94.94 0 0 0 9 13Zm9.58 0h-3.49a.94.94 0 0 0-.56.28.82.82 0 0 0 0 1.12.89.89 0 0 0 .56.28h3.49a.84.84 0 0 0 .55-.28.8.8 0 0 0 0-1.12.89.89 0 0 0-.55-.28Zm-3.49-5a.91.91 0 0 0 .49-.14A.82.82 0 0 0 16 7a.86.86 0 0 0-.69-.66.89.89 0 0 0-.51 0 .8.8 0 0 0-.39.31.74.74 0 0 0-.14.47.819.819 0 0 0 .25.59.86.86 0 0 0 .57.29Zm0 1.69a.89.89 0 0 0-.56.28.82.82 0 0 0 0 1.12.89.89 0 0 0 .56.28H16a.89.89 0 0 0 .56-.28.82.82 0 0 0 0-1.12.89.89 0 0 0-.56-.28h-.91ZM17 7.81c.089.08.19.144.3.19a.87.87 0 0 0 .36 0h.87a.89.89 0 0 0 .55-.28.8.8 0 0 0 0-1.12.84.84 0 0 0-.55-.28h-.87a.87.87 0 0 0-.36 0 .76.76 0 0 0-.32.17.86.86 0 0 0-.21.29.77.77 0 0 0 0 .68.86.86 0 0 0 .23.35Zm1.53 1.88a.91.91 0 0 0-.49.14.81.81 0 0 0-.33.38.75.75 0 0 0-.05.49.78.78 0 0 0 .24.43c.123.12.28.2.45.23a.89.89 0 0 0 .51 0 .85.85 0 0 0 .39-.36.89.89 0 0 0 .14-.47.801.801 0 0 0-.25-.59.86.86 0 0 0-.61-.25Z"></path><path d="M21.41 3.57A2 2 0 0 0 20 3h-4.4a4.17 4.17 0 0 0-2.11.57A4 4 0 0 0 12 5.12a4 4 0 0 0-1.49-1.55A4.17 4.17 0 0 0 8.4 3H4a2 2 0 0 0-1.41.57A1.88 1.88 0 0 0 2 4.94V17a1.91 1.91 0 0 0 .59 1.37c.388.345.891.53 1.41.52h3.62a4.11 4.11 0 0 1 2.38.78l.65.47.59.57c.097.091.208.166.33.22.252.093.528.093.78 0 .122-.054.233-.129.33-.22l.59-.57.66-.47a4.11 4.11 0 0 1 2.42-.78H20a2.06 2.06 0 0 0 1.42-.56c.36-.35.57-.828.58-1.33V5a1.88 1.88 0 0 0-.59-1.43Zm-10 15.89-.79-.57a5.15 5.15 0 0 0-3-1H4a1 1 0 0 1-.71-.28A.94.94 0 0 1 3 17V5a.94.94 0 0 1 .29-.69A1 1 0 0 1 4 4h4.4a3.06 3.06 0 0 1 2.14.85 2.82 2.82 0 0 1 .89 2.05l-.02 12.56ZM21 17a.94.94 0 0 1-.29.68 1 1 0 0 1-.71.28h-3.6a5.15 5.15 0 0 0-3 1l-.8.57V6.87a2.822 2.822 0 0 1 .89-2A3.06 3.06 0 0 1 15.6 4H20a1 1 0 0 1 .71.28.939.939 0 0 1 .29.69V17Z"></path></svg>
                    <h5>Offres</h5>
                </a>
                <a className="headerNavButton headerAccount">
                    <svg fill="#FFF" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5.126 21.5v-1.323a6.873 6.873 0 0 1 13.747 0V21.5a.5.5 0 1 1-1 0v-1.323a5.874 5.874 0 0 0-11.747 0V21.5a.5.5 0 1 1-1 0ZM7.652 6.348a4.348 4.348 0 1 1 8.696 0 4.348 4.348 0 0 1-8.696 0Zm1 0a3.348 3.348 0 1 0 6.696 0 3.348 3.348 0 0 0-6.696 0Z"></path></svg>
                    <h5>Compte</h5>
                </a>
            </nav>
        </header>
    )
}

export default Header