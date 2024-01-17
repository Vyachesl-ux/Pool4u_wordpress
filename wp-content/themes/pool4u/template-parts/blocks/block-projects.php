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
        <div class="wrapper">
            <div class="projects-content">
                <pre>
                    <?php foreach($projects->posts as $project): $thumbnail = get_the_post_thumbnail($project->ID, 'medium') ?>
                        <div class="projects-content__item">
                            <figure class="projects-content__item-image"><?php echo $thumbnail ?></figure>
                        </div>
                    <?php endforeach?>

                </pre>
            </div>
        </div>
    </div>
 </div>