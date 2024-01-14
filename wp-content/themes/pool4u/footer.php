<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _headspin
 */

?>

	</div><!-- #content -->
	<div class="wp-block-headspin-section is-style-yellow pre-footer">
		<div class="wrapper">
			<div class="pre-footer__wrapper">

				<div class="pre-footer__wrapper-galery">
					<?php
					if($images = get_field("pre-footer-image", "option"));
					foreach($images as $image):
					?>
						<img class="pre-footer__wrapper-galery--elem" src="<?php echo $image["url"] ?>" alt="pre-footer-collage">
						<?php endforeach ?>
				</div>
				<div class="pre-footer__wrapper-content">
					<?php if($title = get_field("pre-footer-title", "option")): ?>
						<h2 class="pre-footer__wrapper-item"><?php echo $title ?></h2>
					<?php endif ?>
					<?php if($button = get_field("pre-footer-button", "option")): ?>
						<div class="wp-block-buttons">
							<a class="wp-block-button__link" href="<?php  echo $button["url"]?>">
								<?php echo $button["title"] ?>
							</a>
						</div>
					<?php endif ?>
				</div>
			</div>

		</div>
	</div>
	<footer id="colophon" class="site-footer">
		<div class="main-footer">
			<div class="main-footer__item">
				<a href="<?php echo home_url("/"); ?>" class="footer-logo" aria-label="Go to home page">
					<?php
					$logo_path = get_template_directory() . "/assets/images/footer-logo.svg";
					if (file_exists($logo_path)) echo file_get_contents($logo_path);
					?>
				</a>
			</div>
			<?php
				wp_nav_menu( array(
					'theme_location' => 'footer-menu',
					'container' => false, 
					'menu_class' => 'footer-menu', 
				) );
			?>

		</div>
		<div class="footer-footer">
			<span>© <?php echo date("Y"); hsl_e(" Sunphade"); ?></span>
			<div class="footer-footer__wrapp">
				<a class="privacy" href="/privacy-policy"><?php echo hsl_e("Privacy policy") ?></a>
				<div><?php echo hsl_e("Made by Headspin") ?></div>
			</div>

		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
