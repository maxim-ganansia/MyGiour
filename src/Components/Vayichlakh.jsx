import React from 'react';
import '../App.css'
import VayichlakhPicture from "../Images/Vayichlakh.png"


class Vayichlakh extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="Vayichlakh-picture" src={VayichlakhPicture} />
                <h2 className="parasha-resume">Resumé Parasha Vayichlakh </h2>
                <p className="resume">Yaakov envoie des messagers de paix à Essav qui vient à sa rencontre avec 400 hommes... Resté seul pendant une nuit, Yaakov affronte un homme qu’il parvient à dominer, au prix d’une hanche luxée et d’un nom censé remplacer celui de Yaakov : Israël. En souvenir de ce combat et de la blessure de Yaakov, Hachem nous a interdit de consommer le nerf sciatique de tout animal. Yaakov se retrouve face à Essav et son armée ; au lieu du combat fratricide attendu, on assiste aux retrouvailles chaleureuses des frères. Essav fait connaissance avec la famille de Yaakov, et propose à ce dernier de retourner s’établir avec lui à Sé’ir où il demeure. Yaakov trouve un prétexte pour refuser. Il se sépare d’Essav et va s’installer à proximité de la ville de Shékhem (Naplouse) qui est gouvernée par un certain H’amor. Le fils de ce dernier, dénommé Shékhem (comme sa ville), viole Dinah, la fille de Léa et Yaakov. Il s’attache à elle et prie son père de la demander en mariage à Yaakov. C’est ce qu’il fait en proposant à Yaakov de s’établir, de commercer et de se marier avec ses administrés. Chimon et Levi, Les frères de Dinah, une fois passé le choc de cette nouvelle affligeante, élaborent un stratagème ; l’obligation de se circoncire pour tous les mâles, qui leur permet de tuer tous les hommes de cette ville, y compris le violeur et son père. Yaakov érige un autel à Beit-El. Hachem ajoute à Yaakov le nom d’Israël et le bénit. Ra’hel meurt en mettant au monde Binyamin. Elle est inhumée à Bethle’hem. Réouven, le fils aîné de Yaakov et Léa, commet une faute en remplaçant la couche de Bil-ha, servante de Ra’hel, par celle de sa mère, Léa. Itshak meurt à l’âge de 180 ans. Il est enterré au caveau de Makhpéla, à Hébron, par ses deux fils, Essav et Yaakov.</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/vayichlah/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Vayichlakh ;