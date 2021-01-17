import React from 'react';
import '../App.css'
import VayeraPicture from "../Images/Vayera.jpg"


class Vayera extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="Vayera-picture" src={VayeraPicture} />
                <h2 className="parasha-resume">Resumé Parasha Vayera</h2>
                <p className="resume">Avraham s’est circoncis à l’âge de 99 ans. D.ieu se révèle à lui trois jours après la Brith Mila et empêche les invités potentiels de le déranger. Voyant la tristesse du patriarche, D.ieu envoie trois anges qui ont pris une apparence humaine afin qu’ils lui rendent visite. Avraham court pour les accueillir et il demande à Sarah de leur préparer un repas. Ayant mangé, chacun révèle la mission dont il est chargé. Le premier visiteur est chargé de guérir Avraham. Le second annonce que Sarah donnera naissance à un fils dans exactement un an. Sarah rit en apprenant cette nouvelle. Le dernier apprend à Avraham la future destruction des villes de Sodome et Gomorrhe. Après le départ des anges, Avraham plaide devant D.ieu et lui demande d’épargner les villes corrompues. Malgré tous ses efforts, Avraham ne peut empêcher cette décision de se réaliser car il n’y pas de juste dans ces villes et seul Lot et deux de ses filles seront sauvés. Deux des trois anges arrivent à Sodome où Lot leur offre l’hospitalité et les protège des intentions malveillantes de la foule. Les deux anges révèlent qu’ils sont venus pour détruire la ville et sauver Lot et sa famille. Dans leur fuite, la femme de Lot ne respecte pas l’ordre des anges de ne pas se retourner pour voir la destruction de la ville et se transforme en statue de sel. Pensant être les seuls rescapés d’une nouvelle destruction totale du monde, les deux filles de Lot font boire leur père pour avoir des relations avec lui et assurer ainsi le renouvellement de la population. Chacune d’elles met au monde un fils, respectivement Amon et Moab. Avraham voyage pour arriver à Gérar, où le roi philistin, Avimélekh s’empare de Sarah qui s’est une nouvelle fois présentée comme la sœur d’Avraham. Dans un rêve, D.ieu apprend à Avimélekh qu’il mourra s’il ne rend pas cette femme à son mari. D.ieu se souvient de la promesse faite à Avraham. Sarah donne naissance à un fils qui est nommé Itshak (ce qui signifie " Il rira"). Itshak est circoncis à l’âge de 8 jours. Avraham est âgé de 100 ans et Sarah de 90 ans à la naissance d’Itshak. Hagar et Ismaël sont chassés de la maison d’Avraham et errent dans le désert. D.ieu entend les pleurs d’Ismaël qui est mourant et lui sauve la vie en montrant un puits à sa mère. Avimélekh établit une alliance avec Avraham à Béer Cheva. D.ieu met à l’épreuve Avraham une dixième fois en lui demandant de sacrifier son fils sur le mont Moriah (le mont du Temple à Jérusalem). Itshak est ligoté, placé sur l’autel et Avraham lève sa main pour le sacrifier. La voix d’un ange l’arrête et Avraham sacrifie, à la place de son fils, un bélier dont les cornes se sont emmêlées dans un buisson. Avraham apprend alors la naissance de Rivka, fille de son neveu Bétouel.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/vayera/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Vayera;