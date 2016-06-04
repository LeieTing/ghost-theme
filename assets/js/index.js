"use strict";

/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        $('#google-form').activateGoogleForm();

        $('#postnummer').activatePostalLookup();
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },
            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = $this.attr('data-offset') ? $this.attr('data-offset') : false,
                position = $this.attr('data-position') ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({ scrollTop: $(this.hash).offset().top + toMove }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({ scrollTop: $(this.hash).offset().top }, allOptions.speed);
            }
        });
    };

    $.fn.activateGoogleForm = function () {
        var url = this.attr('action');
        var resultMessage = this.data('result-message');

        this.one('submit', function (e) {
            var $form = $(this);
            var values = $form.serialize();
            var submitURL = url;
            submitURL += '?';
            submitURL += values;
            submitURL += '&submit=Submit';
            e.target.action = submitURL;

            var $resultMessage = $('<div>', {
                class: 'has-text-centered',
                text: resultMessage
            }).hide();

            $form.before($resultMessage).fadeOut(function () {
                $resultMessage.fadeIn();
            });
        });
    };

    $.fn.activatePostalLookup = function () {
        var $elem = $(this);
        var $poststed = $($elem.data('place-element'));
        var $loadingElement = $($elem.data('place-loading-element'));

        $elem.on('change input', function (e) {
            var postnummer = e.target.value;

            if (postnummer.length < 4) {
                return $poststed.val('');
            }

            $loadingElement.toggleClass('is-loading', true);

            $.getJSON('https://api.bring.com/shippingguide/api/postalCode.json', {
                clientUrl: window.location.href,
                pnr: postnummer
            }).done(function (response) {
                var value = '';
                if (response.valid) {
                    value = response.result;
                }
                $poststed.val(value);
            }).always(function () {
                $loadingElement.toggleClass('is-loading', false);
            });
        });
    };
})(jQuery);