//左を基準に真偽を返す
console.log('鈴木' == '鈴木');
console.log(10 < 30);
console.log(20 >= 21);

const array1 = [1,2,3];
const array2 = [1,2,3];
console.log(array1 == array2); //array1とarray2を比較（中身は同じだが別定義の為、false）

const array3 = [1,2,3];
const array4 = array3;
console.log(array3 == array4);　//array3とarray3を比較（array4にarray3を入れた為、辿るとarray3とarray3を比較。true）
