    const log1 = document.getElementById('log1');

    //条目数据，其中name为必填项，否则不生成
    const taglist1 = [
        {name:'启动页',w:'1080',h:'1620',add:'',type:'JPG',size:'500k',info:'图片主体范围820x1200，字号、字体不超过3种，字号不小于20',tip:'含安全区'},
        {name:'弹窗',w:'520',h:'520',add:'',type:'png',size:'500k',info:'透明异形弹窗',tip:''},
        {name:'首页banner',w:'1372',h:'420',add:'#000000',type:'JPG',size:'200k',info:'说明说明说明说明',tip:'含拉伸色值'},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
        {name:'弹窗',w:'520',h:'520',add:'',type:'png',size:'500k',info:'透明异形弹窗',tip:''},
        {name:'弹窗',w:'520',h:'520',add:'',type:'png',size:'500k',info:'透明异形弹窗',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
    ];

    const taglist2 = [
        {name:'启动页',w:'1080',h:'1620',add:'',type:'JPG',size:'500k',info:'图片主体范围820x1200，字号、字体不超过3种，字号不小于20',tip:'含安全区'},
        {name:'弹窗',w:'520',h:'520',add:'',type:'png',size:'500k',info:'透明异形弹窗',tip:''},
        {name:'首页banner',w:'1372',h:'420',add:'#000000',type:'JPG',size:'200k',info:'说明说明说明说明',tip:'含拉伸色值'},
        {name:'启动页',w:'1080',h:'1620',add:'',type:'JPG',size:'500k',info:'图片主体范围820x1200，字号、字体不超过3种，字号不小于20',tip:''},
        {name:'弹窗',w:'520',h:'520',add:'',type:'png',size:'500k',info:'透明异形弹窗',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
        {name:'启动页',w:'1080',h:'1620',add:'',type:'JPG',size:'500k',info:'图片主体范围820x1200，字号、字体不超过3种，字号不小于20',tip:''},
        {name:'弹窗',w:'520',h:'520',add:'',type:'png',size:'500k',info:'透明异形弹窗',tip:''},
        {name:'banner',w:'1372',h:'420',add:'',type:'JPG',size:'200k',info:'说明说明说明说明',tip:''},
    ];

    const taglist3 = [
        {name:'测试',w:'100',h:'100',add:'',type:'',size:'',info:'',tip:''},
    ];

    const taglist4 = [
        {name:'测试',w:'100',h:'100',add:'',type:'',size:'',info:'',tip:''},
    ];

    const tagarea = ["大神运营","CC运营","大神活动(测试)","CC活动(测试)"];

    const taglistall = [...taglist1, ...taglist2, ...taglist3, ...taglist4];

    const tL = taglistall.length;
    const t1L = taglist1.length;
    const t2L = taglist2.length;
    const t3L = taglist3.length;
    const t4L = taglist4.length;

    
    

    window.onload = function(){
        adddiv()//定义和注册自定义标签
        //changeTab(0);//默认选中tab1
        addtag();//生成标签
        adddivline();//生成分割线
        tagsMove();//条目加载动画
        tagsviewH();//控制标签展示盒子的高度
        changeTagsArea();//实时触发根据下拉选项显示条目
        sechtags();//通过输入筛选条目

       

    
    }


    //定义和注册自定义标签
    function adddiv(){
        class tagsclose extends HTMLElement {
            constructor() {
            super();
            this.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="100%" height="100%" viewBox="0 0 10 10">
                    <g>
                        <rect x="0" y="0" width="10" height="10" rx="5" fill="#000000" fill-opacity="0.5"/>
                        <g transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,2.575643857138118,-3.075268943922481)">
                            <g>
                                <rect x="7.020312309265137" y="1.5714426040649414" width="0.8081187009811401" height="4.848711967468262" rx="0.40405935049057007" fill="#D8D8D8" fill-opacity="1"/>
                            </g>
                            <g transform="matrix(0,1,-1,0,13.4404296875,-6.256994247436523)">
                                <rect x="9.848711967468262" y="3.5917177200317383" width="0.8081187009811401" height="4.848711967468262" rx="0.40405935049057007" fill="#D8D8D8" fill-opacity="1"/>
                            </g>
                        </g>
                    </g>
                </svg>
            `;
            }
        }
        class info extends HTMLElement {
            constructor() {
            super();
            this.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="100%" height="100%" viewBox="0 0 10 10">
                    <g>
                        <g transform="matrix(-1,-5e-8,5e-8,-1,20,18)">
                            <path d="M15,10L19.33013,14.5L10.669873,14.5L15,10Z" fill="#7B7B7B" fill-opacity="1"/>
                        </g>
                        
                    </g>
                </svg>
            `;
            }
        }
        class tagssearch extends HTMLElement {
            constructor() {
            super();
            this.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="100%" height="100%" viewBox="0 0 24 24">
                    <defs>
                        <clipPath id="master_svg0_24_01708"><rect x="0" y="0" width="24" height="24" rx="0"/></clipPath>
                    </defs>
                    <g clip-path="url(#master_svg0_24_01708)">
                        <g>
                            <ellipse cx="12" cy="11" rx="8.5" ry="8.5" fill-opacity="0" stroke-opacity="1" stroke="var(--mainColor)" fill="none" stroke-width="3"/>
                        </g>
                        <g>
                            <path d="M19.06097,16.93965L19.06066,16.93934Q18.956194,16.83487,18.833355,16.7528Q18.710516,16.67072,18.574025,16.61418Q18.437534,16.55764,18.292635,16.52882Q18.147737,16.5,18,16.5Q17.852263,16.5,17.707364,16.52882Q17.562466,16.55764,17.425975,16.61418Q17.289484,16.67072,17.166645,16.7528Q17.043806,16.83487,16.93934,16.93934Q16.83487,17.043806,16.7528,17.166645Q16.67072,17.289484,16.61418,17.425975Q16.55764,17.562466,16.52882,17.707364Q16.5,17.852263,16.5,18Q16.5,18.147737,16.52882,18.292635Q16.55764,18.437534,16.61418,18.574025Q16.67072,18.710516,16.7528,18.833355Q16.83487,18.956194,16.93934,19.06066L16.93965,19.06097L20.43934,22.56066Q20.54381,22.66513,20.66664,22.7472Q20.78948,22.82928,20.92597,22.88582Q21.06247,22.94236,21.20736,22.97118Q21.35226,23,21.5,23Q21.64774,23,21.79264,22.97118Q21.93753,22.94236,22.07403,22.88582Q22.21052,22.82928,22.33336,22.7472Q22.45619,22.66513,22.56066,22.56066Q22.66513,22.45619,22.7472,22.33336Q22.82928,22.21052,22.88582,22.07403Q22.94236,21.93753,22.97118,21.79263Q23,21.64774,23,21.5Q23,21.35226,22.97118,21.20736Q22.94236,21.06247,22.88582,20.92597Q22.82928,20.78948,22.7472,20.66664Q22.66513,20.54381,22.56066,20.43934L19.06097,16.93965Z" fill-rule="evenodd" fill="var(--mainColor)" fill-opacity="1"/>
                        </g>
                    </g>
                </svg>
            `;
            }
        }
        class tagssearchclose extends HTMLElement {
            constructor() {
            super();
            this.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="100%" height="100%" viewBox="0 0 10 10">
                    <g>
                        <rect x="1" y="1" width="8" height="8" rx="4" fill="var(--boxBod)" fill-opacity="0.5"/>
                        <g transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,2.575643857138118,-3.075268943922481)">
                            <g>
                                <rect x="7.020312309265137" y="1.5714426040649414" width="0.8081187009811401" height="4.848711967468262" rx="0.40405935049057007" fill="var(--boxBak)" fill-opacity="1"/>
                            </g>
                            <g transform="matrix(0,1,-1,0,13.4404296875,-6.256994247436523)">
                                <rect x="9.848711967468262" y="3.5917177200317383" width="0.8081187009811401" height="4.848711967468262" rx="0.40405935049057007" fill="var(--boxBak)" fill-opacity="1"/>
                            </g>
                        </g>
                    </g>
                </svg>
            `;
            }
        }
        class userexcel extends HTMLElement {
            constructor() {
            super();
            this.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0549 10H9C6.79086 10 5 11.7909 5 14V32C5 34.2091 6.79086 36 9 36H31C33.2091 36 35 34.2091 35 32V20C32.8567 20 30.8884 19.2508 29.3427 18H17V12H26.0549C26.0186 11.6717 26 11.338 26 11C26 10.662 26.0186 10.3283 26.0549 10ZM9 12H15V18H7V14C7 12.8954 7.89543 12 9 12ZM7 20H15L15 26H7V20ZM7 28H15V34H9C7.89543 34 7 33.1046 7 32V28ZM17 28V34H31C32.1046 34 33 33.1046 33 32V28H17ZM17 20L17 26H33V20H17Z" fill="var(--mainColor)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35 18C38.866 18 42 14.866 42 11C42 7.13401 38.866 4 35 4C31.134 4 28 7.13401 28 11C28 14.866 31.134 18 35 18ZM35 6C35.5523 6 36 6.44772 36 7V10H39C39.5523 10 40 10.4477 40 11C40 11.5523 39.5523 12 39 12H36V15C36 15.5523 35.5523 16 35 16C34.4477 16 34 15.5523 34 15V12H31C30.4477 12 30 11.5523 30 11C30 10.4477 30.4477 10 31 10L34 10V7C34 6.44772 34.4477 6 35 6Z" fill="var(--mainColor)"/>
                </svg>
            `;
            }
        }

        // 注册自定义标签
        customElements.define('tags-close', tagsclose);
        customElements.define('info-more', info);
        customElements.define('tags-search', tagssearch);
        customElements.define('tags-search-close', tagssearchclose);
        customElements.define('user-excel', userexcel);
    }

    //切换tab
    function changeTab(index) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
        document.getElementsByClassName("content")[index].style.display = "block";
        tablinks[index].className += " active";

        
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



        /*
        var minW = Number(taglistall[0].w)
        var maxW = Number(taglistall[0].w)
        var minH = Number(taglistall[0].h)
        var maxH = Number(taglistall[0].h)
        for (var i = 1; i < tL; i++){
            if ( taglistall[i].h < minH){
                minH = taglistall[i].h
            } else if(taglistall[i].h > maxH) {
                maxH = taglistall[i].h
            }
            
            if ( taglistall[i].h < minH){
                minH = taglistall[i].h
            } else if(taglistall[i].h > maxH) {
                maxH = taglistall[i].h
            }

        }

       log1.innerHTML = '<span style="color:#aeaeae">' + 'minH:' + '</span>' + minH + '<span style="color:#aeaeae"> ; ' + 'maxH:' + '</span>' + maxH
       */
    }
