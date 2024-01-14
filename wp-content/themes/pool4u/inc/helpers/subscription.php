<?php
/**
* 
* ░██████╗██╗░░░██╗██████╗░░██████╗░█████╗░██████╗░██╗██████╗░████████╗██╗░█████╗░███╗░░██╗
* ██╔════╝██║░░░██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
* ╚█████╗░██║░░░██║██████╦╝╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░██║██║░░██║██╔██╗██║
* ░╚═══██╗██║░░░██║██╔══██╗░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░██║██║░░██║██║╚████║
* ██████╔╝╚██████╔╝██████╦╝██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░██║╚█████╔╝██║░╚███║
* ╚═════╝░░╚═════╝░╚═════╝░╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝
*
*
*  Helper functions for handling subscription functionality
*/


if ( !function_exists( "mc_add_member" ) ) {

	/**
	 * Add a new member to the MailChimp list
	 *
	 * @param   String  $email  Email address
	 * @param   String  $name   (Optional) Name of subscriber
	 *
	 * @return  Array           Results
	 */
	
	function mc_add_member( $email, $name = "" ) {
		require_once get_template_directory() . "/inc/mailchimp.php";
		$selectedInterests = isset($_POST["interest"]) ? explode(",", $_POST["interest"][0]) : [];

		$api_key = get_field("action", "options");
		$mailChimp = new DrewM\MailChimp\MailChimp( $api_key );
		error_log(print_r($selectedInterests, true));

		$member_data = array(
			'email_address' => $email,
			'status' => 'subscribed',
			'tags' => $selectedInterests,
		);
	
		if ( isset( $name ) && !empty( $name ) && is_string( $name ) ) {
			$member_data["merge_fields"] = array(
				"NAME" => $name,
			);
		}
	
		$list_id = "84ef1f380b";
	
		$results = $mailChimp->post( "lists/{$list_id}/members", $member_data );
	
		return $results;
	}
	
	
}