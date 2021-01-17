import React from 'react';
import '../App.css'
import VayekhiPicture from "../Images/Vayehi.jpg"


class Vayekhi extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="Vayekhi-picture" src={VayekhiPicture} />
                <h2 className="parasha-resume">Resumé Parasha Vayekhi </h2>
                <p className="resume">Yaakov vécu les 17 dernières années de sa vie en Égypte. Sentant ses jours toucher à leur fin, il demande à son fils Yossef de prêter serment qu'il l'enterrerait en Terre Sainte. Il bénit les deux fils de Yossef, Ménaché et Ephraïm, élevant le rang de ces derniers au même niveau que ses propres fils, qui donneront naissance aux Tribus d'Israël. Puis, juste avant sa mort, Yaakov réunit ses fils. Il veut leur révéler la date de la fin des temps, mais il en est empêché par D.ieu. Il bénit chacun de ses fils, leur assignant chacun un rôle en tant que tribu: Yéhouda donnera naissance à des leaders, des législateurs et des rois. Les hommes de foi descendront de Lévi, les sages d'Issa'har, les hommes d'affaires de Zévouloune, et les enseignants de Chimon, etc... Réouven est réprimandé pour avoir « perturbé la couche de son père », Chimon et Lévi pour le massacre de She'hem et du complot contre Yossef. Naftali se voit promettre l'agilité de la gazelle, Binyamin la férocité du loup et Yossef la beauté et une descendance nombreuse. A la disparition de Yaakov, une grande procession funèbre l’accompagne jusqu'à sa dernière demeure en Israël, dans la caverne de Makhpéla à 'Hévron. Yossef, lui aussi, décède en Egypte à l'âge de 110 ans. Il demande que ses ossements soient enterrés en Terre Sainte, mais seulement lorsque les enfants d'Israël quitteront l'Egypte, de nombreuses années plus tard. Avant de mourir, il leur livre le testament qui leur permettra d'endurer les difficultés de l'exil: « D.ieu se souviendra de vous et vous fera monter de cette terre vers la Terre qu'Il a promise à Avraham, Itshak, et Yaakov. »</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/vayehi/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Vayekhi ;