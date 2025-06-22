'use strict';
document.addEventListener('DOMContentLoaded', function () {

  let BINGO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  let BINGOscore = [
    undefined,
    undefined, undefined, undefined, undefined, undefined,
    10000, 36, 720, 360, 80,
    252, 108, 72, 54, 180,
    72, 180, 119, 36, 306,
    1080, 144, 1800, 3600, undefined
  ]
  const selectexpectedAll = [
    select0expected,
    select1expected,
    select2expected,
    select3expected,
    select4expected
  ]
  //以上計算系の処理なので計算側に一任
  //以下リロード系の処理なのでメイン側(これ)に一任
  const cell = document.querySelectorAll('.cell')
  function リロード() {
    let 入力配列 = [];
    let 入力数値数 = 0;
    for (let index = 0; index < cell.length; index++) {
      cell[index].classList.remove('cellred')
      cell[index].classList.remove('cellblue')
      if (cell[index].value !== "?") {
        入力配列.push(Number(cell[index].value))
        入力数値数++
      } else {
        入力配列.push(cell[index].value)
      }
    }
    console.log(入力配列)
    // console.log(入力数値数)
    try {
      let 使用ドロー = selectexpectedAll[入力数値数]
      for (let index = 0; index < 入力配列.length; index++) {
        使用ドロー = 使用ドロー.filter(i => i[0][index] === 入力配列[index])
      }
      let nextドロー = 使用ドロー[0][1]
      let next期待値 = 使用ドロー[0][2]
      console.log(next期待値)
      if (入力数値数 !== 4) {
        cell[nextドロー].classList.add('cellred')
      } else {
        for (let index = 0; index < nextドロー.length; index++) {
          cell[nextドロー[index]].classList.add('cellblue')
        }
      }
    } catch (error) {
      let エラーテスト1 = 入力配列.filter(i => i !== "?");
      let エラーテスト2 = Array.from(new Set(エラーテスト1))
      if (エラーテスト1.length !== エラーテスト2.length) {
        // alert("同じ数字を入力した事によるエラー")
      } else if (入力数値数 > 4) {
        // alert("5つ以上入力した事によるエラー")
      } else if (入力数値数 === 0) {
      } else {
        // alert("原因不明のエラー")
        console.log(error)
      }
    }
  }
  function リセット() {
    for (let index = 0; index < cell.length; index++) {
      cell[index].value = "?";
    }
  }

  for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener('change', () => {
      リロード()
    });
  }
  document.getElementById("reset").addEventListener('click', () => {
    リセット()
    リロード()
  });
});
