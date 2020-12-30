console.log('Client side javascript file is loaded..!')

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
//     res.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/post?id=1').then((res) => {
//     res.json().then((data) => {
//         console.log(data)
//     })
// })
const postId = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')
const m3 = document.querySelector('#m3')

m1.textContent = 'tata'

postId.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = search.value

    m1.textContent = 'loading......!'
    m2.textContent = ''
    m3.textContent = ''

    fetch('http://localhost:3000/post?id=' + id).then((res) => {
        res.json().then((data) => {
            m1.textContent = data.post.userId
            m2.textContent = data.post.title
            m3.textContent = data.post.body
        })
    })
})