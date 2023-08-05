const ul = document.getElementById('book-list')

const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let id = e.target.children[1].value;

        fetch(`http://localhost:3000/movies/${id}`)
        .then(resp => resp.json())
        .then(movie => {
            let summary = document.getElementById('summary');
            let title = document.getElementById('title');
            
            summary.innerText = movie.summary;
            title.innerText = movie.title;
        })
        
      
    })
    
}

document.addEventListener('DOMContentLoaded', init);