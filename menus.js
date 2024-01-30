$("[spice-level='Medium']").each(function () {
  $(this).addClass('is-medium');
  console.log('Just Medium');
});

$("[spice-level='Spicy']").each(function () {
  $(this).addClass('is-spicy');
  console.log('Spicy!');
});