function myPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((output) => {
        console.log(output)
        let posts = '';
         output.forEach(element => {
            posts += `<div class="posts-card">
            <ul> 
            <li>${element.userId}</li>
            <li>${element.id}</li>
            <li>${element.title}</li>
            <li>${element.body}</li>
            
            </ul>
            </div>`
            document.getElementById('one').innerHTML = posts;
         });

        });
}

        /*document.getElementById('one').innerHTML = JSON.stringify(output);
    });
};*/

/*function myPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((output) => {
        // console.log(JSON)
        document.getElementById('head1').innerHTML = "Posts";
        document.getElementById('result1').innerHTML = JSON.stringify(output);
    });
};
*/
function myComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((output) => {
        console.log(output)
        let comments = '';
         output.forEach(element => {
            comments += `<div class='comments-card'><ul> 
            <li>${element.postId}</li>
            <li>${element.id}</li>
            <li>${element.name}</li>
            <li>${element.email}</li>
            <li>${element.body}</li>
            
            </ul>
            </div>`
            document.getElementById('two').innerHTML = comments;
         });

        });
}

        /*document.getElementById('two').innerHTML = JSON.stringify(output);
    });
}*/

function myAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((output) => {
        console.log(output)
        let albums = '';
         output.forEach(element => {
            albums += `<div class='albums-card'><ul> 
            <li>${element.userId}</li>
            <li>${element.id}</li>
            <li>${element.title}</li>
            
            </ul>
            </div>`
            document.getElementById('three').innerHTML = albums;
         });

        });
}

        /*document.getElementById('three').innerHTML = JSON.stringify(output);
    });
}*/

function myPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((output) => {
        console.log(output)
        let photos = '';
         output.forEach(element => {
            photos += `<div class='photos-card'><ul> 
            <li>${element.albumId}</li>
            <li>${element.id}</li>
            <li>${element.title}</li>
            <li>${element.url}</li>
            <li>${element.thumbnailUrl}</li>
            
            </ul>
            </div>`
            document.getElementById('four').innerHTML = photos;
         });

        });
}

        /*document.getElementById('four').innerHTML = JSON.stringify(output);
    });
}*/

function myTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((output) => {
        console.log(output)
        let todos = '';
         output.forEach(element => {
            todos += `<div class='todos-card'><ul> 
            <li>${element.userId}</li>
            <li>${element.id}</li>
            <li>${element.title}</li>
            <li>${element.completed}</li>
            
            </ul>
            </div>`
            document.getElementById('five').innerHTML = todos;
         });

        });
}

        /*document.getElementById('five').innerHTML = JSON.stringify(output);
    });
}*/


function myUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(output => {
         console.log(output)
         let users = '';
         output.forEach(element => {
            users += `<div class='card'><ul> 
            <li>${element.name}</li>
            <li>${element.phone}</li>
            <li>${element.website}</li>
            <li>${element.username}</li>
            <li>${element.email}</li>
            <li>${element.address.street}</li>
            <li>${element.company.name}</li>
            
            </ul>
            </div>`
            document.getElementById('six').innerHTML = JSON.stringify(users);
         });

        });
}
