var main = $('.main');
var time = 0;
var score = 0;
var speed = 5;
var main1 = document.getElementsByClassName('main')[0];
$('.start').click(function(){
	$('.start').hide();
	$('.box').slideDown('fast');
	$('.scorebox').slideDown('fast');
	$('.score').html(score);
	move();
})
function addDom(){
	var index = Math.floor(Math.random() * 4);
	var div1 = $('<div></div>');
	for(var i = 0;i < 4;i ++){
		var div2 = $('<div></div>').attr('class','false');
		div1.append(div2);
	}
    if (main.children().length == 0) {
        main.append(div1);
    } else {
        div1.insertBefore(main.children()[0]);
    }
    $(div1.children()[index]).css('background','black').attr('class','click').css('cursor','pointer').click(function(){
    	$(this).css('background','#ccc').removeClass('click');
    	score++;
    	$('.score').html(score);
    });
}
function move(){
	time = setInterval(function(){
		var step = parseInt(main.css('top')) + speed;
        main.css('top', step + 'px');
        if (parseInt(main.css('top')) >= 0) {
            addDom();
            main.css({
                'top': -201 + 'px',
            });
        }
		var len = main.children().length;
		if(len == 6){
			for(var i = 0;i < 4;i ++){
				if(main.children()[len - 1].children[i].className == 'click'){
					over();
				}
			}
			$(main.children()[len - 1]).remove();
		}
	},20);
}
function stop(){
	clearInterval(time);
}
function click(){
	$('.main').on('click',function(event){
		if(event.target.className == 'false'){
			over();
		}
		if(score % 10 == 0){
			speed++;
		}
	})
}
function over(){
	alert('game over！最高得分' + score);
		main.html('').css('top','0px');
		clearInterval(time);
		$('.box').slideUp('fast');
		$('.start').show();
		$('.scorebox').slideUp();
		score = 0;
		speed = 5;
}
click();