function tab(clase){
		$('.tab'+clase).on({
		mouseenter: function() {
			$(this).addClass('inside');
			$(this).siblings('.tab'+clase).addClass('inside');
			console.log($('.tab'+clase).index());

		},
		mouseleave: function() {
			$(this).removeClass('inside');
			$(this).siblings('.tab'+clase).removeClass('inside');
		}
	});
}
$(document).ready(function(){
	for (var i = 1; i <= 20; i++) {
		tab(i);
	}
})
