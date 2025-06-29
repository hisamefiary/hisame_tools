'use strict';
// headerfooter
document.addEventListener('DOMContentLoaded', function () {
  let html = document.querySelector("html:has(body)")
  let body = document.querySelector("html>body")
  let title = document.querySelector("title")



  headercreate()
  function headercreate() {
    //ヘッダー追加開始
    let header = document.createElement("header")
    html.insertBefore(header, body)

    let h2 = create("h2", undefined, header)
    let a = create("a", undefined, h2)
    a.href = "https://hisamefiary.github.io/hisamesite/main/list/home/"
    a.innerHTML = "hisamesite"

    let h3 = create("h3", undefined, header)
    if (title === null) {
      h3.innerHTML = location.href
    } else {
      h3.innerHTML = title.innerHTML
    }

    //ヘッダー追加終了
  }
  footercreate()
  function footercreate() {
    //フッター追加開始
    let footer = document.createElement("footer")
    html.insertBefore(footer, body.nextElementSibling)

    let p1 = create("p", undefined, footer)
    let span1_1 = create("span", "ご意見、ご要望がございましたら、", p1)
    let a1 = create("a", undefined, p1)
    a1.href = "https://twitter.com/hisamefiary"
    a1.rel = 'noopener noreferrer'
    a1.target = "_blank"
    a1.innerHTML = "Twitter"
    let span1_2 = create("span", "にDMやリプをお願いします", p1)

    let p2 = create("p", "当サイトはPC版chromeでウィンドウサイズ960×1080<br>つまりディスプレイの半分で開いた状態で使うことを想定して作られています", footer)

    let p3 = create("p", undefined, footer)
    let span3_1 = create("span", "不具合が発生した場合shift+F5で再読み込みしてみてください、エラーの場合は", p3)
    let a2 = create("a", undefined, p3)
    a2.href = "https://twitter.com/hisamefiary"
    a2.rel = 'noopener noreferrer'
    a2.target = "_blank"
    a2.innerHTML = "Twitter"
    let span3_2 = create("span", "から報告お願いします…", p3)


    let p4 = create("p", "使いやすさだけを追い求めているためほぼ無機質です<br>利便性改善のための装飾はいつか作るかもしれません", footer)

    let p5 = create("p", "<a href='https://hisamefiary.github.io/hisamesite/main/list/home/'>トップページに飛ぶ</a>", footer)

    let p6 = create("p", "© SQUARE ENIX" + "<br>" + "© Hisame Fiary", footer)

    //フッター追加終了
  }

});
