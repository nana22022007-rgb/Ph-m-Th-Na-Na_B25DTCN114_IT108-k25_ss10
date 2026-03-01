let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
    { id: 3, name: "Le Van C", goals: 0, position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0, position: "GK" }
];

let choose;
do {
    choose = +prompt(
        "--- FOOTBALL MANAGER PRO ---\n" +
        "1. Xem đội hình\n" +
        "2. Thêm cầu thủ\n" +
        "3. Tìm kiếm (theo ID)\n" +
        "4. Cập nhật bàn thắng\n" +
        "5. Xóa cầu thủ (Chuyển nhượng)\n" +
        "0. Thoát"
    );

    switch (choose) {
        case 1:
            dishplayPlayers();
            break;
        case 2:
            addPlayer();

            break;

        case 3:
            findById();

            break;

        case 4:
            updateGoal();``

            break;
        case 5:
            break;

        case 0:
            console.log("Thoát chương trình");
            break;

        default:
            alert("Chọn sai, nhập lại!");
    }
} while (choose != "0");

// hàm hiện thị danh sách cầu thủ
function dishplayPlayers() {
    for (let i = 0; i < squad.length; i++) {
        console.log(`Mã: ${squad[i].id} - ${squad[i].name} (${squad[i].position}) : ${squad[i].goals}`);
    }
}

// hàm thêm cầu thủ mới
function addPlayer() {
    let name = prompt("Nhập tên cầu thủ:");
    let position = prompt("Nhập vị trí:");
    let goal = +prompt("Nhập số bàn thắng ghi được:");
    let id = Math.floor(Math.random()*999999) + Date.now();
    let newPlayer = {
        id: id,
        name: name,
        goals: goal,
        position: position,
    };
    squad.push(newPlayer);
    alert("Đã thêm cầu thủ!");
}

// tìm cầu thủ theo id
function findById(params) {
    let id = prompt("Mời nhập id cầu thủ cần tìm kiếm");
    let result= squad.find((item)=>item.id==id);
    if (result) {
        console.log("có",result);
    }else{
        console.log(`Không tìm thấy cầu thủ với id: ${id}`); 
    }
}

// hàm cập nhật bàn thắng vừa ghi bàn
function updateGoal() {
    let id = prompt("nhập id cầu thủ vừa ghi bàn");
    let index_update = squad.findIndex((item)=>{
        return item.id==id
    })
    if(index_update != -1){
        squad[index_update].goals=++;
        
        

    }else{
        console.log(`Không tìm thấy cầu thủ`);
    }
}