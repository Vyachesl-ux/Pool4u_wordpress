<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _headspin
 */
$current_url = get_permalink();
?>

<input type="hidden" name="return_url" value="<?php echo esc_url($current_url); ?>">

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="entry-header">
			
				<?php if ( has_post_thumbnail() ) : ?>
					<div class="fit-image-container">
						<?php the_post_thumbnail(); ?>
					</div>
				<?php endif; ?>
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			
		</header><!-- .entry-header -->
	<section class="entry-content gutenberg-content">
		<div class="wrapper">
			<?php
			the_content();
			?>
		</div>
	</section><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
