var coinShop = window.localStorage.getItem('coinShop') | 0;
coinShop = parseInt(coinShop);
// var settings = {
//   fontSize: '11px',
//   coinShop: '0'
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// //then you can retrieve it
// settings = JSON.parse(localStorage.getItem('settings'));

// console.log(settings.coinShop); //11px

// coinShop = parseInt(settings.coinShop)
testBool = window.localStorage.getItem('bool') || false;
var testBool = testBool == "true" ? true : false;
btnText = window.localStorage.getItem('btnText');
document.getElementById('btn').textContent = btnText;

console.log(testBool)
function historyAdd() {
      console.log(testBool)
      testBool = testBool ? false : true;
      console.log(testBool)

      if (testBool == true){
        window.localStorage.setItem('bool',true);
        console.log('testBool become true ',testBool);
        window.localStorage.setItem('coinShop','100');
        window.localStorage.setItem('btnText','미반영')
        coinShop = window.localStorage.getItem('coinShop');
        coinShop = parseInt(coinShop);
        globalThis.coinShop;
        setValue();
        document.getElementById('btn').textContent = '미반영';
      } 
      else {
        window.localStorage.setItem('bool',false);
        console.log('testBool become false ',testBool);
        window.localStorage.setItem('coinShop','0');
        window.localStorage.setItem('btnText','반영');
        coinShop = window.localStorage.getItem('coinShop');
        coinShop = parseInt(coinShop);
        globalThis.coinShop;
        setValue();
        document.getElementById('btn').textContent = '반영';
      }

      console.log('Toggled bool is',
                          testBool);
  // var coinShop = window.localStorage.getItem('coinShop')
  // coinShop = parseInt(coinShop)
  // window.localStorage.setItem('coinShop','100')
  // var coinShop = window.localStorage.getItem('coinShop')
  // coinShop = parseInt(coinShop)
  // setValue()
}

function setValue() {
  var xmlHttpRequests;
  if(window.XMLHttpRequest){// code for Firefox, Mozilla, IE7, etc.
    xmlHttpRequest = new XMLHttpRequest();
  }else{
    return;
  }

  xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
  xmlHttpRequest.setRequestHeader("ContentType", "text/html");
  xmlHttpRequest.send('');

  var serverDate = xmlHttpRequest.getResponseHeader("Date");
  var today = new Date(serverDate); //오늘 날짜

  var nowValue = 742; //2022.12.09 기준 성장치 742개
  var i = 0;
  let maxLevel = [0, 29, 76, 141, 224, 325, 444, 581, 736, 909, 1100]; //레벨별 필요 성장치
  var nowLevel = i; //심볼 레벨
  const addition = 0; //심볼 선택권 등 타 경로를 통해 획득한 심볼 개수
  let publishedDate = new Date("2022/12/09");
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //1월 = 0
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = new Date(yyyy + "/" + mm + "/" + dd);

  var difference = Math.abs(today - publishedDate);
  difference = difference / (1000 * 3600 * 24);

  var dailyCount = difference * 5; //일퀘 5개 //10개로 언제 늘어남?

  nowValue = nowValue + addition + dailyCount + coinShop;
  console.log(nowValue);

  while (nowValue > maxLevel[i]) {
    nowValue = nowValue - maxLevel[i];
    i++;
    nowLevel = i;
  }

  document.getElementById("level").innerHTML = "Lv." + nowLevel;
  if (i >= 11) {
    var result = "COMPLETE!";
    document.getElementById("nowValue").style.color = "yellow";
    document.getElementById("nowValue").style.fontWeight = "bold";
    document.getElementById("nowValue").innerHTML = result;
    return;
  } else {
    var result = nowValue + "/" + maxLevel[i];
  }
  document.getElementById("nowValue").innerHTML = result;

}