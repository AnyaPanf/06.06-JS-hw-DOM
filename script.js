// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.

// let firstArr = Array.from(document.getElementsByClassName("top-nav"))
// const getFirst = (arr) => {
// let firstA = arr[0].children[0].innerText
//     return firstA
// }
// console.dir(getFirst(firstArr))


// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.

// const getAll = (arr) => {
// let newArr = []
// for(let i = 0; i < arr.length; i++) {
//     newArr = [...newArr, arr[i].innerText]
// }
// return newArr
// }
// console.dir(getAll(Array.from(document.getElementsByTagName("a"))))


// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов 
//с классом nav__link__item

// const getText = (arr) => {
// let newArr = []
// for(let i = 0; i < arr.length; i++) {
//     newArr = [...newArr, arr[i].innerText]
// }
// return newArr
// }
// console.dir(getText(Array.from(document.getElementsByClassName('nav__link__item'))))


// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов 
//элементов с классом nav__link__item

// const getClass = (arr) => {
// let newArr = []
// for(let i = 0; i < arr.length; i++) {
//     newArr = [...newArr, arr[i].className]
// }
//     return newArr
// }
// console.dir(getClass(Array.from(document.getElementsByClassName('nav__link__item'))))


// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри 
//тэгов элементов с классом nav__link .

// const getData = (arr) => {
// let newArr = []
// for(let i = 0; i < arr.length; i++) {
// newArr = [...newArr, arr[i].dataset.link]
// }
// return newArr
// }
// console.dir(getData(Array.from(document.getElementsByClassName('nav__link'))))
