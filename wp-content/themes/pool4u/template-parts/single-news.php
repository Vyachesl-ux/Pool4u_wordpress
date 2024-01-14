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
    <div class="news-header">
      <div class="wrapper">
         <?php if ( function_exists('bcn_display') && !is_front_page() ) : ?>
            <div class="breadcrumbs">
               <?php bcn_display(); ?>
            </div>
         <?php endif; ?>

          <figure class="news-header__figure">
             <?php if(the_post_thumbnail()) echo the_post_thumbnail();
            if($categories = get_field('category')):
               foreach($categories as $category):
             ?>
             <div class="news-header__figure-category"><?php echo $category ?></div>
             <?php endforeach; endif ?>
            
          </figure>
             <?php  if( $date =  get_field("date")) : ?>
                 <div class="news-publication-date"><?php echo get_the_date( "d.M Y" ) ?></div>
             <?php endif?>
            <div class="news-header__content">
                <h1><?php the_title() ?></h1>
            </div>
            <hr class="wp-block-separator is-style-left">
       </div>
    </div>
      <section class="wp-block-news-single entry-content gutenberg-content no-top-padding">
         <div class="wrapper">
            <?php the_content(); ?>
         </div>
      </section>

</article>
