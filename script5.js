
fetch("https://fakestoreapi.com/products")
.then((myData) => {
    return myData.json(); 
}).then((myObjectData) => {
    let tableContainer = document.getElementById("tblBody");
    let allProducts ="";
    myObjectData.map((product) => {
        allProducts += `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.image}</td>
            </tr>
        `
    })
    tableContainer.innerHTML = allProducts;
})