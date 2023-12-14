const bookTitles =['Harry-potter', 'A Time to kill', 'The house of mirth', 'East of eden', 'The sun of rises', 'Vile bodies', 'A scanner darkly', 'Moab is my washpot', 'Number the star', 'Noli me tangere'];
console.log(bookTitles);

function bookList() {   
const ulElement = document.createElement("ul");
for (const bookTitle of bookTitles) {
const liElement = document.createElement("li");
liElement.textContent = bookTitle;
ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);
}
bookList()
  
const bookDetails = {harry_potter_chamber_secrets:
     {
    title: "Harry Potter and the Chamber of Secrets",
    language: "English",
    author: "J.K. Rowling", BookCover1: ".img\C:\Users\Ashok\Downloads\HarryPotter.jpg"}, 
    A_Time_to_Kill: 
    { title: "A title to Kill", Language: "English", author: "John Grisham", BookCover2: ".img\C:\Users\Ashok\Downloads\A time to kill.jpg"}, 
    The_house_of_mirth:{
        title: "The house of mirth", Language: "English", author: "Edith", BookCover: ".img\C:\Users\Ashok\Downloads\The house.jpg"},
    
    East_of_eden:{
        title: "East of Eden", Language: "English", author: "John Steinbeck", BookCover: ".img\C:\Users\Ashok\Downloads\East.jpg"},
    
    The_sun_of_rises:{
        
            title: "The sun of rises", Language: "English", author: "Ernest", BookCover: ".img\C:\Users\Ashok\Downloads\sunrises.jpg"},
        
        Vile_bodies:{
        
            title: "Vile bodies", Language: "English", author: "Evelyn", BookCover: ".img\C:\Users\Ashok\Downloads\vile bodies.jpg"
        },
        A_scanner_darkly:{
        
            title: "A scanner darkly", Language: "English", author: "Philip k Dicken", BookCover: ".img\C:\Users\Ashok\Downloads\scanner darkly.jpg"
        },
        Moab_is_my_washpot:{
            title: "Moab is my washpot", Language: "English", author: "Stephen Fry", BookCover: ".img\C:\Users\Ashok\Downloads\moab.jpg"
        },
        Number_the_star:{
            title: "Number the star", Language: "English", author: "Louis Lorry", BookCover: ".img\C:\Users\Ashok\Downloads\stars.jpg"
        },
        Noli_me_tangare:{
            title: "Noli me tangare", Language: "English", author: "Jose", BookCover: ".img\C:\Users\Ashok\Downloads\Noli me tangere.jpg"
        },  
};
const bookId = "harry_potter_chamber_secret";
const titleElement = document.createElement("h3");
console.log(bookDetails);

