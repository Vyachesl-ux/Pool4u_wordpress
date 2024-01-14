<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package _headspin
 */

get_header();

$search_query = get_search_query();

$args = array(
	's' => $search_query,
	'posts_per_page' => -1
);

$my_query = new WP_Query( $args );
$types = array();

if( $my_query->have_posts() ) {
	while ($my_query->have_posts()) : $my_query->the_post();
		if ( empty( $types[$post->post_type] ) ){
			$types[$post->post_type] = 0;
		}
		$types[$post->post_type]++;
	endwhile;
}
global $wp_query;
?>
	<section class="searchinfo">
		<div class="subsearch">
			<div class="wrapper">

				<h2><?php  echo $my_query->found_posts; ?> treff på:</h2>
				<?php get_search_form(); ?>
			</div>
			<div class="subfilter wrapper">

				<?php $class = (!isset($_GET['type'])) ? " class='active'" : ""?>
				<a href="<?php echo get_site_url()  . '?s=' . $search_query;?>" <?php echo $class; ?>>Alle (<?php  echo $my_query->found_posts; ?>)</a>
				<?php foreach($types as $type => $value):
					$class = ( isset($_GET['type']) && $type === $_GET['type'] ) ? "class='active'" : "";
					$pt = get_post_type_object( $type );
					echo "<a href='" . get_site_url()  . '?s=' . $search_query ."&type={$type}' {$class}>{$pt->labels->name} ({$value})</a> ";
				endforeach;?>
			</div>
		</div>
	</section>
	<section id="primary" class="content-area">
		<main id="main" class="site-main wrapper">

		<?php if ( have_posts() ) : ?>

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				?>
				<div class="results">
					<strong><?php $pt = get_post_type_object( $post->post_type ); echo $pt->labels->name; ?></strong>
					<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
					<?php the_excerpt(); ?>
				</div>
			<?php endwhile; ?>

			<div class="pagination">
				<?php echo paginate_links(); ?>
			</div>

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
