import React from 'react';
import '../App.css'

class Souccot extends React.Component {
    render() {
        return (
            <>
                <div className="div-fete-souccot">
                    <h1 className="titre-fete-souccot">Souccot <i>15 au 21 Tichri</i> </h1>
                    <div className="card-souccot-one">
                        <div className="div-video-mitsvots">
                            <iframe className="video-souccot-what" width="570" height="345" src="https://www.youtube.com/embed/CKxdFy-S7yo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="card-mitsvot-souccot">
                                <h1 className="titre-fete-souccot">Mitsvot de Souccot</h1>
                                <ul className="titre-list">
                                    <li className="point-list-mitsvot-souccot">Construire la Souccah</li>
                                    <li className="point-list-mitsvot-souccot">S'assoire dans la Souccah</li>
                                    <li className="point-list-mitsvot-souccot">Acheter et préparer son loulav</li>
                                    <li className="point-list-mitsvot-souccot">Etre dans la joie</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-intro-souccot">
                            <h1 className="titre-fete-souccot">Souccot C'est Quoi ?</h1>
                            <p className="texte-fete">
                                La fête de Souccot arrive quelques jours après Kippour… Imprégnés et transformés par
                                cette atmosphère particulière de purification, dès la sortie de ce grand jour,
                                nous mettons toute notre énergie pour construire la Soucca, prêts à nous réjouir,
                            Souccot marquant le temps de la réjouissance. <br />
                                <i>Comment ressentir une vraie joie, alors que nous abandonnons nos maisons et notre
                            confort matériel, pendant 7 jours, pour aller vivre dans une cabane précaire ? </i><br /><br />
                                <b>Un monde temporaire</b><br />
                            Quitter notre résidence pour vivre dans une Soucca temporaire, nous rappelle
                            que ce monde matériel est également transitoire. Ici bas, nous nous préparons au
                            monde futur, en nous élevant spirituellement. Comprendre cela, c’est donner à
                            notre vie un sens nouveau qui nous procure une joie particulière.<br /><br />
                                <b>La confiance absolue</b><br />
                            Durant 40 ans dans le désert, les Bné Israël ont survécu grâce aux miracles
                            d’Hachem, et ils se sont ainsi rapprochés de Lui. La forme de la Soucca (2
                            cloisons et une 3ème de 8 cm au minimum) est comparée à celle d’un homme qui
                            enlace son ami, le bras et l’avant-bras sont longs et la 3ème partie représente
                            la main. De la même manière, par la Mitsva de la Soucca, chaque cœur juif
                            ressentira avec émerveillement cette proximité particulière avec D.ieu.
                            Souccot est un moment privilégié. Nous nous réfugions sous Ses ailes protectrices,
                            et nous réalisons que <b>tout</b> dépend de Lui. Nous ressentons alors la joie
                            véritable : celle de placer notre confiance en Lui…<br /><br />
                                <b>SOUCCOT</b> :<br /> signifie “Cabanes”, en souvenir
                            des habitations dans lesquels nos ancêtres résidèrent dans le désert. Elle est
                            aussi appelée “HAG HAASSIF”, la fête de la récolte, car elle marque la fin du
                            cycle agricole annuel.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Souccot