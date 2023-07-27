// var numArray = [1,200,3,4];
// numArray.sort();

// for (let i = 0; i < numArray.length; i++) {
//     for (let j = i+1; j < numArray.length; j++) {
//         console.log(i, j, numArray[i], numArray[j]);
//         if (numArray[i] < numArray[j]) {
//             tmp = numArray[i];
//             numArray[i] = numArray[j];
//             numArray[j] = tmp;
//         }
        
//     }
// }
// Vòng for 1: 
/**
 * 
 */
//Bài 1: Viết hàm cho người dùng nhập 2 số. Tính tổng 2 số đó
// Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
let arrLength = prompt().split(",");
let arrLength1 = [5,4,3,2,1];
let numLength = (arrLength) => {
    return console.log(arrLength.length
    );
};
numLength(`${arrLength}`);
//Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
let textUpper = (arrLength) => {
    return console.log(arrLength.toUpperCase()
    );
};
textUpper(`${arrLength}`);

//Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
let textReverse = (arrLength) => {
    let new_arr = [];
    for (let i = arrLength.length - 1 ; i >=0; i--) {
        new_arr.push(arrLength[i]);
    }
    return console.log(  new_arr.join());
};
textReverse(`${arrLength}`);

//Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chứa các số đã sắp xếp theo thứ tự tăng dần.
let numIncremen =(arrLength) => {
    

    for (let k = 0; k < arrLength.length; k++) {
     for (let j = k+1; j < arrLength.length; j++) {
        if (arrLength[k]>arrLength[j]) {
            x = arrLength[k];
            arrLength[k] = arrLength[j];
            arrLength[j] = x;
        }
     }; 
     
    };

    return console.log(arrLength);
};
numIncremen(`${arrLength}`);

//Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. Ví dụ: “rIkKEi”
//sau khi chuẩn hóa thành “Rikkei”
let arrLower = prompt();
arrLower.toLowerCase();
function arrUpper(arrLower) {
    for (let index = 0; index < arrLower.length; index++) {
        arrLower[0].toUpperCase();
    }
    return console.log(arrLower[0]);
}
arrUpper(`${arrLower}`);