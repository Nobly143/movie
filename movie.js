const myURL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const myMovies = async () => {
  try {
    const tempHolder = await fetch(myURL);
    const output = await tempHolder.json();

    const result = output.Search.map(item => {
      return `<section>
      <img src="${item.Poster}" alt="Movie pic">
      <h4>${item.Title}</h4>
      <h5>${item.Type}</h5>
      <p>${item.Year}</p>
      </section>`;
    });
    document.querySelector("#gallery").innerHTML = result;
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener("load", myMovies());

const input = document.querySelector("input");
const btn = document.querySelector("#btn");



const custSearch = async () => {
    const inputValue = input.value;
    const url = `https://www.omdbapi.com/?s=${inputValue}&apikey=4a3b711b`;
    
    try {

        if (inputValue === "") {
            alert("Enter a movie !!")
        } else {
            const temp = await fetch(url);
            const result = await temp.json();
            
            console.log(result);
            
            const resulted = result.Search.map(item => {
                return `<section>
                <img src="${item.Poster}" alt="Movie pic">
                <h4>${item.Title}</h4>
                <h5>${item.Type}</h5>
                <p>${item.Year}</p>
                </section>`;
            });
            document.querySelector("#gallery").innerHTML = resulted;
        } 
    } catch (err){
        console.log("movie not found", err)
    }

}

input.addEventListener("keydown", custSearch);
btn.addEventListener("click", custSearch);

