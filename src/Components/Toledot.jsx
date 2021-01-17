import React from 'react';
import '../App.css'
import ToledotPicture from "../Images/Toledot.jpg"


class Toledot extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="toledot-picture" src={ToledotPicture} />
                <h2 className="parasha-resume">Resumé Parasha Toledot </h2>
                <p className="resume">Itshak s’est marié avec Rivka à l’âge de 40 ans. Après 20 années d’attente, Rivka tombe enceinte. Sa grossesse est particulièrement difficile. D.ieu lui annonce qu’elle donnera naissance à deux jumeaux et que le plus jeune prendra le dessus sur le plus vieux. Essav naît en premier et Yaakov le suit en lui tenant le talon. Essav grandit et devient un « chasseur expérimenté, un homme des champs » alors que Yaakov devient un « homme entier, qui réside dans les tentes (de l’étude) ». Itshak a une préférence pour Essav alors que Rivka aime Yaakov. De retour de la chasse, épuisé et affamé, Essav vend son droit d’aînesse à Yaakov pour un plat de lentille rouge, ce qui lui vaut le nom de Edom (qui signifie "rouge" en hébreu). La famine oblige Itshak à partir à Gérar, dans le pays des philistins, Il présente Rivka comme sa sœur, craignant d’être tué par ceux qui convoitent sa beauté. Il creuse la terre et ouvre les puits forés autrefois par son père Avraham mais qui, depuis, avaient été rebouchés par les philistins. Il creuse aussi de nouveaux puits. Les premiers sont l’objet de contestations de la part des philistins, tandis que les derniers sont approuvés. Essav se marie avec deux femmes ‘Hittites. Le temps passe ; Itshak vieillit. Il devient aveugle et sentant sa fin approcher, il exprime le désir de bénir son aîné Essav avant sa mort. Pendant que celui-ci part à la chasse pour préparer un plat que son père apprécie, Rivka cuisine un repas similaire et demande à Yaakov de se vêtir des habits d’Essav avant de l’envoyer se présenter devant son père pour recevoir sa bénédiction. Itshak bénit effectivement Yaakov : « D.ieu te donnera la rosée du ciel et les graisses de la terre » lui promet-il. Il lui assure aussi qu’il aura l’ascendant sur son frère. Lorsque Essav revient enfin des champs, il apprend que Yaakov a prit sa place. Il implore, malgré tout, son père de lui donner aussi une bénédiction. Itshak lui promet alors qu’il « vivra de son épée » et que c’est seulement lorsque Yaakov commettra un faux pas qu’il pourra prendre le dessus sur lui. Yaakov quitte la maison de ses parents pour se rendre à ‘Haran afin de fuir la colère d’Essav et trouver une épouse dans la famille de son oncle, Lavan, le frère de Rivka. Essav se marie avec une troisième femme, Ma’halate, fille d’Ismaël.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/toledot/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Toledot ;