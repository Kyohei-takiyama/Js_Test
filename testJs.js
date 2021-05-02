/*********************************問題1*****************************************/

/*
descriotion : 重複除去処理
[TODO]
重複がない配列を作成して出力
[condition]
1 filterを利用する→全要素反復
2 indexOfを利用する→重複判断
3 返り値を使用する→重複がない配列をリターン
4 結果をコンソールに出力する
*/

/*********************************フィールド*****************************************/

//重複配列
const array = [2,4,7,5,4,3,8,];
//重複判断処理で使用
const valiableDuplicateArray = [];
//重複値を格納
const dupulicateNums = [];

/*********************************重複判定*****************************************/

//重複配列から重複値を除去し、重複無し配列に格納する処理
const notDuplicateArray = array.filter(function (item, indexNum) {

  //重複判断
  if (!valiableDuplicateArray.includes(array[indexNum])) {
    valiableDuplicateArray.push(item);
    return valiableDuplicateArray;
  }

    dupulicateNums.push(item);

});

/*********************************出力結果*****************************************/

console.log('---------重複配列----------');
console.log(array);
console.log('---------重複無し配列----------');
console.log(notDuplicateArray);
console.log('---------重複値----------');
console.log(dupulicateNums);
console.log('---------重複数----------');
console.log(dupulicateNums.length);



/*********************************問題2*****************************************/

/*
descriotion : うるう年か判定する処理
[TODO]
西暦を引数として渡し、うるう年か判断
[condition]
1 if文を使用する
2 leapYearという関数を使用する
3 引数に西暦を渡す
4 返り値を使用する
5 結果はコンソールに出力する
6 西暦が4で割り切れるかつ100で割り切れない→(year % 4 == 0 && year % 100 != 0)
7 西暦が400で割り切れる→(year % 400 == 0)
*/

/*********************************フィールド*****************************************/

//検証対象の西暦を入力
let year = 2020;
//うるう年判定条件
const isLeapYear = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);

/*********************************出力結果*****************************************/

//leapYear関数をコール
console.log(leapYear(year));
year = 2021;
console.log(leapYear(year));
console.log(leapYear(2020));
console.log(leapYear(2021));

/*********************************うるう年か判定処理*****************************************/

//引数に検証西暦を渡し、うるう年かを判定し、結果を出力
function leapYear(year) {

  console.log('---------laapYear関数をコール--------')

  if (isLeapYear) {
    console.log(year + '年はうるう年');
  } else{
    console.log(year + '年はうるう年ではありません');
  }

};