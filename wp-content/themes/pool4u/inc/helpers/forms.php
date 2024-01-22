<?php

if ( !function_exists( "headspin_validate_recaptcha" ) ) {

	/**
	 * Validate Google reCaptcha v3
	 *
	 * @param   String  $token  Token
	 *
	 * @return  Boolean         True if validated
	 */
	function headspin_validate_recaptcha( $token ) {
		$secret = get_option( "hs_options" )["recaptcha"];
		$url = "https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$token}";

		$ch = curl_init();
		curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
		curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
		curl_setopt( $ch, CURLOPT_URL, $url );
		curl_setopt( $ch, CURLOPT_TIMEOUT, 80 );

		$response = curl_exec( $ch );
		curl_close( $ch );

		$json = json_decode( $response );

		return ( $json->success && $json->score >= 0.5 ) ? true : array(
			"json" 		=> $json,
			"response"	=> $response,
		);
	}
}



if ( !function_exists( "get_form_settings" ) ) {

	function get_form_settings() {
		if ( empty( $_POST ) || !key_exists( "post-id", $_POST ) || !key_exists( "block-id", $_POST ) ) {
			trigger_error( 'Post ID and Block ID not found in $_POST array', E_USER_WARNING );
			return false;
		}

		$data = headspin_get_field_from_acf_block_in_post( "ALL", $_POST["block-id"], intval( $_POST["post-id"] ) );

		$post = get_post( $_POST["post-id"] );

		$fields = array_map( function( $field ) { return array( "type" => $field ); }, $data["fields"] );

		foreach ( $data as $key => $value ) {
			if ( !preg_match( "/^fields_(\d+)_(\w+)$/", $key, $matches ) ) continue;
			$index = intval( $matches[1] );
			$name = $matches[2];

			$fields[$index][$name] = ( in_array( $value, array( "0", "1" ) ) ) ? boolval( $value ) : $value;
		}

		$fields = array_map( function( $field ) {
			if ( !$field["label"] ) $field["label"] = ucfirst( $field["type"] );
			$field["name"] = slugify( $field["label"] );
			$field["value"] = isset( $_POST[$field["name"]] ) ? $_POST[$field["name"]] : "";
			return $field;
		}, $fields );

		foreach ( $fields as $i => $field ) {
			$fields[$field["name"]] = $field;
			unset($fields[$i]);
		}

		return array(
			"title"			=> $data["title"],
			"recipients"	=> $data["recipients"],
			"fields"		=> $fields,
			"post"			=> !$post ? null : array(
				"ID"		=> $post->ID,
				"title"		=> $post->post_title,
				"url"		=> get_permalink( $post ),
			),
		);
	}
}



if ( !function_exists( "validate_form_fields" ) ) {

	function validate_form_fields( $fields ) {

		$missing_fields = array();

		foreach ( $fields as $field ) {

			// Add field to $missing_fields if input is required and missing
			if ( isset( $field["required"] ) && $field["required"] && !$field["value"] ) {
				$missing_fields[] = array(
					"label"	=> $field["label"],
					"name"	=> $field["name"],
				);
			}

			// Validate email
			if ( $field["type"] == "email" && isset( $field["value"] ) && !empty( $_POST["email"] ) && !filter_var( $_POST["email"], FILTER_VALIDATE_EMAIL ) ) {
				http_response_code( 400 );
				die( json_encode( array(
					"status"	=> 400,
					"message"	=> "invalid_email",
					"errors"	=> array(
						array(
							"label" => $field["label"],
							"name" => $field["name"],
						),
					),
				) ) );
			}
		}

		// Return 400 if any required inputs are missing
		if ( count( $missing_fields ) > 0 ) {
			http_response_code(400);
			die( json_encode( array(
				"status"	=> 400,
				"message"	=> "required_inputs_missing",
				"errors"	=> $missing_fields,
			) ) );
		}
	}
}
