import React from 'react';
import '../App.css'
import VayetsePicture from "../Images/Vayetse.jpg"


class Vayetse extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="vayetse-picture" src={VayetsePicture} />
                <h2 className="parasha-resume">Resumé Parasha Vayetse </h2>
                <p className="resume">Yaakov quitte Béer Chéva pour se rendre à ‘Harane. En chemin, il s’arrête dans "le lieu" dont la Torah ne précise pas le nom et qui correspond au mont "Moria" ("Mont du Temple"). Il y passe la nuit et rêve d’une échelle plantée dans la terre dont le sommet touche le ciel avec des anges qui y montent et descendent. D.ieu lui apparaît et lui promet que la terre sur laquelle il se trouve sera donnée à ses descendants. Le lendemain matin, comprenant que ce lieu témoigne de la résidence de D.ieu, Yaakov érige en monument la pierre sur laquelle il a dormi. A ‘Harane, Yaakov travaille pour son oncle Lavan en gardant ses troupeaux. Celui-ci accepte de lui donner Ra’hel, sa plus jeune fille, pour épouse en échange de sept années de travail. Cependant, le soir du mariage, Lavan trompe Yaakov et lui donne la main de Léa, l’aînée des deux sœurs. Yaakov ne s’aperçoit du piège que le lendemain. Il ne peut écarter Léa. Il épouse alors Ra’hel également, une semaine plus tard. Pour cela, il s’engage à travailler sept années supplémentaires pour son beau-père. Ce qu’il accepte volontiers, tant est grand son désir d’épouser Ra’hel. Léa donne naissance à quatre garçons: Réouven, Chimon, Lévi, Yéhouda, alors que Ra’hel reste stérile. Elle décide alors de donner Bilah sa servante à son mari pour épouse, afin qu’elle lui donne des enfants et qu’elle puisse procréer par son intermédiaire. Bilah donne naissance à deux garçons: Dan et Naphtali. Léa qui ne tombe plus enceinte donne elle aussi sa servante Zilpah pour épouse à Yaakov et cette dernière met au monde Gad et Acher. Léa enfante à nouveau deux garcons Issa’har et Zévouloune, ainsi qu’une fille, Dinahh. Finalement, la prière de Ra’hel est exaucée et elle donne naissance à Yossef. Après 14 années de travail, Yaakov aspire à rentrer chez lui mais Lavan le persuade de rester. Yaakov prospère, malgré les tentatives répétées de Lavan de le tromper. Après six années supplémentaires, Yaakov quitte Lavan sans l’en informer, le soupçonnant de vouloir retenir sa famille et ses biens. Il retourne finalement en terre promise où il est accueilli par des anges.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/vayetse/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Vayetse ;