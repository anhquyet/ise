// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js
//= require popper
//= require bootstrap
//= require ckeditor/init
//= require noty/lib/noty.js
//= require sweetalert2/dist/sweetalert2.all.min.js
//= require js-cookie/src/js.cookie.js
//= require i18n
//= require i18n.js
//= require i18n/translations
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function noty(text, type) {
  return new Noty({
    type: type,
    text: text,
    layout: `bottomLeft`,
    theme: `relax`,
    timeout: 3000
  }).show();
};

function swal(title, text, type, showCancelButton, confirmButtonText, cancelButtonText) {
  return Swal.fire({
    title: title,
    text: text,
    type: type,
    showCancelButton: showCancelButton,
    confirmButtonColor: `#28a745`,
    cancelButtonColor: `#dc3545`,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText
  });
};
