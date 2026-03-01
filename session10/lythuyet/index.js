/*
object ( đối tượng) mô phỏng 1 đối tượng trong thực tế
VD: đối tượng con mèo, cái xe ô tô, con người, cái bàn...
Gồm 2 thành phần chính:
    1.Thuộc tính (PROPERTIES)
    2.Phương thức(METHODS)

    con mèo: thuộc tính ( màu mắt, màu lông...)
             phương thức( bắt chuột,...)

    TẠI SAO LẠI SINH RA OBJECT
    giúp gom nhóm các thuộc tính, phương thức chung cho đối tượng để dễ quẩn lý, thao tác

    CÁCH KHAI BÁO ĐỐI TƯỢNG
    Bên trong đối tượng bao gồm các gặp KEY và VALUE được ngăn cách với nhau bởi dấu phẩy;


*/

let product = {
    id: 1,
    price: 5000,
    img: "",

}
/*
THAO TÁC VỚI ĐỐI TƯỢNG
CRUD
1.CREATE thêm
*/

//1.CREATE thêm
let book = {};
book.id = "001";
book.author = "Nguyễn Nhật Ánh";
book["bookName"] = "hoa vàng";
console.log("book",book);

//2.READ hiện thị
for (const key in object) {
    console.log(book[key]);

}
 // 3.UPDATE cập nhật
 book.bookName = "Cậu chuyện ngàn năm";
 console.log("book",book);
 
 // 4.DELETE XOÁ
 delete book.bookName;

 let a = 5;
 let b = a;
 a = 11;
 console.log("b",b);

 let objA = {
    email: "A",
 };
 let objB = objA ;
 objA.email = "456";
 console.log("objB",objB);
 
 