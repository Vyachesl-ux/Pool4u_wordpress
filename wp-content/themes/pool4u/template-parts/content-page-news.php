<?php
/**
 * Template part for displaying the news archive page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _headspin
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php

	$news = new WP_Query( array(
		"post_type"				=> "news",
		"posts_per_page"		=> -1,
		"ignore_sticky_posts"	=> 1,
		"paged"					=> get_query_var( "paged", 1 ),
	));
	?>

	<section class="news-archive padded is-style-has-background-color" id="posts">
		<div class="news-archive__header-wrapper">
			<h1><?php hsl_e("News") ?></h1>
			<div class="archive-header__filter">
				<div class="archive-header__filter-title"><?php echo hsl_e("Sort by category:") ?></div>
				<div class="archive-filter__buttons-wrapper">
					<div class="archive-filter__button press"><?php hsl_e("press release") ?></div>
					<div class="archive-filter__button environment"><?php hsl_e("environment") ?></div>
					<div class="archive-filter__button technology"><?php hsl_e("technology") ?></div>
					<div class="archive-filter__button event"><?php hsl_e("event") ?></div>
				</div>
			</div>

		</div>
		<div class="wrapper wide">
			<hr class="wp-block-separator is-style-left">
			<div class="archive-header">
					<?php the_content(); ?>
			</div>

		</div>
		<div class="wrapper full">
			<div class="news-grid">
				<?php foreach ( $news->posts as $post ) :?>
				<a class="news-grid__container" href="<?php echo get_permalink() ?>" alt="chevron">
						<?php if($category =  get_field("category")):?>
								<div class="news-archive__category" data-type="<?php echo strtolower($category) ?>"><?php echo $category  ?></div>
						<?php endif ?>
							  
							  <figure>
								  <?php if ( $thumbnail = get_the_post_thumbnail( $post->ID, 'medium' ) ) echo $thumbnail  ?>
							  </figure>
						<div class="news-archive__content">
							<h3 class="news-archive__title"><?php echo $post->post_title ?></h3>
							<div class="news-archive__date"><?php echo get_the_date( "d.M Y", $post ) ?></div>     
							<div class="news-archive__text">
								<?php
								$content = $post->post_content;
								hs_excerpt(has_excerpt() ? get_the_excerpt() : $content, 100);
								?>
							</div> 
							<div class="news__link"><img src="<?php echo get_template_directory_uri() . "/assets/images/icons/chevron.svg" ?>" ></div>
	
						</div>
		
				</a>

                                
                    <?php endforeach ?>
			</div>

		</div>
		<div class="show-more-button"><?php hsl_e("Load more news") ?></div>
		<div class="show-more-button-filter hide"><?php hsl_e("Load more news") ?></div>
	</section><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->