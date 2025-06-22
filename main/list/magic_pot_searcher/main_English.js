'use strict';
document.addEventListener('DOMContentLoaded', function () {

  let lang = "en"
  let mapdata = {
    "The Occult Crescent: South Horn": {
      name_jp: "クレセントアイル：南征編",
      name_en: "The Occult Crescent: South Horn",
      mapurl: "img/クレセントアイル：南征編_マップ.png",
      bronzebox: "img/銅箱.png",
      silverbox: "img/銀箱.png",
      otherbox: "img/銅箱_不明.png",
      aetheryte: [
        { name_jp: "デジョン先", name_en: "Return point", pos: { x: 38.4, y: 7.3 } },
        { name_jp: "放浪神聖域跡前", name_en: "The Wanderer's Haven", pos: { x: 18.0, y: 9.2 } },
        { name_jp: "水晶洞窟前", name_en: "Crystallized Caverns", pos: { x: 14.3, y: 19.0 } },
        { name_jp: "古樹の湿原前", name_en: "Eldergrowth", pos: { x: 27.5, y: 27.5 } },
        { name_jp: "石塔水沼前", name_en: "Stonemarsh", pos: { x: 13.7, y: 27.0 } },
        { name_jp: "北ポット", name_en: "North magic pots", pos: { x: 25.5, y: 17.1 } },
        { name_jp: "南ポット", name_en: "South magic pots", pos: { x: 11.8, y: 31.8 } },
      ],
      offset_0: { x: 1, y: 1 },
      offset_1: { x: 41.9, y: 41.9 },
      magicpot: [
        { x: 14.7, y: 4.2, color: "silver" },
        { x: 32.8, y: 5.3, color: "silver" },
        { x: 32.8, y: 5.3, color: "bronze" },
        { x: 5.8, y: 5.8, color: "other" },
        { x: 7.9, y: 6.2, color: "othe2" },
        { x: 17.6, y: 7.1, color: "bronze" },
        { x: 5.2, y: 8.2, color: "othe2" },
        { x: 28, y: 8.3, color: "silver" },
        { x: 10.7, y: 8.4, color: "bronze" },
        { x: 7.2, y: 8.8, color: "gold" },
        { x: 5.4, y: 9.4, color: "gold" },
        { x: 33.2, y: 10.5, color: "silver" },
        { x: 33.2, y: 10.5, color: "gold" },
        { x: 17.1, y: 11.3, color: "silver" },
        { x: 5.8, y: 11.6, color: "other" },
        { x: 11, y: 12.2, color: "other" },
        { x: 13.7, y: 12.2, color: "silver" },
        { x: 13.7, y: 12.2, color: "bronze" },
        { x: 21.7, y: 12.9, color: "silver" },
        { x: 22.9, y: 13.5, color: "bronze" },
        { x: 13.8, y: 13.8, color: "other" },
        { x: 6.9, y: 14, color: "bronze" },
        { x: 20.2, y: 14, color: "othe2" },
        { x: 37.5, y: 14.4, color: "bronze" },
        { x: 10.4, y: 15.3, color: "bronze" },
        { x: 17.5, y: 15.7, color: "silver" },
        { x: 22.6, y: 16.7, color: "other" },
        { x: 5.2, y: 16.9, color: "silver" },
        { x: 5.2, y: 16.9, color: "bronze" },
        { x: 8.2, y: 17, color: "bronze" },
        { x: 8.2, y: 17, color: "gold" },
        { x: 8.2, y: 17, color: "bronze" },
        { x: 13.7, y: 17, color: "bronze" },
        { x: 13.7, y: 17, color: "silver" },
        { x: 6.4, y: 17.6, color: "othe2" },
        { x: 20.9, y: 17.9, color: "other" },
        { x: 35.1, y: 18.2, color: "bronze" },
        { x: 9.2, y: 18.8, color: "othe2" },
        { x: 29.4, y: 18.8, color: "other" },
        { x: 4.6, y: 19, color: "gold" },
        { x: 12.1, y: 19.6, color: "other" },
        { x: 38.9, y: 19.7, color: "silver" },
        { x: 6.8, y: 19.8, color: "othe2" },
        { x: 8.5, y: 20, color: "bronze" },
        { x: 8.5, y: 20, color: "silver" },
        { x: 15.2, y: 20.7, color: "bronze" },
        { x: 39.2, y: 21.1, color: "silver" },
        { x: 7.9, y: 21.3, color: "bronze" },
        { x: 5.3, y: 21.4, color: "othe2" },
        { x: 12.3, y: 21.6, color: "bronze" },
        { x: 12.3, y: 21.6, color: "bronze" },
        { x: 12.3, y: 21.6, color: "silver" },
        { x: 15.1, y: 23, color: "othe2" },
        { x: 27.7, y: 23, color: "other" },
        { x: 23.6, y: 24.4, color: "silver" },
        { x: 23.6, y: 24.4, color: "bronze" },
        { x: 34.7, y: 24.7, color: "gold" },
        { x: 34.7, y: 24.7, color: "bronze" },
        { x: 33.3, y: 24.9, color: "othe2" },
        { x: 28.2, y: 25.2, color: "bronze" },
        { x: 15.1, y: 25.7, color: "othe2" },
        { x: 32.9, y: 26.9, color: "silver" },
        { x: 32.9, y: 26.9, color: "bronze" },
        { x: 26.7, y: 28.1, color: "silver" },
        { x: 35.5, y: 28.8, color: "other" },
        { x: 23.2, y: 29.4, color: "other" },
        { x: 20.6, y: 29.5, color: "other" },
        { x: 18.1, y: 30.2, color: "gold" },
        { x: 18.1, y: 30.2, color: "bronze" },
        { x: 26, y: 31.7, color: "bronze" },
        { x: 29.8, y: 33.3, color: "other" },
        { x: 37.1, y: 33.4, color: "othe2" },
        { x: 4.8, y: 33.6, color: "other" },
        { x: 25.4, y: 34, color: "other" },
        { x: 7.5, y: 34.9, color: "other" },
        { x: 22.1, y: 34.9, color: "other" },
        { x: 6.8, y: 35.1, color: "silver" },
        { x: 3.7, y: 35.8, color: "gold" },
        { x: 22.8, y: 36.3, color: "bronze" },
        { x: 7.9, y: 36.7, color: "other" },
        { x: 4.8, y: 36.8, color: "silver" },
        { x: 4.8, y: 36.8, color: "bronze" },
        { x: 37.9, y: 36.9, color: "bronze" },
        { x: 5.9, y: 37.7, color: "other" },
        { x: 6.6, y: 38, color: "gold" },
        { x: 6.6, y: 38, color: "bronze" },
        { x: 20.2, y: 38, color: "silver" },
        { x: 20.2, y: 38, color: "gold" },
        { x: 29.3, y: 38.2, color: "bronze" },
        { x: 9.4, y: 38.5, color: "silver" },
        { x: 30.1, y: 38.8, color: "silver" },
        { x: 15.1, y: 20.7, color: "silver" },


      ],
      treasure: [
        { x: 10.4, y: 34.0, color: "bronze" },
        { x: 11.6, y: 10.9, color: "bronze" },
        { x: 11.7, y: 17.3, color: "bronze" },
        { x: 12.4, y: 5.9, color: "bronze" },
        { x: 12.5, y: 22.0, color: "bronze" },
        { x: 13.4, y: 28.1, color: "bronze" },
        { x: 13.5, y: 24.9, color: "bronze" },
        { x: 13.9, y: 31.9, color: "bronze" },
        { x: 14.5, y: 13.8, color: "bronze" },
        { x: 15.7, y: 29.0, color: "silver" },
        { x: 16.3, y: 23.9, color: "bronze" },
        { x: 16.9, y: 37.5, color: "bronze" },
        { x: 17.5, y: 33.8, color: "bronze" },
        { x: 18.3, y: 18.8, color: "bronze" },
        { x: 18.7, y: 13.1, color: "bronze" },
        { x: 19.1, y: 7.3, color: "bronze" },
        { x: 20.9, y: 24.4, color: "bronze" },
        { x: 21.6, y: 30.0, color: "bronze" },
        { x: 22.2, y: 34.4, color: "bronze" },
        { x: 22.5, y: 15.7, color: "bronze" },
        { x: 24.1, y: 36.9, color: "bronze" },
        { x: 24.2, y: 36.9, color: "bronze" },
        { x: 24.3, y: 9.9, color: "bronze" },
        { x: 24.3, y: 36.9, color: "bronze" },
        { x: 26.3, y: 21.1, color: "bronze" },
        { x: 26.5, y: 31.3, color: "bronze" },
        { x: 27.0, y: 26.3, color: "bronze" },
        { x: 27.3, y: 34.2, color: "bronze" },
        { x: 28.5, y: 15.6, color: "bronze" },
        { x: 29.1, y: 6.6, color: "bronze" },
        { x: 29.2, y: 12.4, color: "bronze" },
        { x: 3.8, y: 7.8, color: "bronze" },
        { x: 30.1, y: 35.1, color: "bronze" },
        { x: 30.9, y: 19.7, color: "bronze" },
        { x: 30.9, y: 32.0, color: "bronze" },
        { x: 31.2, y: 9.6, color: "bronze" },
        { x: 31.8, y: 26.2, color: "silver" },
        { x: 33.4, y: 33.9, color: "bronze" },
        { x: 33.6, y: 23.8, color: "bronze" },
        { x: 33.8, y: 7.4, color: "bronze" },
        { x: 34.3, y: 29.6, color: "bronze" },
        { x: 34.7, y: 11.8, color: "bronze" },
        { x: 35.4, y: 33.4, color: "silver" },
        { x: 35.9, y: 20.1, color: "bronze" },
        { x: 36.8, y: 18.6, color: "silver" },
        { x: 37.0, y: 16.3, color: "bronze" },
        { x: 37.2, y: 23.6, color: "bronze" },
        { x: 38.0, y: 30.1, color: "bronze" },
        { x: 38.1, y: 35.4, color: "bronze" },
        { x: 38.8, y: 13.7, color: "bronze" },
        { x: 38.8, y: 33.0, color: "bronze" },
        { x: 4.3, y: 19.5, color: "bronze" },
        { x: 5.0, y: 4.8, color: "silver" },
        { x: 5.4, y: 15.2, color: "silver" },
        { x: 5.8, y: 35.4, color: "bronze" },
        { x: 6.1, y: 16.7, color: "bronze" },
        { x: 6.3, y: 23.4, color: "bronze" },
        { x: 6.8, y: 19.8, color: "bronze" },
        { x: 6.8, y: 32.7, color: "bronze" },
        { x: 6.8, y: 6.9, color: "bronze" },
        { x: 7.1, y: 37.3, color: "bronze" },
        { x: 7.2, y: 25.3, color: "bronze" },
        { x: 7.7, y: 22.1, color: "other" },
        { x: 7.8, y: 14.4, color: "bronze" },
        { x: 7.8, y: 17.5, color: "silver" },
        { x: 7.9, y: 34.2, color: "bronze" },
        { x: 8.2, y: 9.8, color: "bronze" },
        { x: 8.5, y: 29.5, color: "bronze" },
        { x: 8.5, y: 35.6, color: "silver" },
        { x: 9.4, y: 37.5, color: "bronze" },
        { x: 9.7, y: 4.1, color: "bronze" },


      ],
    }
  }
  let nowmap
  const silverimage = new Image();
  const bronzeimage = new Image();
  const otherimage = new Image();


  lang_push()
  function lang_push() {
    switch (lang) {
      case "en":
        document.querySelector("label[for='id_am']").innerHTML = "box switch"
        document.querySelector("label[for='id_an']").innerHTML = "pot switch"
        document.querySelector("label[for='id_ao']").innerHTML = "border switch"
        document.querySelector("label[for='id_map_select']").innerHTML = "map select"
        document.querySelector("select#id_map_select>option").innerHTML = "The Occult Crescent: South Horn"//仮置き
        document.querySelector("button#id_reset").innerHTML = "reset & map reload"
        break;
    }
  }
  function elementclear(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

  }
  function canvas_create(parent) {
    let canvas = document.createElement("canvas")
    parent.appendChild(canvas)
    canvas.width = "1000"
    canvas.height = "1000"
    return canvas
  }
  function canvas_reset(canvas) {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return ctx
  }
  function element_create(parent, tag) {
    let ele = document.createElement(tag)
    parent.appendChild(ele)
    return ele
  }
  function mapreload(map) {
    nowmap = mapdata[map]
    document.getElementById("id_map_none").src = nowmap["mapurl"]

    let id_canvas_list_box = document.getElementById("id_canvas_list_box")
    if (document.getElementById("id_am").checked) {
      id_canvas_list_box.classList.remove("break")
    } else {
      id_canvas_list_box.classList.add("break")
    }

    let id_canvas_list_pin = document.getElementById("id_canvas_list_pin")
    if (document.getElementById("id_an").checked) {
      id_canvas_list_pin.classList.remove("break")
    } else {
      id_canvas_list_pin.classList.add("break")
    }
    let id_canvas_list_border = document.getElementById("id_canvas_list_border")
    if (document.getElementById("id_ao").checked) {
      id_canvas_list_border.classList.remove("break")
    } else {
      id_canvas_list_border.classList.add("break")
    }
  }
  function Equation() {
    Math.sqrt(goodbye + goodmorning - sorry / thankyou * goodbye * goodmorning / sorry - thankyou + bigtears * yourhand + myhand) === x
  }
  function draw_pin(ctx, x, y, color) {
    let PIdata = Math.PI * 2 / 4
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (true) {
      case color === "gold":
        ctx.arc(x, y, 10, PIdata * 1, PIdata * 3);
        ctx.fillStyle = "#ffff00"
        break;
      case color === "silver":
        ctx.arc(x, y, 10, PIdata * 0, PIdata * 1);
        ctx.fillStyle = "#00ffff"
        break;
      case color === "bronze":
        ctx.arc(x, y, 10, PIdata * 3, PIdata * 4);
        ctx.fillStyle = "#00ff00"
        break;
      case color === "other":
        ctx.arc(x, y, 10, PIdata * 2, PIdata * 3);
        ctx.fillStyle = "gray"
        break;
      case color === "othe2":
        ctx.arc(x, y, 10, PIdata * 1, PIdata * 2);
        ctx.fillStyle = "gray"
        break;
      default:
        alert("エラー(財宝指定無し、製作者に連絡してください)")
        break;
    }
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2;
    ctx.stroke();

  }
  function draw_box(ctx, x, y, color) {
    let image
    switch (color) {
      case "bronze":
        image = bronzeimage
        break;
      case "silver":
        image = silverimage
        break;
      case "other":
        image = otherimage
        break;
      default:
        alert("エラー(銀箱銅箱指定無し、製作者に連絡してください)")
        break;
    }
    image.addEventListener("load", function () {
      ctx.drawImage(image, x - 12, y - 12, 24, 24);
    });
  }
  function draw_main(ctx, x, y, array, data, fill) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    array.forEach(element => {
      ctx.lineTo(data[element].x, data[element].y)
    })
    ctx.closePath();
    if (fill) {
      ctx.fill();

    } else {
      ctx.strokeStyle = "#ff00ff"
      ctx.lineWidth = 2;
      ctx.stroke();

    }
  }
  function mapload() {
    let id_canvas_list_fill = document.getElementById("id_canvas_list_fill")
    elementclear(id_canvas_list_fill)

    let id_canvas_list_border = document.getElementById("id_canvas_list_border")
    elementclear(id_canvas_list_border)

    let id_select_list_aetheryte = document.getElementById("id_select_list_aetheryte")
    elementclear(id_select_list_aetheryte)

    let zero_xy = {
      x: nowmap["offset_0"].x,
      y: nowmap["offset_0"].y
    }
    let map_xy = {
      x: nowmap["offset_1"].x - zero_xy.x,
      y: nowmap["offset_1"].y - zero_xy.y
    }
    silverimage.src = nowmap['silverbox'];
    bronzeimage.src = nowmap['bronzebox'];
    otherimage.src = nowmap['otherbox'];

    pin()
    function pin() {
      let id_canvas_list_pin = document.getElementById("id_canvas_list_pin")
      let canvas_3 = canvas_create(id_canvas_list_pin)
      let ctx = canvas_reset(canvas_3)
      nowmap["magicpot"].forEach(element => {
        let pixel_xy = {
          x: (element.x - zero_xy.x) / map_xy.x * 1000,
          y: (element.y - zero_xy.y) / map_xy.y * 1000
        }
        draw_pin(ctx, pixel_xy.x, pixel_xy.y, element.color)
      })
    }

    box()
    function box() {
      let id_canvas_list_box = document.getElementById("id_canvas_list_box")
      let canvas_4 = canvas_create(id_canvas_list_box)
      let ctx = canvas_reset(canvas_4)
      nowmap["treasure"].forEach(element => {
        let pixel_xy = {
          x: (element.x - zero_xy.x) / map_xy.x * 1000,
          y: (element.y - zero_xy.y) / map_xy.y * 1000
        }
        draw_box(ctx, pixel_xy.x, pixel_xy.y, element.color)
      })
    }


    nowmap["aetheryte"].forEach(element => {
      let pixel_xy = {
        x: (element["pos"].x - zero_xy.x) / map_xy.x * 1000,
        y: (element["pos"].y - zero_xy.y) / map_xy.y * 1000
      }
      let r = Math.tan(Math.PI / 8)


      let direction_call_fill = {
        "・not": { name_en: "・not", name_jp: "・無　", en: [], jp: [], },
        "↑N  ": { name_en: "↑N  ", name_jp: "↑北　", en: ["↖NNW", "↖NW ", "↙SW ", "↘SE ", "↗NE ", "↗NNE",], },
        "↗NE ": { name_en: "↗NE ", name_jp: "↗北東", en: ["↗NNE", "↖NW ", "↙SW ", "↘SE ", "↗NE ", "↗ENE",], },
        "→E  ": { name_en: "→E  ", name_jp: "→東　", en: ["↗ENE", "↗NE ", "↖NW ", "↙SW ", "↘SE ", "↘ESE",], },
        "↘SE ": { name_en: "↘SE ", name_jp: "↘南東", en: ["↘ESE", "↗NE ", "↖NW ", "↙SW ", "↘SE ", "↘SSE",], },
        "↓S  ": { name_en: "↓S  ", name_jp: "↓南　", en: ["↘SSE", "↘SE ", "↗NE ", "↖NW ", "↙SW ", "↙SSW",], },
        "↙SW ": { name_en: "↙SW ", name_jp: "↙南西", en: ["↙SSW", "↘SE ", "↗NE ", "↖NW ", "↙SW ", "↙WSW",], },
        "←W  ": { name_en: "←W  ", name_jp: "←西　", en: ["↙WSW", "↙SW ", "↘SE ", "↗NE ", "↖NW ", "↖WNW",], },
        "↖NW ": { name_en: "↖NW ", name_jp: "↖北西", en: ["↖WNW", "↙SW ", "↘SE ", "↗NE ", "↖NW ", "↖NNW",], },
      }

      let direction_call_border = [
        ["↗NNE", "↙SSW",],
        ["↗ENE", "↙WSW",],
        ["↘ESE", "↖WNW",],
        ["↘SSE", "↖NNW",],
      ]
      let directiondata = {
        "↗NNE": { x: +pixel_xy.x + pixel_xy.y * r, y: 0 },
        "↗NE ": { x: 1000, y: 0 },
        "↗ENE": { x: 1000, y: +pixel_xy.y - (1000 - pixel_xy.x) * r },
        "↘ESE": { x: 1000, y: +pixel_xy.y + (1000 - pixel_xy.x) * r },
        "↘SE ": { x: 1000, y: 1000 },
        "↘SSE": { x: +pixel_xy.x + (1000 - pixel_xy.y) * r, y: 1000 },
        "↙SSW": { x: +pixel_xy.x - (1000 - pixel_xy.y) * r, y: 1000 },
        "↙SW ": { x: 0, y: 1000 },
        "↙WSW": { x: 0, y: +pixel_xy.y + pixel_xy.x * r },
        "↖WNW": { x: 0, y: +pixel_xy.y - pixel_xy.x * r },
        "↖NW ": { x: 0, y: 0 },
        "↖NNW": { x: +pixel_xy.x - pixel_xy.y * r, y: 0 },
      }


      canvas_edit()
      function canvas_edit() {
        let canvas_1 = canvas_create(id_canvas_list_fill)
        canvas_1.dataset.id = element["name_en"]

        let canvas_2 = canvas_create(id_canvas_list_border)
        canvas_2.dataset.border = element["name_en"]
        let ctx = canvas_reset(canvas_2)
        direction_call_border.forEach(element => {
          draw_main(ctx, pixel_xy.x, pixel_xy.y, element, directiondata, false)
        })
      }

      select_edit()
      function select_edit() {
        let div = element_create(id_select_list_aetheryte, "div")
        let label = element_create(div, "label")
        label.innerHTML = element["name_" + lang]
        let select = element_create(label, "select")

        select.addEventListener('change', () => {
          let canvas = document.querySelector(`canvas[data-id="${element["name_en"]}"]`)
          let ctx = canvas_reset(canvas)
          draw_main(ctx, pixel_xy.x, pixel_xy.y, direction_call_fill[select.value]["en"], directiondata, true)
        })

        Object.keys(direction_call_fill).forEach(element => {
          let option = element_create(select, "option")
          option.value = direction_call_fill[element]["name_en"]
          option.innerHTML = direction_call_fill[element]["name_" + lang]
        })
      }
    })

  }
  reload()
  function reload() {
    mapreload("The Occult Crescent: South Horn")
    mapload("The Occult Crescent: South Horn")//mapreloed next
  }
  document.getElementById("id_reset").addEventListener('click', () => {
    mapreload("The Occult Crescent: South Horn")
    mapload("The Occult Crescent: South Horn")//mapreloed next
  })
  document.querySelectorAll("#id_am,#id_an,#id_ao").forEach(element => {
    element.addEventListener('click', () => {
      mapreload("The Occult Crescent: South Horn")
    })
  })
});

