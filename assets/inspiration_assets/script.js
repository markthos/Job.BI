var searchitem = document.getElementById ("get-quote")
searchitem.addEventListener ("click",getQuotesList)

window.onload = getQuotesList


function getQuotesList(e){

    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) { 
        console.log(data);
        console.log(data.length)
        var ind = Math.floor(Math.random() * data.length)
        document.getElementById("quote").innerText = data[ind].text + " ~~~"+data[ind].author
      });
}

