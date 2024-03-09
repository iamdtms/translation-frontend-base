$(function () {
  $('.hu').click(function () {
    $('body').localize({ lng: 'hu' });
    return false;
  });

  $('.en').click(function () {
    $('body').localize({ lng: 'en' });
    return false;
  });

  $(".language a").click(function () {
    $(".language a").each(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    });
    $(this).addClass('active');
    return false;
  });

  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      debug: true,
      fallbackLng: 'en',
      lng: 'en',
      resources: {
        en: {
          translation: {
            header: {
              h1Title: "H1 title 🇬🇧",
              h1Text: "H1 text 🇬🇧"
            },
            footer: {
              text: "Select language: ",
              huTitle: "Hungarian",
              huLogo: "🇭🇺",
              enTitle: "English",
              enLogo: "🇬🇧"
            },
          }
        },
        hu: {
          translation: {
            header: {
              h1Title: "H1 cím 🇭🇺",
              h1Text: "H1 szöveg 🇭🇺"
            },
            footer: {
              text: "Nyelv választása: ",
              huTitle: "Magyar",
              huLogo: "🇭🇺",
              enTitle: "Angol",
              enLogo: "🇬🇧"
            },
          }
        }
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      $('body').localize();
    });
});
