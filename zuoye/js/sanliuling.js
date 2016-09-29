$(function(){
			
			
ajax("get", "http://10.30.162.26/code6/sanliuling.json", "", function(data){
			


			var arr = JSON.parse(data)._data;

			var oUl = $("<ul id = 'ul_id'></ul>");
			$("#ul4").append(oUl);
			for (var i = 0; i < arr.length; i++) {
				var aLi = $("<li></li>");
				var img = $("<img />");
				var pic = arr[i].pic;
				var A = $("<a href='#'></a>");
				img.attr("src", "images/"+pic);
				//aLi.html(arr[i].title)
				var aP = arr[i].title;
				$(aLi).append(img);
				$(oUl).append(A);
				$(aLi).append(aP);
				$(A).html(aLi);

				//添加动画 鼠标移入移出
				aLi.mouseover(function(){
					$("#ul4").find("li").attr("class","");
					$("#ul4").find("div").css("display", "none");
					$(this).attr("class","active");
					
				});
				
				
				}


			var oDiv = $("<div id = 'ul5'></div>");
			$("#ul4").append(oDiv);
			var oP2 = $("#ul_id").find("a");
			for (var i = 0; i < oP2.length; i++) {
				$(oP2[i]).mouseover(function(){
					$("#ul5").html("");
					$("#ul5").css("display","block");
					var a = $(this).index();
					//a = $(this).index();
					for (var j = 0; j < arr[a].des.length; j++) {
						var h3 = $("<h3 class = 'h3_id'></h3>");
						var span = $("<span></span>");
						$(span).html(arr[a].des[j].Atitle);
						$(h3).append(span);
						for (var k = 0; k < arr[a].des[j].value.length; k++) {
							var aA1 = $("<a href='#'></a>");
							aA1.html(arr[a].des[j].value[k]);
							$(h3).append(aA1);
						}
						$(oDiv).append(h3);
						
						$("#ul5").append(oDiv);
					}
				})
				$(oP2[i]).mouseout(function(){
					$("#ul5").css("display","none");
				})
			}
				var right = document.getElementById("ul5");
				right.onmouseover = function(){
					right.style.display = "block";
				}

				right.onmouseout = function(){
					right.style.display = "none"
				}


				/*var arr_1 = JSON.parse(data)._course;
				var oUl_1 = $("<ul></ul>");
				$(".details_1").append(oUl_1);
				for(var i = 0; i < arr_1.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr_1[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl_1).append(A);
					$(A).html(aLi);

				}*/


				var arr1 = JSON.parse(data)._list;
				var oUl1 = $("<ul></ul>");
				$(".hot1").append(oUl1);
				for(var i = 0; i < arr1.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr1[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl1).append(A);
					$(A).html(aLi);

				}




				var arr2 = JSON.parse(data)._link;
				var oUl2 = $("<ul></ul>");
				$(".product_12").append(oUl2);
				for(var i = 0; i < arr2.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var aP = $("<p></p>");
					var aSpan = $("<span></span>");
					var pic = arr2[i].pic;
					 aP.html(arr2[i].title);
					aSpan.html(arr2[i].price);
					//var A = $("<a href='#'></a>");

					img.attr("src", "images/" + pic);

			
					img.appendTo(aLi);
					aP.appendTo(aLi);
					aSpan.appendTo(aLi);
					aLi.appendTo($(".product_12 ul"));

				}

				
/*---------------------------第一块------------------------------*/
				var arr3 = JSON.parse(data)._list2;
				var oUl3 = $("<ul></ul>");
				$(".cont_121").append(oUl3);
				for(var i = 0; i < arr3.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr3[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl3).append(A);
					$(A).html(aLi);

				}


				var arr4 = JSON.parse(data)._list3;

				var oUl4 = $("<ol></ol>");

				$("#box").append(oUl4);
				for(var i = 0; i < arr4.length; i++){
					var aLis = $("<li></li>");
					
					var aP = $("<p></p>");
					var eM = $("<em></em>");
					var aSpan = $("<span></span>");
				
					aP.html(arr4[i].title);
					eM.html(arr4[i].introduce);
					aSpan.html(arr4[i].price);

					aP.appendTo(aLis);
					eM.appendTo(aLis);
					aSpan.appendTo(aLis);
					aLis.appendTo($("#box ol"));
				
				}

/*---------------------------第二块------------------------------*/
				var arr3_1 = JSON.parse(data)._list2;
				var oUl3_1 = $("<ul></ul>");
				$(".cont_221").append(oUl3_1);
				for(var i = 0; i < arr3_1.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr3_1[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl3_1).append(A);
					$(A).html(aLi);

				}
				


				var arr4_1 = JSON.parse(data)._list3;

				var oUl4_1 = $("<ol></ol>");

				$("#box_1").append(oUl4_1);
				for(var i = 0; i < arr4_1.length; i++){
					var aLis = $("<li></li>");
					
					var aP = $("<p></p>");
					var eM = $("<em></em>");
					var aSpan = $("<span></span>");
				
					aP.html(arr4_1[i].title);
					eM.html(arr4_1[i].introduce);
					aSpan.html(arr4_1[i].price);

					aP.appendTo(aLis);
					eM.appendTo(aLis);
					aSpan.appendTo(aLis);
					aLis.appendTo($("#box_1 ol"));
				
				}
/*---------------------------第三块------------------------------*/				
			var arr3_2 = JSON.parse(data)._list2;
				var oUl3_2 = $("<ul></ul>");
				$(".cont_321").append(oUl3_2);
				for(var i = 0; i < arr3_2.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr3_2[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl3_2).append(A);
					$(A).html(aLi);

				}
				


				var arr4_2 = JSON.parse(data)._list3;

				var oUl4_2 = $("<ol></ol>");

				$("#box_2").append(oUl4_2);
				for(var i = 0; i < arr4_2.length; i++){
					var aLis = $("<li></li>");
					
					var aP = $("<p></p>");
					var eM = $("<em></em>");
					var aSpan = $("<span></span>");
				
					aP.html(arr4_2[i].title);
					eM.html(arr4_2[i].introduce);
					aSpan.html(arr4_2[i].price);

					aP.appendTo(aLis);
					eM.appendTo(aLis);
					aSpan.appendTo(aLis);
					aLis.appendTo($("#box_2 ol"));
				
				}
				
/*---------------------------第四块------------------------------*/				
			var arr3_3 = JSON.parse(data)._list2;
				var oUl3_3 = $("<ul></ul>");
				$(".cont_421").append(oUl3_3);
				for(var i = 0; i < arr3_3.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr3_3[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl3_3).append(A);
					$(A).html(aLi);

				}
				


				var arr4_3 = JSON.parse(data)._list3;

				var oUl4_3 = $("<ol></ol>");

				$("#box_3").append(oUl4_3);
				for(var i = 0; i < arr4_3.length; i++){
					var aLis = $("<li></li>");
					
					var aP = $("<p></p>");
					var eM = $("<em></em>");
					var aSpan = $("<span></span>");
				
					aP.html(arr4_3[i].title);
					eM.html(arr4_3[i].introduce);
					aSpan.html(arr4_3[i].price);

					aP.appendTo(aLis);
					eM.appendTo(aLis);
					aSpan.appendTo(aLis);
					aLis.appendTo($("#box_3 ol"));
				
				}

/*---------------------------第五块------------------------------*/				
			var arr3_4 = JSON.parse(data)._list2;
				var oUl3_4 = $("<ul></ul>");
				$(".cont_521").append(oUl3_4);
				for(var i = 0; i < arr3_4.length; i ++){
					var aLi = $("<li></li>");
					var img = $("<img />");
					var pic = arr3_4[i].pic;
					var A = $("<a href='#'></a>");
					img.attr("src", "images/" + pic);
					$(aLi).append(img);
					$(oUl3_4).append(A);
					$(A).html(aLi);

				}
				


				var arr4_4 = JSON.parse(data)._list3;

				var oUl4_4 = $("<ol></ol>");

				$("#box_4").append(oUl4_4);
				for(var i = 0; i < arr4_4.length; i++){
					var aLis = $("<li></li>");
					
					var aP = $("<p></p>");
					var eM = $("<em></em>");
					var aSpan = $("<span></span>");
				
					aP.html(arr4_4[i].title);
					eM.html(arr4_4[i].introduce);
					aSpan.html(arr4_4[i].price);

					aP.appendTo(aLis);
					eM.appendTo(aLis);
					aSpan.appendTo(aLis);
					aLis.appendTo($("#box_4 ol"));
				
				}

			});


	ajax("get","json.json","",function(data){

		var arr = JSON.parse(data)._datas;
			for (var i = 0; i < arr.length; i++) {
				var aLi = $("<li>");
				var A = $("<a href='#'></a>");

				aLi.html(A);
				A.html(arr[i].title);
				aLi.appendTo($(".cc ul"));
				if(i < 5){
					aLi.hover(function(){
				
						$("#show").css("display","block");
						$("#show .wrap").find("h2").eq($(this).index()).css("display","block");
					},function(){
						$("#show .wrap").find("h2").eq($(this).index()).css("display","none");
						$("#show").css("display","none");

				});
				}
				
			}
/*---------------------------第一块------------------------------*/
			var arrUrl = JSON.parse(data).urlimg;
			var arrImg = $("#box ol").find("li");

				for (var i = 0; i < arrImg.length; i++) {
					var oImg = $("<img>")
					oImg.attr('src',arrUrl[i].images);
					oImg.appendTo(arrImg[i]);
				}

/*---------------------------第二块------------------------------*/
			var arrUrl_1 = JSON.parse(data).urlimg;
			var arrImg_1 = $("#box_1 ol").find("li");

				for (var i = 0; i < arrImg_1.length; i++) {
					var oImg = $("<img>")
					oImg.attr('src',arrUrl_1[i].images);
					oImg.appendTo(arrImg_1[i]);
				}
/*---------------------------第三块------------------------------*/
			var arrUrl_2 = JSON.parse(data).urlimg;
			var arrImg_2 = $("#box_2 ol").find("li");

				for (var i = 0; i < arrImg_2.length; i++) {
					var oImg = $("<img>")
					oImg.attr('src',arrUrl_2[i].images);
					oImg.appendTo(arrImg_2[i]);
				}

/*---------------------------第四块------------------------------*/
			var arrUrl_3 = JSON.parse(data).urlimg;
			var arrImg_3 = $("#box_3 ol").find("li");

				for (var i = 0; i < arrImg_3.length; i++) {
					var oImg = $("<img>")
					oImg.attr('src',arrUrl_3[i].images);
					oImg.appendTo(arrImg_3[i]);
				}

/*---------------------------第五块------------------------------*/
			var arrUrl_4 = JSON.parse(data).urlimg;
			var arrImg_4 = $("#box_4 ol").find("li");

				for (var i = 0; i < arrImg_4.length; i++) {
					var oImg = $("<img>")
					oImg.attr('src',arrUrl_4[i].images);
					oImg.appendTo(arrImg_4[i]);
				}


		});

	});



