// const listItem = document.querySelectorAll('li');
const listItems = [...document.getElementsByClassName('listItem')];
const input = document.getElementById('formBox');

listItems.forEach(listItem => {
	listItem.addEventListener('click', changeStatus);

	function changeStatus() {
		if (listItem.style.textDecorationLine === '') {
			listItem.style.textDecorationLine = 'line-through';
		} else listItem.style.textDecorationLine = '';
	}
});
// function inputData() {
// 	console.log('hello');
// 	console.log(input.value);
// 	console.log(document.getElementById('formData').value);
// }

function func(e) {
	e.preventDefault();
	console.log(input.value);
}
input.addEventListener('click', func);
