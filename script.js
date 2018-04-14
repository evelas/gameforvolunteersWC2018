var question = ['В каком году прошел первый ЧМ?', 'Как называется стадион, на котором проходил первый ЧМ?','В какой стране проходил первый ЧМ?','Сколько стран приняло участие в первом ЧМ?','Какая страна забила первый гол на первом ЧМ?','Кто стал первым ЧМ?','С каким счётом закончился финальный матч первого ЧМ?','Сколько стран становились ЧМ за всю историю?','Какая страна имеет наибольшее число титулов ЧМ?','Кто является действующим ЧМ?','Сколько видов персональных наград вручается по результатам ЧМ?','Кто стал лучшим бомбардиром ЧМ-1994?','Кто является единственным 3-х кратным чемпионом мира?','В каком году прошёл первый Кубок конфедераций под эгидой FIFA?','Назовите лучшего бомбардира в истории ЧМ?'];
var answer = ['1907','1910','1927','1930',  'Сентенарио','Мулинаро','Маракана','Челси', 'Англия','Бразилия','Уругвай','США', '10','13','16','19', 'Франция','Германия','Бразилия','Уругвай', 'Бразилия','Уругвай','США','Италия', '1:0','2:1 ','3:2','4:2', '3 ','5','8',' 10', 'Бразилия','Уругвай','Италия','Англия', 'Англия','Бразилия','Аргентина','Германия', '3','6','9','12', 'Олег Саленко','Пеле','Диего Марадона','Лев Яшин ', 'Олег Саленко','Пеле','Диего Марадона','Лионель Месси  ', '1997','1999','2001','2003', 'Мирослав Клозе','Лев Яшин','Пеле ','Лионель Месси '];
var key = [3, 0, 2, 1, 0, 1, 3, 2, 0, 3, 1, 0, 1, 0, 0];

var level = 0;

var name = 'name';	
var username = readCookie(name);

 

function show(level) {

	$('.question').text( question[level] );
	$('label[for=answer1]').text( answer[level*4+0] );
	$('label[for=answer2]').text( answer[level*4+1] );
	$('label[for=answer3]').text( answer[level*4+2] );
	$('label[for=answer4]').text( answer[level*4+3] );

}

var resultConst = [];		
show(level);
var tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','#FF0');

$('.answer-input').click(function(){

	$("#timer_inp").text(60);

	if( $('input[name=answer]:checked').val() == key[level] )
	{
		level++;
		show(level);
	}
	else{gameOwer()}
	
	$('input').prop('checked', false);
	$(tr.css('background','#fff'));
	$(tr.removeClass('result'));
	$(tr[tr.length - (level + 1)]).css('background','#FF0');
	$(tr[tr.length - (level)]).css('color','red');
	$(tr[tr.length - (level)]).addClass('result');
	$('label').css('text-decoration', 'none');

	if (level == 1)
	{
		  
        $("ul#blabla").prepend('<div id="raz" style="position:absolute; width: 393px; height: 326px; top: 13%; left: 15%;transition: 1s;"><img width="70px" class="wow tada" src="images/foot2.png">');
        $("ul#blabla img").eq(0).animate({'width':'370'},2000);
	}
	if (level == 2  )
	{
		 

		 $('#blabla img').css({"transition": "all .2s ease-in-out", "animation": "pulse 1100ms ease-out alternate"});
 

         
	}
	if (level == 3)
	{
		 

		 $('#blabla img').css({"transition": "none", "animation": "none"});
 

         
	}
	if (level == 4)
	{
		 

		 $('#blabla img').css({"transition": "all .2s ease-in-out", "animation": "pulse 1100ms ease-out alternate"});
 

         
	}
	if (level == 5)
	{
		 

		 $('#blabla img').css({"transition": "none", "animation": "none"});
 

         
	}

		if (level == 6)
	{
		 

		 $('#blabla img').css({"transition": "all .2s ease-in-out", "animation": "pulse 1100ms ease-out alternate"});
 

         
	}

	 
		if (level == 7)
	{
		 

		 $('#blabla img').css({"transition": "none", "animation": "none"});
 

         
	}
			if (level == 8)
	{
		 

		 $('#blabla img').css({"transition": "all .2s ease-in-out", "animation": "pulse 1100ms ease-out alternate"});
 

         
	}
		if (level == 9)
	{
		 

		 $('#blabla img').css({"animation": "slide 1s ease 3.5s forwards"});
 

         
	}

	if (level == 15) 
	{
		 resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	}
})

Math.rand = function(min, max){
	return Math.round(Math.random() * (max-min) + min);
}

var inputLabel = document.getElementsByTagName('label');
$('.round50').click(function(){
var inputAnswer = document.getElementsByName('answer');
var exp = [];	
var count = 0;
	while(count < 2) {
		var index = Math.rand(0,3);
		if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] ) 
		{
			$(inputLabel[index]).css('text-decoration', 'line-through');
			count++;
			exp.push(index);
		}
	}
		$(this).off('click');
		$(this).css('opacity', '0.5');
})
	 

$('.round').click(function(){
		
		$(inputLabel[Math.rand(0,3)]).css('text-decoration', 'underline'),
		$(this).off('click');
		$(this).css('opacity', '0.5');
		
})
$('.round10').click(function(){
		
		$(inputLabel[Math.rand(0,4)]).css({"text-decoration": "overline"}),
		$(this).off('click');
		$(this).css('opacity', '0.5');
		
})
var result = $('.result'); 
$('.roundEnd').click(function(){

	end();

})


function end() {

	$('.end').css('display', 'block');
	$('#download').css('display', 'none');


	if (tr.hasClass('result')) 
	{
		var tdResult = $("tr.result").children();
		var tdText = tdResult[1].textContent;	
		$('.showResult').text('Вы проиграли'   );
		
		
 
	}
}

function gameOwer() {

	$('.end').css('display', 'block');

	if (tr.hasClass('resultConst')) 
	{
		var tdResult1 = $(resultConst[resultConst.length - 1]).children();
		var tdText1 = tdResult1[1].textContent;
		$('.showResult').text(''  );
		
		$('#gameover').css('display', 'none');
	 $('#gameover2').css('display', 'none');



	 $('.end').css('background', 'url(reward2.png) no-repeat');
		$('.end').css('background-size', '100%');
	}
	else {
		 $('#download').css('display', 'none');
	}
}

function timer(){

	 var objTimer=document.getElementById('timer_inp');
	 objTimer.innerHTML--;
  	
  	 if(objTimer.innerHTML==5)
	 	{
	 	$('#timer_inp').css('background', 'red');
	 	}
	 if(objTimer.innerHTML==0)
		{
	 	setTimeout(function(){},1000);
	 	gameOwer();
		}
	 else{setTimeout(timer,1000)}

}

$('form').submit(function(e){ 

		e.preventDefault()
	
});

$('#start').click(function(){

	 
		$('.start').css('display', 'none');
		setTimeout(timer,1000);
	 	

	var value = $('#user').val();

	createCookie(name, value, 1);

});

function createCookie(name, value, days) {
    if (days) 
    {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else 
    {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
        	var value = c.substring(nameEQ.length,c.length);
            return value.split(",");
        }
    }
    return null;
}
