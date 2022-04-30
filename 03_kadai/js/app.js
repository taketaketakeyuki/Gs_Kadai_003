 
//1.Save クリックイベント
$("#save").on("click" ,function(){
  // alert(1); //fanctionテスト
  const key = $("#key").val(); //入力文字の取得。valは、formタグ…inputかtextereaタグにしか使えない。
  const memo = $("#memo").val();
  var id = memo.split('v=')[1];
  //console.log(key, "idがkeyの部分の入力内容を表示"); //
  //console.log(memo, "idがmemoの部分の入力内容を表示"); 
  //で、取得した内容をローカルストレージに送る。鍵とああたい、セットになってないと格納できない、あるいは2つ以上は格納できない
  localStorage.setItem(key,id);
  //古い書き方、 const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>'; 
  const html = `
  <div class="box">
  <table>
  <tr><th>${key}</th></tr>
  <tr><td><iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td></tr>
  <tr><td><button class="delete" data-id="${key}">削除する</button></td></tr>
  </table>
  <div>
  `;
  
  $("#list").append(html);
  $('input').val("");  
  $('textarea').val("");  
  alert(入力おつかれさま); //fanctionテスト
 
  // const value = $("#memo").val(); localStorage.setItem(key,value); //一覧表示に追加
  // const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
  // $("#list").append(html);
  //この下は消さない
});


//2.clear クリックイベント
  // alert(1); //fanctionテスト
$("#clear").on("click" ,function(){
  localStorage.clear();
  $("#list").empty();
});


//3.ページ読み込み：保存データ取得表示

for(let i=0; i<localStorage.length; i++){
//key(何番)でkey名を取得
const key = localStorage.key(i);
const value = localStorage.getItem(key);
//一覧表示
//const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>'; $("#list").append(html);

const html = `
<div class="box">
<table>
<tr><th>${key}</th></tr>
<tr><td><iframe width="560" height="315" src="https://www.youtube.com/embed/${value}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td></tr>
<tr><td><button class="delete" value="${key}">削除する</button></td></tr>
</table>
</div>
`;
  $("#list").append(html);
}


//4.一行ずつデータ削除
$(".delete").on("click", function () {
  var deletekey =  $(this).val();
　console.log(deletekey)
  localStorage.removeItem(deletekey);
  window.location.reload();
});