//class to get stocks/API data
class Stocks 
{
    constructor (req) 
    {
        this.req = req;
        this.KEY = "1P35FE0DMRMGOGOB";
        this.URL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + this.req + "&apikey=" + this.KEY + "&datatype=json";
    }

    getStocks ()
    {
        fetch(this.URL).then((res) => {
            return res.json();
        }).then((stocks) => {
            return stocks;
        })
    }
}