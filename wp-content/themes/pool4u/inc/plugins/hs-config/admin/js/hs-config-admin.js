(function( $ ) {
	"use strict";

	$(function() {
		$( ".hs-config .nav-tab-wrapper > a" ).on( "click", function(evt){
			evt.preventDefault();
			$( ".hs-config .nav-tab-wrapper > a" ).removeClass( "nav-tab-active" );
			$(evt.target).addClass( "nav-tab-active" );
			$( ".tab-pane" ).removeClass( "nav-tab-active" );
			var tabReference = evt.target.hash;
			$(tabReference).addClass( "nav-tab-active" );
		});


		$( ".hidefield" ).parents( "tr" ).hide();

		if($( "#mask_admin" ).is( ":checked" ))
			$( ".hidefield.admin_path" ).parents( "tr" ).show();

		if($( "#hide_login" ).is( ":checked" ))
			$( ".hidefield.login_path" ).parents( "tr" ).show();

		if($( "#use_smtp" ).is( ":checked" ))
			$( ".hidefield.smtp" ).parents( "tr" ).show();

		if($( "#authentication" ).is( ":checked" ) && $( "#use_smtp" ).is( ":checked" ))
			$( ".hidefield.auth" ).parents( "tr" ).show();

		$( "#authentication" ).change(function() {
			if(this.checked) {
				$( ".hidefield.auth" ).parents( "tr" ).show();
			}else
				$( ".hidefield.auth" ).parents( "tr" ).hide();
		});

		$( "#use_smtp" ).change(function() {
			if(this.checked) {
				$( ".hidefield.smtp" ).parents( "tr" ).show();
				if($( "#authentication" ).is( ":checked" ))
					$( ".hidefield.auth" ).parents( "tr" ).show();
			}else
				$( ".hidefield.smtp" ).parents( "tr" ).hide();
		});

		$( "#mask_admin" ).change(function() {
			if(this.checked) {
				$( ".hidefield.admin_path" ).parents( "tr" ).show();
			}else{
				$( ".hidefield.admin_path" ).parents( "tr" ).hide();
			}
		});

		$( "#hide_login" ).change(function() {
			if(this.checked) {
				$( ".hidefield.login_path" ).parents( "tr" ).show();
			}else{
				$( ".hidefield.login_path" ).parents( "tr" ).hide();
			}
		});

		var $form = $( "form#hsoptions" ),
			changed = false,
			origForm = $form.serialize();

		$( "form#hsoptions :input" ).on( "change input", function() {
			changed = ($form.serialize() !== origForm);
		});

		$( $form ).on( "submit", function(evt){
			changed = false;
		})

		$(window).on( "beforeunload", function(){
			if(changed){
				var c = confirm();
				if(c){
					return true;
				}
				else
					return false;
			}
		});
	});

})( jQuery );
