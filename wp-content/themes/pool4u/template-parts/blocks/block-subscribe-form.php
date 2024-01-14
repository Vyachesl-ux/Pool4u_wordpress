<?php
/**
 * Block Name: Newsletter
 *
 * Template for rendering the newsletter Gutenberg block
 */
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	$id = "subscribe-" . $block["id"];
	$class = array_key_exists( "className", $block ) ? $block["className"] : "";
	$email_placeholder = get_field('email_placeholder', 'option');
	$button_value = get_field("button_value", "option");
	$labels= get_field('label', 'option');
	$form_tag = is_admin() ? "div" : "form";
?>

<div class="wp-block-headspin-subscribe-form<?php echo $class ?>" id="<?php echo $id; ?>">
	<<?php echo $form_tag; ?> class="subscribe-form" method="POST" action="<?php echo admin_url( "admin-ajax.php" ); ?>">
		<?php if ( !is_admin() ) : ?>
			<div class="hidden">
				<?php wp_nonce_field( "subscribe-form" . $block["id"] ); ?>
				<input type="hidden" name="block" value="<?php echo $block["id"]; ?>">
				<input type="hidden" name="action" value="subscribe">
				<input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response">
			</div>
		<?php endif; ?>
		<div class="subscribe-form__wrapper">
			<input class="email" type="email" name="email" placeholder="<?php echo $email_placeholder ?>">
			<button class="wp-block-button__link submit-btn">
				<?php echo $button_value ?>
				<div class="dots">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
		</button>
		</div>
		<div class="subscribe-form__container">
			<?php foreach($labels as $index => $label) : ?>
				<div class="subscribe-form__container-item">
					<input type="checkbox" id="<?php echo 'interest'.'_' . ($index + 1) ?>" name="interest[]" value="<?php echo $label['label_item'] ?>">
					<label for="<?php echo 'interest'.'_' . ($index + 1)  ?>"><?php echo $label['label_item']?></label>
				</div>
			<?php endforeach ?>
		</div>
		<ul class="messages"></ul>
	</<?php echo $form_tag; ?>>
</div>