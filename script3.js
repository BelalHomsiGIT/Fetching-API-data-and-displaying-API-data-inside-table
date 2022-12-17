
// After Fetching the Data from URL, put it in myData variable
// and pass myData to then Method as parameter:
fetch("https://fakestoreapi.com/products").then((myData) => {
    // console.log(myData); // Products data in json format
    return myData.json() // Convert Products data in JS Object format, and ready to using:
}).then((myObjectData) => {     // myData.json() puted in myObjectData variable and pass it to then Method
    console.log(myObjectData[0]) // show the first product as object
    console.log(myObjectData[0].price)
})