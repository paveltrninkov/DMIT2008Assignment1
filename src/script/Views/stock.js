// function to make the section
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

        let date = document.createElement("p");
        date.appendChild(document.createTextNode("Last Refreshed: " + data['Meta Data']['3. Last Refreshed']));
        let symbol = document.createElement("p");
        symbol.appendChild(document.createTextNode("Symbol: " + data['Meta Data']['2. Symbol']));
        let open = document.createElement("p");
        open.appendChild(document.createTextNode("Open Price: $" + data['Time Series (Daily)'][data['Meta Data']['3. Last Refreshed']]['1. open']));
        let high = document.createElement("p");
        high.appendChild(document.createTextNode("Highest Price: $" + data['Time Series (Daily)'][data['Meta Data']['3. Last Refreshed']]['2. high']))
        let low = document.createElement("p");
        low.appendChild(document.createTextNode("Lowest Price: $" + data['Time Series (Daily)'][data['Meta Data']['3. Last Refreshed']]['3. low']))
        let close = document.createElement("p");
        close.appendChild(document.createTextNode("Closes at: $" + data['Time Series (Daily)'][data['Meta Data']['3. Last Refreshed']]['4. close']))

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

export default showStock;