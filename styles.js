(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/css/styles.sass":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/assets/css/styles.sass ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\np, div, h1, h2, h3, h4, h5, h6, ul, ol, a, li, form, input, fieldset {\n  margin: 0;\n  padding: 0;\n  border: none; }\ninput[type=number] {\n  -moz-appearance: textfield; }\ninput[type=number]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n*, *:focus {\n  outline: none; }\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\na:focus {\n  outline: none; }\nbody, html {\n  height: 100%;\n  position: relative; }\nbody {\n  font-size: 10px;\n  min-width: 320px;\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  overflow-x: hidden;\n  width: 100%; }\n.flex-spacer {\n  flex-grow: 1; }\n.space-height {\n  line-height: 1.5;\n  color: #a5a9c2;\n  display: block;\n  text-align: center;\n  font-size: 1.4em; }\n@media (max-width: 1600px) {\n    .space-height {\n      font-size: 0.875vw; } }\n.container {\n  max-width: 120em;\n  padding-right: 2em;\n  padding-left: 2em;\n  margin: 0 auto;\n  width: 100%; }\n@media (max-width: 1600px) {\n    .container {\n      max-width: 75vw; } }\n@media (max-width: 1600px) {\n    .container {\n      padding-right: 1.25vw; } }\n@media (max-width: 1600px) {\n    .container {\n      padding-left: 1.25vw; } }\n.logo {\n  display: inline-block;\n  width: 5em;\n  height: 5em; }\n@media (max-width: 1600px) {\n    .logo {\n      width: 3.125vw; } }\n@media (max-width: 1600px) {\n    .logo {\n      height: 3.125vw; } }\n.logo svg {\n    width: 100%;\n    height: 100%; }\n.authorization .nav-menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.authorization header {\n  background-color: #000736;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 8em; }\n.authorization-body {\n  text-align: center;\n  padding-top: 10em; }\n@media (max-width: 1600px) {\n    .authorization-body {\n      padding-top: 6.25vw; } }\n.authorization-title {\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: #2b3363;\n  display: inline-block;\n  width: 100%;\n  font-size: 4em; }\n@media (max-width: 1600px) {\n    .authorization-title {\n      font-size: 2.5vw; } }\n.authorization-form {\n  margin: auto;\n  text-align: left;\n  width: 38em; }\n@media (max-width: 1600px) {\n    .authorization-form {\n      width: 23.75vw; } }\n.authorization-form label {\n    position: relative;\n    display: block;\n    margin-top: 3em;\n    margin-bottom: 3em; }\n@media (max-width: 1600px) {\n      .authorization-form label {\n        margin-top: 1.875vw; } }\n@media (max-width: 1600px) {\n      .authorization-form label {\n        margin-bottom: 1.875vw; } }\n.authorization-form span {\n    line-height: 1.5;\n    color: #a5a9c2;\n    display: inline-block;\n    font-size: 1.6em;\n    margin-bottom: 0.5em; }\n@media (max-width: 1600px) {\n      .authorization-form span {\n        font-size: 1vw; } }\n@media (max-width: 1600px) {\n      .authorization-form span {\n        margin-bottom: 0.5vw; } }\n.authorization-form input[type=\"text\"], .authorization-form input[type=\"password\"] {\n    font-weight: 400;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    width: 100%;\n    color: #6e728e;\n    background: transparent;\n    border: 1px solid #dfdded;\n    font-size: 1.6em;\n    height: 3.125em;\n    padding-left: 0.75em;\n    padding-right: 0.75em;\n    border-radius: 0.375em; }\n@media (max-width: 1600px) {\n      .authorization-form input[type=\"text\"], .authorization-form input[type=\"password\"] {\n        font-size: 1vw; } }\n@media (max-width: 1600px) {\n      .authorization-form input[type=\"text\"], .authorization-form input[type=\"password\"] {\n        height: 3.125vw; } }\n@media (max-width: 1600px) {\n      .authorization-form input[type=\"text\"], .authorization-form input[type=\"password\"] {\n        padding-left: 0.75vw; } }\n@media (max-width: 1600px) {\n      .authorization-form input[type=\"text\"], .authorization-form input[type=\"password\"] {\n        padding-right: 0.75vw; } }\n@media (max-width: 1600px) {\n      .authorization-form input[type=\"text\"], .authorization-form input[type=\"password\"] {\n        border-radius: 0.375vw; } }\n.authorization-form input[type=\"text\"]::-webkit-input-placeholder, .authorization-form input[type=\"password\"]::-webkit-input-placeholder {\n      color: rgba(165, 169, 194, 0.6); }\n.authorization-form input[type=\"text\"]::-moz-placeholder, .authorization-form input[type=\"password\"]::-moz-placeholder {\n      color: rgba(165, 169, 194, 0.6); }\n.authorization-form input[type=\"text\"]:-moz-placeholder, .authorization-form input[type=\"password\"]:-moz-placeholder {\n      color: rgba(165, 169, 194, 0.6); }\n.authorization-form input[type=\"text\"]:-ms-input-placeholder, .authorization-form input[type=\"password\"]:-ms-input-placeholder {\n      color: rgba(165, 169, 194, 0.6); }\nbody {\n  background-color: #1E2A3F; }\n.nav {\n  background: #18A369;\n  color: #FFFFFF;\n  display: flex;\n  padding-bottom: 1.6em;\n  padding-top: 1.6em;\n  padding-left: 2.4em;\n  padding-right: 2.4em; }\n@media (max-width: 1600px) {\n    .nav {\n      padding-bottom: 1vw; } }\n@media (max-width: 1600px) {\n    .nav {\n      padding-top: 1vw; } }\n@media (max-width: 1600px) {\n    .nav {\n      padding-left: 1.5vw; } }\n@media (max-width: 1600px) {\n    .nav {\n      padding-right: 1.5vw; } }\n.nav-user {\n    display: flex;\n    align-items: center; }\n.nav-user i {\n      display: inline-block;\n      background-color: #ffffff;\n      border-radius: 50%;\n      width: 3.2em;\n      height: 3.2em;\n      margin-right: 1.6em; }\n@media (max-width: 1600px) {\n        .nav-user i {\n          width: 2vw; } }\n@media (max-width: 1600px) {\n        .nav-user i {\n          height: 2vw; } }\n@media (max-width: 1600px) {\n        .nav-user i {\n          margin-right: 1vw; } }\n.nav-user__name {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 1.6;\n      font-size: 1.8em; }\n@media (max-width: 1600px) {\n        .nav-user__name {\n          font-size: 1.125vw; } }\n.nav-bar {\n    display: flex;\n    align-items: center; }\n.nav-bar__item {\n      margin-left: 4.2em; }\n@media (max-width: 1600px) {\n        .nav-bar__item {\n          margin-left: 2.625vw; } }\n.nav-bar__item .title {\n        display: inline-block;\n        margin-right: 0.44444444em;\n        font-size: 1.8em; }\n@media (max-width: 1600px) {\n          .nav-bar__item .title {\n            margin-right: 0.5vw; } }\n@media (max-width: 1600px) {\n          .nav-bar__item .title {\n            font-size: 1.125vw; } }\n.nav-bar__item .description {\n        font-size: 1.8em; }\n@media (max-width: 1600px) {\n          .nav-bar__item .description {\n            font-size: 1.125vw; } }\n.nav-href {\n    color: #ffffff;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1.6;\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    font-size: 1.8em; }\n@media (max-width: 1600px) {\n      .nav-href {\n        font-size: 1.125vw; } }\n.coin-chat {\n  background-color: #1A2435;\n  box-shadow: 0px 0px 10px rgba(63, 68, 92, 0.08);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 8em;\n  width: 30.8em; }\n@media (max-width: 1600px) {\n    .coin-chat {\n      top: 5vw; } }\n@media (max-width: 1600px) {\n    .coin-chat {\n      width: 19.25vw; } }\n.coin-chat__header {\n    background-color: #18A369;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    padding-bottom: 0.8em;\n    padding-top: 0.8em;\n    padding-left: 2.4em;\n    padding-right: 2.4em; }\n@media (max-width: 1600px) {\n      .coin-chat__header {\n        padding-bottom: 0.5vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__header {\n        padding-top: 0.5vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__header {\n        padding-left: 1.5vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__header {\n        padding-right: 1.5vw; } }\n.coin-chat__header .title {\n      font-style: normal;\n      font-weight: 500;\n      line-height: 1.4;\n      color: #ffffff;\n      font-size: 1.4em; }\n@media (max-width: 1600px) {\n        .coin-chat__header .title {\n          font-size: 0.875vw; } }\n.coin-chat__footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    bottom: 1.6em;\n    padding-left: 1.6em;\n    padding-right: 1.6em; }\n@media (max-width: 1600px) {\n      .coin-chat__footer {\n        bottom: 1vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__footer {\n        padding-left: 1vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__footer {\n        padding-right: 1vw; } }\n.coin-chat__footer input[type=\"text\"] {\n      background: #29374E;\n      width: 100%;\n      display: inline-flex;\n      align-items: center;\n      height: 2em;\n      border-radius: 1.35714286em;\n      font-size: 1.4em;\n      padding-left: 0.57142857em;\n      padding-right: 0.57142857em; }\n@media (max-width: 1600px) {\n        .coin-chat__footer input[type=\"text\"] {\n          height: 1.75vw; } }\n@media (max-width: 1600px) {\n        .coin-chat__footer input[type=\"text\"] {\n          border-radius: 1.1875vw; } }\n@media (max-width: 1600px) {\n        .coin-chat__footer input[type=\"text\"] {\n          font-size: 0.875vw; } }\n@media (max-width: 1600px) {\n        .coin-chat__footer input[type=\"text\"] {\n          padding-left: 0.5vw; } }\n@media (max-width: 1600px) {\n        .coin-chat__footer input[type=\"text\"] {\n          padding-right: 0.5vw; } }\n.coin-chat__body {\n    height: 100%;\n    padding-top: 6em;\n    padding-bottom: 6em;\n    padding-left: 1.6em;\n    padding-right: 1.6em; }\n@media (max-width: 1600px) {\n      .coin-chat__body {\n        padding-top: 3.75vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__body {\n        padding-bottom: 3.75vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__body {\n        padding-left: 1vw; } }\n@media (max-width: 1600px) {\n      .coin-chat__body {\n        padding-right: 1vw; } }\n.coin-rates {\n  background-color: #1A2435;\n  box-shadow: 0px 0px 10px rgba(63, 68, 92, 0.08);\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  top: 8em;\n  width: 34em;\n  padding-top: 3em; }\n@media (max-width: 1600px) {\n    .coin-rates {\n      top: 5vw; } }\n@media (max-width: 1600px) {\n    .coin-rates {\n      width: 21.25vw; } }\n@media (max-width: 1600px) {\n    .coin-rates {\n      padding-top: 1.875vw; } }\n.coin-rates__header {\n    background-color: #18A369;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    padding-bottom: 0.8em;\n    padding-top: 0.8em;\n    padding-left: 2.4em;\n    padding-right: 2.4em; }\n@media (max-width: 1600px) {\n      .coin-rates__header {\n        padding-bottom: 0.5vw; } }\n@media (max-width: 1600px) {\n      .coin-rates__header {\n        padding-top: 0.5vw; } }\n@media (max-width: 1600px) {\n      .coin-rates__header {\n        padding-left: 1.5vw; } }\n@media (max-width: 1600px) {\n      .coin-rates__header {\n        padding-right: 1.5vw; } }\n.coin-rates__header .title {\n      font-style: normal;\n      font-weight: 500;\n      line-height: 1.4;\n      color: #ffffff;\n      font-size: 1.4em; }\n@media (max-width: 1600px) {\n        .coin-rates__header .title {\n          font-size: 0.875vw; } }\n.coin-rates__body {\n    padding-bottom: 0.8em;\n    padding-top: 0.8em;\n    padding-left: 2.4em;\n    padding-right: 2.4em; }\n@media (max-width: 1600px) {\n      .coin-rates__body {\n        padding-bottom: 0.5vw; } }\n@media (max-width: 1600px) {\n      .coin-rates__body {\n        padding-top: 0.5vw; } }\n@media (max-width: 1600px) {\n      .coin-rates__body {\n        padding-left: 1.5vw; } }\n@media (max-width: 1600px) {\n      .coin-rates__body {\n        padding-right: 1.5vw; } }\n.coin-rates__body-title, .coin-rates__body-item {\n      display: flex;\n      margin-bottom: 1.2em;\n      margin-top: 1.2em; }\n@media (max-width: 1600px) {\n        .coin-rates__body-title, .coin-rates__body-item {\n          margin-bottom: 0.75vw; } }\n@media (max-width: 1600px) {\n        .coin-rates__body-title, .coin-rates__body-item {\n          margin-top: 0.75vw; } }\n.coin-rates__body-title span, .coin-rates__body-item span {\n        font-style: normal;\n        font-weight: 500;\n        line-height: 1.4;\n        color: #9DACC7;\n        display: inline-block;\n        font-size: 1.4em; }\n@media (max-width: 1600px) {\n          .coin-rates__body-title span, .coin-rates__body-item span {\n            font-size: 0.875vw; } }\n.coin-rates__body-title span.cls-currency, .coin-rates__body-item span.cls-currency {\n          width: 32%;\n          text-transform: uppercase; }\n.coin-rates__body-title span.cls-winRate, .coin-rates__body-item span.cls-winRate {\n          width: 28%; }\n.coin-rates__body-title span.win, .coin-rates__body-item span.win {\n          color: #18A369; }\n.coin-rates__body-title span.lose, .coin-rates__body-item span.lose {\n          color: #EB3349; }\n.message {\n  background-color: #29374E;\n  color: #9DACC7;\n  padding: 0.8em;\n  margin-top: 0.8em;\n  margin-bottom: 0.8em; }\n@media (max-width: 1600px) {\n    .message {\n      padding: 0.5vw; } }\n@media (max-width: 1600px) {\n    .message {\n      margin-top: 0.5vw; } }\n@media (max-width: 1600px) {\n    .message {\n      margin-bottom: 0.5vw; } }\n.message-header {\n    display: flex;\n    align-items: center; }\n.message-header i {\n      display: inline-block;\n      background-color: #ffffff;\n      border-radius: 50%;\n      width: 2.4em;\n      height: 2.4em;\n      margin-right: 0.8em; }\n@media (max-width: 1600px) {\n        .message-header i {\n          width: 1.5vw; } }\n@media (max-width: 1600px) {\n        .message-header i {\n          height: 1.5vw; } }\n@media (max-width: 1600px) {\n        .message-header i {\n          margin-right: 0.5vw; } }\n.message-user {\n    font-size: 1.4em; }\n@media (max-width: 1600px) {\n      .message-user {\n        font-size: 0.875vw; } }\n.message-text {\n    line-height: 1.6;\n    margin-top: 0.57142857em;\n    margin-bottom: 0.71428571em; }\n@media (max-width: 1600px) {\n      .message-text {\n        margin-top: 0.5vw; } }\n@media (max-width: 1600px) {\n      .message-text {\n        margin-bottom: 0.625vw; } }\n.btn-auth {\n  color: #bdc8e7;\n  line-height: 1.63;\n  background-color: #1a206b;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.6em;\n  border-radius: 1.25em;\n  padding-top: 0.375em;\n  padding-bottom: 0.375em;\n  padding-left: 1.25em;\n  padding-right: 1.25em;\n  margin-left: 1.25em; }\n@media (max-width: 1600px) {\n    .btn-auth {\n      font-size: 1vw; } }\n@media (max-width: 1600px) {\n    .btn-auth {\n      border-radius: 1.25vw; } }\n@media (max-width: 1600px) {\n    .btn-auth {\n      padding-top: 0.375vw; } }\n@media (max-width: 1600px) {\n    .btn-auth {\n      padding-bottom: 0.375vw; } }\n@media (max-width: 1600px) {\n    .btn-auth {\n      padding-left: 1.25vw; } }\n@media (max-width: 1600px) {\n    .btn-auth {\n      padding-right: 1.25vw; } }\n@media (max-width: 1600px) {\n    .btn-auth {\n      margin-left: 1.25vw; } }\n.btn-sign, .btn-signout {\n  text-decoration: none;\n  line-height: 1.5;\n  display: block;\n  text-align: center;\n  width: 100%;\n  border: none;\n  border: 1px solid #16c8c5;\n  font-size: 1.6em;\n  border-radius: 1.875em;\n  padding-top: 0.625em;\n  padding-bottom: 0.625em;\n  padding-left: 1.25em;\n  padding-right: 1.25em;\n  margin-top: 0.9375em;\n  margin-bottom: 0.9375em; }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      font-size: 1vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      border-radius: 1.875vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      padding-top: 0.625vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      padding-bottom: 0.625vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      padding-left: 1.25vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      padding-right: 1.25vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      margin-top: 0.9375vw; } }\n@media (max-width: 1600px) {\n    .btn-sign, .btn-signout {\n      margin-bottom: 0.9375vw; } }\n.btn-sign:hover, .btn-signout:hover {\n    color: #fff;\n    background-color: #16c8c5; }\n.btn-sign {\n  background-color: #32d4d1;\n  color: #fff; }\n.btn-signout {\n  color: #16c8c5;\n  background-color: #fff; }\n/* ======  LOADER ====== */\n.loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: .3s; }\n.lds-dual-ring {\n  display: inline-block;\n  width: 80px;\n  height: 80px; }\n.lds-dual-ring:after {\n  content: \" \";\n  display: block;\n  width: 68px;\n  height: 68px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite; }\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL0M6XFxVc2Vyc1xc0JTQvNC40YLRgNC40LlcXHNvdXJjZVxccmVwb3NcXENhc2luby5Gcm9udGVuZC9zcmNcXGFzc2V0c1xcY3NzXFxzdHlsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQTREQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWSxFQUFBO0FBR2Q7RUFDRSwwQkFBMEIsRUFBQTtBQUU1QjtFQUNFLHdCQUF3QjtFQUN4QixTQUFTLEVBQUE7QUFFWDtFQUNFLHdCQUF3QjtFQUN4QixTQUFTLEVBQUE7QUFFWDtFQUNFLGFBQWEsRUFBQTtBQUVmO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFFWjtFQUNFLGFBQWEsRUFBQTtBQUVmO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBQ3BCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUNBdEM4QjtFQXVDOUIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFFYjtFQUNFLFlBQVksRUFBQTtBQUNkO0VBRUUsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBckZoQixnQkFkaUMsRUFBQTtBQWVqQztJQStFSjtNQTlFTSxrQkFaK0IsRUFBQSxFQWdHRTtBQUV2QztFQXhGSSxnQkFkaUM7RUFjakMsa0JBZGlDO0VBY2pDLGlCQWRpQztFQTBHakMsY0FBYztFQUNkLFdBQVcsRUFBQTtBQTVGWDtJQXVGSjtNQXRGTSxlQVorQixFQUFBLEVBdUduQjtBQTVGZDtJQXVGSjtNQXRGTSxxQkFaK0IsRUFBQSxFQXVHbkI7QUE1RmQ7SUF1Rko7TUF0Rk0sb0JBWitCLEVBQUEsRUF1R25CO0FBQ2xCO0VBQ0kscUJBQXFCO0VBL0ZyQixVQWRpQztFQWNqQyxXQWRpQyxFQUFBO0FBZWpDO0lBNkZKO01BNUZNLGNBWitCLEVBQUEsRUE4R2Q7QUFu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QUE7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isb0NBQWtDO0VBQ2xDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtBQUNuQjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBQ2hCO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxxREFBNkM7VUFBN0MsNkNBQTZDLEVBQUE7QUFFakQ7RUFDSTtJQUNJLHVCQUF1QixFQUFBO0VBQzNCO0lBQ0kseUJBQXlCLEVBQUEsRUFBQTtBQUpqQztFQUNJO0lBQ0ksdUJBQXVCLEVBQUE7RUFDM0I7SUFDSSx5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL3N0eWxlcy5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vL01peGlucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT5cbkBmdW5jdGlvbiBzdHJpcC11bml0cygkdmFsdWUpIHtcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpOyB9XG5cbkBmdW5jdGlvbiBlbSgkcGl4ZWxzLCAkZm9udDogMTBweCkge1xuICAkbmV3dmFsOiAkcGl4ZWxzIC8gJGZvbnQ7XG4gIEByZXR1cm4gI3tzdHJpcC11bml0cygkbmV3dmFsKX1lbTsgfVxuXG5AZnVuY3Rpb24gdG92dygkcGl4ZWxzLCAkdnBXaWR0aDogNjQwcHgpIHtcbiAgJG5ld3ZhbDogKCRwaXhlbHMgLyAkdnBXaWR0aCkgKiAxMDA7XG4gIEByZXR1cm4gI3tzdHJpcC11bml0cygkbmV3dmFsKX12dzsgfVxuXG5AZnVuY3Rpb24gdG92aCgkcGl4ZWxzLCAkdnBIZWlnaHQ6IDY0MHB4KSB7XG4gICRuZXd2YWw6ICgkcGl4ZWxzIC8gJHZwSGVpZ2h0KSAqIDEwMDtcbiAgQHJldHVybiAje3N0cmlwLXVuaXRzKCRuZXd2YWwpfXZoOyB9XG5cblxuLy9Gb250cz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0+XG5AbWl4aW4gdndwbHVzZW0oJHNlbGVjdG9yLCAkcGl4ZWxzLCAkZm9udDogMTBweCwgJHZwV2lkdGg6IDE2MDBweCkge1xuICBAaWYoJHZwV2lkdGggPj0gMTYwMHB4KSB7XG4gICAgI3skc2VsZWN0b3J9IDogZW0oJHBpeGVscywgJGZvbnQpO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgICN7JHNlbGVjdG9yfSA6IHRvdncoJHBpeGVscywgJHZwV2lkdGgpOyB9IH0gfVxuXG5cbkBtaXhpbiB2d3BsdXNlbXRiKCRzZWxlY3RvciwgJHBpeGVscywgJGZvbnQ6IDEwcHgsICR2cFdpZHRoOiA3NjhweCkge1xuICAjeyRzZWxlY3Rvcn0gOiB0b3Z3KCRwaXhlbHMsICR2cFdpZHRoKTsgfVxuQG1peGluIHZ3cGx1c2VtbWIoJHNlbGVjdG9yLCAkcGl4ZWxzLCAkZm9udDogMTBweCwgJHZwV2lkdGg6IDY0MHB4KSB7XG4gICN7JHNlbGVjdG9yfSA6IHRvdncoJHBpeGVscywgJHZwV2lkdGgpOyB9XG5cbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7IH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7IH0gfVxuXG5AbWl4aW4gYWJzQ2VudGVyKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XG5cbkBtaXhpbiBwbGFjZWhvbGRlckNvbG9yKCRjb2xvcikge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yOyB9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkY29sb3I7IH1cbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yOyB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yOyB9IH1cblxuLy9Gb250cz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0+XG4kbWFpbi1mb250OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiRmb250LWFsdDogICdCZWJhcyBOZXVlJywgc2VyaWY7XG4vL1JlbW92aW5nIGRlZmF1bHQgcHJvcGVydGllcz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT5cbnAsZGl2LGgxLGgyLGgzLGg0LGg1LGg2LHVsLG9sLGEsbGksZm9ybSwgaW5wdXQsIGZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7IH1cblxuLy9IaWRlIHNwaW4tYnV0dG9ucyBmb3IgaW5wdXQobnVtYmVyKVxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IH1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7IH1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7IH1cblxuKiwgKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG5ib2R5LCBodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbmJvZHkge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZmxleC1zcGFjZXIge1xuICBmbGV4LWdyb3c6IDE7IH1cbi5zcGFjZS1oZWlnaHQge1xuICAkZjogMTQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjYTVhOWMyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSB2d3BsdXNlbSgnZm9udC1zaXplJywgJGYpOyB9XG4vLz09PT09PSBnZW5lcmFsID09PT09PVxuLmNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ21heC13aWR0aCcsIDEyMDApO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXJpZ2h0JywgMjApO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLWxlZnQnLCAyMCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH1cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ3dpZHRoJywgNTApO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdoZWlnaHQnLCA1MCk7XG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9IH1cbi5hdXRob3JpemF0aW9uIHtcbiAgICAubmF2LW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICBoZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNzM2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDhlbTsgfVxuICAgICYtYm9keSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctdG9wJywgMTAwKTsgfVxuICAgICYtdGl0bGUge1xuICAgICAgICAkZjogNDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICBjb2xvcjogIzJiMzM2MztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTsgfVxuICAgICYtZm9ybSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3dpZHRoJywgMzgwKTtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLXRvcCcsIDMwKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdtYXJnaW4tYm90dG9tJywgMzApOyB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgJGY6IDE2O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGNvbG9yOiAjYTVhOWMyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdtYXJnaW4tYm90dG9tJywgOCwgJGYpOyB9XG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgICAgICAgICAgJGY6IDE2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjNmU3MjhlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZGVkO1xuICAgICAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdoZWlnaHQnLCA1MCwgJGYpO1xuICAgICAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDEyLCAkZik7XG4gICAgICAgICAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1yaWdodCcsIDEyLCAkZik7XG4gICAgICAgICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnYm9yZGVyLXJhZGl1cycsIDYsICRmKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyQ29sb3IocmdiYSgxNjUsMTY5LDE5NCwuNikpOyB9IH0gfVxuXG5cbi8vID09PT09PT09IE1BSU4gPT09PT09PT1cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyQTNGOyB9XG4ubmF2IHtcbiAgYmFja2dyb3VuZDogIzE4QTM2OTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLWJvdHRvbScsIDE2KTtcbiAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctdG9wJywgMTYpO1xuICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1sZWZ0JywgMjQpO1xuICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1yaWdodCcsIDI0KTtcbiAgJi11c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3dpZHRoJywgMzIpO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2hlaWdodCcsIDMyKTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdtYXJnaW4tcmlnaHQnLCAxNik7IH1cbiAgICAmX19uYW1lIHtcbiAgICAgICRmOiAxODtcbiAgICAgIC8vIGZvbnQtZmFtaWx5OiBSb2JvdG9cbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTsgfSB9XG4gICYtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJl9faXRlbSB7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLWxlZnQnLCA0Mik7XG4gICAgICAudGl0bGUge1xuICAgICAgICAkZjogMTg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ21hcmdpbi1yaWdodCcsIDgsICRmKTtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTsgfVxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgJGY6IDE4O1xuICAgICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnZm9udC1zaXplJywgJGYpOyB9IH0gfVxuICAmLWhyZWYge1xuICAgICRmOiAxODtcbiAgICAvLyBmb250LWZhbWlseTogUm9ib3RvXG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgnZm9udC1zaXplJywgJGYpOyB9IH1cbi8vID09PT09PT09IENIQVQgPT09PT09PT1cbi5jb2luIHtcbiAgJi1jaGF0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEyNDM1O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDYzLCA2OCwgOTIsIDAuMDgpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgndG9wJywgODApO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCd3aWR0aCcsIDMwOCk7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOEEzNjk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1ib3R0b20nLCA4KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXRvcCcsIDgpO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDI0KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXJpZ2h0JywgMjQpO1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgJGY6IDE0O1xuICAgICAgICAvLyBmb250LWZhbWlseTogUm9ib3RvXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdmb250LXNpemUnLCAkZik7IH0gfVxuICAgICZfX2Zvb3RlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnYm90dG9tJywgMTYpO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDE2KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXJpZ2h0JywgMTYpO1xuICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAkZjogMTQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyOTM3NEU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2hlaWdodCcsIDI4LCAkZik7XG4gICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdib3JkZXItcmFkaXVzJywgMTksICRmKTtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDgsICRmKTtcbiAgICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctcmlnaHQnLCA4LCAkZik7IH0gfVxuICAgICZfX2JvZHkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctdG9wJywgNjApO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctYm90dG9tJywgNjApO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDE2KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXJpZ2h0JywgMTYpOyB9IH1cbiAgJi1yYXRlcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMjQzNTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSg2MywgNjgsIDkyLCAwLjA4KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCd0b3AnLCA4MCk7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ3dpZHRoJywgMzQwKTtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy10b3AnLCAzMCk7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOEEzNjk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1ib3R0b20nLCA4KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXRvcCcsIDgpO1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDI0KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXJpZ2h0JywgMjQpO1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgJGY6IDE0O1xuICAgICAgICAvLyBmb250LWZhbWlseTogUm9ib3RvXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdmb250LXNpemUnLCAkZik7IH0gfVxuICAgICZfX2JvZHkge1xuICAgICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctYm90dG9tJywgOCk7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy10b3AnLCA4KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLWxlZnQnLCAyNCk7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1yaWdodCcsIDI0KTtcbiAgICAgICYtdGl0bGUsICYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdtYXJnaW4tYm90dG9tJywgMTIpO1xuICAgICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLXRvcCcsIDEyKTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgJGY6IDE0O1xuICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiBSb2JvdG9cbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIGNvbG9yOiAjOURBQ0M3O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnZm9udC1zaXplJywgJGYpO1xuICAgICAgICAgICYuY2xzLWN1cnJlbmN5IHtcbiAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgICAgICAgJi5jbHMtd2luUmF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogMjglOyB9XG4gICAgICAgICAgJi53aW4ge1xuICAgICAgICAgICAgY29sb3I6ICMxOEEzNjk7IH1cbiAgICAgICAgICAmLmxvc2Uge1xuICAgICAgICAgICAgY29sb3I6ICNFQjMzNDk7IH0gfSB9IH0gfSB9XG4ubWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTM3NEU7XG4gIGNvbG9yOiAjOURBQ0M3O1xuICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZycsIDgpO1xuICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLXRvcCcsIDgpO1xuICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLWJvdHRvbScsIDgpO1xuICAmLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCd3aWR0aCcsIDI0KTtcbiAgICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdoZWlnaHQnLCAyNCk7XG4gICAgICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLXJpZ2h0JywgOCk7IH0gfVxuICAmLXVzZXIge1xuICAgICRmOiAxNDtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgnZm9udC1zaXplJywgJGYpOyB9XG4gICYtdGV4dCB7XG4gICAgJGY6IDE0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ21hcmdpbi10b3AnLCA4LCAkZik7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ21hcmdpbi1ib3R0b20nLCAxMCwgJGYpOyB9IH1cblxuLy8gPT09PT09PT0gQlVUVE9OUyA9PT09PT09PVxuLmJ0bi1hdXRoIHtcbiAgICAkZjogMTY7XG4gICAgY29sb3I6ICNiZGM4ZTc7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjA2YjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdmb250LXNpemUnLCAkZik7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ2JvcmRlci1yYWRpdXMnLCAyMCwgJGYpO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXRvcCcsIDYsICRmKTtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1ib3R0b20nLCA2LCAkZik7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctbGVmdCcsIDIwLCAkZik7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctcmlnaHQnLCAyMCwgJGYpO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdtYXJnaW4tbGVmdCcsIDIwLCAkZik7IH1cblxuLmJ0bi1zaWduLCAuYnRuLXNpZ25vdXQge1xuICAgICRmOiAxNjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNmM4YzU7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ2ZvbnQtc2l6ZScsICRmKTtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgnYm9yZGVyLXJhZGl1cycsIDMwLCAkZik7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ3BhZGRpbmctdG9wJywgMTAsICRmKTtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgncGFkZGluZy1ib3R0b20nLCAxMCwgJGYpO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLWxlZnQnLCAyMCwgJGYpO1xuICAgIEBpbmNsdWRlIHZ3cGx1c2VtKCdwYWRkaW5nLXJpZ2h0JywgMjAsICRmKTtcbiAgICBAaW5jbHVkZSB2d3BsdXNlbSgnbWFyZ2luLXRvcCcsIDE1LCAkZik7XG4gICAgQGluY2x1ZGUgdndwbHVzZW0oJ21hcmdpbi1ib3R0b20nLCAxNSwgJGYpO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZjOGM1OyB9IH1cbi5idG4tc2lnbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyZDRkMTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuLmJ0bi1zaWdub3V0IHtcbiAgICBjb2xvcjogIzE2YzhjNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cblxuLyogPT09PT09ICBMT0FERVIgPT09PT09ICovXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuM3M7IH1cbi5sZHMtZHVhbC1yaW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4OyB9XG4ubGRzLWR1YWwtcmluZzphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDY4cHg7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIG1hcmdpbjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/normalize.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/normalize.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\r\n\r\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection,\r\nsummary {\r\n    display: block;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-family: sans-serif; /* 1 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n    background: transparent;\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari 5, and Chrome.\r\n */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n    border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\r\n\r\ndfn {\r\n    font-style: italic;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n    background: #ff0;\r\n    color: #000;\r\n}\r\n\r\n/**\r\n * Correct font family set oddly in Safari 5 and Chrome.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n    font-family: monospace, serif;\r\n    font-size: 1em;\r\n}\r\n\r\n/**\r\n * Improve readability of pre-formatted text in all browsers.\r\n */\r\n\r\npre {\r\n    white-space: pre-wrap;\r\n}\r\n\r\n/**\r\n * Set consistent quote types.\r\n */\r\n\r\nq {\r\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\r\n\r\nimg {\r\n    border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\r\n\r\nsvg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n\r\n/* ==========================================================================\r\n   Figures\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari 5.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 2 */\r\n    margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */ /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL25vcm1hbGl6ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEOztBQUUzRDs7K0VBRStFOztBQUUvRTs7RUFFRTs7QUFFRjs7Ozs7Ozs7Ozs7O0lBWUksY0FBYztBQUNsQjs7QUFFQTs7RUFFRTs7QUFFRjs7O0lBR0kscUJBQXFCO0FBQ3pCOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7OytFQUUrRTs7QUFFL0U7Ozs7RUFJRTs7QUFFRjtJQUNJLHVCQUF1QixFQUFFLE1BQU07SUFDL0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyw4QkFBOEIsRUFBRSxNQUFNO0FBQzFDOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksU0FBUztBQUNiOztBQUVBOzsrRUFFK0U7O0FBRS9FOztFQUVFOztBQUVGO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7K0VBRStFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjtJQUVJLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBOztFQUVFOztBQUVGOzs7O0lBSUksNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxTQUFTLEVBQUUsTUFBTTtJQUNqQixVQUFVLEVBQUUsTUFBTTtBQUN0Qjs7QUFFQTs7OztFQUlFOztBQUVGOzs7O0lBSUksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7OztFQUtFOztBQUVGOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7Ozs7SUFJSSwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGVBQWUsRUFBRSxNQUFNO0FBQzNCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDdEI7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLDZCQUE2QixFQUFFLE1BQU0sRUFFSixNQUFNO0lBQ3ZDLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0lBQ0ksY0FBYyxFQUFFLE1BQU07SUFDdEIsbUJBQW1CLEVBQUUsTUFBTTtBQUMvQjs7QUFFQTs7K0VBRStFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBub3JtYWxpemUuY3NzIHYyLjEuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cclxuICovXHJcblxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tYWluLFxyXG5uYXYsXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxyXG4gKi9cclxuXHJcbmF1ZGlvLFxyXG5jYW52YXMsXHJcbnZpZGVvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXHJcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxyXG4gKi9cclxuXHJcbltoaWRkZW5dLFxyXG50ZW1wbGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBCYXNlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cclxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXHJcbiAqICAgIHVzZXIgem9vbS5cclxuICovXHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXHJcbiAqL1xyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIExpbmtzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmFjdGl2ZSxcclxuYTpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBUeXBvZ3JhcGh5XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxyXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMC42N2VtIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5hYmJyW3RpdGxlXSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXHJcbiAqL1xyXG5cclxuYixcclxuc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXHJcbiAqL1xyXG5cclxuZGZuIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cclxuICovXHJcblxyXG5ociB7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxyXG4gKi9cclxuXHJcbm1hcmsge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCBmb250IGZhbWlseSBzZXQgb2RkbHkgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5jb2RlLFxyXG5rYmQsXHJcbnByZSxcclxuc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4vKipcclxuICogSW1wcm92ZSByZWFkYWJpbGl0eSBvZiBwcmUtZm9ybWF0dGVkIHRleHQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnByZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgY29uc2lzdGVudCBxdW90ZSB0eXBlcy5cclxuICovXHJcblxyXG5xIHtcclxuICAgIHF1b3RlczogXCJcXDIwMUNcIiBcIlxcMjAxRFwiIFwiXFwyMDE4XCIgXCJcXDIwMTlcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4vKipcclxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnN1Yixcclxuc3VwIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbnN1cCB7XHJcbiAgICB0b3A6IC0wLjVlbTtcclxufVxyXG5cclxuc3ViIHtcclxuICAgIGJvdHRvbTogLTAuMjVlbTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IG92ZXJmbG93IGRpc3BsYXllZCBvZGRseSBpbiBJRSA5LlxyXG4gKi9cclxuXHJcbnN2Zzpub3QoOnJvb3QpIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEZpZ3VyZXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaSA1LlxyXG4gKi9cclxuXHJcbmZpZ3VyZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEZvcm1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxyXG4gKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LlxyXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXHJcbiAqL1xyXG5cclxubGVnZW5kIHtcclxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBmb250IGZhbWlseSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAyICovXHJcbiAgICBtYXJnaW46IDA7IC8qIDMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cclxuICogdGhlIFVBIHN0eWxlc2hlZXQuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxyXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxyXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgOCsuXHJcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxyXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cclxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxyXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxyXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8qIDEgKi9cclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSxcclxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cclxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxyXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcclxuICogb24gT1MgWC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cclxuICovXHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LlxyXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiAyICovXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFRhYmxlc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cclxuICovXHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/css/normalize.css":
/*!**************************************!*\
  !*** ./src/assets/css/normalize.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./normalize.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/css/styles.sass":
/*!************************************!*\
  !*** ./src/assets/css/styles.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.sass */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/css/styles.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*************************************************************************!*\
  !*** multi ./src/assets/css/styles.sass ./src/assets/css/normalize.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Дмитрий\source\repos\Casino.Frontend\src\assets\css\styles.sass */"./src/assets/css/styles.sass");
module.exports = __webpack_require__(/*! C:\Users\Дмитрий\source\repos\Casino.Frontend\src\assets\css\normalize.css */"./src/assets/css/normalize.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map