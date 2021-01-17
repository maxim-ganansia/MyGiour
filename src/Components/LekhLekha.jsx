import React from 'react';
import '../App.css'
import LekhLekhaPicture from "../Images/Lekh-Lekha.png"


class LekhLekha extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="LekhLekha-picture" src={LekhLekhaPicture} />
                <h2 className="parasha-resume">Resumé Parasha Lekh Lekha</h2>
                <p className="resume">D.ieu s’adresse à Avram et lui demande « Quitte ta terre, ton lieu de naissance et la maison de ton père vers la terre que Je te montrerai. Là bas, lui dit D.ieu, tu deviendras une grande nation ». Accompagné de sa femme Saraï et son neveu Lot, Avram obéît à l’injonction de D.ieu et voyage donc vers la terre de Canaan. Arrivé à destination, il construit un autel et continue à diffuser le message du monothéisme. A peine installé, Avram doit quitter la terre de Canaan pour échapper à la famine Il se rend en Egypte et présente Saraï comme étant sa sœur ce qui lui permet de sauver sa vie. Saraï est en effet immédiatement remarquée pour sa beauté et emmenée au palais de Pharaon, qui veut la prendre pour femme. Le souverain égyptien est alors frappé d’une maladie qui l’empêche de toucher Saraï. Comprenant la situation, Pharaon se résout à rendre Saraï à Avram qui se révèle être son mari et pour réparer le préjudice, il lui offre de l’or, de l’argent et du bétail. De retour en terre de Canaan, Lot se sépare de son oncle Avram, pour s’installer dans la ville corrompue de Sodome. D.ieu contracte avec Avram "l’alliance des morceaux" dans laquelle Il lui annonce que sa descendance sera asservie, puis libérée pour hériter de la Terre Promise. A la suite d’une guerre perdue par le roi de Sodome face à Kédorlaomer et ses alliés, Lot est fait prisonnier. Avram réunit une petite légion, défait Kédorlaomer et libère son neveu. Il est béni pour cette action par Malki Tsédek (qui n’est autre que Chem) roi de Salem (Jérusalem). Toujours sans enfant après plus de dix années de mariage, Saraï demande à Avram d’épouser Hagar sa servante. Une fois l’union consommée, cette dernière tombe rapidement enceinte et se montre dédaigneuse vis-à-vis de Saraï qui réagit sévèrement. Agar s’enfuit pour échapper aux foudres de sa maîtresse mais un ange lui apparaît et réussit à la convaincre de rebrousser chemin et de se placer à nouveau sous l’autorité de Saraï. Cet ange annonce aussi à Agar que le fils qu’elle va mettre au monde sera le père d’une nation nombreuse. Ismaël naît alors qu’Avram est âgé de 86 ans. Treize ans plus tard, D.ieu change le nom d’Avram en Avraham ("père d’une multitude") et celui de Saraï en Sarah ("princesse") et leur promet qu’ils auront un bébé. De cet enfant, qu’ils appelleront Itshak ("il rira") naîtra une grande nation avec laquelle D.ieu perpétuera l’alliance d’Avraham. D.ieu donne à Avraham le commandement de la circoncision pour lui et sa descendance comme « signe de l’alliance entre Moi et toi ».</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/lekh-lekha/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default LekhLekha;