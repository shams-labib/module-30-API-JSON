const loadPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(json => {
        displayPost(json)
    })
}

const displayPost = (posts) => {
    // 1. add the container 
    const container = document.getElementById('container');
    // console.log(container)
    container.innerHTML = '';
    posts.forEach(post => {
        const Text = document.createElement('div');
          Text.innerHTML = `
          <div class="id-card">
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        </div>
          
          `

        container.append(Text)
    })
}