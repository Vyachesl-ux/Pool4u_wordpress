<?php
/**
 *       .o.           o8o
 *      .888.          `"'
 *     .8"888.        oooo  .oooo.   oooo    ooo
 *    .8' `888.       `888 `P  )88b   `88b..8P'
 *   .88ooo8888.       888  .oP"888     Y888'
 *  .8'     `888.      888 d8(  888   .o8"'88b
 * o88o     o8888o     888 `Y888""8o o88'   888o
 *                     888
 *                 .o. 88P
 *                 `Y888P
 *
 *
 * Create ajax endpoints
 *
 * @package _headspin
 */


/**
 * Handles subscription form submission
 */
function sunphade_form_handler() {

	header( "Content-Type: application/json" );

	if ( $_SERVER["REQUEST_METHOD"] !== "POST" ) {
		http_response_code( 403 );
		die( json_encode( array(
			"status"	=> 403,
			"message"	=> "invalid_method",
		) ) );
	}

	// Sanitize inputs
	filter_var_array( $_POST, FILTER_SANITIZE_STRING );

	// Verify nonce
	if ( empty( $_POST ) || !wp_verify_nonce( $_POST["_wpnonce"], "subscribe-form" . $_POST["block"] ) ) {
		http_response_code( 422 );
		die( json_encode( array(
			"status"	=> 422,
			"message"	=> "general_error",
		) ) );
	}

	if ( !isset( $_POST["g-recaptcha-response"] ) ||
		 empty( $_POST["g-recaptcha-response"] ) ||
		 ( $captcha_results = ah_validate_recaptcha( $_POST["g-recaptcha-response"] ) ) !== true ) {
		http_response_code( 400 );
		die( json_encode( array(
			"status"	=> 400,
			"message"	=> "captcha_failed",
			"results"	=> $captcha_results,
		) ) );
	}

	// Validate email
	if ( !isset( $_POST["email"] ) || empty( $_POST["email"] ) || !filter_var( $_POST["email"], FILTER_VALIDATE_EMAIL ) ) {
		http_response_code( 400 );
		die( json_encode( array(
			"status"	=> 400,
			"message"	=> "invalid_email",
		) ) );
	}

	try {

		$mc_results = mc_add_member( $_POST["email"] );

	} catch( Exception $e ) {

		http_response_code( 500 );
		die( json_encode( array(
			"status"	=> 500,
			"message"	=> "mc_general_error",
		) ) );
	}

	// Check if user already exists
	if ( $mc_results["status"] == 400 && $mc_results["title"] == "Member Exists" ) {
		http_response_code( 400 );
		die( json_encode( array(
			"status"	=> 400,
			"message"	=> "member_exists",
		) ) );
	}

	// Check if user has been deleted before
	if ( $mc_results["status"] == 400 && $mc_results["title"] == "Forgotten Email Not Subscribed" ) {
		http_response_code( 400 );
		die( json_encode( array(
			"status"	=> 400,
			"message"	=> "member_permanently_deleted",
		) ) );
	}

	http_response_code( 200 );
	die( json_encode( array(
		"status"	=> 200,
		"message"	=> "success",
	) ) );
}
add_action( "wp_ajax_nopriv_subscribe", "sunphade_form_handler" );
add_action( "wp_ajax_subscribe", "sunphade_form_handler" );

// include_once dirname(__FILE__) . "/search.php";
