
var itemHeadline = document.querySelectorAll('.item-headline');
// var time = 0;
// 应该需要把user_id传给你吧，难道判断登录后，后台就能获得这个cookie？
// 应该在模板中先是全部锁住，如果既登录又付费了，便把class替换掉
// 获取包含locked的class名，然后替换
// 目前在首页能获取paywall模板值么？
  function payWall(){  
    var xhrpw = new XMLHttpRequest();
    xhrpw.open('get', '/index.php/jsapi/paywall');
    xhrpw.setRequestHeader('Content-Type', 'application/text');
    xhrpw.onload = function() {
        if (xhrpw.status === 200) {
            var data = xhrpw.responseText;
            var dataObj = JSON.parse(data); 
            console.log('paywall'+data);
            if (dataObj.paywall === 1) {
                console.log('get paywall1'+data);
                updateLockClass();
            }
        } else {
            // updateLockClass();
            console.log('fail to get paywall');
        }
    };
    xhrpw.send(null);
  }
var userId1 = GetCookie('USER_ID') || GetCookie('uniqueVisitorId');
// if (userId1 !== null) {
  payWall();
  for (var i = 0; i < 5; i++) {
    setTimeout((function(i){
        return function(){
            payWall();
            console.log(i);
        };
    })(i), 3000);
   }
// }
console.log('userId:'+userId1);


// payWall();

var getPayHeadline = [];
// 过滤出包含locked的item-headline数组
function getPayStory(){
  // 循环itemHeadline长度数量
  for (var i = 0; i < itemHeadline.length; i++) {
        var childNodes = itemHeadline[i].children;
        // 循环childNodes长度数量
        for (var j = 0; j < childNodes.length; j++) {
          if (hasClass(childNodes[j],'locked')){
            getPayHeadline.push(childNodes[j]);
          }
        }
  }
}
getPayStory();
// 过滤出包含a的子节点，然后用过滤出的节点增加class
// function getHeadlineA(ele,clsName){
//     var childNodes = ele.children;   //HTMLCollection
//     for (let i = 0; i < childNodes.length; i++) {
//       if (childNodes[i].tagName.toLowerCase()==='a'){
//         addClass(childNodes[i], clsName);
//       }
//     } 
// }
function updateLockClass(){
    if (getPayHeadline.length>0){
      for (var k = 0; k < getPayHeadline.length; k++) {
        removeClass(getPayHeadline[k], 'locked');
        addClass(getPayHeadline[k], 'unlocked');
      }
    }
}
//  updateLockClass();
function hasClass(ele, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length === 0) {
    return false; 
  }else{
    return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ');
  }

}
 
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls : ele.className + ' ' + cls;
  }
}
 
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}