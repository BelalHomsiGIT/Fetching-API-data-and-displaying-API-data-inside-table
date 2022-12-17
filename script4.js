
fetch("https://fakestoreapi.com/products").then((myData) => {
    return myData.json(); // Convert Products data to js Object
}).then((myObjectData) => {
    console.log(myObjectData[0]) // show the first product as object
    console.log(myObjectData[0].price)

    let allProducts ="";
    let dataContainer = document.getElementById("dataDiv");
    myObjectData.map((product) => {
        allProducts += `
            <p>
                ${product.id} <br>
                ${product.title} <br>
                ${product.price} <br>
            </p>
        `
    })
    dataContainer.innerHTML = allProducts;
})