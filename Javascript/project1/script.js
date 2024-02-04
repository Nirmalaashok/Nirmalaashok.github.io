function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon= document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}
// running text
const typed = new Typed('.multiple', {
    strings: ['Front-End Developer', 'Teacher', 'Administrator','Food enthusiast'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
function getUserData() {
    fetch('https://api.github.com/repos/Nirmalaashok/Nirmalaashok.github.io', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('getResult').innerHTML = `<p>Repository Data:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error('Error:', error));
  }

    
  // getdata and post data
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('getResult').innerHTML = `<p>GET Data:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('GET Error:', error));
}

function postData() {
    const data = {
        title: "This is a Post Title",
        body: "This is a Post Body",
        userId: 3
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('postResult').innerHTML = `<p>POST Data:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('POST Error:', error));
}

const type = new Typed('.multi', {
    strings: ['HTML', 'CSS', 'Javascript',''],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});