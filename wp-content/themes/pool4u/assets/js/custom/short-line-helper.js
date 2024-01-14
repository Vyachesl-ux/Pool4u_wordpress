/**
 * GEt image text block if its comes right after separator
 */

    const imageText = document.querySelectorAll('.wp-block-headspin-image-text');
    document.addEventListener('DOMContentLoaded', function() {
        if (document.documentElement.clientWidth >= 1345 && imageText) {
                    imageText.forEach(block => {
                      const previousElement = block.previousElementSibling;
                      if (previousElement && previousElement.className === 'wp-block-headspin-short-line is-style-center') {
                        previousElement.firstChild.style.cssText = "margin-left: calc(55% - 200px)";
                      }
                    });
            }
          });
	


  