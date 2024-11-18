var productNameInput = document.getElementById('productName');
var productUrlInput = document.getElementById('productUrl');

var productList = [];

if (localStorage.getItem('productContainer') !== null) {
    productList = JSON.parse(localStorage.getItem('productContainer'));
    displayProduct()
}

function addProduct() {
    var product = {
        name: productNameInput.value,
        url: productUrlInput.value,
    }
    productList.push(product);
    localStorage.setItem('productContainer', JSON.stringify(productList))
    displayProduct()
    clearProduct()

}
function clearProduct() {
    productNameInput.value = null
    productUrlInput.value = null
}

function displayProduct() {
    var cartona = '';
    for (var i = 0; i < productList.length; i++) {
        cartona += `
       <tr>
                    <td>${i + 1}</td>
                    <td>${productList[i].name}</td>
                    <td><a href="${productList[i].url}"><button class="btn btn-success px-2 pe-3"><i class="fa-solid fa-eye me-1"></i> Visit</button></a>
                    </td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger px-4 pe-4"><i
                                class="fa-regular fa-trash-can me-1"></i>Delete</button></td>
                </tr>     
                `
    }

    document.getElementById('tableContent').innerHTML = cartona;
}
function deleteProduct(index) {

    productList.splice(index, 1);
    localStorage.setItem('productContainer', JSON.stringify(productList))
    displayProduct()
    console.log(productList);

}

function visitUrl() {

    alert('hello')
}