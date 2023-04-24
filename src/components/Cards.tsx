import '../styles/Cards.css'
import React, {useEffect, useState} from 'react'
import peopleImg from "../assets/img/cardsImg/people.jpg"
import crystalImg from "../assets/img/cardsImg/crystal.jpg"
import phoneImg from "../assets/img/cardsImg/phone.jpg"
import dogImg from "../assets/img/cardsImg/dog.jpg"

function Cards() {

    return (
        <div className='cardsParagraphContainer'>
            <h4 className="cardsParagraphTitle">Explorez l'univers SNCF Connect</h4>
            <div className='cardContainer'>
                <div className="card">
                    <img src={peopleImg}></img>
                    <div className='cardText'>
                        <p className="cardTitle">Activez le mode dernière minute</p>
                        <p className="cardContent">A vos billets, prêts, feu, partez ! Il est encore temps de réserver vos billets pour partir ce printemps !</p>
                    </div>
                    <div>
                        <a>Foncer</a>
                    </div>
                </div>
                <div className="card">
                    <img src={crystalImg}></img>
                    <div className='cardText'>
                        <p className="cardTitle">Vos billets pour l'été sont toujours disponibles !</p>
                        <p className="cardContent">On voit,on voit...qu''il est temps d'organiser vos vacances d'été ! Réservez dès maintenant vos billets de train aux meilleurs prix !</p>
                    </div>
                    <div>
                        <a>Foncer</a>
                    </div>
                </div>
                <div className="card">
                    <img src={phoneImg}></img>
                    <div className='cardText'>
                        <p className="cardTitle">Utilisez les cartes budget mobilité </p>
                        <p className="cardContent">Payez vos trajets, mais pas de votre poche! Utilisez les cartes ALD Move, Betterway, RoadMate, Swile ou Worklife pour régler vos déplacements domicile-travail.  </p>
                    </div>
                    <div>
                        <a>S'informer</a>
                    </div>
                </div>
                <div className="card">
                    <img src={dogImg}></img>
                    <div className='cardText'>
                        <p className="cardTitle">Emmenez-le partout avec vous</p>
                        <p className="cardContent">Dès 7€, voyagez avec votre animal de compagnie et profitez ensemble lors de vos prochaines escapades</p>
                    </div>
                    {/* <div className="cardLink">
                        <a>En s'avoir plus</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cards