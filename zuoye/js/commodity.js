$(function(){
        function Zoom(object){
                this.zoomArea=$(".zoom",object);//保存促发放大效果的区域
                this.moveArea=$(".move",object);//保存移动区域
                this.zoomDetail=$(".zoomDetail",object);//保存放大镜区域
                this.zoomDetailImg=$("img",this.zoomDetail);//保存放大镜里面的图
                this.zoomAreaWidth=this.zoomArea.width();
                this.moveAreaWidth=this.moveArea.width();
                this.zoomAreaHeight=this.zoomArea.height();
                this.moveAreaHeight=this.moveArea.height();
                this.zoomDetailWidth=this.zoomDetail.width();
                this.zoomDetailHeight=this.zoomDetail.height();
                this.zoomAreaOffset=this.zoomArea.offset();//初始化放大区域在视口中的相对偏移;
                this.XY=null;//初始化鼠标相对于放大区域的偏移偏移值
                this.moveBili=null;//
                var _this_=this;
                this.zoomArea.mousemove(function(e){//当鼠标在放大区域移动的时候执行
                                                 _this_.move(e.pageX,e.pageY);   
                                        }).mouseover(function(){
                                            _this_.moveArea.show();
                                            _this_.zoomDetail.show();
                                            }).mouseout(function(){
                                                _this_.moveArea.hide();
                                                _this_.zoomDetail.hide();                                               
                                                });
                this.calculate();//初始化并计算出需要的比例值
                //以下是小图部分的功能实现
                this.l=0;
                this.scrollObj=$(".slideMain ul",object);//保存ul滚动对象
                this.lis=this.scrollObj.children();//保存小图片列表
                this.btnR=$(".btnR",object);//保存右边按钮
                this.btnL=$(".btnL",object);//保存左边边按钮
                this.lis.mouseover(function(){
                                        _this_.changeImgSrc(this);
                                        });
                if(this.lis.length>6){//判断图片数是否超出显示区域，是的话就注册滚动事件
                    this.s=this.lis.length-6;//获取多余出来的图片数
                    this.scrollObj.width(60*this.lis.length+"px");//当图片数超出默认值时，设置ul的宽度
                    this.btnL.click(function(){_this_.scrollRight();}).mouseover(function(){$(this).addClass("hover")}).mouseout(function(){$(this).removeClass("hover");});
                    this.btnR.click(function(){_this_.scrollLeft();}).mouseover(function(){$(this).addClass("hover")}).mouseout(function(){$(this).removeClass("hover");});;
                }
              };
        Zoom.prototype={
            scrollLeft:function(){
                if(Math.abs(this.l)==this.s){return};
                this.l--;
                this.scrollObj.animate({left:this.l*58+"px"},"fast");   
                },
            scrollRight:function(){
                if(this.l==0){return};
                this.l++;
                this.scrollObj.animate({left:this.l*58+"px"},"fast");
                },
            changeImgSrc:function(o){
                //改变标识样式
                $(o).addClass("selected").siblings().removeClass("selected");
                this.zoomArea.find("img").attr("src",$(o).find("img").attr("medium-img"));
                this.zoomDetailImg.attr("src",$(o).find("img").attr("medium-img"));

                },
            move:function(x,y){//鼠标在放大区域移动的时候执行的函数
                    this.XY=this.mousePosAndSetPos(x,y);//计算出鼠标相对于放大区域的x,y值
                    //设置滑块的位置
                    this.moveArea.css({
                                      left:this.XY.offsetX+"px",
                                      top:this.XY.offsetY+"px"
                                      });
                    //设置大图在细节位置
                    this.zoomDetailImg.css({
                                           marginLeft:-this.XY.offsetX*this.moveBili+"px",
                                           marginTop:-this.XY.offsetY*this.moveBili+"px"
                                           });
                },
            mousePosAndSetPos:function(x,y){//实时计算并设置滑块的位置
                x=x-this.zoomAreaOffset.left-this.moveArea.width()/2;
                y=y-this.zoomAreaOffset.top-this.moveArea.height()/2;
                x=x<0?0:x;
                y=y<0?0:y;
                x=x>(this.zoomAreaWidth-this.moveAreaWidth)?this.zoomAreaWidth-this.moveAreaWidth:x;
                y=y>(this.zoomAreaHeight-this.moveAreaHeight)?this.zoomAreaHeight-this.moveAreaHeight:y;
                return {
                        offsetX:x,
                        offsetY:y
                        };  
                },
            calculate:function(){//计算函数
                    var widthBili,heightBili;
                    //计算移动的滑块与放大镜铺面显示的比例宽高
                    widthBili=(this.zoomAreaWidth*this.zoomDetailWidth)/this.moveAreaWidth;
                    heightBili=(this.zoomAreaHeight*this.zoomDetailHeight)/this.moveAreaHeight;
                    //把比出来的宽高
                    this.zoomDetailImg.css({width:widthBili+"px",height:heightBili+"px"});
                    //返回移动的比例
                    this.moveBili=(widthBili-this.zoomDetailWidth)/(this.zoomAreaWidth-this.moveAreaWidth);
                }
            };
          var zoom=new Zoom($(".ZoomMain").eq(0)); 




          $(".a_4").click(function(){
                //购物车数量增加
                var id = 0;
                //判断是否有过cookie缓存
                var first = $.cookie("goods") == null ? true : false;
                var same = false; //判断是否有相同的商品
                if(first){
                    //第一次添加的时候,建立json结构
                    $.cookie('goods', '[{id:' + id +',num:1}]');
                    $.cookie('first', "false");
                }else{
                    var str = $.cookie("goods");
                    var arr = eval(str); //eval(str); eval JQ的字符串转对象
                    //遍历所有的对象,如果id相同,让该商品的数量递增。
                    for(var i in arr){
                        if(arr[i].id == id){
                            arr[i].num = arr[i].num + 1; //添加数量
                            var cookieStr = JSON.stringify(arr);
                            $.cookie('goods', cookieStr);
                            same = true;
                        }
                    }

                    //如果id不同,添加该商品
                    if(!same){
                        var obj = {id:id,num:1};
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods", cookieStr);
                    }
                }
                sc_car();
            });

            //购物车
            function sc_car(){
                var sc_str = $.cookie('goods');
                if(sc_str){ //如果购物车不为空
                    var sc_obj = eval(sc_str); //和JS中的JSON.parse()
                    var sc_num = 0; //记录所有商品的数量
                    for(var i in sc_obj){
                        sc_num += Number(sc_obj[i].num);
                    }
                    $(".sc_num").html(sc_num);
                }
            }   
}); 