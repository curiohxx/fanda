$(function(){
    $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
        var v = data.data.hot_list[0];
        console.log(data);
        var str = 
            `<div class="pic">
                <img src="${v.headimgurl}" alt="">
            </div>
            <p>${v.nickname}</p>
            <p>${v.title}<b></b>${v.like_count}人收听</p>
            <p>“${v.title}”</p>`;
        $('.info').html(str);
    }, 'json');

    $.get("http://ekang.ren/index.php/ask/index/show", {uid:18,page_index:1,page_size:12}, function(data){
        var data = data.data.hot_list;
        var str = '';
        data.forEach(function(v){
            str +=  
               ` <li class="clearfix">
                    <a href="#">
                        <div class="pic">
                            <img src="${v.headimgurl}" alt="">
                        </div>
                        <div class="text">
                                <p class="name"><span>${v.nickname}</span> | <span>${v.intro}</span></p>
                                <p class="other"><span>${v.like_count}个回答</span><span>${v.like_count}人收听</span></p>
                        </div>
                    </a>
                </li>`;
        });
        $('.content').html(str);
    }, 'json');
});