const getRequest = () => {
    let req
    document.querySelector(".assignment").addEventListener("submit", (event) => {
        event.preventDefault();
         req = event.target.elements["symbol"];
    })
    return req;
}