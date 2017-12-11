$(document).ready(function(){


var ogClass = true;

var sectionNum = 1;
var titleName = " ";
var screenWidth = $(window).width();
//alert(screenWidth);

$('#l1').click(function(){
	sectionNum = 1;
	$('.map').css('background-image', 'url(employment.png)');
	$('.links').css('font-weight', 'normal');
	$(this).css('font-weight', 'bold');
	$('.links').css('color', '#683F28');
	$(this).css('color', '#332109');
	$('.links').css('opacity', '0.8');
	$(this).css('opacity', '1');

	$('.stat').css('display', 'none');
	$('.stat-sec-1').fadeIn(600);
	titleName = "TOTAL POSTAL EMPLOYMENT";
	$('.section-name').text(titleName);

	$('.finger').addClass('finger-new');
	$('.finger').removeClass('finger');
});

$('#l2').click(function(){
	sectionNum = 2;
	$('.map').css('background-image', 'url(compensation.png)');
	$('.links').css('font-weight', 'normal');
	$(this).css('font-weight', 'bold');
	$('.links').css('color', '#683F28');
	$(this).css('color', '#332109');
	$('.links').css('opacity', '0.8');
	$(this).css('opacity', '1');

	$('.stat').css('display', 'none');
	$('.stat-sec-2').fadeIn(600);
	titleName = "MEDIAN COMPENSATION $";
	$('.section-name').text(titleName);
});

$('#l3').click(function(){
	sectionNum = 3;
	$('.map').css('background-image', 'url(population.png)');
	$('.links').css('font-weight', 'normal');
	$(this).css('font-weight', 'bold');
	$('.links').css('color', '#683F28');
	$(this).css('color', '#332109');
	$('.links').css('opacity', '0.8');
	$(this).css('opacity', '1');

	$('.stat').css('display', 'none');
	$('.stat-sec-3').fadeIn(600);
	titleName = "1800 POPULATION";
	$('.section-name').text(titleName);
});

$('.sort').click(function(){
	var statClass = $('.stat').attr('class');
	console.log(statClass);
	var theNum = statClass.charAt(9);
	var check = statClass.charAt(10);
	console.log(theNum);

	if(sectionNum == 1) {
		if(check == '-') {
			$('.stat').css('display','none');
			$('.stat-sec-1').fadeIn(600);
		}
		else {
			$('.stat').css('display','none');
			$('.stat-sec-1-sorted').fadeIn(600);
		}
	}
	else if(sectionNum == 2) {
		if(check == '-') {
			$('.stat').css('display','none');
			$('.stat-sec-2').fadeIn(600);
		}
		else {
			$('.stat').css('display','none');
			$('.stat-sec-2-sorted').fadeIn(600);
		}
	}
	else if(sectionNum == 3) {
		if(check == '-') {
			$('.stat').css('display','none');
			$('.stat-sec-3').fadeIn(600);
		}
		else {
			$('.stat').css('display','none');
			$('.stat-sec-3-sorted').fadeIn(600);
		}
	}
});


});