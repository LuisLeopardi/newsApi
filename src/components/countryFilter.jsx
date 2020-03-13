import React from 'react';
import ae from './img/flags/ae.svg';
import ar from './img/flags/ar.svg';
import at from './img/flags/at.svg';
import au from './img/flags/au.svg';
import be from './img/flags/be.svg';
import bg from './img/flags/bg.svg';
import br from './img/flags/br.svg';
import ca from './img/flags/ca.svg';
import ch from './img/flags/ch.svg';
import cn from './img/flags/cn.svg';
import co from './img/flags/co.svg';
import cu from './img/flags/cu.svg';
import cz from './img/flags/cz.svg';
import de from './img/flags/de.svg';
import eg from './img/flags/eg.svg';
import fr from './img/flags/fr.svg';
import gb from './img/flags/gb.svg';
import gr from './img/flags/gr.svg';
import hk from './img/flags/hk.svg';
import hu from './img/flags/hu.svg';
import id from './img/flags/id.svg';
import ie from './img/flags/ie.svg';
import il from './img/flags/il.svg';
import india from './img/flags/in.svg';
import it from './img/flags/it.svg';
import jp from './img/flags/jp.svg';
import kr from './img/flags/kr.svg';
import lt from './img/flags/lt.svg';
import lv from './img/flags/lv.svg';
import ma from './img/flags/ma.svg';
import mx from './img/flags/mx.svg';
import my from './img/flags/my.svg';
import ng from './img/flags/ng.svg';
import nl from './img/flags/nl.svg';
import no from './img/flags/no.svg';
import nz from './img/flags/nz.svg';
import ph from './img/flags/ph.svg';
import pl from './img/flags/pl.svg';
import pt from './img/flags/pt.svg';
import ro from './img/flags/ro.svg';
import rs from './img/flags/rs.svg';
import ru from './img/flags/ru.svg';
import sa from './img/flags/sa.svg'; 
import se from './img/flags/se.svg';
import sg from './img/flags/sg.svg';
import si from './img/flags/si.svg';
import sk from './img/flags/sk.svg';
import th from './img/flags/th.svg';
import tr from './img/flags/tr.svg';
import tw from './img/flags/tw.svg';
import ua from './img/flags/ua.svg';
import us from './img/flags/us.svg';
import ve from './img/flags/ve.svg';
import za from './img/flags/za.svg';

export const CountryFilter = ({changeCountryApi}) => {

 const countries = [ 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr' ,'hk', 'hu' ,'id' ,'ie' ,'il' ,'in', 'it', 'jp', 'kr' ,'lt' ,'lv', 'ma', 'mx' ,'my', 'ng' ,'nl' ,'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa' ,'se', 'sg', 'si' ,'sk' ,'th', 'tr' ,'tw' ,'ua', 'us', 've', 'za'];
 const images = [ae, ar, at, au, be, bg, br, ca, ch, cn, co, cu, cz, de, eg, fr, gb, gr, hk, hu, id, ie, il, india, it, jp, kr, lt, lv, ma, mx, my, ng, nl, no, nz, ph, pl, pt, ro, rs, ru, sa, se, sg, si, sk, th, tr, tw, ua, us, ve, za];

 return (

 	<div className='sidebar-filters'>

 		<h3> Seach news of diferent countries </h3>

 		<ul className='sidebar-grid'>
 			{
 			  countries.map( (c,i) =>
 			  	<li
 			  	onClick={(e)=> changeCountryApi(e.target.id)} 
 			  	className='sidebar-item' 
 			  	key={c} 
 			  	id={c}> 
 			  	<img src={images[i]} alt={i}/>
 			  	{c}
 			  	</li> 
 			  )
 			}
 		</ul>

 	</div>

 )

}