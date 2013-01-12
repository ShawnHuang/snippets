function callback(result){
  alert(result)
}
$(function(){
   $('#list-snippets').load("./snippets/javascript.snippets",callback);
});
