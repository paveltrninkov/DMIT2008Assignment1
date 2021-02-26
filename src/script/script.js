// import Stocks from "./Context/stocks.js";
// import showStock from "./Views/stock.js";
// import populateDoc from "./Controllers/getStock";
// import getRequest from "./controllers/getRequest.js";


// const request = getRequest();
// const context = new Stocks(request);
// const section = showStock(context);
// const populate = getStock(section);

// Make these (^) into classes and not functions. Misunderstood.


document.querySelector(".assignment").addEventListener("submit", (event) => {
    event.preventDefault();
    let req = event.target.elements["symbol"];

    let body = document.querySelector("body");

    if (body.childNodes.length > 7)
    {
        body.removeChild(body.childNodes[body.childNodes.length - 1])
    }

    let KEY = "1P35FE0DMRMGOGOB";
    let URL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + req.value + "&apikey=" + KEY + "&datatype=json";

    fetch(URL).then((res) => {
        return res.json();
    }).then((stocks) => {
        let section = showStock(stocks);
        body.appendChild(section);
    })
})

const showStock = (data) => {
    let finalElement = document.createElement("section");
    if (data['Meta Data'] == undefined) {
        let div = document.createElement("div");
        let errorText = document.createTextNode("No data found.");
        div.appendChild(errorText);
        finalElement.appendChild(div);
    } else {
        // make elements to pu into document
        let div = document.createElement("div");
        let d = new Date(data['Meta Data']['3. Last Refreshed']);
        let month = d.getMonth() + 1
        if (month < 10) 
        {
            month = "0" + (d.getMonth() + 1);
        }
        let day = d.getDate();
        if (day < 10)
        {
            day = "0" + d.getDay();
        }

        let date = document.createElement("p");
        let dateText = d.getFullYear() + "-" + month + "-" + day;
        date.appendChild(document.createTextNode("Last Refreshed: " + data['Meta Data']['3. Last Refreshed']));
        let symbol = document.createElement("p");
        symbol.appendChild(document.createTextNode("Symbol: " + data['Meta Data']['2. Symbol']));
        let open = document.createElement("p");
        open.appendChild(document.createTextNode("Open Price: $" + data['Time Series (Daily)'][dateText]['1. open']));
        let high = document.createElement("p");
        high.appendChild(document.createTextNode("Highest Price: $" + data['Time Series (Daily)'][dateText]['2. high']))
        let low = document.createElement("p");
        low.appendChild(document.createTextNode("Lowest Price: $" + data['Time Series (Daily)'][dateText]['3. low']))
        let close = document.createElement("p");
        close.appendChild(document.createTextNode("Closes at: $" + data['Time Series (Daily)'][dateText]['4. close']))

        div.appendChild(date);
        div.appendChild(symbol);
        div.appendChild(open);
        div.appendChild(high);
        div.appendChild(low);
        div.appendChild(close);

        finalElement.appendChild(div);
    }

    return finalElement;
}