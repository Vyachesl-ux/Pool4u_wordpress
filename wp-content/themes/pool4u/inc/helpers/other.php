<?php
/**
 *   .oooooo.       .   oooo
 *  d8P'  `Y8b    .o8   `888
 * 888      888 .o888oo  888 .oo.    .ooooo.  oooo d8b
 * 888      888   888    888P"Y88b  d88' `88b `888""8P
 * 888      888   888    888   888  888ooo888  888
 * `88b    d88'   888 .  888   888  888    .o  888
 *  `Y8bood8P'    "888" o888o o888o `Y8bod8P' d888b
 *
 *
 * Various helper functions
 */


if ( !function_exists( "hs_excerpt" ) ) {

	/**
	 * Generate an excerpt of the provided text. Shortens it and adds a suffix.
	 *
	 * @param   string   $text    The string to shorten
	 * @param   integer  $chars   The maximum number of charachters to return (not including suffix)
	 * @param   string   $suffix  Suffix to be added behind the shortened string
	 * @param   boolean  $echo    Echo excerpt in stead of return
	 *
	 * @return  string            The shortened string
	 */
	function hs_excerpt( $text, $chars = 250, $suffix = "&hellip;", $echo = true ) {
		// Strip away all HTML tags
		$text = wp_strip_all_tags( $text );

		// Return escaped text if already below maximum character limit
		if ( strlen( $text ) <= $chars ) {
			if ( $echo ) echo $text;
			return $text;
		}

		$words = explode( " ", $text );

		while ( strlen( implode( " ", $words ) ) > $chars ) {
			array_pop( $words );
		}

		$excerpt = wp_strip_all_tags( implode( " ", $words ) . $suffix );

		if ( $echo ) echo $excerpt;
		return $excerpt;
	}
}


if ( !function_exists( "encode_email" ) ) {

	/**
	 * Encodes the email to prevent to be picked up by spam bots
	 *
	 * @param  String  $email  Email input
	 * @param  String  $class  Additional class for the a element
	 * @param  String  $text   The text to be displayed in the a tag.
	 *                         Defaults to email address
	 * @return String          Encoded email code in javascript
	 */
	function encode_email( $email, $class = false, $text = false, $echo = true ) {
		$nonce = uniqid();
		$ascii = "";

		for ($i = 0; $i < strlen( $email ); $i++) {
			$ascii .= "&#". ord( $email[$i] ) .";";
		}

		$text = ($text === false) ? $ascii : $text;

		$asciiArray = str_split('<a href="mailto:'.$ascii.'">'.$text.'</a>');
		$output = "";
		foreach ($asciiArray as $char):
			$output .= "'". $char ."'+";
		endforeach;
		$trim = rtrim($output, "+");
		$output = '<a class="'.$class.'" id="'.$nonce.'"></a><script>var email = document.getElementById("'.$nonce.'");email.href = "mailto:" + decodeHtmlNumeric("'.$ascii.'");email.innerHTML = "'.$text.'";</script><noscript>[Turn on JavaScript to see the email address]</noscript>';

		if ( !$echo ) return $output;

		echo $output;
	}
}

if ( !function_exists( "ah_validate_recaptcha" ) ) {

	/**
	 * Validate Google reCaptcha v3
	 *
	 * @param   String  $token  Token
	 *
	 * @return  Boolean         True if validated
	 */
	function ah_validate_recaptcha( $token ) {
		$secret = "6LcJSiUoAAAAALxkvip3eCKfKXMAnJezsj33ZTaH";
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

if ( !function_exists( "conlog" ) ) {

	/**
	 * Log PHP variables to the browser console
	 *
	 * @param  Mixed  One or more parameters to log
	 */
	function conlog() {
		$args = array_map( function( $arg ) {
			return json_encode( $arg );
		}, func_get_args() );

		$json_args = implode( ",", $args );
		echo "<script>console.log({$json_args});</script>";
	}
}

if ( !function_exists( "hs_first_block_is" ) ) {
	/**
	 * First Block Is
	 * ----------
	 * Loops through a post's blocks and checks if the first block is of a specific block type.
	 *
	 * @param   string $block_type    The block type.
	 * @param   string $block_style   The block style (for example "preamble" on a paragraph block) (optional).
	 * @param   false  $post_id       The post ID (optional). Defaults to the current post.
	 *
	 * @return  bool
	 */
	function hs_first_block_is( $block_type, $block_style = false, $post_id = false ) {
		if( !$post_id ) $post = get_post( get_the_ID() );
		else $post = get_post( $post_id );

		if( $post && has_blocks( $post->post_content ) ) {
			$blocks = parse_blocks( $post->post_content );

			if( $blocks[0] && hs_block_is( $blocks[0], $block_type, $block_style ) //if the first block exists and matches block style and name //if the block has no block_style given or if the block has the class of the given block_style
			) {
				return true;
			} else {
				return false;
			}
		}

		return false;
	}
}

if ( !function_exists( "hs_block_is" ) ) {
	/**
	 * Block Is
	 * ----------
	 * Checks if a block is of a specific block type.
	 *
	 * @param   array $block         The block to check.
	 * @param   string $block_type   The block type to check for.
	 * @param   string $block_style  The block style (for example "preamble" on a paragraph block) (optional).
	 *
	 * @return  bool
	 */
	function hs_block_is( $block, $block_type, $block_style = false ) {

		if( $block['blockName'] === $block_type && //if the block is the block_type
		( !$block_style || ( $block['attrs'] && $block['attrs']['className'] === "is-style-" . $block_style ) ) //if the block has no block_style given or if the block has the class of the given block_style
		) {
			return true;
		} else {
			return false;
		}
	}
}


function headspin_get_field_from_acf_block_in_post ( string $field, string $block_id, int $post_id ) {
	$post = get_post($post_id);

	if (!$post) return false;

	$blocks = parse_blocks($post->post_content);

	if ( str_contains( $block_id, "block_" ) ) $block_id = str_replace( "block_", "", $block_id );

	$is_inner_block = false;

	foreach ( $blocks as $block ) {
		if ( count($block['innerBlocks']) > 0 ) {
			foreach ( $block['innerBlocks'] as $inner_block ) {
				if ($inner_block['attrs']['id'] !== $block_id) continue;
				else $is_inner_block = $inner_block;
			}
		}

		if ( $block['attrs']['id'] !== $block_id && !$is_inner_block ) continue;
		if( $is_inner_block ) $block = $is_inner_block;

		if ( $field === "ALL" ) return $block["attrs"]["data"];
		return $block['attrs']['data'][$field];
	}

	return false;
}
