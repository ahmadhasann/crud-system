var nameInput = document.getElementById("nameInput")
var urlInput = document.getElementById("urlInput")


var websiteList = [] ;
if (localStorage.setItem("websiteList")) {
    websiteList = JSON.parse(localStorage.setItem("websiteList"))
}
function addproduct() {
    var product = {
        name : nameInput?.value,
        url : urlInput?.value ,
    }
    websiteList.push(product);
    localStorage.setItem("websiteList", JSON.stringify(websiteList));
    displaydata();
    clearForm();
}
function  clearForm(){
    nameInput.value = null;
    urlInput.value = null;
}
function displaydata(){   
var cartona = "";
    for ( var i = 0 ; i < websiteList.length ; i++ ){
   cartona += `<table class="table mt-4 text-center bg-light">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Website Name</th>
                        <th>Visit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>${websiteList[i]}</th>
                        <th>${websiteList[i].name}</th>
                        <th><button type="button" class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i> Visit</button></th>
                        <th><button type="button" class="btn btn-delete"><i class="fa-solid fa-trash-can"></i>Delete</button></th>
                    </tr>
                </tbody>
            </table> `}
            document.getElementById("data").innerHTML = cartona 
};
