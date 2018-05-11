$(function() {

	// dropdowns
		$('.my-orders__col-select').click(function() {
			$(this).toggleClass('active');
		});
	// end dropdowns

	// manager
		$('.cabinet-manager__toggle').click(function() {
			$(this).closest('.cabinet-manager')
						.find('.cabinet-manager__body')
						.toggleClass('active');
		});
	// end manager

	// tabs
		var $tabs = $('.tabs__link');

	$tabs.on('click', function(e) {
		e.preventDefault();
		var $th = $(this),
			$href = $th.attr('href'),
			$parent = $th.parent();
		$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');
						
		$($href).removeClass('hidden')
				.siblings()
				.addClass('hidden');
	});
	// end tabs
	
	// plus click
		$('.ico-plus').click(function() {
			var $th = $(this);
			if($th.parent().hasClass('form-div-groupe--address')){
				$th.parent().next().removeClass('it-hidden').addClass('it-visible');
				$th.remove();
				return;
			}
			$th.next().removeClass('it-hidden').addClass('it-visible');
			$th.remove();
			
		});
	// end plus click

	// popups
	
		$('.popup-toggle').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',

			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
	// end popups
});


