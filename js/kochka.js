$(document).ready(function(){

	//select2

	$(".js-example-basic-single").select2();

	//slider  1

	$('.main__slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  nextArrow: '<i class="fa fa-angle-right slider_right_control"></i>',
  	  prevArrow: '<i class="fa fa-angle-left slider_left_control"></i>',
	});

	//slider 2

	$('.main__sale_lider_wrapper__ul__li__div_hover__sale_slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: false,
      nextArrow: false
	});

	//slider 3

	$('.main__companies_logo__slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: false,
      nextArrow: false,
      responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 501,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true,
	        vertical: true,
	      }
	    },
	  ]
	});

	//icheck

	  $('input').iCheck({
	    checkboxClass: 'icheckbox_minimal-green',
	    radioClass: 'iradio_minimal-green',
	    increaseArea: '20%' // optional
	  });

	//range-slider
		if ($( "#slider-range" ).length) {
		    $( "#slider-range" ).slider({
		      range: true,
		      min: 0,
		      max: 18000,
		      values: [ 1000, 16000 ],
		      slide: function( event, ui ) {
		        $( "#amount1" ).val( ui.values[ 0 ]);
		        $( "#amount2" ).val( ui.values[ 1 ]);
		      }
		    });
		    $( "#amount1" ).val(  $( "#slider-range" ).slider( "values", 0 ));
		    $( "#amount2" ).val(  $( "#slider-range" ).slider( "values", 1 ));
	}
	      


	//
	$('.main__catalogue__wrap__left_filter__price_slider input').attr('disabled', true);


	// slideToggle

	$('.responsive_main_menu_header .header_goods_navigation__li__hidden_menu').hide();
	$(".arrow-up").hide();

	$( ".responsive_main_menu_header .header_goods_navigation__a" ).click(function(e) {
		e.preventDefault();
	  $(this).siblings('.responsive_main_menu_header .header_goods_navigation__li__hidden_menu').slideToggle( "slow" );
	  $(this).find(".arrow-up, .arrow-down").toggle();
	});


	$('.header_contacts_wrapper__menu_icon button').on('click', function(){
		$('.responsive_main_menu_header').addClass('open_menu');
	})

	$('.responsive_main_menu_header .responsive_main_menu_header__close').on('click', function(){
		$('.responsive_main_menu_header').removeClass('open_menu');
	})

	//lightgallery

	if ($('#imageGallery').length) {
		$('#imageGallery').lightSlider({
	        gallery:true,
	        autoplaySpeed: 5000,
	        autoplay: true,
	        infinite: true,
	        mobileFirst: true,
	        item:1,
	        loop:true,
	        thumbItem:9,
	        slideMargin:0,
	        enableDrag: false,
	        currentPagerPosition:'left',
	        onSliderLoad: function(el) {
	            el.lightGallery({
	                selector: '#imageGallery .lslide'
	            });
	        }   
	    });
	}

	//filter_slideToggle
	
	$('.main__catalogue__criteria__sort__type button').click(function () {
		$('.main__catalogue__wrap__left_filter').slideToggle(1000);
	})

	$('.main__catalogue__wrap__left_filter > div.slide_toogle_filter > h2').click(function() {
		$(this).parent('div').children('div , ul').slideToggle(500);
		if($(this).children('i').hasClass('fa-caret-up_down'))
			$(this).children('i').removeClass('fa-caret-up_down')
		else
			$(this).children('i').addClass('fa-caret-up_down')
	})
	$('.main__catalogue__wrap__left_filter__shoes_color__ul_first > li > div').removeClass('icheckbox_minimal-green');
	$('.main__catalogue__wrap__left_filter__shoes_color__ul_second > li > div').removeClass('icheckbox_minimal-green');


	$('.plus').click(function() {
		$(this).parent('div').children('div.counter').children('span').html(+$(this).parent('div').children('div.counter').children('span').html()+1);
	});
	$('.minus').click(function() {
		if($(this).parent('div').children('div.counter').children('span').html()>0){
		$(this).parent('div').children('div.counter').children('span').html(+$(this).parent('div').children('div.counter').children('span').html()-1);
		}
	});

	$('.main__basket__top_left_block__ul__li__form_block__fitting_size_block > button').click(function() {
		$(this).parent('div').addClass('dspnone');
	})

	$('.main__faq_page__wrapp__faq_info_list_ul > li').click(function () {
		$(this).children('div').slideToggle(1000);
		if($(this).children('img').hasClass('faq_img_rotate'))
			$(this).children('img').removeClass('faq_img_rotate')
		else
			$(this).children('img').addClass('faq_img_rotate')
	})

	$('.data_wrapper_h4__bonus_operation__link').on('click', function(e){
		e.preventDefault();
		$(this).siblings('.data_wrapper_h4__bonus_operation__link__container__ul').slideToggle(200);
	});



	/*    AUTOCOMPLITE                              ///////////////////////////////////////////////////////////*/

    var placeSearch, autocomplete;
    var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };

    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
          (document.getElementById('autocomplete')),
        {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
    };

    function initAutocomplete2() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
          (document.getElementById('autocomplete')),
        {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
    };

    // [START region_fillform]
      function fillInAddress() {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();

      for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    };
    // [END region_fillform]

    if ($('#autocomplete').length>0) {
      initAutocomplete();
    };



        var placeSearch, autocomplete;
          var componentForm = {
              street_number: 'short_name',
              route: 'long_name',
              locality: 'long_name',
              administrative_area_level_1: 'short_name',
              country: 'long_name',
              postal_code: 'short_name'
          };


    // [START region_fillform]
      function fillInAddress() {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();

      for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    };

    $('.popup_entrance_normal .popup_login_normal_left_container form input').on('focus', function(){
    	$(this).siblings('.sec_inpt_span').css('opacity','1');
    });

    $('.popup_call_normal__call_form_block__form__input').focus(function(){
	    $(this).prev().addClass('spn_db');
	  });
	  $('.popup_call_normal__call_form_block__form__input').blur(function(){
	    $(this).prev().removeClass('spn_db');
	  });
	$('.size_for_get_it').click(function () {
	  $('.card_preview_2__modal__text_sizes').slideDown(500);
	 })
	 $('.card_preview_2__modal__text_sizes__head__close_but').click(function () {
	  $('.card_preview_2__modal__text_sizes').slideUp(500);
	 })

	 $('.card_preview_2__modal__size_table__open').click(function(){
	  $('.card_preview_2__modal__size_table').slideDown(500);
	 })
	 $('.card_preview_2__modal__size_table__head__close_but').click(function () {
	  $('.card_preview_2__modal__size_table').slideUp(500);
	 })

	 $('.card_preview_2__modal__in_shop__open').click(function(){
	  $('.card_preview_2__modal__in_shop').slideDown(500);
	 })
	 $('.card_preview_2__modal__in_shop__head__close_but').click(function () {
	  $('.card_preview_2__modal__in_shop').slideUp(500);
	 })
	$('#myModal').on('shown.bs.modal', function() {
	    if ($('#imageGalleryx').length) {
	   $('#imageGalleryx').lightSlider({
	          gallery:true,
	          autoplaySpeed: 5000,
	          autoplay: true,
	          infinite: true,
	          mobileFirst: true,
	          item:1,
	          loop:true,
	          thumbItem:9,
	          slideMargin:0,
	          enableDrag: false,
	          currentPagerPosition:'left',
	          onSliderLoad: function(el) {
	              el.lightGallery({
	                  selector: '#imageGalleryx .lslide'
	              });
	          }   
	      });
	  }
	 })

});