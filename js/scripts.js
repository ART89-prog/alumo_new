$(() => {

    $("form").submit(function() {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = document.getElementById(formID);
        $.ajax({
            type: "POST",
            url: 'send.php',
            data: new FormData(formNm),
            processData: false,
            contentType: false,
            beforeSend: function() {
                // Вывод текста в процессе отправки
                //$(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function(data) {
                // Вывод текста результата отправки
                //$(formNm).html('<p style="text-align:center">' + data + '</p>');

                $.fancybox.close();
                $.fancybox.open({
                    src: "#callback_modal2",
                    type: 'inline',
                    touch: false
                })
                $(formNm).trigger('reset');

            },
            error: function(jqXHR, text, error) {
                // Вывод текста ошибки отправки
                //$(formNm).html(error);
            }
        });
        return false;
    });



    $('input[type=tel]').inputmask('+7 (999) 999-99-99')
    $('body').on('click', '.modal_link', function(e) {
        e.preventDefault()
        $.fancybox.close(true)
        $.fancybox.open({
            src: $(this).data('content'),
            type: 'inline',
            touch: false
        })
    })
    $('.profile_item-subtitle1').click(function(event) {
        event.preventDefault();
        $('.profile_item-list1').toggleClass('active');
    });
    $('.profile_item-subtitle2').click(function(event) {
        event.preventDefault();
        $('.profile_item-list2').toggleClass('active');
    });
    $('.profile_item-subtitle3').click(function(event) {
        event.preventDefault();
        $('.profile_item-list3').toggleClass('active');
    });
    $('.profile_item-subtitle4').click(function(event) {
        event.preventDefault();
        $('.profile_item-list4').toggleClass('active');
    });
    $('.profile_item-subtitle5').click(function(event) {
        event.preventDefault();
        $('.profile_item-list5').toggleClass('active');
    });
    $('.profile_item-subtitle6').click(function(event) {
        event.preventDefault();
        $('.profile_item-list6').toggleClass('active');
    });
    $('.profile_item-subtitle7').click(function(event) {
        event.preventDefault();
        $('.profile_item-list7').toggleClass('active');
    });
    let slider = $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [{
            breakpoint: 1023,
            settings: {
                dots: true
            }
        }, ]
    });
    $('.profile_text-link a').click(function(event) {
        event.preventDefault();
        $('.profile_items2').toggleClass('active');
        $('.profile_text-link').toggleClass('delete');
    });
    $('body').on('click', '.slider-nav img', function(e) {
        let list = $(this).parent();
        let all_parent = $(this).parent().parent().find(".slider-thumbs");
        let index = all_parent.index(list);
        $(this).parent().parent().prev().slick('slickGoTo', index, false);
    });
    $('.more-btn a.toggle').click(function(e) {
        e.preventDefault()
        if ($(this).hasClass("active")) {
        	$( ".works_item" ).each(function( index ) {
        		if(index > 3)
        		{
        			$(this).hide();
        		}
    		});    	
        	$(this).text("Смотреть больше работ").removeClass("active");
        } else {
        	$(".works_item").show();
    	    $(this).text("Скрыть примеры работ").addClass("active");
    	    $(".slider-for").slick('unslick');
    	    let slider = $('.slider-for').slick({
    	        slidesToShow: 1,
    	        slidesToScroll: 1,
    	        arrows: true,
    	        fade: true,
    	        responsive: [{
    	            breakpoint: 1023,
    	            settings: {
    	                dots: true
    	            }
    	        }, ]
    	    });
        }
        
    });
})