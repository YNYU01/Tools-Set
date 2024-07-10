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
        changeTab(0);//默认选中tab1
        
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

   
