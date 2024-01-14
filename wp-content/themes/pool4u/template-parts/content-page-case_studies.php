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

$cases = new WP_Query( array(
    "post_type"				=> "case_studies",
    "posts_per_page"		=> -1,
    "ignore_sticky_posts"	=> 1,
    "paged"					=> get_query_var( "paged", 1 ),
));
?>
    <section class="case-studies-archive padded is-style-has-background-color" id="posts">
		<div class="wrapper wide">
			<div class="case-studies-archive__header-wrapper">
				<h1><?php hsl_e("Case studies") ?></h1>
				<div class="case-header__filter">
					<div class="case-header__filter-label"><?php echo hsl_e("Sort by category:") ?></div>
					<div class="case-filter__buttons-wrapper">
						<div class="case-filter__button"><?php hsl_e("offices") ?></div>
						<div class="case-filter__button"><?php hsl_e("museums") ?></div>
						<div class="case-filter__button"><?php hsl_e("housing") ?></div>
						<div class="case-filter__button"><?php hsl_e("restaurants") ?></div>
						<div class="case-filter__button"><?php hsl_e("special") ?></div>
					</div>
				</div>

			</div>
		</div>

    	<div class="wrapper wide">
			<hr class="wp-block-separator is-style-left">
			<div class="archive-header__preamble">
				<?php  the_content(); ?>
			</div>
		</div>
		<div class="wrapper full">
			<div class="case-studies-archive__content">
				<?php foreach($cases->posts as $post):?>
					<div class="case-study__wrapp" data-type="<?php if($category = get_field("category")) echo $category ?>">
						<div class="case-study__wrapp-item">
							<?php if ( $thumbnail = get_the_post_thumbnail( $post->ID, 'large' ) ) echo $thumbnail  ?>
						</div>
						<div class="case-study__wrapp-item content">
							<?php if($category = get_field("category")): ?>
							<div class="case-study__wrapp-item--category"><?php echo $category ?></div>
							<?php endif ?>
							<h2 class="case-study__wrapp-item--title"><?php echo $post->post_title ?></h2>
							<div class="case-study__wrapp-item--excerpt">
								<?php
								$content = $post->post_content;
								hs_excerpt(has_excerpt() ? get_the_excerpt() : $content, 100);
								?>
							</div> 
							<div class="wp-block-button"><a href="<?php echo get_permalink($post->ID) ?>" class="wp-block-button__link tertiary orange"><?php echo hsl_e("Read study case")?></a></div>
                           <div class="case-studies__location"><?php echo get_field('location', $post->ID) ?></div> 
						</div>
					</div>
				<?php endforeach ?>
			</div>
		</div>
		<div class="show-more-cases"><?php hsl_e("Load more case studies") ?></div>
		<div class="show-more-cases-filter hide"><?php hsl_e("Load more case studies") ?></div>
    </section>
</article>