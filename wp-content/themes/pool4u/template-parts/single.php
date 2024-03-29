<?php
/**
 * Template part for displaying post content in single.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _headspin
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<div class="wrapper">
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="fit-image-container">
					<?php the_post_thumbnail(); ?>
				</div>
			<?php endif; ?>
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</div>
	</header><!-- .entry-header -->

	<section class="entry-content gutenberg-content no-top-padding">
		<div class="wrapper">
			<?php
			the_content();
			?>
		</div>
	</section><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
