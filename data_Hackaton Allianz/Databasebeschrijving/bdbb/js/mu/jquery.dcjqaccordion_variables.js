/**
*/
$(document).ready(function($){
					
					$('#accordion-2').dcAccordion({
						eventType: 'click',
						autoClose: true,
						saveState: true,
						disableLink: true,
						speed: 'slow',
						classActive: 'test',
						showCount: false
					});
					
});