import React from 'react';
import '../App.css'
import NoahPicture from "../Images/Noah.png"


class Noah extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="noah-picture" src={NoahPicture}></img>
                <h2 className="parasha-resume">Resumé Parasha Noah</h2>
                <p className="resume">D.ieu demande à Noé, seul homme juste dans une génération dévastée par la corruption et la violence, de construire une grande Arche de bois (en hébreu "Téva") enduite, à l’intérieur et à l’extérieur de goudron. Hachem annonce qu’un énorme déluge va effacer toute vie de la surface de la terre, à l’exception de Noé, de sa famille, et de spécimens de chaque espèce animale qui trouveront refuge dans l’arche. La pluie tombe sans interruption 40 jours et 40 nuits, et l’eau recouvre la surface de la terre 150 jours durant, avant de redescendre et de s’évaporer. L’Arche se pose sur le mont Ararat et de sa fenêtre, Noé envoie un corbeau puis une colombe pour « voir si les eaux sont descendues de la surface de la Terre ». Lorsque la terre est sèche, exactement une année solaire (365 jours) après le début des pluies, D.ieu ordonne à Noé de sortir de l’Arche et de peupler à nouveau la Terre. Noé construit alors un autel et y offre des sacrifices en l’honneur de Hachem qui promet de ne plus jamais détruire l’humanité du fait de ses actes. Il fait apparaître un arc en ciel comme signe de l’alliance ainsi contractée avec l’homme. Noé plante une vigne et s’enivre de son produit. Deux de ses fils, Chem et Yaphet, gardent un comportement respectueux et recouvrent la nudité de leur père alors que ‘Ham, le troisième, le déshonore. Chem et Yaphet sont bénis pour leur comportement au contraire de ‘Ham. Les descendants de Noé forment un peuple uni avec un même langage et une même culture pendant 10 générations. Ils défient alors le Créateur en entamant la construction d’une immense tour qui symbolise leur invincibilité. D.ieu introduit alors la confusion dans leur langage de sorte que « l’un ne comprenait pas la langue de l’autre » ce qui provoqua l’abandon de leur projet, et leur dispersion sur la surface de la terre pour former 70 nations. La Paracha de Noé se conclut par la chronologie des dix générations qui séparent Noé d’Abram (qui sera plus tard appelé Avraham), ainsi que le voyage de ce dernier de sa ville natale Our Kasdim vers ‘Harane, première étape dans son cheminement vers la terre de Canaan.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/noah/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
                <p></p>
            </div>
        )
    }
}


export default Noah;