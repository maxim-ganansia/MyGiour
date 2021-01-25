import React from 'react';
import '../App.css'
import MahatsitHashekel from "../Images/mahatsitHashekel.jpg"
import MeguilatEsther from "../Images/meguilatesther.jpg"
import MatanotLaveyonim from "../Images/matanotlaevyonim.jpg"
import MisholahManot from "../Images/MisholahManot.jpg"
import MichtePourim from "../Images/Michté.jpg"


class Pourim extends React.Component {
    render() {
        return (
            <>
                <div className="div-fete-pourim">
                    <div className="first-div-fete">
                        <div className="card-intro-pourim">
                            <h1 className="titre-fete-pourim">Pourim <i>14 Adar</i> </h1>
                            <h1 className="titre-fete-pourim-two">C'est quoi ?</h1>
                            <p className="texte-fete-pourim">L’Empire perse s’étendait sur 127 pays et tous les Juifs en étaient les sujets.<br /> <br />
                            Après avoir fait exécuter son épouse, la reine Vashti pour lui avoir désobéi, le roi Assuérus organisa un concours de beauté pour trouver une nouvelle reine.<br /><br />
                            Une fille juive, Esther, trouva faveur à ses yeux et devint la reine – bien qu’elle refusât de divulguer quelle était sa nationalité.<br /><br />
                            Entre temps, l’antisémite Haman fut nommé premier ministre de l’Empire. <br /><br />
                            Mordékhaï, le chef des Juifs (et le cousin d’Esther), défia l’ordre du roi en refusant de se prosterner devant Haman, qui portait l’effigie d’une idole sur sa poitrine.
                            Celui-ci, exaspéré, convainquit le roi de promulguer un décret ordonnant l’extermination de tous les Juifs le 13ème jour de Adar – une date qui fut tirée au sort par Haman.<br /><br />
                            Mordékhaï galvanisa les Juifs et les convainquit de se repentir, de jeûner et de prier D.ieu. Pendant ce temps, Esther invita le roi et Haman à participer à un festin.
                            Lors de ce festin, Esther révéla au roi son identité juive. Haman fut pendu, Mordékhaï fut nommé premier ministre à sa place et un nouveau décret fut promulgué, donnant au Juifs le droit de se défendre contre leurs ennemis.<br /><br />
                            Le 13ème jour de Adar, les Juifs prirent les armes et vainquirent leurs agresseurs, en tuant de nombreux. Le 14 Adar, il se reposèrent et célébrèrent leur victoire et le miracle de D.ieu. Dans la ville de Chouchane, il leur fallut un jour de plus pour atteindre la victoire.
                            </p>
                            <iframe className="video-pourim-what" width="580" height="335" src="https://www.youtube.com/embed/xKuXpgPpUDo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="second-div-fete">
                        <div className="jeune-esther">
                            <h1 className="titre-fete-pourim">Jeune d'Esther <i>13 Adar</i> </h1>
                            <h1 className="titre-fete-pourim-two">C'est quoi ?</h1>
                            <h2 className="titre-fete-pourim-jeune">Date et heure du jeune</h2>
                            <p className="texte-fete-pourim">
                                <b>-</b><b> Le 13 Adar (veille de Pourim)</b> qui commémore le combat que les Juifs durent livrer contre leurs ennemis, il est coutume de jeûner. <br />
                            Ce jeûne porte le nom de <b>« Jeûne d'Esther »</b>.<br /><br />
                                <b>-</b> Lorsque le 13 Adar tombe <b>Chabbat</b><i>(Pourim tombe alors dimanche)</i>, le jeûne est différé au jeudi (11 Adar) qui précède. Ce choix est dicté par le fait qu'il ne convient pas de reporter le jeûne à la veille (vendredi 12 Adar) par égard à l'honneur du Chabbat.<br /><br />
                                <b>-</b> De même, il n'est pas possible de le reporter au lendemain (comme dans le cas des autres jeûnes qui tombent Chabbat) puisque le dimanche 14 Adar est le jour de Pourim.<br /><br />
                                <b>-</b> L'obligation de jeûner ne commence qu'à l'aube <i>« alot hacha'har »</i>, et non pas depuis la veille, et se termine à la tombée de la nuit (apparition des étoiles). Il faudra consulter à ce sujet le calendrier.<br /><br />
                                <b>-</b><b> Halakha pour les Séfaradim : </b>Il est permis de se lever avant l'aube pour déjeuner, à condition d'avoir eu l'intention de le faire avant d'aller se coucher. En l'absence d'une telle intention, l'acceptation du jeûne se ferait tacitement au moment d'aller se coucher. <br />
                                <b>-</b><b> Halakha pour les Achkénazim (et selon la coutume ‘Habad) : </b>il serait néanmoins permis de boire dans un tel cas. Selon eux, l'habitude générale de se lever dans la nuit pour boire après le repas constitue une intention implicite. Il est toutefois préférable que cette intention soit explicitement exprimée.<br /><br />
                                <b>-</b> Pour les hommes, à cause de l'obligation qu'ils ont de faire la lecture du Chéma à partir de l'aube <i>« alot hacha'har »</i>, il ne sera pas permis de commencer un repas avec du pain dans la demi-heure qui précède. Un tel repas qui comprendrait au moins un kabeitzah de pain <i>(environ 60 g)</i> doit donc commencer une demi-heure avant le début du jeûne.<br /><br />
                                <b>-</b> Lorsque le jeûne a lieu le 13 Adar, il n'est pas permis de commencer à manger avant d'avoir écouté la lecture de la Méguila, le soir de Pourim. Les Sages ont ainsi prolongé l'interdiction de manger de crainte d'en venir à oublier la lecture de la Méguila. En cas de grande nécessité <i>(une personne âgée par exemple, pour qui le prolongement du jeûne est difficile)</i>, il sera cependant permis de manger ou de boire en quantité inférieure à un kabeitzah <i>(en. 60 g)</i>.<br />
                            </p>
                            <h2 className="titre-fete-pourim-jeune">Devoir de jeuner</h2>
                            <p className="texte-fete-pourim">
                                <b>-</b> Certains décisionnaires pensent que le Jeûne d'Esther revêt une gravité plus grande que les autres jeûnes1 dans la mesure où il fait partie des obligations mentionnées dans la Méguila <b>(« Divreï Kabalah »)</b>. Il est ainsi observé, selon cet avis, en souvenir des trois jours de jeûne décrétés par la Reine Esther, d'où le nom de Jeûne d'Esther.<br /><br />
                                <b>-</b> Selon eux, les femmes enceintes <i>(à partir de la fin du troisième mois)</i> et les femmes dans les 24 mois qui suivent leur accouchement <i>(même si elles n'ont pas allaité)</i>, sont tenues de jeûner, contrairement aux autres jeûnes (à l'exception du jeûne du 9 Av et celui de Kippour), pour lesquels elles n'ont pas l'obligation de jeûner <i>(la coutume étant néanmoins de jeûner lorsqu'elles ne sont pas souffrantes)</i>.<br />
                            Selon cette opinion, elles ont toutefois la possibilité, lorsqu'elles sont souffrantes, de reporter le jeûne à une date ultérieure, étant donné que le jeûne décrété par Esther <i>(trois jours consécutifs)</i> a lui-même eu lieu au mois de Nissan. Le choix du 13 Adar <i>(veille de Pourim)</i> n'a donc été fait qu'à titre préférentiel.<br /><br />
                                <b>-</b> À l’opposé, la majorité des décisionnaires est d'avis que ce jeûne n'est pas en relation avec le jeûne décrété par Esther. Certains considèrent qu'il s'agit d'un jeûne institué par les Sages en souvenir du jour du 13 Adar lorsque les Juifs, implorant la miséricorde divine pour avoir le dessus sur leurs ennemis, observèrent eux-mêmes un jour de jeûne. Dans ce contexte, l'appellation « Jeûne d'Esther » pourrait trouver une explication dans le fait que les Juifs aient choisi de jeûner le 13 Adar, tout en sachant que cela aurait pu les affaiblir dans le combat contre leurs ennemis, à l'instar d'Esther qui a préféré jeûner alors qu'elle devait chercher à trouver grâce aux yeux du roi.<br /><br />
                                <b>-</b> Selon cette deuxième opinion, ce jeûne ne comporte pas plus de gravité que les autres jeûnes. Il y a donc lieu de permettre aux catégories de femmes mentionnées plus haut de s'abstenir de jeûner si cela leur est très pénible <i>(tout comme pour les autres jeûnes)</i>.<br /><br />
                                <b>-</b> D'autres décisionnaires considèrent ce jeûne comme une coutume qui a été instaurée en souvenir du combat qu'ont livré les Juifs le jour du 13 Adar, bien qu'eux-mêmes n'aient pas observé le jeûne en raison de la bataille. L'appellation « Jeûne d'Esther » trouve alors son explication dans le fait que seule Esther, qui ne tombait pas sous le coup du décret d'Haman, avait observé le jeûne ce jour-là.<br /><br />
                                <b>-</b> En pratique, de nos jours, l'opinion généralement admise est de considérer ce jeûne comme une coutume, conformément au troisième avis cité ci-dessus. A ce titre, le « Jeûne d'Esther » bénéfice de certains allégements quant à l'obligation de jeûner.<br /><br />
                                <b>-</b> Les femmes <b>enceintes</b> (à partir de la fin du troisième mois) et les femmes dans les 24 mois qui suivent un accouchement (même si elles n'ont pas allaité) ne sont pas tenues de jeûner. De même, une personne faible ou légèrement souffrante peut être exemptée (après avoir obtenu l'accord d'une autorité rabbinique).<br /><br />
                                <b>-</b> Les <b>jeunes mariés</b>, dans les sept jours de réjouissances qui suivent leur mariage, ne sont pas tenus de jeûner. Ils n’auront par ailleurs pas l'obligation de remplacer ce jeûne par un autre jour (de même que toutes les personnes qui sont exemptées du jeûne).<br /><br />
                                <b>-</b> Toutefois, les personnes en bonne santé, même si elles se trouvent en voyage et que le jeûne leur est pénible, devront s'astreindre à jeûner. De même, il faut, à titre éducatif, initier les enfants à jeûner quelque temps avant l'âge de Bar Mitsva (ou Bat Mitsva).<br />
                            </p>
                            <iframe className="video-pourim-jeune" width="580" height="335" src="https://www.youtube.com/embed/PzcPlhsBD5A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="third-div-fete">
                        <div className="card-mitsvot-fete">
                            <div className="mahatsit-hashekel">
                                <h2 className="titre-fete-pourim-mitsvot">Ma'hatsit Hashekel</h2>
                                <img className="mahatsit-hashekel-picture" src={MahatsitHashekel} alt="Mahatsit Hashekel Picture" />
                                <p className="texte-fete-mitsvot">donnez à la Tsédaka au moins <b>5 Euros ou 18 Shekkels par personne</b>, en disant <b>“Zékher léMa’hatsit Hashekel”</b>.<br />
                                Si possible, donnez bien plus que ce montant, ce don contribuant à réparer nos fautes.<br /><br />
                                Il faut donner à des instituts de Torah ou étudiants de Torah à plein temps. Essayez de donner pour votre femme et vos enfants si vos moyens vous le permettent.</p>
                            </div>
                            <div className="lecture-meguila">
                                <h2 className="titre-fete-pourim-mitsvot">Écouter la lecture de la Méguila</h2>
                                <img className="meguilat-esther-picture" src={MeguilatEsther} alt="Meguilat Esther Picture" />
                                <p className="texte-fete-mitsvot">
                                    A la <b>synagogue</b>.<br />
                                Les personnes concernées sont les hommes, femmes et enfants bar/bat-Mitsva, ainsi que les enfants à partir de l’âge où ils sont capables d’écouter sans déranger, afin de les éduquer.<br />
                                Il ne faut manquer aucun mot de cette lecture, au risque de <b>ne pas être quitte de la Mitsva</b>.<br />
                                Si on s’aperçoit que l’on n’a pas entendu un ou plusieurs mots, on peut les rattraper en les lisant dans le livre dans lequel on suit la lecture et de continuer jusqu'au niveau de l'officiant.<br />
                                Nous devons écouter <b>2 fois</b> la Meguila.
                                </p>
                            </div>
                            <div className="matanot-laevyonim">
                                <h2 className="titre-fete-pourim-mitsvot">Matanot Laevyonim</h2>
                                <img className="matanot-laevyonim-picture" src={MatanotLaveyonim} alt="Meguilat Esther Picture" />
                                <p className="texte-fete-mitsvot">
                                    <b>Faire un don à 2 pauvres différents</b>.<br />
                                On peut leur donner <i>directement</i> ou par le <i>biais d’organismes de collecte</i>, à condition qu’ils transmettent ces sommes le jour de Pourim.<br />
                                Le montant minimal du minimal est l’équivalent d’un repas, soit <b>environ 5 euros en France et 18 Shekkels en Israël</b>.<br />
                                Celui qui peut donner avec largesse, <b>DOIT LE FAIRE ABSOLUMENT</b>, telle est la coutume et la plus grande Mitsva de Pourim.<br /><br />
                                </p>
                            </div>
                            <div className="mishloah-manot">
                                <h2 className="titre-fete-pourim-mitsvot">Mishloa'h Manot</h2>
                                <img className="mishloah-manot-picture" src={MisholahManot} alt="Misholah Manot Picture" />
                                <p className="texte-fete-mitsvot">
                                    <b>Envoyer au moins 2 mets à une 1 personne</b>.<br />
                                Il s’agit d’aliments prêts à consommer. <br />
                                    <i>Exemple : 2 aliments ou 1 aliment + 1 boisson</i>.<br />
                                Les hommes donnent aux hommes et les femmes aux femmes.<br />
                                Les quantités minimales : <b>30g de mets</b> et <b>86cl de boisson</b>. Essayez d’en donner à des personnes avec qui vous n’êtes pas en très bon terme.<br /><br /><br />
                                </p>
                            </div>
                            <div className="michté">
                                <h2 className="titre-fete-pourim-mitsvot">Michté de Pourim</h2>
                                <img className="michté-picture" src={MichtePourim} alt="Michté pourim Picture" />
                                <p className="texte-fete-mitsvot">
                                    <b>festoyer en prenant un bon repas contenant pain, vin et viande</b>.<br />
                                Il existe une Mitsva de boire <b>un peu plus de vin</b> que ce qu’on a l’habitude pendant l’année.<br />
                                L’idéal serait de boire au point d’être pris par le sommeil.<br />
                                Nos Sages ont insisté sur la vigilance à avoir dans ce domaine : <b>Aucun écart dans l’accomplissement des Mitsvot ou le comportement ne vaut par rapport à cette Mitsva de boire</b>.<br />
                                Il faut en particulier veiller à ne pas provoquer de débordements malsains.
                                </p>
                            </div>
                        </div>
                        <iframe className="video-pourim-music" width="450" height="285" src="https://www.youtube.com/embed/JKxQ4_LRBkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </>
        )
    }
}

export default Pourim