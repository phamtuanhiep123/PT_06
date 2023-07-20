var arrayInt = [1,2,3,4,5];

//Hiển thị giá trị các phần tử của mảng
for (let i = 0; i < arrayInt.length; i++) {
    console.log(arrayInt[i]);
    
}

// //In các phần tử có giá trị chẵn và tính tổng
for (let i = 0; i < arrayInt.length; i++) {
    if(arrayInt[i]%2==0) {
        console.log(arrayInt[i]);
    };
    
}

//In các phần tử có chỉ số lẻ và tính tổng
let sum =0;
for (let i = 0; i < arrayInt.length; i++) {
    
    if(arrayInt[i]%2 !==0) {
        console.log(sum+=arrayInt[i]);
    };
    
}
console.log(sum);

//In các phần tử có giá trị là max hoặc min
var max = arrayInt[0];
for (let i = 0; i < arrayInt.length; i++) {
    
    if(max<arrayInt[i]) {
        max = arrayInt[i];
    };
    /**
     * 1,2,3,4,5
     * 1 < 1
     * 1 <2 ==> max = 2
     * 2 < 3 ==> max = 3
     * 3 < 4 ==> max = 4
     * 4 < 5 ==> max =5
     */
}
console.log(max);


//Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp xếp
// a,b
// x=a
// 
 for (let i = 0; i < arrayInt.length; i++) {
    for(let j = i+1; j<arrayInt.length; j++) {
        if (arrayInt[i]<arrayInt[j]) {
            tmp = arrayInt[i];
            arrayInt[i]=arrayInt[j];
            arrayInt[j] =tmp;
        }
    }    
 }
 console.log(arrayInt);
/** giải thích
 * arrayInt = [1,2,3,4,5];
 * for vòng 1 chạy
 * i =0
 * for vòng 2 chạy
 * i =0,j =1 ==> 1 < 2 thì x =1, 1=2,2=x
 * 2,1,3,4,5
 * i=0,j=2 ==> 1 <3 thì x=1,1=3,3=x
 * 2,3,1,4,5
 * i=0,j=3 ==> 1<4 thì x=1,1=4,4=x
 * 2,3,4,1,5
 */

 // 3,Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
 //1,Thêm phần tử “Rock-n-Roll” vào cuối mảng
 var nameMusic = ['Jazz','Blues'];
     nameMusic.push('Rock-n-Roll');
     console.log(nameMusic);

     //Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng có tổng số phần tử là lẻ
     if(nameMusic.length%2 !==0) {
        nameMusic[Math.floor((nameMusic.length-1)/2)] ='Classis'
     }
     console.log(nameMusic);

    //Xóa phần tử đầu tiên của mảng và hiển thị mảng
    nameMusic.shift();
    console.log(nameMusic);
    //Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
    nameMusic.unshift('Rap','Reggae')
    console.log(nameMusic);

//2,Khai báo mảng 2 chiều số nguyên arrInt
 var arrInt = [[1,2,3], [4,5,6],[7,8,9]]
 console.log(arrInt);
 //In giá trị các phần tử của mảng
 let sum2=0;

 for (let i = 0; i < arrInt.length; i++) {
    for (let j = 0; j < arrInt[i].length; j++) {
        console.log(arrInt[i][j]);
        
    }
 };
 //In giá trị các phần tử nằm trên đường biên (Coi mảng 2 chiều là ma
//trận)
for (let i = 0; i < arrInt.length; i++) {
    console.log(sum2 += arrInt[i][0]);
    console.log(sum2 += arrInt[i][1]);
    console.log(sum2 += arrInt[i][2]);

}

 

