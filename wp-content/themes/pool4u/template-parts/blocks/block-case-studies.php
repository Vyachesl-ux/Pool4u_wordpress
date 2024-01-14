<?php 
    $cases = new WP_Query( [
        "post_type" => "case_studies",
        "posts_per_page" => 10,
     ] );

     $id = "swiper-" . $block["id"];
     $class = array_key_exists( "className", $block ) ? $block["className"] : "";
     $class .= " alignwide";
     ?>
     <?php if( ! is_admin() ) : ?>
         <div class="wp-block-case-studies <?php echo $class ?>" id="<?php echo $id; ?>">
            <div class="case-studies__header"><?php echo hsl_e("Case studies") ?></div>
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
               <!-- Slides -->
               <?php foreach( $cases->posts as $post ): ?>
                  <div class="case-studies__content swiper-slide">
                     <div class="case-studies__content--wrapper">

                        <div class="case-studies__content--item">
                              <p class="case-studies__content-subheading"><?php echo get_field("category", $post->ID) ?></p>
                           <div class="swiper-slide__title"><?php echo $post->post_title ?></div>
                           <div class="swiper-slide__text">
                              <?php
                              $content = $post->post_content;
                              hs_excerpt(has_excerpt() ? get_the_excerpt() : $content, 120);
                              ?>
                           </div>
                           <div class="wp-block-button"><a href="<?php echo get_permalink($post->ID) ?>" class="wp-block-button__link tertiary"><?php echo hsl_e("Read case study")?></a></div>
                           <div class="case-studies__location"><?php echo get_field('location', $post->ID) ?></div> 
                        </div>
                        <div class="case-studies__content--item">
                              <?php if ( $thumbnail = get_the_post_thumbnail( $post->ID, 'large' ) ) { 
                                    
                                    echo $thumbnail;
                                 } ?>
                        </div>
                     </div>
                  </div>
               <?php endforeach; wp_reset_postdata(); ?>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
         </div>
      <?php else : ?>
         <div class="swiper-block block swiper__placeholder">
            <p>Swiper med case-studies kommer her.</p>
         </div>
      <?php endif; ?>