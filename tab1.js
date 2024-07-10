    window.onload = function(){
        addtag();//生成标签
        adddivline();//生成分割线
        tagsMove();//条目加载动画
        tagsviewH();//控制标签展示盒子的高度
        changeTagsArea();//实时触发根据下拉选项显示条目
        sechtags();//通过输入筛选条目
    }
//控制标签展示盒子的高度
    function tagsviewH(){
        var tagsContainer = document.getElementById('tags-container');
        var cornerBadge = document.getElementById('tags-container-height');

        cornerBadge.addEventListener('mousedown', function(e) {

            let startY = e.clientY;
            let containerHeight = tagsContainer.offsetHeight;
            
            function resize(e) {
                let diffY = e.clientY - startY;
                tagsContainer.style.height = (containerHeight + diffY )*1.5  + 'px';
            }
            
            function stopResize() {
                document.removeEventListener('mousemove', resize);
                document.removeEventListener('mouseup', stopResize);
            }
            
            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
        });
    }

    
    //生成条目和标签（默认隐藏）
    function addtag(){
            var tagsContainer = document.getElementById('tags-container');
            var tagsList = document.getElementById('tags-list');
            var tagareas = document.getElementById('tags-search-area');

            
            for(var i = 0; i < tL; i++){
                tagsContainer.innerHTML += '<div class="tags" id="tag-' + i + '" style="display:none;"><div class="tags-picks">'+ taglistall[i].name + ' ' + taglistall[i].w + '×' + taglistall[i].h + ' ' + taglistall[i].add + '</div><div id="pick-' + i + '" onclick="tagclose(' + i + ')" class="tags-close"><tags-close></tags-close></div></div>';
                if (taglistall[i].tip == '' & taglistall[i].name != ''){
                    tagsList.innerHTML += '<div class="tag-list" id="tags-list-' + i + '"><div style="width: 14px; height: 14px;"><input type="checkbox" id="tags-chkbox-' + i + '" style="display: none;" onchange="tagpick(' + i + ')"><label for="tags-chkbox-' + i + '" class="tags-chkbox"></label></div><div style="width:100vw;margin-left:4px;" onclick="hotbtninfo(' + i + ')">'+ taglistall[i].name + ' ' + taglistall[i].w + '×' + taglistall[i].h + ' ' + taglistall[i].add + '</div><div id="btn-info-' + i + '" class="btn-info"><input type="checkbox" id="btninfo-' + i + '" class="infos-chkbox" style="display: none;" onchange="infomore(' + i + ')"><label for="btninfo-' + i + '" style="cursor: pointer;"><info-more></info-more></label></div></div><div id="info-' + i + '" class="tag-info-box" style="display: none;"><div>格式：' + taglistall[i].type + '</div><div>大小：' + taglistall[i].size + '</div><div>说明：' + taglistall[i].info + '</div></div>';
                } else if(taglistall[i].name == ''){
                    tagsList.innerHTML += '';
                } else {
                    tagsList.innerHTML += '<div class="tag-list" id="tags-list-' + i + '"><div style="width: 14px; height: 14px;"><input type="checkbox" id="tags-chkbox-' + i + '" style="display: none;" onchange="tagpick(' + i + ')"><label for="tags-chkbox-' + i + '" class="tags-chkbox"></label></div><div style="display:flex; align-items: center; gap:6px; width:100%; margin-left:4px;" onclick="hotbtninfo(' + i + ')"><div style=" overflow:hidden; white-space:nowrap; text-overflow:ellipsis; max-width:68% ">'+ taglistall[i].name + ' ' + taglistall[i].w + '×' + taglistall[i].h  + ' ' + taglistall[i].add + '</div><div class="tag-tips">'+ taglistall[i].tip + '</div></div><div style="min-width:30px;"></div><div id="btn-info-' + i + '" class="btn-info"><input type="checkbox" id="btninfo-' + i + '"  class="infos-chkbox" style="display: none;" onchange="infomore(' + i + ')"><label for="btninfo-' + i + '" style="cursor: pointer;"><info-more></info-more></label></div></div><div id="info-' + i + '" class="tag-info-box" style="display: none;"><div>格式：' + taglistall[i].type + '</div><div>大小：' + taglistall[i].size + '</div><div>说明：' + taglistall[i].info + '</div></div>';
                }
            }
  
            for (var e = 0; e < tagarea.length; e++){
                tagareas.innerHTML += '<option value="'+ tagarea[e] +'">'+ tagarea[e] +'</option>'
            }
        }

    //插入分割线
    function adddivline(){
        var Ldl = '<div style="height:3ch; width:100%; text-align:right;" >------------------------------------</div><div style="white-space:nowrap "> &nbsp;';
        var Rdl = '&nbsp; </div><div style="height:3ch; width:100%;">------------------------------------</div>';

        var tagsList = document.getElementById('tags-list');
        var divLine1 = document.createElement('div')
            divLine1.id = "tags-divline-0"
            divLine1.innerHTML = Ldl + tagarea[0] + Rdl ;
            divLine1.className = "tags-divline";
        tagsList.insertBefore(divLine1,tagsList.children[0]);

        var divLine2 = document.createElement('div')
            divLine2.innerHTML = Ldl + tagarea[1] + Rdl ;
            divLine2.id = "tags-divline-1"
            divLine2.className = "tags-divline";
        tagsList.insertBefore(divLine2,tagsList.children[t1L*2].nextSibling);

        var divLine3 = document.createElement("div")
            divLine3.innerHTML = Ldl + tagarea[2] + Rdl ;
            divLine3.id = "tags-divline-2"
            divLine3.className = "tags-divline";
        tagsList.insertBefore(divLine3,tagsList.children[t1L*2 + t2L*2 + 1].nextSibling);

        var divLine4 = document.createElement("div")
            divLine4.innerHTML = Ldl + tagarea[3] + Rdl ;
            divLine4.id = "tags-divline-3"
            divLine4.className = "tags-divline";
        tagsList.insertBefore(divLine4,tagsList.children[t1L*2 + t2L*2 + t3L*2 + 2].nextSibling);
    }

    //条目加载动画
    function tagsMove(){
        
        for(var i = 0; i < tL; i++){
                var tagsmove = document.getElementById('tags-list-' + i);
                tagsmove.style.transform = 'translateX(-100px)'; 
                tagsmove.style.opacity = '0'; 
            }

        var e = 0; 
        var movetime ;
        function movetags(){
            if (e < tL){
                log1.innerHTML = '已加载条目： ' + e
                var S = tL - e + 1;
                var tagsmoves = document.getElementById('tags-list-' + e);
                tagsmoves.style.transform = 'translateX(0px)'; 
                tagsmoves.style.opacity = '1'; 
                tagsmoves.style.transition = 'transform '+ S/50 +'s ease-in-out,opacity '+ S/50 +'s '; 
                /*tagsmoves.style.transition = 'transform 0.2s ease-in-out,opacity 0.2s '; */
                e++
            } else {
                clearInterval(movetime);
            }
        }
        
        movetime = setInterval(movetags,50);    
    }


    //将条目区域设为点击展开热区
    function hotbtninfo(i){
        var btn = document.getElementById('btninfo-' + i);
        if (btn.checked){
            btn.checked = false;
            infomore(i);
        } else{
            btn.checked = true;
            infomore(i);
        }
    }

    //选中条目则在标签盒子显示标签
    function tagpick(i){
        var tag = document.getElementById('tag-' + i);
        var checkbox = document.getElementById('tags-chkbox-' + i);
        if(checkbox.checked){
            tag.style.display = 'block';
        } else {
            tag.style.display = 'none';
        }
    }

    //同时控制详情显隐和按钮旋转，模拟展开收起条目详情
    function infomore(i){

        var btninfo = document.getElementById('btn-info-' + i);
        var btn = document.getElementById('btninfo-' + i)
        var info = document.getElementById('info-' + i);

        if (btn.checked){
            
            info.style.display = 'block';
            btninfo.style.transform = 'rotate(180deg)';
            btninfo.style.transition = 'transform 0.2s';
            for (var e = 0; e < tL , e != i;e++){
                document.getElementById('btninfo-' + e).checked = false;
                document.getElementById('info-' + e).style.display = 'none';
                document.getElementById('btn-info-' + e).style.transform = 'rotate(0deg)';
                document.getElementById('btn-info-' + e).style.transition = 'transform 0.2s';
            }
        } else{
            info.style.display = 'none';
            btninfo.style.transform = 'rotate(0deg)';
            btninfo.style.transition = 'transform 0.2s';
        }
            
    }

    //点击隐藏当前标签，同时复位同序号条目为未选中，模拟去掉标签
    function tagclose(i){
        document.getElementById('tags-chkbox-' + i).checked = false;
        document.getElementById('tag-' + i).style.display = 'none';
    };

    //点击隐藏全部标签，同时复位全部条目为未选中，模拟清空标签
    function notag(){
  
        for(var i = 0; i < tL; i++){
            document.getElementById('tag-' + i).style.display = 'none';
            document.getElementById('tags-chkbox-' + i).checked = false;
        }
    };

    //按下拉选项控制条目和标签的显隐，模拟全选标签
    function alltag(){
        var area = document.getElementById('tags-search-area');
        var areavalue = area.options[area.selectedIndex].value;

        if (areavalue === "all"){
            for(var i = 0; i < tL; i++){
                document.getElementById('tag-' + i).style.display = 'block';
                document.getElementById('tags-chkbox-' + i).checked = true;
            }
        } else if (areavalue === tagarea[0]){
            for(var i = 0; i < t1L; i++){
                document.getElementById('tag-' + i).style.display = 'block';
                document.getElementById('tags-chkbox-' + i).checked = true;
            }
        } else if (areavalue === tagarea[1]){
            for(var i = t1L; i < t1L + t2L ; i++){
                document.getElementById('tag-' + i).style.display = 'block';
                document.getElementById('tags-chkbox-' + i).checked = true;
            }
        }else if (areavalue === tagarea[2]){
            for(var i = t1L + t2L ; i < t1L + t2L + t3L ; i++){
                document.getElementById('tag-' + i).style.display = 'block';
                document.getElementById('tags-chkbox-' + i).checked = true;
            }
        }else if (areavalue === tagarea[3]){
            for(var i = t1L + t2L + t3L; i < t1L + t2L + t3L + t4L ; i++){
                document.getElementById('tag-' + i).style.display = 'block';
                document.getElementById('tags-chkbox-' + i).checked = true;
            }
        }
    };

    //隐藏全部条目（辅助实现下拉选项筛选）
    function notagslist(){
        for(var i = 0; i < tL; i++){
                document.getElementById('tags-list-' + i).style.display = 'none';
            }
    }

    //隐藏分割线（辅助实现下拉选项筛选）
    function nodivline(){
        document.getElementById('tags-divline-0').style.display = 'none';
        document.getElementById('tags-divline-1').style.display = 'none';
        document.getElementById('tags-divline-2').style.display = 'none';
        document.getElementById('tags-divline-3').style.display = 'none';
    }
    
    //显示分割线（辅助实现下拉选项筛选）
    function alldivline(){
        document.getElementById('tags-divline-0').style.display = 'flex';
        document.getElementById('tags-divline-1').style.display = 'flex';
        document.getElementById('tags-divline-2').style.display = 'flex';
        document.getElementById('tags-divline-3').style.display = 'flex';
    }
    
    //实时触发下拉选项筛选条目
    function changeTagsArea(){
        
        document.getElementById('tags-search-area').addEventListener("click", function(){
            nosearch();
        });
        
    };
    

    //根据所选下拉值筛选条目
    function tagsArea(){
        var area = document.getElementById('tags-search-area');
        var areavalue = area.options[area.selectedIndex].value;

        if (areavalue === "all"){
            for(var i = 0; i < tL; i++){
                document.getElementById('tags-list-' + i).style.display = 'flex';
            }
            alldivline()
        }else if (areavalue === tagarea[0]){
            notagslist()
            nodivline()
            for(var i = 0; i < t1L; i++){
                document.getElementById('tags-list-' + i).style.display = 'flex';
            }
            document.getElementById('tags-divline-0').style.display = 'flex';
        } else if (areavalue === tagarea[1]){
            notagslist()
            nodivline()
            for(var i = t1L; i < t1L + t2L ; i++){
                document.getElementById('tags-list-' + i).style.display = 'flex';
            }
            document.getElementById('tags-divline-1').style.display = 'flex';
        }else if (areavalue === tagarea[2]){
            notagslist()
            nodivline()
            for(var i = t1L + t2L ; i < t1L + t2L + t3L ; i++){
                document.getElementById('tags-list-' + i).style.display = 'flex';
            }
            document.getElementById('tags-divline-2').style.display = 'flex';
        }else if (areavalue === tagarea[3]){
            notagslist()
            nodivline()
            for(var i = t1L + t2L + t3L; i < t1L + t2L + t3L + t4L ; i++){
                document.getElementById('tags-list-' + i).style.display = 'flex';
            }
            document.getElementById('tags-divline-3').style.display = 'flex';
        }
    }

    //输入后字更显眼
    function diffcolor(input){
        if (input.value){
            input.style.color = 'var(--mainColor)';
        } else {
            input.style.color = 'var(--boxBod)';
        }
    }

    //实时触发通过输入搜索条目
    function  sechtags(){
        var input = document.getElementById('tags-search-box');

        input.addEventListener("input", function() {
            if (input.value != ''){
                alldivline()
                for (var i = 0; i < tL; i++){
                    document.getElementById('tags-list-' + i).style.display = "none"; 
                    for (var e = 0; e < tL; e++){
                        var N = taglistall[e].name;
                        var W = taglistall[e].w;
                        var H = taglistall[e].h;
                        var A = taglistall[e].add;
                        if (N.includes(input.value) | W.includes(input.value) | H.includes(input.value) | A.includes(input.value)  ){
                            document.getElementById('tags-list-' + e).style.display = "flex"; 
                        }                        
                    }
                }
                document.getElementById('tags-search-area').value = 'all';
            }else{
                tagsArea();
            }
        });
    } 

    //清空搜索
    function nosearch(){
        document.getElementById('tags-search-box').value = '';
        tagsArea()
    }

    //遍历复选框，读取对应数组的宽高，并发往主线程，以创建画板，后续增加插入安全区、logo组件库等操作
    function addframe(){
        log1.innerHTML = ""
        var gap = 30;
        var x = 0;
        var y = 0;
        var No = []

        for (var i = 0; i < tL; i++){
            if (document.getElementById('tags-chkbox-' + i).checked ){
                No.push(taglistall[i].h);
                log1.innerHTML +=  '<div style="width:100%; max-width:150px;"> <span style="color:#aeaeae">' + ( i + 1) +'. ' + taglistall[i].w + '×' + taglistall[i].h + '</span>'+ '(' + x + ',' + y + ')' + '&nbsp;&nbsp;</div>';
                x = x + Number(taglistall[i].w) + gap;
                if (x > 2560){
                    var maxH = Number(Math.max(...No));
                    x = 0;
                    y +=  maxH + gap;
                    var No = []
                }
                
            }

        }

