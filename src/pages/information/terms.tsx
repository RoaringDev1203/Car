import React from 'react';
import styled from 'styled-components';
import Icon from '@/components/icons';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<StyledTerms className='container'>
			<div className='d middle gap mt-2'>
				<Link to = "/">
					<p style={{fontSize: "14px"}}>Home </p>
				</Link>
				<Icon icon='arr' size={10}></Icon>
				<p style={{fontSize: "14px"}}>Terms and Conditions</p>
			</div>
			<div className='mt-1 text-center'  style={{fontSize: "2.2em"}}>Terms and Conditions</div>
			<li className='mt-2'><span className='strong'>Warranty terms are as follows:</span> </li>
			<li className='space'>Warranty is a service that is an agreement between the manufacturer or importer and the buyer. Under this contract, the buyer manufacturer or importer is responsible for repairing or replacing the goods sold. Gameghor provides full support to the buyer to obtain warranty service for the purchased product and Gameghor acts as an intermediary between the buyer and the manufacturer or importer (Steam, Rockstar, Epic, Battle net ETC.).</li>
			<li>Most of the products supplied by Gameghor are under warranty for a short period of time and some products are replaced on complaints. For example: Software, Games redeem key ETC.</li>
			<li><span className='strong'>If the game gets hacked without any reason</span> after buying the game then it will be covered under the warranty . In this case, the customer must follow the rules of e-mail.</li>
			<li>All products sold are not warranted. The warranty is valid only for those products which are covered by a lifetime warranty or a fixed period warranty. So definitely check before buying.</li>
			<li>If a product under warranty is found to be defective after sale, the defect is rectified by repair.</li>
			<li>If the product of a specific model is not suitable for replacement, Gameghor can replace it with an equivalent product of any other brand (Steam, Rockstar, Epic, Battle net ETC.) in its own stock.</li>
			<li>A product of a particular model is unrepairable and if the same or equivalent product is not available in our stock, a better product of that model can be replaced through depreciation and price adjustment.</li>
			<li><span className='strong'>Gameghor will not bear the responsibility if any account's Gmail is damaged or lost during</span> the use of the product or during the service of Gameghor  .</li>
			<li>You will get the warranty of the game when you can give us access to the gmail given by Gameghor.</li>
			<li>No warranty will be given by Gmail. Only the game account will be guaranteed. But we must give access to Gmail.</li>
			<li>After buying the game, Gameghor will not take any responsibility regarding setup and<span className='strong'> in-game issues - such as how to play the game, how to add new items to the game.</span></li>
			<li className='space'>The time to return the product after completing the service after covering the product warranty of a specific model is not <span className='strong'>fixed , this time can be from 3-4 days to a maximum of 25-30 days or more</span> ; Because in most cases it takes a long time to get the whole from the cellar for repair.</li>
			<li className='space'>Lifetime Warranty Lifetime warranty shall mean the provision of warranty service for the product for as long as it is considered to be a common product in the market. If a product is covered by a 'lifetime' warranty, if the product is a common product in the market, the customer will receive warranty service. If a product is considered as EOL (End of Life) in the market i.e. if the product becomes obsolete then it will no longer come under warranty. When the new version of the product is released in the market, it will not get warranty service with the old version. It should be noted that in terms of life time warranty, according to BCA's policy, the customer or buyer can enjoy this service for a maximum of 2 (two) years.</li>
			<li>Gameghor may charge a fee for any service outside the scope of the warranty which shall be effective subject to the consent of the purchaser.</li>
			<li>If any service charge is required in the case of service warranty, then the buyer shall pay it at his own responsibility or can collect it through Gameghor subject to advance payment with the consent of the buyer.</li>
			<li><span className='strong'>At the time of product warranty claim , it is mandatory for the buyer to provide the product's Order no, Gmail, Password, Bkash/Nagad Statement.</span></li>
			<p>(The warranty period may vary depending on the seller. In that case ongoing warranty will be provided by the customer)</p>
			<p ><span className='strong'>In cases where the warranty will not be valid or may be conditional :</span></p>
			<li>Any errors due to careless use of Gmail, such as visiting hacking websites, using cheat codes in games, visiting 18+ websites, will not be covered under warranty.</li>
			<li className='space'>If a product's <span className='strong'>Gmail is destroyed, Gmail password is lost, and Gmail is hacked,</span>   the product's Gmail will no longer be covered by warranty. (A G-mail <span className='strong'>is hacked when your computer is hacked ) (We give </span>the customer a brand new G-mail with no information added – so, there is no question of G-mail being hacked)</li>
			<li>For your mistake - Gameghor will not take responsibility if your <span className='strong'>computer is hacked</span> and <span className='strong'>game is hacked from computer .</span></li>
			<li>If you destroy the game account's <span className='strong'>Gmail , you have to pay 65% ​​of the game as warranty.</span></li>
			<li>Any game <span className='strong'>should be reported to us within 5 days </span>after purchase if the game is banned online or has any other problem. After that, the warranty will not be given for it.</li>
			<li>After buying the game,<span className='strong'>if the customer bans the game online due to his own mistake, then the warranty will not be valid .</span></li>
			<li className='mb-3'><span className='strong'>In particular , there will be no warranty if a customer blocks, locks, destroys the Microsoft account</span> of Microsoft games .</li>
		</StyledTerms>
	)
}

export default Terms;

const StyledTerms = styled.div`
	li {
		font-size: 0.9em;
		color: var(--grey-text);
		text-indent: 0;
		text-align: left;
		color: var(--color);
		margin-bottom: 20px;
	}
	.strong {
		font-weight: 800;
	}

	.space {
		margin-bottom: 2px;
	}
`
