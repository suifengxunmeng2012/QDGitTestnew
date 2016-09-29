$(function(){
sc_msg();

	function sc_msg(){
				$.ajax({
					url:"data.json",
					type:"GET",
					success:function(data){
						var sc_str = $.cookie("goods");
						if(sc_str){
							var sc_obj = eval(sc_str);
							var html = "";
							for(var i in sc_obj){
								html += '<div class="sc_goodsPic"><img src="'+data[sc_obj[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>360手机N4S全网通版流光金</p></div><div class="sc_pries"><p>￥1200 &nbsp;<del>1500</del></p></div><a href = "#"><div class="sc_goodsBtn" id="'+sc_obj[i].id+'">购买</div></a><div class="sc_goodsNum">商品数量:'+sc_obj[i].num+'</div>';
							}
							$('.shop_1').html(html);
						}
					}
				});
			}
		});