// const listItem = document.querySelectorAll('li');
const listItems = [...document.getElementsByClassName('listItem')];
const input = document.getElementById('formData');
const boxInput = document.getElementById('formBox');
const list = document.getElementById('list');
const chkBoxs = [...document.getElementsByClassName('chkBox')];

function createLi(e) {
	e.preventDefault();
	console.log(e);
	if (boxInput.value) {
		const newListItem = document.createElement('li');
		newListItem.setAttribute('class', 'listItem');
		newListItem.addEventListener('click', changeStatus);

		const newPara = document.createElement('p');

		const checkBox = document.createElement('input');
		checkBox.setAttribute('type', 'checkbox');
		checkBox.setAttribute('class', 'chkBox');

		const text = document.createTextNode(boxInput.value);

		newPara.appendChild(checkBox);
		newPara.appendChild(text);
		newListItem.appendChild(newPara);
		list.appendChild(newListItem);
	}
}
input.addEventListener('submit', createLi);

listItems.forEach(listItem => {
	listItem.addEventListener('click', changeStatus);
});

function changeStatus(e) {
	if (this.style.textDecorationLine === '') {
		this.style.textDecorationLine = 'line-through';
		e.target.childNodes[0] ? (e.target.childNodes[0].checked = 'checked') : (e.target.checked = true);
	} else {
		this.style.textDecorationLine = '';
		e.target.childNodes[0] ? (e.target.childNodes[0].checked = false) : (e.target.checked = false);
	}
}
