
// let numMin = prompt().split(";");1;2;3
// let min = numMin[0]
// for (let index = 0; index < numMin.length; index++) {
//    if (min > numMin[index]) {
//     min = numMin[index]
//    }    
// }
// console.log(`Số nhỏ nhất là : ${ typeof +min}`);

/**
 *  Tạo một mảng chứa ít nhất 5 số, sau đó yêu cầu người dùng nhập một số, thực
hiện tìm kiếm để tìm số trong mảng, nếu số được tìm thấy, hãy cho người dùng biết
rằng với chỉ số của nó trong mảng, nếu không, cũng nói với họ như vậy
 */

// var arr = [1,3,4233,54567,7,76765,76756,35,7,8,"9",2]
// let numArr = Number(prompt(''))
// let count =0;
// for (let index = 0; index < arr.length; index++) {
//     if(numArr==arr[index] &&numArr==arr[index] +1 ) {
//       count+=index ;
//     }
//      else{
//       console.log(` không tìm thấy` );

//      }
     
    
// }
// console.log(count);

let arrNum7 =[1,2,3,2,4,2,5,2];
let user = Number(prompt(''))
let count = 0;
let num =[];
for (let index = 0; index < arrNum7.length; index++) {
    if( user==arrNum7[index]) {
      count++;
      num.push(index);      
    }
  if(count < 1) {
    console.log("ko có số");
  }
  else {
    console.log(`co ${count} trong mang cho truoc o vi tri ${num}`);
  }
    

}
// debugger;
// for (let i = 0; i < num.length; i++) {
//   console.log(`${i} la ${num[i]}`);
//  }
//  console.log(num);







