<?php
/**
 * Block Name: Contact form
 *
 * Template for rendering the contact form Gutenberg block
 */

$id = "contact-form-" . $block["id"];
$class = array_key_exists( "className", $block ) ? $block["className"] : "";

$fields = get_field( "fields" );

if ( count( $fields ) > 0 && end( $fields )["acf_fc_layout"] === "textarea" ) $class .= " textarea-last";

$form_tag = ( is_admin() ) ? "div" : "form";
$lang = str_replace( "ru-RU", "ru", hsl_current_language() );

?>

<<?php echo $form_tag; ?> method="post" action="<?php echo admin_url("admin-ajax.php")?>" class="contact-form-block block <?php echo $class; ?>" id="<?php echo $id; ?>">
	<div class="form-inputs">
		<?php if ( have_rows( "fields" ) ) while ( have_rows( "fields" ) ) : the_row();
			$layout = get_row_layout();
			$label = get_sub_field( "label" );
			if ( !$label ) {
				if ( $layout === "email" ) {
					$label = hsl__( "Email" );
				}
			}


			$name = slugify( $label );
			$field_id = "{$block["id"]}_{$name}";

			get_template_part( "template-parts/form-input", $layout, array(
				"label"		=> $label,
				"name"		=> $name,
				"field_id"	=> $field_id,
			) );
		endwhile;

		$button_text = get_field( "button_text_{$lang}");
		if ( !$button_text ) $button_text = hsl__( "надіслати" );
		?>
		<div class="field-group submit">
			<button class="btn submit-btn">
				<?php echo $button_text; ?>
				<div class="dots">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</button>
		</div>
	</div>


	<div class="hidden">
		<?php wp_nonce_field("contact_form", "nonce"); ?><!-- WP Nonce -->
		<input type="hidden" name="action" value="contact_form">
		<input type="hidden" name="post-id" value=<?php echo is_post_type_archive( "faq" ) ? "faq-archive" : get_the_ID(); ?>>
		<input type="hidden" name="block-id" value=<?php echo $block["id"]; ?>>
		<input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response">
	</div>

	<ul class="messages"></ul>

	<script>
		if(!window.formStrings) window.formStrings = {
			"general_error":			"<?php hsl_e("Something went wrong. Reload the page and try again. If the problem persists, please contact us."); ?>",
			"success":					"<?php echo ( $success_message = get_field( "success_message") ) ? $success_message : hsl__("Your message has been sent. You will hear from us soon.");?>",
			"invalid_email":			"<?php hsl_e("Email is invalid.");?>",
			"required_inputs_missing":	"<?php hsl_e("is required."); ?>",
			"captcha_failed":			"<?php hsl_e("Captcha failed. Try sending the form again. If the problem persists, please contact us.");?>",
			"failed_to_send":			"<?php hsl_e("The form could not be sent. If the problem persists, please contact us.");?>",
			"and":						"<?php hsl_e("and"); ?>",
		};
	</script>
</<?php echo $form_tag; ?>>
