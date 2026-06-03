const API_URL = "https://fakestoreapi.com/products";
const showProducts = document.getElementById("showProducts");
const prodRow = document.getElementById("prodRow");

async function fetchData() {

    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        if (!response.ok) {
            throw new Error("No se pudo compleatr la solicitud...");
        }



        return products;
    } catch (error) {
        console.log(error);

    }

}

/*<div class="col-md-3 mb-4">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card’s content.</p>
                        <p class="card-text card-price">$</p>

                    </div>
                </div>
            </div>
            */
           

showProducts.addEventListener("click", () => {
    prodRow.innerHTML

});//ShowProdcuts

//AQUI SE INICILAIZAN LOS RECURSOS
