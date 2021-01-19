import React from 'react';
import '../App.css'
import BrahotsHannoukah from "../Images/PrieresHannoukah.png"
import HanerotHalalou from "../Images/HanerotHalalou.png"
import MaozTsour from "../Images/MaozTsour.png"

class Hanoukah extends React.Component {
    render() {
        return (
            <div className="div-fete-hanouka">
                <h1 className="titre-fete-hanouka">Hanouka<i> 25 Kislev</i> </h1>
                <div className="card-hanouka-one">
                    <div className="div-résumé-hanouka">
                        <h1 className="titre-resumé">Rappel Historique</h1>
                        <p className="texte-fete-hanouka">A l’époque du second Temple en Israël, il y a environ 2170 ans,
                        Antiochus imposa aux Juifs de renier leur foi. Certains décidèrent de rester
                        fidèles aux lois de D.ieu (les 'Hachmonaïm, dirigés par Matityahou et ses fils).
                        Ils se rebellèrent, en ralliant d’autres Juifs, et, malgré leur petit nombre en
                        comparaison de l’armée grecque et la faiblesse physique de la majorité d’entre
                        eux, ils remportèrent la victoire. Ce fut le 1er miracle de ‘Hanouka. Le 25
                        Kislev, ils pénétrèrent dans le Temple qui avait été détruit et souillé par les
                        Grecs. Lorsqu’ils voulurent allumer la Ménorah (chandelier à 7 branches,
                        symbole de la lumière spirituelle), ils ne trouvèrent qu’une seule fiole
                        d'huile d’olive pure, dont la quantité ne suffirait que pour une journée. C’est
                        alors qu’un miracle se produisit… l’huile dura 8 jours ! Ce fut le 2ème miracle de
                        ‘Hanouka… Aujourd’hui, nous remercions D.ieu dans la joie en allumant la
                        ‘Hanoukia pendant 8 jours (une bougie le 1er soir, 2 bougies le 2ème soir, etc.
                            jusqu’à en allumer 8 le dernier soir)<br /><br />
                            <b>‘HANOUKA</b> : signifie "inauguration" (du nouveau Temple), c’est aussi une allusion
                            à la fin de la guerre et au retour des Mitsvot en toute quiétude <br />
                            - <b>“Hanou”</b> = ils se reposèrent<br />
                            - <b>“Kah”</b> lettres Kaf et Hé = valeur numérique de 25, en référence au 25 Kislev</p>
                    </div>
                </div>
                <div className="div-hanouka-two">
                    <h1 className="titre-lois-hanouka">Lois de l'allumage</h1>
                    <p className="texte-lois-hanouka">
                        <ul className="liste-allumage">
                            <li><h5 className="titre-liste">Où allumer ?</h5>
                            La ‘Hanoukia doit être placée à la porte d’entrée de la maison (ou d’une cour privée)
                            à gauche face à la Mézouza, ou sur le rebord de la fenêtre qui donne sur la rue
                            (si l’habitation est à l’étage). Une fois allumée, la ‘Hanoukia ne doit plus être déplacée.
                            </li><br />
                            <li><h5 className="titre-liste">Qui doit allumer ?</h5>
                            Chaque Juif a le devoir d’allumer les bougies chez lui. <br />
                            Selon la coutume <b>Séfarade</b>, seul le maître de maison allume pour l’ensemble de la famille.<br />
                            La coutume <b>Achkénaze</b> est que chaque membre de la famille allume sa propre ‘Hanoukia.
                           </li><br />
                            <li><h5 className="titre-liste">Quand allumer ?</h5>
                           L’allumage se fait à partir de la tombée de la nuit (au plus tôt après la sortie
                           des étoiles).
                           </li><br />
                            <li><h5 className="titre-liste">Comment allumer ?</h5>
                           Avant l’allumage on récite 2 bénédictions (3 le premier soir). <br />
                           On allume de <b>gauche à droite</b>. <br />
                           Le 1er soir, la bougie à l’extrême droite. Le 2ème soir, d’abord la bougie supplémentaire du jour
                           (qui est à gauche de celle de la veille), puis celle de la veille et
                           ainsi de suite, en finissant par le Chamach.<br />
                                <i>Attention : il faut utiliser des bougies (ou huile d’olive) qui dureront au moins 30 minutes
                               après la tombée de la nuit.</i>
                            </li><br />
                            <li><h5 className="titre-liste">Après l'allumage</h5>
                           On récite <b>Hanérot Halalou</b> et on <b>chante Maoz Tsour</b>. <br />
                           Pendant 30 minutes, les femmes ne doivent faire aucun travail ménager éprouvant (laver
                           le linge à la main, repasser, coudre...).<br />
                           Il est interdit de profiter de la lumière des bougies de ‘Hanouka (pour lire ou autre).
                           </li><br />
                        </ul>
                        <iframe className="video-allumage-hanouka" width="580" height="335" src="https://www.youtube.com/embed/Owtz4jfljpk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
                <div className="div-hanouka-three">
                    <div className="div-coutumes-hanouka">
                        <h1 className="titre-div-coutumes">Coutumes</h1>
                        <div className="first-div-coutumes">
                            <div className="div-hallel-alHanissim">
                                <h5 className="titre-coutumes">Louanges et remerciements</h5>
                                <p className="texte-coutumes-hanouka">
                                    Pendant la semaine de ‘Hanouka, nous exprimons notre joie et notre gratitude en
                                    récitant dans la prière du matin le Hallel complet (louanges et remerciements),
                                    ainsi que le passage 'Al Hanissim (récit descriptif de la victoire et remerciements)
                                    dans les bénédictions récitées après le repas et dans la prière de la 'Amida (18
                                    bénédictions). 
                                </p>
                            </div>
                            <div className="div-huile">
                                <h5 className="titre-coutumes">Les aliments spécifiques</h5>
                                <p className="texte-coutumes-hanouka">
                                    En souvenir du miracle de la fiole d’huile, nous avons également l’habitude de
                                    consommer des aliments frits dans l’huile : des beignets de pommes de terre
                                    (latkes) ou des beignets sucrés
                                </p>
                            </div>
                        </div>
                        <div className="second-div-coutumes">
                            <div className="div-cadeaux">
                                <h5 className="titre-coutumes">L'argent</h5>
                                <p className="texte-coutumes-hanouka">
                                    La tradition est de distribuer chaque jour de ‘Hanouka un peu d’argent aux
                                    enfants, pour leur apprendre à donner une partie de leur gain (le Ma’asser) à la
                                    Tsédaka (aide pour les nécessiteux).
                                </p>
                            </div>
                            <div className="div-toupies">
                                <h5 className="titre-coutumes">La Toupie</h5>
                                <p className="texte-coutumes-hanouka">
                                    Les enfants ont la coutume de jouer à la toupie après l’allumage des bougies, en
                                    souvenir des enfants Juifs qui se cachaient pour étudier la Torah, et qui faisaient
                                    semblant de jouer à la toupie lorsque des grecs arrivaient. Sur les toupies dans le monde
                                    figurent les 4 lettres “Noun, Guimel, Hé, Chine”, pour illustrer la phrase “Ness
                                    Gadol Haya Cham” (un grand miracle se produisit là-bas). Et sur les toupies en Israel
                                    figurent les 4 lettres “Noun, Guimel, Hé, Pé”, pour illustrer la phrase “Ness
                                    Gadol Haya Po” (un grand miracle se produisit ici).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-hanouka-four">
                    <div className="les-priere">
                        <h1 className="titre-brahots">Les Brahots :</h1>
                        <img className="brahots-picture" src={BrahotsHannoukah}></img>
                        <h1 className="titre-brahots">Hanérot Halalou :</h1>
                        <img className="brahots-picture" src={HanerotHalalou}></img>
                        <h1 className="titre-brahots">MaozTsour :</h1>
                        <img className="brahots-picture" src={MaozTsour}></img>
                        <iframe className="video-song-hanouka" width="600" height="355" src="https://www.youtube.com/embed/S0gbvH_LqP4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hanoukah;