document.addEventListener('click', event => {
	const isClickInside = event.target.classList.contains('drop-btn')
	const showList = document.querySelectorAll('.show')
	if (!(showList.length > 1) && isClickInside) return
	for (const i of showList) {
		i.classList.remove('show')
	}
})

document.querySelectorAll('.dropdown').forEach(element => {
	const showList = document.querySelectorAll('.show')
	for (const i of showList) {
		i.classList.remove('show')
	}
	element.addEventListener('click', () => {
		element.classList.add('show')
	})
})

//  Бургер в меню
const burgerMenu = document.querySelector('.burger-menu')
const menu = document.querySelector('.nav-menu')
const body = document.querySelector('body')

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('is-open')
	menu.classList.toggle('is-open')
	body.classList.toggle('is-open')
})

const acc = document.getElementsByClassName('accordion')
let i
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active')
	})
}
