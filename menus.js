import '@finsweet/attributes-cmsfilter/cmsfilter.js';

// Dietary filters functions

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
	let filter = '[data-filter-checkbox="' + button + '"]';
	if (button === 'Vegetarian') {
		let vegan = $('[data-filter-checkbox="Vegan"]').is(':checked');
		if (vegan) {
			$('[data-filter-checkbox="Vegan"]').trigger('click');
		}
	}
	if (button === 'Vegan') {
		let vegetarian = $('[data-filter-checkbox="Vegetarian"]').is(
			':checked'
		);
		if (vegetarian) {
			$('[data-filter-checkbox="Vegetarian"]').trigger('click');
		}
	}
	$(filter).trigger('click');
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
	}
	if (checked) {
		$(button).addClass('filter__btn--active');
	} else if (!checked) {
		$(button).removeClass('filter__btn--active');
	}
	localStorage.setItem(checkbox, checked);
});

$('[fs-cmsfilter-element="clear"]').on('click', function () {
	$('[data-filter-button]').removeClass('filter__btn--active');
});

Object.entries(window.localStorage).forEach(([key, val]) => {
	filter = '[data-filter-checkbox="' + key + '"]';
	if (val === 'true') {
		$(filter).trigger('click');
	}
});

// Location specific pricing functions
// Populate select field
addEventListener('DOMContentLoaded', (event) => {
	$('[data-venue-item]').each(function () {
		let venueName = $(this).find('[data-venue-name]').text();
		let venueTier = $(this).find('[data-venue-tier]').text();
		$('[data-venue-select]').append(
			'<option value="' + venueTier + '">' + venueName + '</option>'
		);
	});

	//check if local storage has item
	let userPriceTier = localStorage.getItem('user-price-tier');
	let userLocation = localStorage.getItem('user-location');

	//select local storage item or select first
	$('[data-price-tier]').css('display', 'none');
	if (userPriceTier) {
		$(`[data-venue-select] option:contains(${userLocation})`).prop(
			'selected',
			true
		);
		$(`[data-price-tier="${userPriceTier}"]`).css(
			'display',
			'inline-block'
		);
	} else {
		let firstItem = $('[data-venue-select]').prop('selectedIndex', 0).val();
		$(`[data-price-tier="${firstItem}"]`).css('display', 'inline-block');
	}

	if (userLocation) {
		$('[data-available-location]').each(function () {
			let availableLocation = $(this).attr('data-available-location');
			if (availableLocation.includes(userLocation)) {
				$(this).css('display', 'block');
			}
		});
	}

	// Change prices if select field changes
	$('[data-venue-select]').on('change', function () {
		let priceTier = this.value;
		let location = this.options[this.selectedIndex].text;

		// add store to local storage
		localStorage.setItem('user-price-tier', priceTier);
		localStorage.setItem('user-location', location);

		$('[data-price-tier]').css('display', 'none');
		$(`[data-price-tier="${priceTier}"]`).css('display', 'inline-block');

		$('[data-available-location]').css('display', 'none');
		$('[data-available-location]').each(function () {
			let availableLocation = $(this).attr('data-available-location');
			if (availableLocation.includes(location)) {
				$(this).css('display', 'block');
			}
		});
	});
});
