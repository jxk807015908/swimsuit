/**
 * Created by Administrator on 17-7-17.
 */
var oConsult=document.getElementById("consult");
var oInfo=document.getElementById("info");

var oMenu=document.getElementsByTagName("ul")[0];
var oList=oMenu.getElementsByTagName("li");
var aSubnav=oMenu.getElementsByTagName("div");
var oSubnav;

var oLB=document.getElementById("lb");
var oUL=oLB.getElementsByTagName("ul");
var oPIC=oUL[0].getElementsByTagName("li");
var oCount=oUL[1].getElementsByTagName("li");
var tid1=null;
var tid2=null;
var tidinfo=null;
var tidmenu=null;
var count=0;
var alpha=0;
for(var i=0;i<oCount.length;i++)
{
    oCount[i].temp=i;
    oCount[i].onmouseover=function(){
        show(this.temp);
        clearInterval(tid1);
    }
    oCount[i].onmouseout=function(){
        autoplay();
    }
}
function autoplay(){
    tid1=setInterval(function (){
        count++;
        if(count>=oCount.length) count=0;
        show(count);
    },2000)
}
autoplay();
function show(a){
    count=a;
    for(var i=0;i<oCount.length;i++) oCount[i].className="";
    oCount[a].className="current";
    for(var i=0;i<oPIC.length;i++)
    {
        oPIC[i].style.opacity=0;
        oPIC[i].style.filter="alpha(opacity=0)";
    }
    clearInterval(tid2);
    alpha=0;
    tid2=setInterval(function(){
        alpha+=1;
        oPIC[a].style.opacity=alpha/100;
        oPIC[a].style.filter="alpha(opacity="+alpha+")";
        if(alpha>=100)
        {
            clearInterval(tid);
        }
    },10)
}

oConsult.onmouseover =function(){
    oInfo.style.display="block";
}
oConsult.onmouseout =function(){
    clearTimeout(tidinfo);
    tidinfo=setTimeout(function(){
        oInfo.style.display="none";
    },1000)
}
oInfo.onmouseover =function(){
    clearTimeout(tidinfo);
}
oInfo.onmouseout =function(){
    clearTimeout(tidinfo);
    tidinfo=setTimeout(function(){
        oInfo.style.display="none";
    },1000)
}

for(var i=0;i<oList.length;i++)
{
    oList[i].onmouseover=function(){
        for(var i=1;i<aSubnav.length;i=i+2) aSubnav[i].style.display="none";
        oSubnav=this.getElementsByTagName("div")[1];
        oSubnav.style.display="block";
        clearTimeout(tidmenu);
        oSubnav.onmouseover=function(event){
            (event || window.event).cancelBubble = true;
            clearTimeout(tidmenu);
        }
        oSubnav.onmouseout=function(event){
            (event || window.event).cancelBubble = true;
            tidmenu=setTimeout(function(){
                oSubnav.style.display="none";
            },1000)
        }
    }
    oList[i].onmouseout=function(){
        oSubnav=this.getElementsByTagName("div")[1];
        tidmenu=setTimeout(function(){
            oSubnav.style.display="none";
        },1000)
    }
}
