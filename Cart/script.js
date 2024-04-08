let data = JSON.parse(localStorage.getItem("arrayMatteo"));
for (let i = 0; i < data.size()-1; i++){
    document.getElementById("info").innerHTML = document.getElementById("info").innerHTML + data[i];
}