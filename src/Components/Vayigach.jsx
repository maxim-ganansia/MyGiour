import React from 'react';
import '../App.css'
import VayigachPicture from "../Images/Vayigach.jpg"


class Vayigach extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="Vayigach-picture" src={VayigachPicture} />
                <h2 className="parasha-resume">Resumé Parasha Vayigach </h2>
                <p className="resume">Yehouda se présente devant Yossef pour demander la libération de Binyamin, se proposant lui-même comme esclave à la place de son frère. Témoin d’une telle loyauté envers leur frère, Yossef révèle son identité à ses frères : « Je suis Yossef », dit-il, « mon père est-il encore vivant ? ». Les frères de Yossef sont stupéfaits. Ils sont pris de remords et de honte. Toutefois, Yossef les réconfortent : « Ce n’est pas vous qui m’avez envoyé ici », leur dit-il, « mais c’est Hachem. Tout cela a été ordonné d’En-Haut pour nous sauver, ainsi que toute la région, de la famine ». Les frères retournent précipitamment en terre de Canaan pour annoncer la nouvelle à leur père. Yaakov, fou de joie, descend en Egypte avec ses fils et leur famille –soixante dix âmes en tout- et retrouve son fils après 22 ans de séparation. Sur la route vers l’Egypte, Hachem se révèle à lui et lui promet : « Ne crains pas de descendre en Egypte car je ferai de toi une grande nation. Je descendrai avec toi en Egypte et Je t’en ferai remonter ». Yossef accumule les richesses d’Egypte en vendant de la nourriture et du grain pendant la famine. Pharaon donne à Yaakov et sa famille la région de Gochène pour s’y installer. Les enfants d’Israël prospèrent dans l’exil d’Egypte.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/vayigach/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Vayigach ;