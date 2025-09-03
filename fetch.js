fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res) => res.json())
.then((data) => console.log(data));


const loadPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(post => {
        console.log(post)
        displayPost(post)
    })
}

const displayPost = (display)=> {
    display.forEach((dis) => {
        console.log(dis)
    })
}