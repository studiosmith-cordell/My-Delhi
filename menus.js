import '@finsweet/attributes-cmsfilter/cmsfilter.js';

$("[spice-level='Medium']").each(function () {
  $(this).addClass('is-medium');
});

$("[spice-level='Spicy']").each(function () {
  $(this).addClass('is-spicy');
});

$('#open-filters').on('click', function () {
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true');
    $('#filters').attr('aria-hidden', 'false');
  }
});

$('#apply-filters').on('click', function () {
  if ($('#open-filters').attr('aria-expanded') === 'true') {
    $('#open-filters').attr('aria-expanded', 'fasle');
    $('#filters').attr('aria-hidden', 'true');
  }
});

$('[data-filter-button]').on('click', function () {
  let button = $(this).attr('data-filter-button');
  let filter = '[data-filter-checkbox="' + button + '"]'
  if (button === 'Vegetarian') {
    let vegan = $('[data-filter-checkbox="Vegan"]').is(':checked');
    if (vegan) {
      $('[data-filter-checkbox="Vegan"]').trigger('click')
    }
  };
  if (button === 'Vegan') {
    let vegetarian = $('[data-filter-checkbox="Vegetarian"]').is(':checked');
    if (vegetarian) {
      $('[data-filter-checkbox="Vegetarian"]').trigger('click')
    }
  };
  $(filter).trigger('click')
});

$('[data-filter-checkbox]').on('change', function () {
  let checked = $(this).is(':checked');
  let checkbox = $(this).attr('data-filter-checkbox');
  let button = '[data-filter-button="' + checkbox + '"]';
  let filterCount = $('[data-filter-checkbox]:checked').length;
  if (filterCount > 0) {
    $('[data-filter-count]').css('display', 'block');
    $('[data-filter-count]').text(filterCount);
  } else {
    $('[data-filter-count]').css('display', 'none');
    $('[data-filter-count]').text(filterCount);
  };  
  if (checked) {
    $(button).addClass('filter__btn--active');
  } else if (!checked) {
    $(button).removeClass('filter__btn--active');
  };
});

$('[fs-cmsfilter-element="clear"]').on('click', function () {
  $('[data-filter-button]').removeClass('filter__btn--active');
});