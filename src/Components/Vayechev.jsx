import React from 'react';
import '../App.css'
import VayechevPicture from "../Images/Vayechev.jpg"


class Vayechev extends React.Component {
    render() {
        return (
            <div className="div-parasha">
                <img className="Vayechev-picture" src={VayechevPicture} />
                <h2 className="parasha-resume">Resumé Parasha Vayechev </h2>
                <p className="resume">Yaakov s'installe à ‘Hevron avec ses douze fils. Yossef, âgé de 17 ans, est son favori. Cette préférence qui se manifeste notamment par la confection d’une tunique particulière suscite la jalousie de ses frères. Yossef fait deux rêves dans lesquels il lui est révélé qu'il règnera un jour sur eux. Il leur raconte ces songes, ce qui accentue d’autant plus leur jalousie et leur haine à son égard. Un jour, Yaakov envoie Yossef prendre des nouvelles de ses frères qui font paître les troupeaux dans un endroit retiré. Le voyant arriver, Chimon et Lévi envisagent de le tuer mais Réouven les en empêche, et propose de le jeter dans une fosse. Il a en fait l'intention le sauver, mais il doit s’absenter. Réouven partit, Yéhouda propose de vendre Yossef à des commerçants Ismaëlites. Les frères approuvent cette proposition, réalisent la transaction, et rentrent chez leur père en lui annonçant que Yossef est mort, déchiqueté par une bête sauvage. Yéhouda se marie et engendre trois fils avant de perdre sa femme. Les deux premiers meurent peu de temps après avoir épousé Tamar, l’un après l’autre. Cette dernière, qui aspire très fortement à avoir une descendance de la famille de Yéhouda, se déguise en prostituée et séduit Yéhouda lui-même, qui lui laisse des objets lui appartenant en gage de paiement. Tamar disparaît, et Yehouda ne peut donc pas récupérer ses effets personnels. Elle tombe enceinte suite à ce rapport, et Yéhouda, en l'apprenant, la fait comparaître devant un tribunal qu’il préside et la condamne à mort pour adultère (une femme en attente de lévirat a le statut de femme mariée). Tamar, refusant d’humilier Yéhouda, exhibe cependant les objets laissés en gage, et affirme que le père de cet enfant est le propriétaire de ces objets. Yéhouda reconnaît alors qu'il est le père du foetus et épargne Tamar. Pendant ce temps, Yossef, amené en Égypte, est vendu à Potiphar, ministre des abattoirs du Pharaon. Il devient rapidement son intendant et gère toutes ses affaires. La femme de Potiphar tente de le séduire. Yossef, refusant ses avances, est victime d’une dénonciation calomnieuse qui le conduit en prison. Sur place, il rencontre l'échanson (ministre des vins) et le panetier du Pharaon qui sont incarcérés pour avoir offensé le souverain. Ceux-ci sont alors troublés en même temps par des rêves nocturnes. Yossef interprète ces deux songes. Il leur annonce que dans trois jours, le boulanger sera condamné à mort et l'échanson réhabilité à son poste. Il demande à ce dernier d'intercéder en sa faveur auprès de Pharaon afin d’obtenir sa libération. Les prédictions de Yossef se réalisent mais l'échanson revenu à la cour oublie Yossef...</p>
                <a className="link-paracha" href="https://www.torah-box.com/paracha/berechit-genese/vayechev/lecture-francais.html" target="_blank" >Paracha complete (en francais et en hebreu) avec commentaires de Rachi</a>
            </div>
        )
    }
}


export default Vayechev ;