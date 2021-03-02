function loadItems() {
	return fetch('https://raw.githubusercontent.com/97-shape/clonecoding-ellie_webshopping-/master/data/data.json')
	.then (response => response.json)
	.then (json => json.items);
}

function displayItems(items) {
	const container = document.querySelector('.items');
	container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
		return `
		<li class="item">
			<img class="itemImg"src="https://github.com/97-shape/clonecoding-ellie_webshopping-/blob/master/imgs/${item.image}?raw=true" data-type="${item.type}">
			<span>${item.gender}, ${item.size}</span>
		</li>
`;
	}

loadItems()
.then (items => {
	displayItems(items);
})