// const listItem = document.querySelectorAll('li');
const listItems = [...document.getElementsByClassName('listItem')];
const input = document.getElementById('formData');
const boxInput = document.getElementById('formBox');
const list = document.getElementById('list')
const chkBoxs = [...document.getElementsByClassName('chkBox')];

console.log(chkBoxs)

function func(e) {
	e.preventDefault();

	if (boxInput.value) {
		const newListItem = document.createElement('li')
		newListItem.setAttribute('class', 'listItem')

		newListItem.innerHTML = (`<p><input type="checkbox" />${boxInput.value}</p>`)

		newListItem.addEventListener('click', changeStatus);

		list.appendChild(newListItem)
	}

}
input.addEventListener('click', func);



listItems.forEach(listItem => {
	listItem.addEventListener('click', changeStatus);
});

chkBoxs.forEach(chkBox => {
	chkBox.addEventListener('click', checked)
})

function checked() {
	if (this.checked === 'checked') {
		this.checked = false
		this.parentNode.textDecorationLine = ''
	}
}


function changeStatus() {
	//console.log(this.childNodes[1].childNodes[0])
	if (this.style.textDecorationLine === '') {
		this.style.textDecorationLine = 'line-through';
		this.childNodes[1].childNodes[0].checked = 'checked'


	} else {
		this.style.textDecorationLine = '';
		this.childNodes[1].childNodes[0].checked = false

	}
}


