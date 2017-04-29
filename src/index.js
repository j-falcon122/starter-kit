// import './index.css';
import {getProducts, deleteProduct} from './api/products';

getProducts().then(result => {

	let prods = "";

	result.forEach(prod => {
		if (prod) {
			prods += `<tr>
			<td>${prod.id}</td>
			<td>${prod.name}</td>
			<td>${prod.desc}</td>
			</tr>
			`
		}
	});

	global.document.getElementById('products').innerHTML = prods;

	// const deleteLinks = global.document.getElementsByClassName('deleteProduct');

	// Array.from(deleteLinks, link => {
	// 	link.onclick = function(event) {
	// 		const element = event.target;
	// 		event.preventDefault();
	// 		deleteProduct(element.attributes["data-id"].value);
	// 		const row = element.parentNode.parentNode;
	// 		row.parentNode.removeChild(row);
	// 	};
	// });
});
