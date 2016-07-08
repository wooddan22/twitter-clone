$('document').ready(function () {

    $('.tweet-compose').focus(function () {
        $(this).addClass('composing');      
    })

    $('.tweet-compose').blur(function(){
        if (!$(this).val()) {
        $(this).removeClass('composing');
        }
    })

    $('.new-tweet').focus(function() {
        $('#tweet-controls').css('display', 'block');
    })

       $('.new-tweet').blur(function() {
        if (!$(this).val()) {
        $('#tweet-controls').css('display', 'none');
        }
    })

    $('.new-tweet').keyup(function () {
        if ($('.new-tweet').val().length < 130) {
            $('#char-count').text((140 - $('.new-tweet').val().length));
            $('#char-count').css('color', 'black');
            $('#tweet-submit').prop("disabled", false);
        }
        else if ($('.new-tweet').val().length < 140) {
            $('#char-count').css('color', 'red');
            $('#char-count').text((140 - $('.new-tweet').val().length));
            $('#tweet-submit').prop("disabled", false);
        }
        else {
            $('#char-count').text(0);
            $('#tweet-submit').prop("disabled", true);
        }
    })

    $('#tweet-submit').click(function () {
        if ($('.new-tweet').val()) {
            $('#stream').prepend(
                '<div class="tweet">' +
                '<div class="content">' +
                '<img class="avatar" src="./img/john.cena.jpeg" />' +
                '<strong class="fullname">John Cena</strong>' +
                '<span class="username"> @john.cena</span>' +
                '<p class="tweet-text">' +
                $('.new-tweet').val() +
                '</p>' +
                '<div class="tweet-actions">' +
                '<ul>' +
                '<li><span class="icon action-reply"></span> Reply </li>' +
                '<li><span class="icon action-retweet"></span> Retweet</li>' +
                '<li><span class="icon action-favorite"></span>Favorite</li>' +
                '<li><span class="icon action-more"></span>More</li>' +
                '</ul>' +
                '</div>' +
                '<div class="stats">' +
                '<div class="retweets">' +
                '<p class="num-retweets">30</p>' +
                '<p>RETWEETS</p>' +
                '</div>' +
                '<div class="favorites">' +
                '<p class="num-favorites">6</p>' +
                '<p>FAVORITES</p>' +
                '</div>' +
                '<div class="users-interact">' +
                '<div>' +
                '<img src="img/alagoon.jpg" />' +
                '<img src="img/vklimenko.jpg" />' +
                '</div>' +
                '</div>' +
                '<div class="time">1:04 PM - 19 Sep 13</div>' +
                '</div>' +
                '<div class="reply">' +
                '<img class="avatar" src="img/alagoon.jpg" />' +
                '<textarea class="tweet-compose tweeted" placeholder="Reply to @mybff"/></textarea>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
            $('#tweet-controls').css('display', 'none');
            $('.new-tweet').removeClass('composing');
            $('#char-count').text("140");
            $('.new-tweet').val('');
            

        }

    })
});
