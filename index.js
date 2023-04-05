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
})

// display the next question
next.addEventListener('click', () => {
    next.classList.add('hidden');
    const q = createQuestion()
    imgEl.innerHTML = `<img class="hidden" src="${`https://http.${type}/${q.statusNum}.jpg`}" alt="${q.status}"/>`

    qEl.innerText = `${q.statusNum}`
    qEl.classList.remove('none')


    for (let i = 0; i < 4; i++) {
        ansEl.innerHTML += `<button name="${q.options[i]}" value="${q.options[i] == q.status}">${q.options[i]}</button>`
    }

    ansEl.addEventListener('click', (e) => {
        if (e.target.type == 'submit') {

            // qEl.innerText = e.target.value == 'true' ? `Correct!` : `Incorrect`
            qEl.classList.add('none')

            // show ans image
            imgEl.firstChild.classList.add(e.target.value == 'true' ? `correct` : `incorrect`);

            imgEl.firstChild.classList.remove('hidden');
            ansEl.innerHTML = ''
            next.classList.remove('hidden');
        };
    })
})
