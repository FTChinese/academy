/* jshint devel:true */
(function () {
'use strict';
var innotreeAPIRoot = '/index.php/jsapi/publish/innotree';
var gApiUrls = {
    'property': innotreeAPIRoot,
};
var gApiUrlsLocal = {
    'property': 'api/page/property-source.json'
};
if (window.location.hostname === 'localhost' || window.location.hostname.indexOf('192.168') === 0 || window.location.hostname.indexOf('10.113') === 0 || window.location.hostname.indexOf('127.0') === 0) {
    gApiUrls = gApiUrlsLocal;
}

function renderNews(headline,image,logoImage,money,supplement,link){
    var  newsHtml='<div class="item-container XL3 L4 M4 S6 P12 P-half has-image"><div class="item-inner"><h2 class="item-headline"><a target="_blank" href="'+link+'">'+headline+'</a></h2><a class="image" target="_blank" href="'+link+'"><figure class="is-retina" data-url="'+image+'"><img src="'+image+'" data-backupimage="'+image+'" style="width:556px;height:312px";></figure></a><div class="item-lead">'+money+'</div><div class="item-time">'+supplement+'</div><div class="item-bottom"></div></div></div>';
    return newsHtml;
}

// function wrapAllNews(wrapNews){
//     var  wrapAllHtml=''+wrapNews+'<div class=" MT PT"></div>'+wrapNews+'<div class=" MT PT ST"></div>'+wrapNews+'<div class=" XLT LT MT PT"></div>'+wrapNews+'<div class=" MT PT ST"></div>'+wrapNews+'<div class=" MT PT"></div>'+wrapNews+'<div class=" XLT LT MT PT ST"></div>';
//     return wrapAllHtml;
// }
function renderList(title,wrapAllHtml){
    var  listHtml='<div class="list-container"><div class="list-inner"><h2 class="list-title"><a class="list-link">'+title+'</a></h2><div class="items">'+wrapAllHtml+'<div class="clearfloat"></div></div></div></div>';
    return listHtml;
}
function loadPublic() {
    $.ajax({
        type: 'get',
        url: gApiUrls.property,
        dataType: 'json',
        success: function (data) {
            loadData1(data);
        },//success
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('errorThrown - [' + errorThrown + ']');
        }
    });//ajax
}//hanshu
function loadData1(data){
    var diffList=[];
    var listHtml0 = '';
    var newsHtml0 = '';
    var newsHtmls01 = [];
    var newsHtmls02 = [];
    var wrapAllHtml= []||'';
    var headline = '';
    var image = '';
    var logoImage = '';
    var money = '';
    var supplement = '';
    var link = '';

    $.each(data.sections, function (key1, section) {
       newsHtmls02=[];
       $.each(section.lists, function (key2, list) {
            diffList.push(list.name);
       });
        $.each(section.lists, function (key2, list) {
            newsHtmls01=[];
            $.each(list.items, function (key3, item) {
                headline = item.headline;
                image = item.image || '';
                logoImage = item.logoImage;
                money = item.money || '';
                supplement = item.supplement || '';
                link = item.link || '';
                newsHtml0= renderNews(headline,image,logoImage,money,supplement,link);
                newsHtmls01[key3]=newsHtml0;//保存单个item
            });//list.items
            newsHtmls02[key2]=newsHtmls01;//newsHtmls02保存所有item的二维数组，多个list下的items
            console.log(newsHtmls02)
        });//section.lists
    });//data.sections

    for(var i = 0,leni=newsHtmls02.length;i<leni;i++){
        var myParseInt=parseInt((newsHtmls02[i].length)/12);
         wrapAllHtml[i]='';//每个section
        for(var j = 0,lenj=parseInt((newsHtmls02[i].length)/12);j<lenj;j++){
         wrapAllHtml[i]+= ''+(newsHtmls02[i][12*j]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*j+1)]||'')+'<div class="ST PT "></div>'+(newsHtmls02[i][12*j+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*j+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*j+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*j+5]||'')+'<div class="ST LT MT PT"></div>'+(newsHtmls02[i][12*j+6]||'')+'<div class=" PT"></div>'+(newsHtmls02[i][12*j+7]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*j+8]||'')+'<div class=" LT MT PT"></div>'+(newsHtmls02[i][12*j+9]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*j+10]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*j+11]||'')+'<div class="XLT LT MT ST PT"></div>';
        }
        switch((newsHtmls02[i].length)%12){
            case 1: wrapAllHtml[i]+= ''+(newsHtmls02[i][myParseInt*12]||'')+'<div class="PT"></div>'; break;
            case 2: wrapAllHtml[i]+= ''+(newsHtmls02[i][myParseInt*12]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'; break;
            case 3: wrapAllHtml[i]+= ''+(newsHtmls02[i][myParseInt*12]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][6*myParseInt+2]||'')+'<div class="LT MT PT"></div>'; break;
            case 4: wrapAllHtml[i]+= ''+(newsHtmls02[i][6*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>';break;
            case 5: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>';break;
            case 6: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+5]||'')+'<div class="ST LT MT PT"></div>';break;
            case 7: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+5]||'')+'<div class="ST LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+6]||'')+'<div class="PT"></div>';break;
            case 8: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+5]||'')+'<div class="ST LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+6]||'')+'<div class="PT"></div>'+(newsHtmls02[i][12*myParseInt+7]||'')+'<div class="XLT ST PT"></div>';break;
            case 9: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+5]||'')+'<div class="ST LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+6]||'')+'<div class="PT"></div>'+(newsHtmls02[i][12*myParseInt+7]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+8]||'')+'<div class="LT MT PT"></div>';break;
            case 10: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+5]||'')+'<div class="ST LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+6]||'')+'<div class="PT"></div>'+(newsHtmls02[i][12*myParseInt+7]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+8]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+9]||'')+'<div class="ST PT"></div>';break;
            case 11: wrapAllHtml[i]+= ''+(newsHtmls02[i][12*myParseInt]||'')+'<div class="PT"></div>'+(newsHtmls02[i][(12*myParseInt+1)]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+2]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+3]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+4]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+5]||'')+'<div class="ST LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+6]||'')+'<div class="PT"></div>'+(newsHtmls02[i][12*myParseInt+7]||'')+'<div class="XLT ST PT"></div>'+(newsHtmls02[i][12*myParseInt+8]||'')+'<div class="LT MT PT"></div>'+(newsHtmls02[i][12*myParseInt+9]||'')+'<div class="ST PT"></div>'+(newsHtmls02[i][12*myParseInt+10]||'')+'<div class="ST PT"></div>';break;
        }
        
        listHtml0+=renderList('FEATURED PROPERTIES',wrapAllHtml[i]);
    }
      $('#content-inner').html(listHtml0);
}
loadPublic();
})(); 

