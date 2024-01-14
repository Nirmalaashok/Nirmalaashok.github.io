'use strict';
//ex 1.
let books =['Harry-potter', 
'A_ Time_ to _kill', 'The house of mirth', 
'East of eden', 'The sun of rises', 
'Vile bodies', 'A scanner darkly',
 'Moab is my washpot', 
 'Number the star', 
 'Noli me tangere'];
 //ex1.2
console.log(books);
//ex1.3
let crList = (items) => {
    const newList = document.createElement('ul');
    for( let i=0; i<items.length; i++){
const newListItem = document.createElement('li');
newListItem.textContent = items[i];
newListItem.id = items[i];
newList.appendChild(newListItem);
    }
    return newList;
};
console.log(crList(books));
//ex1.4

  
books = {harry_potter_chamber_secrets:
     {
    title: "Harry Potter and the Chamber of Secrets",
    language: "English", 
    author: "J.K. Rowling", }, 
    A_Time_to_Kill: 
    { title: "A title to Kill", 
    language: "English",
     author: "John Grisham", }, 
    The_house_of_mirth:{
        title: "The house of mirth",
         language: "English", 
         author: "Edith", },
    
    East_of_eden:{
        title: "East of Eden", 
        language: "English", 
        author: "John Steinbeck", },
    
    The_sun_of_rises:{
        
            title: "The sun of rises",
             language: "English", 
             author: "Ernest", },
        
        Vile_bodies:{
        
            title: "Vile bodies", 
            language: "English", 
            author: "Evelyn",},
        A_scanner_darkly:{
        
            title: "A scanner darkly", 
            language: "English", 
            author: "Philip k Dicken", 
        },
        Moab_is_my_washpot:{
            title: "Moab is my washpot",
             language: "English",
              author: "Stephen Fry", 
        },
        Number_the_star:{
            title: "Number the star",
             language: "English",
              author: "Louis Lorry",
        },
        Noli_me_tangare:{
            title: "Noli me tangare",
             language: "English",
              author: "Jose",
        },  
};
crList = (items) => {
    const books = document.querySelector('#books');
    const newList = document.createElement('ul');
    for (let key in items)
    {
        const newListItem = document.createElement('li');
        const title = document.createElement('h2');
        const language = document.createElement('p');
        const author = document.createElement('p');
        const wrapper = document.createElement('div');

        title.className = 'book__title';
        language.className = 'book__language';
        author.className = 'book__author';
        wrapper.className = 'book__wrapper';
        newListItem.id = key;

        title.textContent = items[key].title;
        language.textContent = items[key].language;
        author.textContent = items[key].author;

        wrapper.appendChild(title);
        wrapper.appendChild(language);
        wrapper.appendChild(author);
        newListItem.appendChild(wrapper);

        newList.appendChild(newListItem);
    }
    books.appendChild(newList);
};

crList(books);

let images =
{
    harry_potter_chamber_secrets:  './images/HarryPotter.jpg',
    A_Time_to_Kill:  './images/Time.jpg',
    The_house_of_mirth:'./images/House.jpg',
    East_of_eden:'./images/east.jpg',
    The_sun_of_rises:'./images/Sun.jpg',
    Vile_bodies:'./images/vile.jpg',
    A_scanner_darkly:'./images/scanner.jpg',
    Moab_is_my_washpot:'./images/moab.jpg',
    Number_the_star:'./images/number.jpg',
    Noli_me_tangare:'./images/noli.jpg',

}
const addImages =(images) => {
    const listItems = document.querySelectorAll('#books li');
    for(let i = 0; i<listItems.length; i++)
    {
        const image = document.createElement('img');
        const alt = document.createAttribute('alt');
        image.src = images[listItems[i].id];
        image.alt = books[listItems[i].id].title;
        listItems[i].prepend(image);

    }
};
addImages(images)

