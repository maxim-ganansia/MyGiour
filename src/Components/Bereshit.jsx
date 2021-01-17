import React from 'react';
import '../App.css'
import BereshitPicture from "../Images/Bereshit.png"


class Bereshit extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="bereshit-picture" src={BereshitPicture} />
                <h2 className="parasha-resume">Resumé Parasha Bereshit</h2>
                <p className="resume">D.ieu crée le monde en six jours. Le premier jour, Il crée l'obscurité et la lumière. Le deuxième jour, il forme les cieux, divisant les « eaux supérieures » des « eaux inférieures ». Le troisième jour, Il sépare la terre et la mer, et fait surgir les arbres et la verdure du sol. Le quatrième jour, Il fixe la position du soleil et de la lune, qui auront pour fonction de permettre la mesure du temps et d'éclairer la terre. Les poissons, les oiseaux et les reptiles sont créés le cinquième jour; les animaux de la terre, puis l'être humain, sont conçus le sixième jour. D.ieu cesse tout travail le septième jour, et le sanctifie comme jour du repos. C’est le Chabbath. D.ieu forme le corps humain à partir de la poussière de la terre et insuffle dans ses narines « une âme de vie. » À l'origine, l'homme est une créture bi-sexuée; mais décidant qu'« il n'est pas bon qu’il soit seul », D.ieu prend la "partie féminine" de l'homme, en façonne une "femme", et les unit. Adam et Eve sont placés dans le jardin d'Éden et reçoivent le commandement divin de ne pas manger de « l'arbre de la connaissance de bien et du mal ». Le serpent persuade Eve de passer outre l'interdit et elle pousse son mari à fauter. Suite à cette faute, D.ieu décrète que l'homme éprouvera la mort, retournant au sol duquel il a été formé. Tout gain ne viendra désormais que par la lutte et les difficultés et la femme enfantera dans la douleur. Le couple est chassé du jardin d'Eden. Eve donne naissance à deux fils, Caïn et Abel. Caïn se dispute avec Abel et le tue. D.ieu punit son crime en décrétant qu'il sera un vagabond sans racines pour le restant de ses jours. Un troisième fils naît d’Adam, Cheth, dont le descendant en dixième génération, Noé, est le seul homme juste dans un monde devenu totalement corrompu.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/berechit/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Bereshit;