$(function () {
  var markup;
  var hideButton;
  function getMarkup() {
      var mainWrapper = $('#main-wrapper');
      var mainButton = $('[href = "#main"]');
      var portfolioButton = $('[href = "#portfolio"]');
      var aboutButton = $('[href = "#about"]');
      var contactButton = $('[href = "#contact"]');
      markup = {
        mainWrapper: mainWrapper,
        mainButton: mainButton,
        portfolioButton: portfolioButton,
        aboutButton: aboutButton,
        contactButton: contactButton
      }
  }

  function init() {
    mainPage();
    getMarkup();
  }

  function mainPage() {
    $.ajax(
      {
        url: '/main',
        success: onMainPageSuccess
      }
    );
  }

  function onMainPageSuccess(data) {
    markup.mainWrapper.empty();
    markup.mainWrapper.append(data);
    getMarkup();
    markup.mainButton.hide();
    markup.aboutButton.on('click', aboutPage);
    markup.portfolioButton.on('click', portfolioPage);
    markup.contactButton.on('click', contactPage);
  }

  function contactPage() {
    $.ajax(
      {
        url: '/contacts',
        success: onContactPageSuccess
      }
    );
  }

  function onContactPageSuccess(data) {
    markup.mainWrapper.empty();
    markup.mainWrapper.append(data);
    getMarkup();
    markup.contactButton.hide();
    markup.mainButton.on('click', mainPage);
    markup.aboutButton.on('click', aboutPage);
    markup.portfolioButton.on('click', portfolioPage);
  }

  function portfolioPage() {
    $.ajax(
      {
        url: '/portfolio',
        success: onPortfolioPageSuccess
      }
    );
  }

  function onPortfolioPageSuccess(data) {
    markup.mainWrapper.empty();
    markup.mainWrapper.append(data);
    getMarkup();
    markup.portfolioButton.hide();
    markup.mainButton.on('click', mainPage);
    markup.aboutButton.on('click', aboutPage);
    markup.contactButton.on('click', contactPage);
  }

  function aboutPage(e) {
    console.log('click About');
    $.ajax(
      {
        url: '/about',
        success: onAboutPageSuccess
      }
    );
  }

  function onAboutPageSuccess(data) {
    markup.mainWrapper.empty();
    markup.mainWrapper.append(data);
    getMarkup();
    markup.aboutButton.hide();
    markup.mainButton.on('click', mainPage);
    markup.portfolioButton.on('click', portfolioPage);
    markup.contactButton.on('click', contactPage);
  }

  init();

});
