import React from 'react';
import '../App.css'
import HayeSarahPicture from "../Images/HayeSarah.png"


class HayeSarah extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="haye-sarah-picture" src={HayeSarahPicture} />
                <h2 className="parasha-resume">Resumé Parasha Haye Sarah</h2>
                <p className="resume">Sarah, l’épouse d’Avraham, décède à l’âge de 127 ans. Elle est enterrée à ‘Hébron, dans la caverne de Makhpéla qu’Avraham achète à Ephron le ‘Hittite pour la somme de 400 sicles d’argent. Avraham envoie Eliezer son serviteur à ‘Haran afin de trouver une épouse pour Itshak. A la source d’eau du village, Eliezer demande à D.ieu de lui faire un signe miraculeux ; arrivé à destination, la jeune fille qui offrira de l’eau, à lui mais aussi à ses chameaux, sera celle qu’Il aura désignée pour Itshak.A peine a-t-il finit de prier qu’il se retrouve face à Rivka, fille de Bétouel, lui-même neveu d’Avraham. Elle apparaît à la source d’eau et réalise le signe attendu par Eliezer. Ce dernier est invité à la maison de Bétouel où il raconte le prodige qui vient de se dérouler. Rivka accepte le mariage et part avec Eliezer vers la terre de Canaan. Parvenue à l’endroit où se trouvent la famille d’Avraham, Rivka aperçoit Itshak priant dans le champ (c’est l’origine de la prière de Min’ ha). Ils se marient, et Itshak s’attache à Rivka. Il trouve en elle la consolation de la perte de sa mère. De son côté, Avraham épouse Kétourah (que le Midrash identifie comme Hagar) qui lui donne six autres fils. Malgré tout, seul Itshak est désigné comme son héritier. Avraham décède à l’âge de 175 ans. Il est enterré aux cotés de Sarah par ses deux fils Itshak et Ismaël qui a fait Téchouva.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/haye-sarah/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default HayeSarah;