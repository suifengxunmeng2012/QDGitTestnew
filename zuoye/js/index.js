window.onload = function(){
			var oUL ;
			var oLIs;
			var oNavlist;
			var currentIndex=0;
			oUL = document.getElementsByClassName("img-list")[0];
			oLIs = oUL.children;
			oNavlist = document.getElementsByClassName("banner-nav-list")[0].children;
			banner();
			function banner(){
		   	currentIndex = 1;
		   	var newli = oLIs[0].cloneNode(true);
		   	oUL.appendChild(newli);	
		   }
		   function banner(){
				currentIndex = 1;
				var newli = oLIs[0].cloneNode(true);
				oUL.appendChild(newli);
				oUL.style.width = oLIs.length*oLIs[0].offsetWidth + "px";
				
				for(var i=0; i<oNavlist.length; i++){
					oNavlist[i].index = i;
					oNavlist[i].onmouseover = function(){
						clearInterval(timer);
						
						startMove(oUL, {left: this.index * -oLIs[0].offsetWidth});
						for(var i=0;i<oNavlist.length;i++){
							oNavlist[i].className = "";
						}
						this.className = "active";
						currentIndex = this.index+1;
						
						timer = setInterval(move,3000);
					}
				}
				
				var timer = setInterval(move,3000);
				
				function move(){
					if(currentIndex == 6){
						oUL.style.left = 0;
						currentIndex = 0;
					}
					//oUL.style.left = oUL.offsetLeft - 810 + "px";
					startMove(oUL, {left: currentIndex * -oLIs[1].offsetWidth});
					for(var i=0;i<oNavlist.length;i++){
						oNavlist[i].className = "";
					}
					oNavlist[currentIndex>=6 ? 0 : currentIndex].className = "active";
					currentIndex++;
				}
				
			}
		
		}