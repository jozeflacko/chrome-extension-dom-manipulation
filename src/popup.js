/*
 on open of extension execute this script
*/
chrome.tabs.query({active: true}, function(tabs) {
	// get current tab on which extension was opened
	var tab = tabs[0];  
	
	// access button in the extension DOM, I could set here some condition
	document.getElementById('button_to_click').style.border = '1px solid red'; 
});

/* 
 on open of extension script in this file will run
 - I will add event to a button. When I click on a button I will tun JS in the current tab 
*/
document.getElementById('button_to_click').addEventListener('click', 
	function(){
		chrome.tabs.query({active: true}, function(tabs) {
			
				// get current tab
				var tab = tabs[0];

				// string script which I would like to run in the DOM of the tab
				var script_i_run_in_tab = 'document.getElementById("clickToCreateTicket").click();';	
				
				var script_i_run_when_tab_script_will_finish = function(response){ 
					console.log(response);
					console.log('done'); 
				};
			
				// execute script in the tab and then in the extension
				chrome.tabs.executeScript(
					tab.id, 
					{
					code: script_i_run_in_tab
					}, 
					script_i_run_when_tab_script_will_finish
				);
		});
	}
);

