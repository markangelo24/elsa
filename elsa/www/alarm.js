    setInterval(function() {
    var date = new Date();
    var cuttime =  date.getHours() + ":" + date.getMinutes() ;
    $('#clock-wrapper').html(cuttime);
    
  $A(".btntosetalrm").click(function(){
     var alRmTime = $(".getalarmtime").val();  
     if(alRmTime){
     $('.aumkar').html(alRmTime);
     $(".alrm-main").css("display","none");
     $(".when-alrm-ring").css("display","block");
     }
        
     else{
     return false;
     }
     });
          var awesome = $(".aumkar").html();  
        
    if(awesome == cuttime){
    $(".audioDemo").trigger('play');
    }
    
}, 500);

   