/* Open the Table of Contents by default when the hamburger opens (mobile) */
document$.subscribe(function () {
  var drawer = document.querySelector('input[data-md-toggle="drawer"]');
  var toc    = document.querySelector('input[data-md-toggle="toc"]');

  if (!drawer || !toc) return;

  function showTocPanel() {
    if (drawer.checked && !toc.checked) {
      toc.checked = true;
      // ensure UI switches to the ToC pane:
      var tocLabel = document.querySelector('label[for="__toc"], [data-md-toggle="toc"] + label');
      if (tocLabel) tocLabel.click();
    }
  }

  drawer.addEventListener('change', showTocPanel);
  showTocPanel(); // also handle initial state
});
