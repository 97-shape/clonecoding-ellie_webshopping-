function loadItems() {
	return fetch('https://raw.githubusercontent.com/97-shape/clonecoding-ellie_webshopping-/master/data/data.json')
	.then(response => response.json())
	.then(json => json.items);
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

function onClickFilter(event, items){
	const filter = event.target.dataset;
	const type = filter.type;
	const value = filter.value;
	
	if(type == null || value == null){
		return;
	}
	
	displayItems(items.filter(item => item[type] === value));
	
}

function addEventListener(items){
	const filter = document.querySelector('.filters');
	filter.addEventListener('click', event => onClickFilter(event, items))
}

loadItems()
.then(items => {
	displayItems(items);
	addEventListener(items);
})
.catch(console.log);