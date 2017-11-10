var userId ="018199a0bc12428aa9e2c86012583998";
var newUrl="http://127.0.0.1:8081/activity20161214-api/";
  $(function(){                            //中奖  名单滚动
      var xTime=0
      var Times=setInterval(go,80);
      var pop=1;
      function go(){
          $(".chri-bottom ul").css("top",function(index,i){
              if(parseInt($(".chri-bottom ul").css("top"))<=-3000){pop=0;}
              return pop--
          })
      }
  })
function getCurrentLoginUserIdWithoutLoginNotice() { 
    if((typeof GLAZE_APP != 'undefined') && (typeof GLAZE_APP.getUserIdWithoutLoginNotice != 'undefined') ) {
        return GLAZE_APP.getUserIdWithoutLoginNotice();
    } else {
        return null;
    }
}

function getCurrentLoginUserId() {
    if((typeof GLAZE_APP != 'undefined') && (typeof GLAZE_APP.getUserIdWithLoginNotice != 'undefined') ) {
        return GLAZE_APP.getUserIdWithLoginNotice();
    } else {
        window.alert("Please embed javascript interface!");
    }
}


//------------------------------------------------------------------------------------------------------------------------

$.ajax({
    "type":"GET",
    "url":newUrl+"record/",
    "success":function(e){
        var e=eval(e)
        var  dat=e.list;
        $.each(dat,function(index,value){
            var con_li=document.createElement("li");
            var con_p=document.createElement("p");
            var con_span1=document.createElement("span").innerHTML="恭喜";
            var con_span2=document.createElement("span").innerHTML= dat[index].mobileNumber;
            var con_span3=document.createElement("span").innerHTML= dat[index].message;
            $(".chri-ul").append(con_li);
            $(con_li).append(con_p);
            $(con_p).append(con_span1);
            $(con_p).append(con_span2);
            $(con_p).append(con_span3);
        })
    },
});


//-----------------------------------------------------------------------------------------------------------------------

$(".chri-btn span").click(function(){
    $.ajax({
        "type":"POST",
        "url":newUrl+"lottery?memberId="+userId,
        "success":function(e){
            var e=eval(e)
            if(e.status== 200){                   //抽奖成功
               if(e.info.reward==1){var inte="1积分";
                   $(".chri-zhong").css("display","block")
                   $(".zc_").css("display","block")
                   $(".zhong-inte").html(inte)
               }
               if(e.info.reward==2){var inte="5积分";
                   $(".chri-zhong").css("display","block")
                   $(".zc_").css("display","block")
                   $(".zhong-inte").html(inte)
               }
               if(e.info.reward==3){var inte="10积分";
                   $(".chri-zhong").css("display","block")
                   $(".zc_").css("display","block")
                   $(".zhong-inte").html(inte)
               }
               if(e.info.reward==4){var inte="20积分";
                   $(".chri-zhong").css("display","block")
                   $(".zc_").css("display","block")
                   $(".zhong-inte").html(inte)
               }
               if(e.info.reward==5){var inte="50积分";
                   $(".chri-zhong").css("display","block")
                   $(".zc_").css("display","block")
                   $(".zhong-inte").html(inte)
               }
               if(e.info.reward==6){var inte="100积分";
                   $(".chri-zhong").css("display","block")
                   $(".zc_").css("display","block")
                   $(".zhong-inte").html(inte)
               }
               if(e.info.reward==7){
                   $(".iphone").css("display","block")
                   $(".zc_").css("display","block")
               }
            }
            if(e.status==401){                    //没有通过审核
                $(".chri-no").css("display","block")
                $(".zc_").css("display","block")
                $(".chri-no-p1").html("很遗憾")
                $(".chri-no-p2").html("您还未通过审核")
            }
            if(e.status==405){                    //积分不足
                $(".chri-no").css("display","block")
                $(".zc_").css("display","block")
                $(".chri-no-p1").html("很遗憾")
                $(".chri-no-p2").html("您的积分不足")
            }
        }
    })
})

$(".zhong-gb").click(function(){
    $(".chri-zhong").css("display","none")
    $(".iphone").css("display","none")
    $(".zc_").css("display","none")
    $(".chri-no").css("display","none")

})