import React from 'react';
import '../App.css'
import Shoffar from "../Images/shoffar.png"
import Intro from "../Images/Simanims Rosh Hashana/Intro.jpg"
import KiddoushLemmel from "../Images/KiddoushLemmel.png"
import KiddoushOne from "../Images/Simanims Rosh Hashana/Kiddoush1.jpg"
import KiddoushTwo from "../Images/Simanims Rosh Hashana/Kiddoush2.jpg"
import Figue from "../Images/Simanims Rosh Hashana/Figue.jpg"
import Grenade from "../Images/Simanims Rosh Hashana/Grenade.jpg"
import Pomme from "../Images/Simanims Rosh Hashana/Pomme.jpg"
import Sesame from "../Images/Simanims Rosh Hashana/Sesame.jpg"
import Courge from "../Images/Simanims Rosh Hashana/Courge.jpg"
import Epinard from "../Images/Simanims Rosh Hashana/Epinard.jpg"
import Feves from "../Images/Simanims Rosh Hashana/Feves.jpg"
import Ail from "../Images/Simanims Rosh Hashana/Ail.jpg"
import Miel from "../Images/Simanims Rosh Hashana/Miel.jpg"
import Tete from "../Images/Simanims Rosh Hashana/Tete.jpg"
import Poisson from "../Images/Simanims Rosh Hashana/Poisson.jpg"
import Poireau from "../Images/Simanims Rosh Hashana/Poireau.jpg"
import Datte from "../Images/Simanims Rosh Hashana/Datte.jpg"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Intro} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">LES SIMANIMS</p>
                            <p className="text-slide">Le Talmud (Horayot 12a, Kritot 6a) rapporte la tradition d'apporter certains aliments à table le soir de Rosh Hashana.<br />
                            Manger une pomme trempée dans le miel n'a jamais été l'assurance d'une année douce et peu d'ennemis ont déjà reculé devant un homme parce qu'il mangeait des betteraves!.<br />
                            Une explication de cet usage est que le soir de Rosh Hashana, nous apprenons à regarder notre vie d'une nouvelle manière. Si une carotte peut nous faire penser à un mauvais décret, alors c'est que nous pouvons trouver matière à réflexion dans chaque événement de notre vie.
                            Les Simanim nous apprennent à être attentifs à notre environnement et à grandir de chaque chose, aussi banale soit-elle. <br />
                            Après le kiddouch, on procède au Nétilat Yadayim puis au Motsi sur le pain. On commence ensuite le seder de Rosh Hashana selon l'ordre suivant en fonction des tradutions de chacun (Prenons l'exemple du Rite Tunisien :<br />
                            - Figues / Boukha <br />
                            - Grenade <br />
                            - Pomme <br />
                            - Sésame <br />
                            - Courge <br />
                            - Epinard <br />
                            - Fève <br />
                            - Ail <br />
                            - Miel <br />
                            - Tête (de mouton) <br />
                            - Poisson <br /></p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={KiddoushOne} />
                        </div>
                        <div className="simanim-explanation">
                            <img className="image-slide" src={KiddoushLemmel} />
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={KiddoushTwo} />
                        </div>
                        <div className="simanim-explanation">
                            <img className="image-slide" src={KiddoushLemmel} />
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Figue} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">A Savoir</p>
                            <p className="text-slide">De nos jours, les figues sont malheuresement infestées d'insectes et il est difficile de les vérifier. On remplacera les figues fraiches par de la Boukha ou bien on se contentera de faire le Yehi Ratson sur la figue sans la manger.</p>
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Nos Sages (Yalkout Chimoni) comparent la Torah aux figues; de même que les figues se mangent en entier sans contenir aucun déchet (noyaux, écorce, pépins), toutes les paroles de Torah sont bonnes et se consomment sans modération.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Grenade} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Le Talmud (Erouvin 19a) nous enseigne que même le plus éloigné des juifs est plein de Mitsvot, comme la grenade est pleine de grains. Le Alchikh Hakadosh fait remarquer que la grenade a la particularité de garder ses grains intacts et entiers même après s'être abîmée à l'exterieur.<br />
                            De même, lorsqu'un juif s'abîme au contact du vaste monde, ce n'est qu'en apparence et son intériorité reste entière et prête a se reconnecter à sa source.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Pomme} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Le Talmud (Chabat 88a) compare le peuple d'Israël à la pomme : "Comme la pomme qui précède ses feuilles sur l'arbre, le peuple d'Israël a fait précéder son acceptation de la Torah (Na'assé) à sa compréhension (Nichma)".<br />
                            La pomme nous rappelle que parfois, pour découvrir la douceur de la Torah, il faut savoir se jetter à l'eau même si on ne sait pas vraiment ce que l'on va découvrir.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Sesame} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Bien que les grains de la grenade soient nombreux, on peut tout de même les compter (en s'armant de patience certes ...). Les grains de sésames semblent quant à eux infinis. Les grains sont si nombreux qu'ils semblent fusionner pour former un seul ensemble à l'instar des grains de sables qui laissent place à un tout immense et magnifique: La plage. En regardant l'infinité de grains du sésame nous nous souhaitons de voir nos mérites et bonnes actions s'agencer les uns aux autres pour former un magnifique tableau de nous même et de tout ce que nous renfermons comme potentiel.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Courge} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">La courge se dit <i>Kra</i> en araméen ce qui ressemble au mot Chéyikara' / Que soit déchiré. Certains ont l'habitude de consommer de la carotte car le mot Gezer/Carotte ressemble au mot Gezar/Décret. <br />
                            Au delà du jeu de mot, nous prenons conscience qu'Hashem a la possibilité de déchirer les mauvais décrets contre le peuple juif. Même si notre destin nous semble parfois scellé, rappelons nous que rien n'est impossible devant notre père Céleste et que nul ne doit désespérer quelque soit la situation.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Epinard} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">A Savoir</p>
                            <p className="text-slide">Attention, les épinards peuvent facilement être infestés de petits insectes. Il faudra donc prendre bien soin d'acheter des épinards cultivés hors-sol (type Gouch Katif) ou bien se contenter de les regarder en prononçant le Yehi Ratson sans les consommer.</p>
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Les blettes/épinards se disent <i>Silka</i> en araméen ce qui ressemble au mot Cheyistalekou / Que disparaissent.<br />
                            Bien que cela ne soit pas mentionné dans nos sources, permettons nous de remarquer que les épinards n'offrent pas toujours la meilleure "carte de visite" au niveau esthétique (essayez de faire goûter une bkeila à un ashkénaze). Il rest néanmoins que les épinards regorgent de bienfaits pour la santé de chacun et notamment des femmes enceintes (ou même pour le regime). De la même manière, prenons cette occasion pour rappeler qu'il ne faut pas juger la valeur d'une situation à son apparence première et que les situations qui nous semblent les plus difficiles peuvent se révélées devenir la source de nos plus belles réussites.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Feves} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">La fève se dit <i>Foul</i>en hébreu qui rappelle l'expression Shéyipolou / qu'ils s'effondrent.<br />
                            Faisons remarquer que nous ne demandons pas de détruire nos ennemis, mais bien qu'ils s'effondrent d'eux-même. Au delà du fait que cela ferait disparaître le jeu de mots, il semble que nous devrions nous rappeler que les embûches et difficultés sont autant d'épreuves qu'Hashem met sur notre chemin pour nous permettre d'exprimer au mieux nos potentiels. L'épreuve n'est présente que dans la mesure où elle nous permet de progresser. Une fois l'objectif atteint elle s'effondre d'elle-même.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Ail} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">L'ail se dit <i>Touma</i> en Araméen, ce qui nous permet de faire le jeu de mots Shéyi tamou / Qu'ils prennent fin. <br />
                            Rappelons nous que toute épreuve a une fin. Même si les difficultés semblent parfois s'éterniser, n'oublions jamais que le bout du tunnel arrive et prions pour que l'on puisse voir la fin des épreuves cette année.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Miel} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">La pomme est un fruit sucré par essence, tandis que le miel est produit par les abeilles qui ne sont pas un exemple de douceur.<br /><br />
                            Bien que l'abeille soit principalement perçue comme une source de piqûre, c'est également elle qui nous apporte le miel. Le Siman vient nous apprendre qu'il y a deux types de douceurs dans la vie:<b>La pomme</b>, symbole d'une douceur immédiate et évidente, et <b>Le miel</b>, symbole d'une douceur que l'on ne voit qu'à la fin. Nous sommes confrontés à toutes sortes de difficultés dans la vie, à des éprevues qui semblent nous piquer.<br /><br />
                            Nous devons avoir conscience que ce sont ces mêmes épreuves qui vont souvent se révéler être sources d'enrichissement et de joies dans nos vie.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Tete} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">On prend du mouton en souvenir du bélier d'Itsh'ak Avinou, le fils d'Avraham Avinou. <br />
                            Dans un monde matraqué de publicités et d'information, cette Brakha prend une importance toute particulière. Puissons-nous mériter d'être de ceux qui sont à la tête (qui dirigent leur vie) et non à la queue (qui ne font que suivre ce que leur dit la tête).</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Poisson} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Le poisson mérite de croitre à une vitesse peu commune et de donner naissance à une descendance innombrable. <br />
                            Nos sages nous font remarquer que le mauvais oeil n'a pas d'emprise sur les poissons (d'où la coutume d'utiliser le poisson comme signe contre le mauvais oeil). <br />Qu'a t-il de si spécial pour être protégé du mauvais oeil ?<br />
                            Les sages nous expliquent que sa protection vient du fait qu'il vit caché sous l'eau. Apprenons du poisson et sachons profiter de nos succès et de nos réalisation sans avoir besoin d'en faire un profil facebook ou une story instagram - c'est peut être là le secret de la bénédiction.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Poireau} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Une fois de plus, les sages jouent sur la ressemblance du mot <i>Karti</i> (poireau en araméen) avec le mot Yikaretou / Qu'ils soient détruits.<br />
                            Le mot Karet / Destruction est on ne peut plus négatif et on aurait pu penser qu'il aurait mieux valu laisser le poireau loin de notre table de Rosh Hashana qui est sensée représenter la nouvelle année qui commence. Et pourtant, la destruction peut être la source de joie si elle s'abat sur ceux qui cherchent à nous détruire. Plus largement, on pourra réfléchir à quel point tout chose peut s'avérer bonne pour nous, si nous savons lui donner sa place et l'exprimer de la bonne manière.</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="div-image-slide">
                        <div className="picture-slide" >
                            <img className="image-slide" src={Datte} />
                        </div>
                        <div className="simanim-explanation">
                            <p className="title-slide">Pourquoi ?</p>
                            <p className="text-slide">Le Roi David proclame dans les Psaumes : "Le juste fleurit comme le dattier, comme le cèdre du Liban il grandit". Si le juste ressemble à un dattier, pourquoi donc devient-il un cèdre ?<br />
                            Le dattier est un arbre de petite taille alors que le cèdre est immense et majestueux. Les sages expliquent que le dattier utilise son énergie pour produire fruits et fleurs au lieu de se concentrer sur son propre tronc.<br />
                            Le juste ressemble au dattier qui apporte bienfaits et bénédictions à ceux qui l'entourent à l'instar des fruits et fleurs du dattier. S'il est louable de donner aux autres, le juste pourrait s'inquiéter de son sort et de son développement personnel, c'est pour cela que le verset continue et nous prmet que si une personne s'affaire à apporter des fruits au monde, il se verra lui même grandit et renforcé comme un magnifique cèdre.</p>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}


class RochHachana extends React.Component {
    render() {
        return (
            <>
                <div className="div-fete-roshHashana">
                    <h1 className="titre-fete-rosh">Rosh Hashana <i>1er et 2 Tichri</i> </h1>
                    <div className="card-intro-roshHashana">
                        <h1 className="titre-fete-roshHashana">Rosh Hashana c'est quoi ?</h1>
                        <p className="texte-fete"> Rosh Hashana est le <b>Nouvel An de l’homme :</b> Jour ou a été créé Adam Harishon et également jour ou il a fauté.<br />
                            Les avots (Abraham, Itshak, Yaakov) sont nés le jour de Rosh Hashana<br /><br />

                            Rosh Hashana est une <b>fête mentionnée dans la Torah</b>
                            Malgrè que ce soit une fête de la Torah on ne mentionne pas une fête concernant la tchouva mais comme la fête du souvenir, c’est quelque chose de discret.<br />
                            Nous devons donc continuellement faire Téchouva.<br /><br />

                            <b>Mais pourquoi parlons nous de nouvel an ?</b><br />
                             On repart à 0 : Hitradshout : c'est une nouvelle vie, un nouveau destin : <br />
                             On devient une nouvelle personne : Cela nous vient de Sarah. En effet, Sarah ne pouvait pas avoir d’enfant car elle n’avais pas de matrice. <br />
                             On dit que la prière de Sarah a été exaucé a Rosh Hashana et quand elle est allée dormir le soir de Rosh Hashana elle est devenu une femme avec une matrice.<br />
                             Rosh Hashana est le seul jour ou il y a 2 jours de fête. En effet, au cas ou la fête tombe shabbat on ne peux pas sonner le shoffar (Dans ce cas la nous sonnerons le shoffar le 2eme jour).<br />
                             Mais ces 2 jours sont considérés par Hakadosh Barouh Hou comme 1 seul jour<br />
                        </p>
                        <iframe className="video-rosh-un" width="560" height="315" src="https://www.youtube.com/embed/LQ9fmQoEURY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="second-div-roshHashana">
                        <div className="div-video-text">
                            <iframe className="card-video-roshHashana" width="587" height="335" src="https://www.youtube.com/embed/vCYRM7KYJY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="card-priere-shoffar">
                                <ul className="titre-list">Prière du Shoffar
                                    <li className="point-list-shoffar">Baroukh Ata Ado-naï, Elo-hénou, Mélekh ha’olam, acher qidechanou bemitsvotav, vétsivanou lichmoa’ qol chofar (« Béni sois-Tu, Éternel, notre Dieu, Roi de l’univers, qui nous as sanctifiés par tes commandements et nous as ordonné d’écouter le son du chofar »</li>
                                    <li className="point-list-shoffar">Baroukh Ata…, chéhé’héyanou, véqiyemanou, véhigui’anou lazman hazé (« Bénis sois-Tu… qui nous as fait vivre, nous as maintenus et nous as fait parvenir à cette époque »</li>
                                </ul>
                                <img className="photo-shoffar" src={Shoffar}></img>
                            </div>
                        </div>
                        <div className="card-mitsvah-roshHashana">
                            <h1 className="titre-fete-kippour">La Mitsvah</h1>
                            <ul className="titre-list">
                                <li className="point-list">Sonner le Shoffar</li>
                                <li className="point-list">Ecouter le shoffar</li>
                            </ul>
                            <p className="titre-list">10 Raisons pour lesquelles nous sonnons le Shoffar :
                                <li className="point-list-shoffar">Rappel Création du monde</li>
                                <li className="point-list-shoffar">Réveiller nos cœur et notre néshama (1er jour des jours de pénitence)</li>
                                <li className="point-list-shoffar">Rappeler le son du Shoffar au moment de Matan Torah</li>
                                <li className="point-list-shoffar">Se souvenir des enseignement des prophètes (avant enseignement il sonnaient le shoffar)</li>
                                <li className="point-list-shoffar">Se rappeler la destruction du temple (ou nos ennemis sonnaient des trompettes avant de nous attaquer) : Prière reconstruction</li>
                                <li className="point-list-shoffar">Éveiller en nous la crainte de D’ (bruit strident et aigüe)</li>
                                <li className="point-list-shoffar">Se souvenir du sacrifice de Itshak (corne de bélier)</li>
                                <li className="point-list-shoffar">Son va nous rappeler que le jour du GRAND jugement approche.</li>
                                <li className="point-list-shoffar">Nous rappeler qu’un jour il y aura le grand rassemblement de tous les juifs à la venue du Mashiah</li>
                                <li className="point-list-shoffar">Nous rappeler qu’un jour D’ sonnera le shoffar pour annoncer Kriat hamétims</li>
                            </p>
                            <p className="titre-list">Le Shoffar:</p>
                            <p className="texte-fete">On sonne le Shoffar au moment de Moussaf (le matin)<br />
                                 Les jours de Rosh Hashana quand on regarde les prières on parle a D’ comme étant Melekh (roi du monde) mais a Kippour comme étant Avinou shébashamaim (notre père).<br />
                                 Ce qui vas nous permettre de s’améliorer :<br />
                                 שופר == שפר == לשפר // Shouffar == saper == lésaper  <br />
                                 Mitsvah du Shoffar s’incombe aux hommes mais pas aux femmes.<br />
                                 Selon la Torah on devrait écouter 30 sons mais nous en faisons 100.<br /> </p>
                        </div>
                    </div>
                    <div className="div-trois-roshHashana">
                        <div className="petite-card-roshHashana">
                            <p className="titre-list-petit">Veille de Rosh Hachana</p>
                            <li className="point-list-veille">Atarat Nédarim (Annulation des voeux)</li>
                            <li className="point-list-veille">Aller Au cimetiere</li>
                            <li className="point-list-veille">Aller au Mikveh</li>
                            <p className="texte-fete"><br /></p>
                        </div>
                        <div className="petite-card-roshHashana">
                            <p className="titre-list-petit">Table du seder</p>
                            <li className="point-list-table">Grenade</li>
                            <li className="point-list-table">Pomme + Miel</li>
                            <li className="point-list-table">Tete + Queue de poisson</li>
                            <li className="point-list-table">Figue</li>
                            <li className="point-list-table">Sesame</li>
                            <li className="point-list-table">Beignets (courges, ail, epinard)</li>
                            <li className="point-list-table">Blettes</li>

                            <p className="texte-fete"><br /></p>
                        </div>
                        <div className="petite-card-roshHashana">
                            <p className="titre-list-petit">1er jour de Rosh Hashana</p>
                            <li className="point-list-veille">On se lève tot (jour du jugement)</li>
                            <li className="point-list-veille">Tashlir (lors de Minha) on jette nos péchés</li>
                        </div>
                    </div>
                    <div className="div-carroussel-roshHashana">
                        <Slideshow />
                    </div>
                </div>
            </>
        )
    }
}

export default RochHachana;