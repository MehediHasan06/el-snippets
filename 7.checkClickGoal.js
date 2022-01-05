function clickGoalCheck(selector){
  document.querySelectorAll(selector).forEach(function(item){
    item.addEventListener('click', function(){
      console.log("clicked !");
    });
  });
};

