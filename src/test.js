//tạo thẻ H1
let demo = document.createElement("h1")
//thêm giá trị "Hello" cho thẻ H1
demo.innerHTML = "Hello"
//thêm thẻ H1 tạo ở trên vào thành phần có id là: body
document.getElementById("body").appendChild(demo)
