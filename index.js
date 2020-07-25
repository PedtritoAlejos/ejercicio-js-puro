const usuariosUrl = "https://reqres.in/api/users?page=1";

// METODOS
async function getUsuarios(url) {
    let usuarios = await axios.get(url);
    return usuarios.data.data;

}

function getCardHtml(urlImage, nombreCompleto, email) {

    let divCard = document.createElement("div");
    let imgCard = document.createElement("img");
    let divCardBody = document.createElement("div");
    let h5Card = document.createElement("h5");
    let textH5Card = document.createTextNode(nombreCompleto);
    let pCard = document.createElement("p");
    textPcard = document.createTextNode(email);

    divCard.setAttribute("class", "card col-12 col-lg-4");
    divCard.setAttribute("style", "width: 18rem");

    imgCard.setAttribute("class", "card-img-top");
    imgCard.setAttribute("src", urlImage);
    imgCard.setAttribute("alt", "Card image cap");

    divCardBody.setAttribute("class", "card-body");
    h5Card.setAttribute("class", "card-title");
    h5Card.appendChild(textH5Card);

    pCard.appendChild(textPcard);
    pCard.setAttribute("class", "card-text");

    divCardBody.appendChild(h5Card);
    divCardBody.appendChild(pCard);

    divCard.appendChild(imgCard);
    divCard.appendChild(divCardBody);

    return divCard;
}

// MAIN

getUsuarios(usuariosUrl).
then(resp => {

    for (let index = 0; index < resp.length; index++) {

        let url = resp[index].avatar;
        let nombreCompleto = ` ${resp[index].first_name} ${resp[index].last_name} `;
        let email = resp[index].email;

        let nodoPadre = document.getElementById("nodoPadre");
        nodoPadre.appendChild(getCardHtml(url, nombreCompleto, email));


    }

}).catch(console.log())