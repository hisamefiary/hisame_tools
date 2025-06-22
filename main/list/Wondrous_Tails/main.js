'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const bingo_mgp = [
    0,
    0 + 30000,
    0 + 30000 + 100000,
    0 + 30000 + 100000 + 1000000
  ]
  const bingo_pattern = {
    "0ビンゴ_パターン数": 4752,
    "1ビンゴ_パターン数": 5480,
    "2ビンゴ_パターン数": 1184,
    "3ビンゴ_パターン数": 24,
    "0_3ビンゴ_パターン数": 4752 + 5480 + 1184 + 24,
    "1_3ビンゴ_パターン数": 5480 + 1184 + 24,
    "2_3ビンゴ_パターン数": 1184 + 24,
    "3_3ビンゴ_パターン数": 24,
  }
  const AllData = [
    [5000, 1430 / 1430],
    [5833, 1417 / 1430],
    [6667, 1388 / 1430],
    [10000, 1378 / 1430],
    [10833, 1358 / 1430],
    [11667, 1306 / 1430],
    [11944, 1282 / 1430],
    [12500, 1264 / 1430],
    [12778, 1248 / 1430],
    [13611, 1188 / 1430],
    [14444, 1112 / 1430],
    [14722, 1100 / 1430],
    [15556, 1096 / 1430],
    [16389, 1081 / 1430],
    [16944, 1073 / 1430],
    [17778, 1055 / 1430],
    [18611, 1005 / 1430],
    [18889, 939 / 1430],
    [19444, 931 / 1430],
    [19722, 901 / 1430],
    [20278, 863 / 1430],
    [20556, 861 / 1430],
    [21389, 765 / 1430],
    [21667, 701 / 1430],
    [22222, 693 / 1430],
    [22500, 685 / 1430],
    [23333, 655 / 1430],
    [24167, 623 / 1430],
    [26667, 607 / 1430],
    [27500, 603 / 1430],
    [28333, 563 / 1430],
    [29167, 523 / 1430],
    [29444, 502 / 1430],
    [30000, 472 / 1430],
    [30278, 468 / 1430],
    [31111, 416 / 1430],
    [31389, 388 / 1430],
    [31944, 373 / 1430],
    [32222, 369 / 1430],
    [33056, 336 / 1430],
    [38333, 326 / 1430],
    [39167, 322 / 1430],
    [40000, 314 / 1430],
    [41111, 304 / 1430],
    [41944, 286 / 1430],
    [42778, 282 / 1430],
    [43889, 278 / 1430],
    [46389, 246 / 1430],
    [46667, 243 / 1430],
    [47222, 223 / 1430],
    [49444, 217 / 1430],
    [55000, 215 / 1430],
    [57778, 211 / 1430],
    [60556, 193 / 1430],
    [63333, 155 / 1430],
    [64167, 109 / 1430],
    [65000, 107 / 1430],
    [65833, 95 / 1430],
    [66111, 91 / 1430],
    [68889, 77 / 1430],
    [85556, 76 / 1430],
    [88333, 72 / 1430],
    [91111, 48 / 1430],
    [102222, 40 / 1430],
    [105000, 32 / 1430],
    [107778, 10 / 1430],
    [157778, 4 / 1430],
    [185556, 3 / 1430],
    [213333, 2 / 1430],
    [213334, 0 / 1430],
  ]

  let start = performance.now();
  let end = performance.now();
  function 時刻検証(startend) {
    if (startend) {
      start = performance.now();
    } else {
      end = performance.now();
      console.log("時間", end - start);
    }
  }

  データ反映()

  // cell_id_list作成
  let cell_id_list = [
    "cell_0",
    "cell_1",
    "cell_2",
    "cell_3",
    "cell_4",
    "cell_5",
    "cell_6",
    "cell_7",
    "cell_8",
    "cell_9",
    "cell_A",
    "cell_B",
    "cell_C",
    "cell_D",
    "cell_E",
    "cell_F"
  ]

  // cell_list作成
  let cell_list = []
  cell_id_list.forEach(cell_id => {
    let cell = document.getElementById(cell_id)
    cell_list.push(cell)
  })

  // チェックボックスの実行
  cell_list.forEach(cell => {
    cell.addEventListener('click', () => {
      入力と実行()
    })
  })

  // リセットボタン実行
  document.getElementById("reset_button").addEventListener('click', () => {
    cell_list.forEach(cell => {
      cell.checked = false
    })
    入力と実行()
  })

  //初期実行
  入力と実行()

  function 入力と実行() {
    時刻検証(true)
    let [now_check, cell_text] = 入力取得()//入力データ取得
    if (now_check > 9) {
      console.log("多すぎ")
    } else {
      let cell_loop_9 = 経路探索(now_check, cell_text)//9埋まるパターン全探索
      計算開始(now_check, cell_loop_9)//計算開始
    }
    時刻検証(false)
  }
  function 入力取得() {
    let now_check = 0
    let cell_text = ""
    cell_list.forEach(cell => {
      if (cell.checked) {
        cell_text = cell_text + "1"
        now_check++
      } else {
        cell_text = cell_text + "0"
      }
    })
    return [now_check, cell_text]
  }
  function 経路探索(now_check, cell_text) {
    let cell_loops = {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
    }
    cell_loops[now_check][cell_text] = true
    // console.log(cell_loops)
    while (now_check < 9) {
      // console.log("--------------------")
      // console.log(now_check, "から1つ点を打つ");
      // console.log(cell_loops[now_check])
      Object.keys(cell_loops[now_check]).forEach(cell_loop => {
        // console.log("----------------")
        // console.log(cell_loop)
        for (let index = 0; index < 16; index++) {
          if (cell_loop.substring(index + 0, index + 1) === "1") {
            // trueならスルー
          } else {
            // falseなら追記
            let cell_loop_new =
              cell_loop.substring(0, index + 0) + "1" +
              cell_loop.substring(index + 1)
            cell_loops[now_check + 1][cell_loop_new] = true
          }
        }
      })
      now_check++
    }
    return cell_loops[9]
  }
  function 計算開始(now_check, cell_loop_9) {
    let bingo_all_count = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
    }
    Object.keys(cell_loop_9).forEach(element => {
      bingo_all_count[bingo_data[element]]++
    });
    //ここまででビンゴ数数える

    let result = {
      "0ビンゴ_パターン数": bingo_all_count[0],
      "1ビンゴ_パターン数": bingo_all_count[1],
      "2ビンゴ_パターン数": bingo_all_count[2],
      "3ビンゴ_パターン数": bingo_all_count[3],
      "0_3ビンゴ_パターン数": bingo_all_count[0] + bingo_all_count[1] + bingo_all_count[2] + bingo_all_count[3],
      "1_3ビンゴ_パターン数": bingo_all_count[1] + bingo_all_count[2] + bingo_all_count[3],
      "2_3ビンゴ_パターン数": bingo_all_count[2] + bingo_all_count[3],
      "3_3ビンゴ_パターン数": bingo_all_count[3],
    }
    データ反映(result, now_check)
  }
  function データ反映(result, now_check) {
    if (result) {
      let ビンゴ率_0 = result["0_3ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"]
      let ビンゴ率_1 = result["1_3ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"]
      let ビンゴ率_2 = result["2_3ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"]
      let ビンゴ率_3 = result["3_3ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"]
      let リセビンゴ率_0 = bingo_pattern["0_3ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"]
      let リセビンゴ率_1 = bingo_pattern["1_3ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"]
      let リセビンゴ率_2 = bingo_pattern["2_3ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"]
      let リセビンゴ率_3 = bingo_pattern["3_3ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"]




      // 通り数
      let 通り数 = document.querySelector("#pattern")
      通り数.querySelector('.tableA').innerHTML = result["0_3ビンゴ_パターン数"];
      通り数.querySelector('.table0').innerHTML = result["0ビンゴ_パターン数"];
      通り数.querySelector('.table1').innerHTML = result["1ビンゴ_パターン数"];
      通り数.querySelector('.table2').innerHTML = result["2ビンゴ_パターン数"];
      通り数.querySelector('.table3').innerHTML = result["3ビンゴ_パターン数"];

      // 確率
      let 確率 = document.querySelector("#percent")
      確率.querySelector('.table0').innerHTML = (result["0ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";
      確率.querySelector('.table1').innerHTML = (result["1ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";
      確率.querySelector('.table2').innerHTML = (result["2ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";
      確率.querySelector('.table3').innerHTML = (result["3ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";

      let リセ後確率 = document.querySelector("#reset")
      リセ後確率.querySelector('.table0').innerHTML = (bingo_pattern["0ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";
      リセ後確率.querySelector('.table1').innerHTML = (bingo_pattern["1ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";
      リセ後確率.querySelector('.table2').innerHTML = (bingo_pattern["2ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";
      リセ後確率.querySelector('.table3').innerHTML = (bingo_pattern["3ビンゴ_パターン数"] / bingo_pattern["0_3ビンゴ_パターン数"] * 100).toFixed(2) + "％";

      // 以上確率
      let 以上確率 = document.querySelector("#BINGOpercent")
      以上確率.querySelector('.table0').innerHTML = (ビンゴ率_0 * 100).toFixed(2) + "％";
      以上確率.querySelector('.table1').innerHTML = (ビンゴ率_1 * 100).toFixed(2) + "％";
      以上確率.querySelector('.table2').innerHTML = (ビンゴ率_2 * 100).toFixed(2) + "％";
      以上確率.querySelector('.table3').innerHTML = (ビンゴ率_3 * 100).toFixed(2) + "％";

      let 以上リセ後確率 = document.querySelector("#BINGOreset")
      以上リセ後確率.querySelector('.table0').innerHTML = (リセビンゴ率_0 * 100).toFixed(2) + "％";
      以上リセ後確率.querySelector('.table1').innerHTML = (リセビンゴ率_1 * 100).toFixed(2) + "％";
      以上リセ後確率.querySelector('.table2').innerHTML = (リセビンゴ率_2 * 100).toFixed(2) + "％";
      以上リセ後確率.querySelector('.table3').innerHTML = (リセビンゴ率_3 * 100).toFixed(2) + "％";


      let lastresult = Math.floor(
        bingo_mgp[1] * result["1ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"] +
        bingo_mgp[2] * result["2ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"] +
        bingo_mgp[3] * result["3ビンゴ_パターン数"] / result["0_3ビンゴ_パターン数"]
      )
      let nowdata;//現時点の確率
      let updata;//リセットしてよくなる確率
      for (let index = 0; index < AllData.length; index++) {
        if (AllData[index][0] > lastresult) {
          // console.log("参照");
          nowdata = AllData[index - 1];
          updata = AllData[index];
          break
        }
      }
      if (now_check <= 7) {
        document.getElementById('finalresult0').innerHTML = (nowdata[1] * 100).toFixed(2) + "％" + "=現時点の確率";
        document.getElementById('finalresult1').innerHTML = (updata[1] * 100).toFixed(2) + "％" + "=リセットして良くなる確率";
      } else {
        document.getElementById('finalresult0').innerHTML = "不可" + "％" + "=現時点の確率";
        document.getElementById('finalresult1').innerHTML = "不可" + "％" + "=リセットして良くなる確率";
      }
    } else {
      let 通り数 = document.querySelector("#pattern")
      通り数.querySelector('.tableA').innerHTML = "変動";
      通り数.querySelector('.table0').innerHTML = "変動";
      通り数.querySelector('.table1').innerHTML = "変動";
      通り数.querySelector('.table2').innerHTML = "変動";
      通り数.querySelector('.table3').innerHTML = "変動";

      let 確率 = document.querySelector("#percent")
      確率.querySelector('.table0').innerHTML = "変動";
      確率.querySelector('.table1').innerHTML = "変動";
      確率.querySelector('.table2').innerHTML = "変動";
      確率.querySelector('.table3').innerHTML = "変動";

      let 以上確率 = document.querySelector("#BINGOpercent")
      以上確率.querySelector('.table0').innerHTML = "変動";
      以上確率.querySelector('.table1').innerHTML = "変動";
      以上確率.querySelector('.table2').innerHTML = "変動";
      以上確率.querySelector('.table3').innerHTML = "変動";

      document.getElementById('finalresult0').innerHTML = "変動％=現時点の確率";
      document.getElementById('finalresult1').innerHTML = "変動％=リセットして良くなる確率";

    }
  }
});