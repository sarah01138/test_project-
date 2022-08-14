$("form").submit( function(e){
	e.stopPropagation();
	if(e.preventDefault){
	   e.preventDefault();
	}else{
	   e.returnValue = false;
	}
 });
 $('.button.not-finished').click(function(){
	$(this).addClass('finished');
   stepanim();
	
 });
 
 
 function stepanim(){
 
 $('.button.finished').click(function(){
   var $btn = $(this),
	   $step = $btn.parents('.modal-body'),
	   stepIndex = $step.index(),
	   $pag = $('.modal-header span').eq(stepIndex);
	   //alert( stepIndex);
	   
   if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2|| stepIndex === 2 ) { step1($step, $pag); }
   else { step3($step, $pag); }
   
 });
 }
 function step1($step, $pag){
  console.log('step1');
   // animate the step out
   $step.addClass('animate-out');
   $step.prev().find('.button').removeClass('finished');
   // animate the step in
   setTimeout(function(){
	 $step.removeClass('animate-out is-showing')
		  .next().addClass('animate-in');
	 $pag.removeClass('is-active')
		   .next().addClass('is-active');
   }, 600);
   
   // after the animation, adjust the classes
   setTimeout(function(){
	 $step.next().removeClass('animate-in')
		   .addClass('is-showing');
	 
   }, 1200);
 }
 
 
 function step3($step, $pag){
 //alert('step 3');
 
   // animate the step out
   $step.parents('.modal-wrapper').addClass('animate-up');
 
   setTimeout(function()
	{
  $('.modal-wrapper').removeClass('animate-up')
				   .find('.modal-body')
				   .first().addClass('is-showing').siblings().removeClass('is-showing').parents('.modal-wrapper').addClass('animate-in');
 
   $('.modal-header span').first().addClass('is-active')
						   .siblings().removeClass('is-active');
  //$(this).hide();
 },1200);
   setTimeout(function()
			  
	{
	 
	  $('.modal-wrapper').removeClass('animate-in');
	 
   },1800);
   
 }
 