<?php 
$projects = new WP_Query([
    "post_type" => "projects",
    "posts_per_page" => -1,
    ]
);
 $id = "projects-" . $block["id"];
 $class = array_key_exists( "className", $block ) ? $block["className"] : "";
 $class .= " alignwide";

 ?>

 <div class="wp-block-pool4u-projects<?php echo $class ?>" id="<?php echo $id; ?>">
    <div class="projects" id="projects">
        <div class="wrapper wide">
            <div class="projects-content">
                
                    <?php foreach($projects->posts as $project): $thumbnail = get_the_post_thumbnail($project->ID, 'large') ?>
                        <div class="projects-content__item">
                            <div class="projects-content__item-image">
                                <?php echo $thumbnail ?>
                                <div class="projects-content__item-image--info">
                                    <h3 class="projects-content__item-image--info-header"><?php echo $project->post_title ?></h3>
                                    <div class="projects-content__item-image--info-description"><?php echo hsl_e("Докладніше") ?></div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach?>
                
                    <div class="projects-content__item">
                        <h3 class="projects-header"><?php echo get_field("heading")?></h3>
                        <p class="projects-text"><?php echo get_field("description_action") ?></p>
                        <div class="btn"><a class="btn-link color" href="#contact_us"><?php echo get_field("button_text") ?></a></div>
                    </div>

                
            </div>
        </div>
    </div>
 </div>