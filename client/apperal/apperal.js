// Search Bar
function search(event) {
	let searchValue = event.target.value.toLowerCase();
	console.log(searchValue);
	let apperals = document.querySelectorAll('.card');
	console.log(apperals);
	for (i = 0; i < apperals.length; i++) {
		let apperal = apperals[i];
		console.log(apperal[0]);
		if (apperal.innerText.toLowerCase().includes(searchValue)) {
			apperal.style.display = '';
			console.log('matches search');
		} else {
			apperal.style.display = 'none';
		}
	}
}
let checkEle = document.querySelectorAll(".search-filters-title");
function filter(event) {

}