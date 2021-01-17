import React from 'react';
import '../App.css'
import BrahotsHannoukah from "../Images/PrieresHannoukah.png"
import PhotoHanoukah from "../Images/Hanoukah.jpg"

class Hannoukah extends React.Component {
    render() {
        return (
            <div className="hannoukah">
                <h1 className="titre-fete">Hannoukah 25 Kislev</h1>
                <img className="photo-fete" src={PhotoHanoukah} />
                <h1 className="titre-fete">Résumé</h1>
                <p className="resume-fete">A l’époque du second Temple en Israël, il y a environ 2170 ans, Antiochus imposa aux Juifs de renier leur foi. Certains décidèrent de rester fidèles aux lois de D.ieu (les 'Hachmonaïm, dirigés par Matityahou et ses fils). Ils se rebellèrent, en ralliant d’autres Juifs, et, malgré leur petit nombre en comparaison de l’armée grecque et la faiblesse physique de la majorité d’entre eux, ils remportèrent la victoire. Ce fut le 1er miracle de ‘Hanouka. Le 25 Kislev, ils pénétrèrent dans le Temple qui avait été détruit et souillé par les Grecs. Lorsqu’ils voulurent allumer la Ménorah (chandelier à 7 branches, symbole de la lumière spirituelle), ils ne trouvèrent qu’une seule fiole d'huile d’olive pure, dont la quantité ne suffirait que pour une journée. C’est alors qu’un miracle se produisit… l’huile dura 8 jours ! Ce fut le 2ème miracle de ‘Hanouka…</p>

                <ul className="titre-list">Les 2 miracles
                    <li className="point-list">Victoires petits (Hachminaïm) contre grands (Antiochus grec)</li>
                    <li className="point-list">Fiole d’huile (8 jours alors que normalement 1 jour)</li>
                </ul>
                <ul className="titre-list">Ou allumer ?
                    <li className="point-list">Porte entrée maison</li>
                    <li className="point-list">A gauche de la Mézouza</li>
                    <li className="point-list">Ou sur rebort fenêtre </li>
                    <li className="point-list">Après allumage ne peut plus être déplacé.</li>
                </ul>
                <ul className="titre-list"> Qui allume ?
                    <li className="point-list">Séfarades : Maitre de maison</li>
                    <li className="point-list">Ashkénaze : Chaque membre sa hanoukia</li>
                </ul>
                <ul className="titre-list">Quand Allumer ?
                    <li className="point-list">De la tombée de la nuit a la sortie des étoiles</li>
                </ul>
                <ul className="titre-list">Comment Allumer ?
                    <li className="point-list">3 premieres Benedictions le premier soir puis 2 les autres soirs :
                    <img className="brahots-hannoukah" src={BrahotsHannoukah} /></li>
                    <li className="point-list">On allume de Gauche a Droite (bougie du soir en premier)</li>
                    <li className="point-list">Bougie doivent durer au moins 30 minutes</li>
                </ul>
                <ul className="titre-list">Après allumage :
                    <li className="point-list">Récite Hanérot Halalou</li>
                    <li className="point-list">Chante Maoz Tsour</li>
                    <li className="point-list">Pendant 30 minutes, aucun travail !</li>
                    <li className="point-list">On ne profite pas des lumières de la hanoukiah (role du shamash)</li>
                </ul>
                <ul className="titre-list">Les Coutumes :
                    <li className="point-list">Hallel + Al Hanissim : Louanges et Remerciements</li>
                    <li className="point-list">Aliments frits dans huile : Beignets</li>
                    <li className="point-list">Toupies : Ness Gadol Haya Po en israel et Ness Gadol Haya Sham en Houts.</li>
                    <li className="point-list">Argent et cadeaux distribués aux enfants.</li>
                </ul>
                <iframe className="video-song" src="https://www.youtube.com/embed/S0gbvH_LqP4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Hannoukah;