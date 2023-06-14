// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.

// let firstArr = Array.from(document.getElementsByClassName("top-nav"))
// const getFirst = (arr) => {
// let firstA = arr[0].children[0].innerText
//     return firstA
// }
// console.dir(getFirst(firstArr))

// let link = document.querySelector('.nav__link')
// console.dir(link)


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

// const getClass = (arr) => {
//     return arr.reduce((acc,rec) => {
//         acc = [...acc, rec.className]
//         return acc
//     },[])

// }

// const getClass = (arr) => {
//     return arr.map((el) => {
//         return el.className
//     })
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


// Task 6

// const getBug = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec.classList[1] !== rec.innerText) {
//             acc = [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.dir(getBug(Array.from(document.querySelectorAll('.nav__link'))))


// Task 7

// const updateArr = (arr) => {
//     let newArr = []
//     arr.forEach((el) => {
//         el.innerText = el.classList[1]
//         newArr = [...newArr,`${el.dataset.link} ${el.innerText}`]
//     })
//     return newArr
// }
// console.dir(updateArr(Array.from(document.querySelectorAll('.nav__link'))))

// let arr = Array.from(document.querySelectorAll('.nav__link'))
// arr.forEach((el) => {
//     el.innerText = el.dataset.link + el.classList[1]
// })


// Task 8

// let arr = Array.from(document.querySelectorAll('.nav__link'))
// arr.forEach((el) => {
//     el.innerText !== el.classList[1] ? el.remove() : el
// })

// console.log(arr);


// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello

// let mainDiv = document.querySelector('#append-div')

// const addDiv = (str) => {
//     let newDiv = document.createElement('div')
//     mainDiv.appendChild(newDiv)
//     newDiv.id = 'just-text'
//     newDiv.innerText = str
// }
// console.log(addDiv('hello'));


// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента 
// должен быть айди #list 
// Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10

// let mainDiv = document.querySelector('#append-div')

// const addUl = (str,num) => {
// let mainList = document.createElement('ul')
// mainDiv.appendChild(mainList)
// mainList.id = 'list'

// for (let i = 1; i <= num; i++) {
// let ulLi = document.createElement('li')
// mainList.appendChild(ulLi)
// ulLi.innerText = `${str} ${i}`
// }
// }
// console.log(addUl('Child', 10));