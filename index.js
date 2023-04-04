import { createQuestion } from './createQuestion';



const typeSelect = document.getElementById('typeSelect');
const imgEl = document.getElementById('imgEl');
const qEl = document.getElementById('qEl');
const ansEl = document.getElementById('ansEl');
const next = document.getElementById('next');



// http status image type
let type = 'dog'
typeSelect.addEventListener('change', (e) => {
    type = (e.target.value).toLowerCase();
    console.log(type)
})

console.log(typeSelect, imgEl, qEl, ansEl, next)


next.addEventListener('click', async () => {

    const q = createQuestion()
    imgEl.innerHTML = `<img src="${`https://http.${type}/${q.statusNum}.jpg`}" alt="${q.status}"/>`

    qEl.innerHTML = `<h2>${q.statusNum}</h2>`

    for (let i = 0; i < 4; i++) {
        ansEl.innerHTML += `<li value="${q.status == q.options[i]}">${q.options[i]}</li>`
    }
})



