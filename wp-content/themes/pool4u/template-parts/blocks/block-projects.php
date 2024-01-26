<?php 
$projects = new WP_Query([
    "post_type" => "projects",
    "posts_per_page" => -1,
    ]
);
 $id = "projects-" . $block["id"];
 $class = array_key_exists( "className", $block ) ? $block["className"] : "";
 $class .= " alignwide";
 
 $lang = str_replace( "ru-RU", "ru", hsl_current_language() );

 ?>

 <div class="wp-block-pool4u-projects<?php echo $class ?>" id="<?php echo $id; ?>">
    <div class="projects">
        <div class="wrapper wide">
            <div class="projects-content">
                
                    <?php foreach($projects->posts as $project): $thumbnail = get_the_post_thumbnail($project->ID, 'large'); ?>
                        <div class="projects-content__item">
                            <div class="projects-content__item-image">
                                <?php echo $thumbnail ?>
                                <div class="projects-content__item-image--info">
                                    <h3 class="projects-content__item-image--info-header"><?php echo get_field("project_name_{$lang}", $project->ID) ?></h3>
                                    <a href="<?php echo get_permalink($project->ID) ?>" class="projects-content__item-image--info-description" data-modal="<?php echo $project->ID?>"><?php echo $lang === "uk" ? "Докладніше" :  "Подробнее" ?></a>
                                </div>
                            </div>
                        </div>

                    <?php endforeach?>
                
                    <div class="projects-content__item">
                        <h3 class="projects-header"><?php echo get_field("heading_{$lang}")?></h3>
                        <p class="projects-text"><?php echo get_field("description_action_{$lang}") ?></p>
                        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#contact_us"><?php echo get_field("button_text_{$lang}") ?></a></div>
                    </div>

                
            </div>
        </div>
    </div>
 </div>