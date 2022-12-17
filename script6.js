
let tableContainer = document.getElementById("tblBody")

fetch("https://fakestoreapi.com/products")
.then((myData) => {
    return myData.json(); 
}).then((myObjectData) => {
    let allProducts ="";
    myObjectData.map((product) => {
        allProducts += `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td><img src="${product.image}"/></td>
            </tr>
        `
    })
    tableContainer.innerHTML = allProducts;
}).catch((err) =>{
    document.getElementsByTagName("h1").innerHTML = "ERROR: <br>" + err
})