<?php 
    $news = new WP_Query( [
        "post_type" => "news",
        "posts_per_page" => 4,
     ] );

     $id = "news-" . $block["id"];
     $class = array_key_exists( "className", $block ) ? $block["className"] : "";
     $class .= " alignwide";
?>
    <div class="wp-block-headspin-news<?php echo $class ?>" id="<?php echo $id; ?>">
            <div class="news-header">
                <h6 class="news-header__item"><?php echo hsl_e("News and events")?></h6>
                <a href="<?php the_field("news_page", "option")?>"><h6 class="news-header__item"><?php echo hsl_e("See all")?></h6></a>
                
            </div>
            <div class="news-wrapper">
                <?php 
                    if ($news->have_posts()) :
                        while ($news->have_posts()) : 
                            $news->the_post();
                            ?>
                            <a href="<?php  echo get_permalink() ?>" class="news-container">
                                <figure class="news-figure"><?php echo get_the_post_thumbnail()?></figure>
							    <div class="news-date"><?php echo get_the_date( "d.M Y" ) ?></div>     
                                <h3 class="news-title"><?php echo get_the_title() ?></h3>
                                <div class="news-content">
                                    <?php
                                        foreach($news->posts as $post){
                                            hs_excerpt(has_excerpt() ? get_the_excerpt() : $post->post_content, 150);
                                        }?>
                                </div>
                            </a>
                            
                        <?php
                        endwhile;
                        wp_reset_postdata();
                endif ?>
        </div>
    </div>     