$(document).ready(
	(function()

	{var t="#certificates .grid-item",e=$("#certificates #certificates-container").isotope({itemSelector:t,masonry:{columnWidth:t,isFitWidth:!0}});
	
	 $(window).on("load",(function(){e.isotope("shuffle")}));

	 var a=[[480,3],[720,10]],i=d(),o=1,s="*",n="data-filter",r="data-page",l="isotope-pager";

	 function c(a)

	  {var i=t;i+="*"!=s?'[data-filter="'+s+'"]':"",function(t){e.isotope({filter:t})}(i+='[data-page="'+a+'"]')}
	  
	  function d()

	  {for(var t=6,e=0;e<a.length;e++)if($(window).width()<=a[e][0]){t=a[e][1];break}return t}

	  function u()
	   
	    {var a,n,d,u;a=e.children(t).length,Math.ceil(a/i),n=1,d=1,u=t,u+="*"!=s?'[data-filter="'+s+'"]':"",e.children(u).each
	   
	    ((function(){n>i&&(d++,n=1),$(this).attr(r,d),n++})),o=d,function()
	      
	        {var t=0==$("."+l).length?$('<div class="isotope-pager"></div>'):$("."+l);t.html("");for(var a=0;a<o;a++)
	       
	          {var i=$('<a href="javascript:void(0);" class="pager" data-page="'+(a+1)+'"></a>');i.html(a+1),i.click((function(){c($(this).eq(0).attr(r))})),i.appendTo(t)}e.after(t)}()}u(),c(1),$(".filters li")
	        
	           .click((function(){var t=$(this).children("a").attr(n);s=t,u(),c(1)})),$(window).resize((function(){i=d(),u()}))})),$(document)
              
                .ready((function(){$(".filter-button-group").on("click","li",(function(){var t=$(this).attr("data-filter");$(".grid").isotope({filter:t}),$(".filter-button-group li").removeClass("active"),$(this)
                	
                	.addClass("active")}))})),$(document).ready((function(){$(".isotope-pager").on("click","a",(function(){$(this).attr("data-page");$(".isotope-pager a")
                	
                	 .removeClass("active"),$(this).addClass("active")}))})),$(document).ready((function(){$(".popupimg").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(t)
                	
                	{return t.is("img")?t:t.find("img")}}})})),function(t){"use strict";(new WOW).init(),t('a[href*="#"]').click((function()
                	 
                	  {if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body")
                		   
                	.animate({scrollTop:e.offset().top-54},1e3,"easeInOutExpo"),!1}})),t(window).scroll((function(){t(this).scrollTop()>100?t(".back-to-top").fadeIn("slow"):t(".back-to-top").fadeOut("slow")})),t(".back-to-top")

                	.click((function(){return t("html, body")
                	
                	   .animate({scrollTop:0},1500,"easeInOutExpo"),!1}))}(jQuery),anime.timeline({loop:!0}).add({targets:".sub-heading-role .line",opacity:[.5,1],scaleX:[0,1],easing:"easeInOutExpo",duration:700})
                	
                	     
                	    .add({targets:".sub-heading-role .line",duration:600,easing:"easeOutExpo",translateY:(t,e)=>1.25*e-.625+"em"}).add({targets:".sub-heading-role .ampersand",opacity:[0,1],scaleY:[.5,1],easing:"easeOutExpo",duration:600,offset:"-=600"})
                	    
                	      .add({targets:".sub-heading-role .letters-left",opacity:[0,1],translateX:["0.5em",0],easing:"easeOutExpo",duration:600,offset:"-=300"})
                	      .add({targets:".sub-heading-role .letters-right",opacity:[0,1],translateX:["-0.5em",0],easing:"easeOutExpo",duration:600,offset:"-=600"})
                	      .add({targets:".sub-heading-role",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3});var options={textColour:"#2c3e50",outlineColour:outlineColour="transparent",textHeight:18,depth:.8};

                	      window.onload=function(){try{TagCanvas.Start("skillCanvas","",options)}catch(t){document.getElementById("skillCanvasContainer").style.display="none"}};
                	    
                	      const items=Array.from(document.getElementsByClassName("activity-dynamic-item"));
                	     
                	      items.forEach(((t,e)=>{let a=items[e-1];a||(a=items[items.length-1]),a.addEventListener("animationend",(()=>{t.classList.add("animate"),a.classList.remove("animate")}))})),items[0].classList.add("animate"),$("#activities-carousel")
                	     
                	      .carousel({interval:!1}),$("#carousel-thumbs").carousel({interval:!1}),$("[id^=carousel-selector-]").click((function(){var t=$(this).attr("id"),e=parseInt(t.substr(t.lastIndexOf("-")+1));$("#activities-carousel").carousel(e)})),$(window)
                	      
                	      .width()<575&&($("#carousel-thumbs .row div:nth-child(4)").each((function(){var t=$(this);$('<div class="row mx-0">')
                	      
                	      	.insertAfter(t.parent()).append(t.nextAll().addBack())})),$("#carousel-thumbs .carousel-item .row:nth-child(even)").each((function(){var t=$(this);$('<div class="carousel-item">')
                	      	
                	      	.insertAfter(t.parent()).append(t.nextAll().addBack())}))),$("#carousel-thumbs .carousel-item").length<2&&($("#carousel-thumbs [class^=carousel-control-]")
                	      
                	      .remove(),$(".machine-carousel-container #carousel-thumbs")
                	      
                	      .css("padding","0 5px")),$("#activities-carousel")
                	      	
                	      	.on("slide.bs.carousel",(function(t){var e=parseInt($(t.relatedTarget)
                	      		
                	      		.attr("data-slide-number"));$("[id^=carousel-selector-]")
                	      	
                	      	.removeClass("selected"),$("[id=carousel-selector-"+e+"]")
                	      	
                	      	.addClass("selected")})),$("#activities-carousel .carousel-item img")
                	      	
                	      	.on("click",(function(t){$(t.target).attr("data-remote")&&$(this).ekkoLightbox()}));