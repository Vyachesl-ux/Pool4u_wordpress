<?php
/**
 * Template part for displaying post archive in archive.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _headspin
 */

$post_type = get_query_var( "post_type" );
if ( !$post_type ) $post_type = "post";
?>

<article class="<?php echo $post_type; ?>-archive default-archive">

	<header class="archive-header">
		<div class="wrapper wide">
			<h1 class="archive-title">
				<?php
				$pt_object = get_post_type_object( $post_type );
				echo $pt_object->labels->name;
				?>
			</h1>
		</div>
	</header>

	<section class="no-top-padding">
		<div class="wrapper wide">
			<div class="grid archive-grid">
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<div class="col-4">
						<a href="<?php the_permalink(); ?>" class="post-item">
							<div class="featured-image"<?php if ( has_post_thumbnail() ) echo " style='background-image: url(" . get_the_post_thumbnail_url( get_the_ID(), "large" ) . ");'"; ?>></div>
							<h5 class="post-title"><?php the_title(); ?></h5>
							<p class="excerpt"><?php the_excerpt(); ?></p>
						</a>
					</div>
				<?php endwhile; ?>
			</div>

			<?php
			global $wp_query;
			if ( $wp_query->max_num_pages > 1 ) : ?>
				<div class="pagination">
					<?php echo paginate_links(); ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
</article>
