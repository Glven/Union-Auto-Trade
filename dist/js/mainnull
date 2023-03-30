$(document).ready(function () {
    var sections = $('section');
    $('.open-menu').click(function(e){
        e.preventDefault();
        $('.menu').addClass('menu--active');
    });
    $('.menu__close').click(function(e){
        e.preventDefault();
        $('.menu').removeClass('menu--active');
    });
    if(sections.hasClass('vehicle')){
        var tabBtn = $('.vehicle-tabs__item'), tabItem = $('.vehicle-item'), typeCard = $('.types-card'), brandCard = $('.brands-card');
        tabBtn.each(function(i){
            $(tabBtn[i]).click(function(){
                tabBtn.each(function(j){
                    $(this).removeClass('vehicle-tabs__item--active');
                    $(tabItem[j]).fadeOut(200);
                });
                $(tabBtn[i]).addClass('vehicle-tabs__item--active');
                $(tabItem[i]).fadeIn(800);
            });
        });
        showAndHide(typeCard, 6, $('.types__btn'), $('.types__btnHide'));
        showAndHide(brandCard, 6, $('.brands__btn'), $('.brands__btnHide'));
    }
    if(sections.hasClass('deals')){
        var dealItem = $('.deals-card');
        if($(window).width()<768){
            if(dealItem.length>4){
                for(var i=4;i<dealItem.length;i++){
                    $(dealItem[i]).hide();
                }
            }
            showAndHide(dealItem, 4, $('.deals__btn'), $('.deals__btnHide'));
        }
    }
    if(sections.hasClass('features')){
        var featItems = $('.features-item'), featText = $('.features-item__text'), featArrows = $('.features-title__arrow');
        if($(window).width()<768){
            featItems.each(function(i){
                $(featItems[i]).click(function(){
                    if($(featArrows[i]).hasClass('features-title__arrow--active')){
                        $(featText[i]).slideUp(300);
                        $(featArrows[i]).removeClass('features-title__arrow--active');
                    }
                    else{
                        $(featText[i]).slideDown(300);
                        $(featArrows[i]).addClass('features-title__arrow--active');
                    }
                });
            });
        }
    }
    if(sections.hasClass('detail')){
        $('.detail-slider__wrapper').slick({
            dots: false,
            fade: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
        });
        if($(window).width()<768){
            $('.description__btn-more').click(function(){
                $('.description__text').addClass('description__text--active');
                $(this).hide();
                $('.description__btn-moreHide').fadeIn(300);
            });
            $('.description__btn-moreHide').click(function(){
                $('.description__text').removeClass('description__text--active');
                $(this).hide();
                $('.description__btn-more').fadeIn(300);
            });
        }
    }
    if(sections.hasClass('services')){
        $('a[href^="#"]').click(function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $('#services').offset().top}, 800);
        });
    }
    if(sections.hasClass('catalog')){
        $('.select').each(function() {
            const _this = $(this),
                selectOption = _this.find('option'),
                selectOptionLength = selectOption.length,
                selectedOption = selectOption.filter(':selected'),
                duration = 450; // длительность анимации 
        
            _this.hide();
            _this.wrap('<div class="select"></div>');
            $('<div>', {
                class: 'new-select',
                text: _this.children('option:selected').text()
            }).insertAfter(_this);
        
            const selectHead = _this.next('.new-select');
            $('<div>', {
                class: 'new-select__list'
            }).insertAfter(selectHead);
        
            const selectList = selectHead.next('.new-select__list');
            for (let i = 0; i < selectOptionLength; i++) {
                $('<div>', {
                    class: 'new-select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
            }
        
            const selectItem = selectList.find('.new-select__item');
            selectList.slideUp(0);
            selectHead.on('click', function() {
                if ( !$(this).hasClass('on') ) {
                    $(this).addClass('on');
                    selectList.slideDown(duration);
        
                    selectItem.on('click', function() {
                        let chooseItem = $(this).data('value');
        
                        $('select').val(chooseItem).attr('selected', 'selected');
                        selectHead.text( $(this).find('span').text() );
        
                        selectList.slideUp(duration);
                        selectHead.removeClass('on');
                    });
        
                } else {
                    $(this).removeClass('on');
                    selectList.slideUp(duration);
                }
            });
        });

        var styleLabel = $('.filter-style__label');
        styleLabel.each(function(i){
            $(styleLabel[i]).click(function(){
                if($(this).hasClass('filter-style__label--active')){
                    $(this).removeClass('filter-style__label--active');
                }
                else{
                    $(this).addClass('filter-style__label--active');
                }
            });
        });
        var btnSelect = $('.filter-select__label');
        btnSelect.each(function(i){
            $(this).click(function(){
                if($(this).hasClass('filter-select__label--active')){
                    $(this).removeClass('filter-select__label--active');
                }
                else{
                    $(this).addClass('filter-select__label--active');
                }
            });
        });

        if($(window).width()<992){
            $('.catalog__filter-btn').click(function(){
                $('.catalog__sidebar').addClass('catalog__sidebar--active');
            });
            $('.filter__close').click(function(){
                $('.catalog__sidebar').removeClass('catalog__sidebar--active');
            });
        }
    }

    $('#bid').click(function(){
        $('.modal').fadeIn(300);
        $('.modal').css({'display':'flex'});
    });
    $('.modal__close').click(function(){
        $('.modal').fadeOut(300);
    });
    $('.modal').mouseup(function(e){
        e.preventDefault();
        if(e.target == this && e.target != $('.modal__container')){
            $(this).fadeOut(300);
        }
    });

    $('body').keydown(function(e){
        if (e.which == 27){
          $('.modal').fadeOut(300);
        }
    });

    $('.menu').mouseup(function(e){
        e.preventDefault();
        if(e.target == this && e.target != $('.menu__wrapper')){
            $(this).removeClass('menu--active');
        }
    });

    $('.catalog__sidebar').mouseup(function(e){
        e.preventDefault();
        if(e.target == this && e.target != $('.catalog__filter')){
            $(this).removeClass('catalog__sidebar--active');
        }
    });


    function showAndHide(array, number, btn, hideBtn){
        if(array.length>number){
            for(var i = number;i<array.length;i++){
                $(array[i]).hide();
            }
        }
        $(btn).click(function(){
            for(var i = number;i<array.length;i++){
                $(array[i]).fadeIn(300);
            }
            $(btn).hide();
            $(hideBtn).fadeIn(300);
        });
        $(hideBtn).click(function(){
            for(var i = number;i<array.length;i++){
                $(array[i]).fadeOut(300);
            }
            $(hideBtn).hide();
            $(btn).fadeIn(300);
        });
    }

});