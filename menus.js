import '@finsweet/attributes-cmsfilter/cmsfilter.js';

$("[spice-level='Medium']").each(function () {
  $(this).addClass('is-medium');
  console.log('Just Medium');
});

$("[spice-level='Spicy']").each(function () {
  $(this).addClass('is-spicy');
  console.log('Spicy!');
});

$('#open-filters').on('click', function () {
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true');
    $('#filters').attr('aria-hidden', 'false');
  } else {
    $(this).attr('aria-expanded', 'false');
    $('#filters').attr('aria-hidden', 'true');
  }
});