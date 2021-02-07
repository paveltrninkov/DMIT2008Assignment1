// method to populate main doc/body
const populateDoc = (section) => {
        let body = document.querySelector("body");

        if (body.childNodes.length > 7) {
            body.removeChild(body.childNodes.length - 1);
        }
        body.appendChild(section);
}

export default populateDoc;