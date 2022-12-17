
// After Fetching the Data from URL, put it in myData variable
// and pass myData to then Method as parameter:
fetch("https://fakestoreapi.com/products").then((myData) => {
    console.log(myData); // Products data in json format
})