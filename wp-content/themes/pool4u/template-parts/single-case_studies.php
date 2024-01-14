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
    <div class="case-header">
       <figure class="case-header__figure">
          <?php if(the_post_thumbnail()) echo the_post_thumbnail() ?>
          <div class="wrapper">
            <?php 
               if($key_figures = get_field("key_figures")){
                  foreach($key_figures as $key_figure):?>
                  <div class="case-header__container">
                     <div class="case-header__container-title"><?php echo $key_figure["title"] ?></div>
                     <div class="case-header__container-content"><?php echo $key_figure["description"] ?></div>
                  </div>
                  <?php endforeach;
               }
            ?>
          </div>
       </figure>
       <div class="wrapper">
          <div class="case-header__content">
             <h1><?php the_title() ?></h1>
             <p><?php echo get_field("category") ?></p>
             <p><?php echo get_field("location") ?></p>
          </div>
          <hr class="wp-block-separator is-style-left">
       </div>
    </div>
      <section class="wp-block-case-block entry-content gutenberg-content no-top-padding art-single">
         <div class="wrapper">
            <?php the_content(); ?>
         </div>
      </section>

</article>