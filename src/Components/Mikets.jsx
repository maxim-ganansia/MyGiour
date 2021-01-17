import React from 'react';
import '../App.css'
import MiketsPicture from "../Images/Mikets.jpg"


class Mikets extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="Mikets-picture" src={MiketsPicture} />
                <h2 className="parasha-resume">Resumé Parasha Mikets </h2>
                <p className="resume">Pharaon fait un songe : sept vaches décharnées y dévorent sept vaches belles et grasses, mais restent aussi maigres qu’avant. Puis un second: sept épis de blés maigres et brûlés avalent sept épis sains et pleinss mais restent aussi desséchés. Sur le conseil de l’échanson, Pharaon fait venir Yossef à la cour, et celui-ci interprète les deux rêves. Sept années d’abondance, annonce-t-il, seront suivies par sept années de famine. Yossef propose un programme permettant de passer les années de famine sans emcombre. Séduit, Pharaon le nomme vice-roi d’Égypte, et lui demande de réaliser son projet. Yossef épouse Ossnate, la fille de Potiphar, qui lui donne deux fils, Ménaché et Ephraïm. La famine survient alors, et elle s’étend dans toute la région. On ne peut plus obtenir de nourriture qu’en Égypte qui sous l’impulsion de Yossef a réalisé des provisions suffisantes pour résister aux années de disette. Yaakov et sa famille ne sont pas épargnés par la famine. Binyamin excepté, les dix autres fils de Yaakov sont obligés de descendre en Égypte pour y acheter du pain. Ils se présentent devant Yossef qui les reconnaît (contrairement à eux). Ce dernier élabore tout un plan pour voir si ses frères ont changé depuis l’époque où ils l’ont vendu. Il les accuse tout d’abord d’être des espions ; Les frères protestent de leur bonne foi en évoquant leur père et leur jeune frère. Yossef leur demande alors de revenir avec Binyamin pour prouver la véracité de leurs propos. En attendant, Chimon est retenu en otage. Sur le chemin du retour, les frères découvrent que l’argent payé en échange du blé a été mystérieusement restitué. Yaakov refuse de voir partir Binyamin. Il s’y résoud finalement devant l’ampleur de la famine, et Yéhouda se porte garant de son retour. Cette fois, Yossef les reçoit à dîner. Malgré son émotion, il continue de leur cacher son identité et poursuit son plan. Il fait mettre sa coupe d’argent dans le sac de Binyamin. Quand les frères prennent le chemin du retour, le lendemain, ils sont poursuivis, fouillés et arrêtés après la découverte de la coupe. Ils sont amenés à nouveau devant Yossef qui refuse d’entendre les arguments de Yéhouda : il retient désormais Binyamin qui deviendra son serviteur.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/mikets/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Mikets ;