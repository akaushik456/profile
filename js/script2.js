$( document ).ready(function() {
    // link section
    $('.java a').click(function(event) {
        console.log(event)
    $('.active').animate({
        width:'toggle'},2000);
    
    });

    // tabbing oprations
    $( ".user-portfolio-list a" ).click(function (event){
        $(`.tabs`).removeClass('active');
        event.preventDefault()
        $(".user-portfolio-list a").removeClass('active')
        $(event.target).addClass('active')
        var id = $(event.target).attr('href');
        $(`.tabs${id}`).addClass('active')
    });

});