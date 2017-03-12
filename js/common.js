$(document).ready(function() {
	//all main var
	//var for hidden menu
	var $nextBut = $('.next_but'),
	$aboutProg = $('.about_prog'),
	$nextButData = $('.next_but_data'),
	$dataUse = $('.data_use'),
	//for take photo
	$mainPhoto = $('.main_photo'),
	//button add photo
	$butAdd = $('.but_add'),
	//for take nick_name
	$nickName = $('.nick_name'),
	//for take surname_name
	$nickSurname = $('.surname_name'),
	//for take aboutself
	$dataComments = $('.dataComments'),
	//main data
	$mainSurname  =  $('.main_surname'),
	$mainName  =  $('.main_name'),
	$mainDataComments  =  $('.main_dataComments');
	
	//height will be 100%
	function heightDetect(){
		$("body .about_prog , .data_use , .main_menu").css("height",$(window).height());
	}
	heightDetect();
	//hidden the first menu
	$nextBut.click(function(){
		$aboutProg.slideUp(520);
	});
	
	//hidden the second menu
	var checkPhoto = 0;
	$nextButData.click(function(){
		var	name = $nickName.val(),
		surname = $nickSurname.val(),
		aboutself = $dataComments.val();
		$mainName.text(name);
		$mainSurname.text(surname);
		$mainDataComments.text(aboutself);
		if (name.length > 3 && surname.length > 3 && aboutself.length > 3 && checkPhoto > 1) {
			$mainName.text("Your name: " + name);
			$mainSurname.text("Your surname: " + surname);
			$mainDataComments.text("About yourself: " +  aboutself);
			$nickName.val(""),
			$nickSurname.val(""),
			$dataComments.val("");
			}else if(checkPhoto < 1){
			alert("Please upload a photo");
			return;
			}else{
			alert("You must enter data more than 4 symbols");
			return;
		}
		$dataUse.slideUp(520);
	});
	
	//take photo of user
	$butAdd.change(function (event){
		var photoOfUser = URL.createObjectURL(event.target.files[0]);
		checkPhoto = photoOfUser.length;
		$mainPhoto.append('<img ' + 'src=' + photoOfUser + '>');
	});
}); 

//reloder
$(window).on('load', function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
