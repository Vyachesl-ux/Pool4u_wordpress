<pre>

    <div class="single-content">
        Text
        <?php 
            $descriptions = get_field('description');
            $images = get_field('project_images');
            foreach($images as $image):?>
                <img src="<?php echo $image["url"]?>" alt="">
            
            <?php endforeach ?>
    
    </div> 
</pre>