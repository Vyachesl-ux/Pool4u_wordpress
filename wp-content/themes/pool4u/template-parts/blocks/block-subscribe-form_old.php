<?php 


//require_once 'wp-content/themes/sunphade/vendor/autoload.php';
    $id = "news-" . $block["id"];
    $class = array_key_exists( "className", $block ) ? $block["className"] : "";
    $email_placeholder = get_field('email_placeholder', 'option');
    $labels= get_field('label', 'option');
    $button_value = get_field("button_value", "option");
    $apiKey = "edd5bfc3060a93d4342d8a39d9cf036e-us21";
    $listId = "84ef1f380b";
    $subscriptionSuccess = false;
?>

<div class="wp-block-headspin-subscribe-form<?php echo $class ?>" id="<?php echo $id; ?>" novalidate>
<!-- <form action="/wp-content/themes/sunphade/template-parts/blocks/subscribe.php" method="POST"> -->
<form action="#" method="POST">
    <div class="subscribe-form__wrapper">
        <input type="email" name="email" placeholder="<?php echo $email_placeholder ?>" required>
        <input type="submit" class="wp-block-button__link" value="<?php echo $button_value ?>">
    </div>
    <div class="subscribe-form__container">
        <?php foreach($labels as $index => $label) : ?>
            <div class="subscribe-form__container-item">
                <input type="checkbox" id="<?php echo 'interest'.'_' . ($index + 1) ?>" name="interest[]" value="<?php echo $label['label_item'] ?>">
                <label for="<?php echo 'interest'.'_' . ($index + 1)  ?>"><?php echo $label['label_item']?></label>
            </div>
        <?php endforeach ?>
    </div>
</form>
</div>
<?php




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $selectedInterests = isset($_POST["interest"]) ? $_POST["interest"] : [];

    if (!empty($email) && !empty($selectedInterests)) {
        // $apiClient = new MailchimpMarketing\ApiClient();
        $apiClient->setConfig([
            'apiKey' => $apiKey,
            'server' => 'us21'
        ]);

        // Check if the email already exists in the list
        try {
            $response = $apiClient->lists->getListMembersInfo($listId);
            $members = $response->members;

            $emailExists = false;
            foreach ($members as $member) {
                if ($member->email_address === $email) {
                    $emailExists = true;
                    break;
                }
            }

            if ($emailExists) {
                // Show message if email exist
                ?>
                <div class="message"><div class="message-modal warning"> <div class="warning">Subscriber with this email already exists</div> </div></div>
                <?php
            } else {
                // Add new subscriber
                $subscriber = [
                    'email_address' => $email,
                    'status' => 'subscribed',
                    'tags' => $selectedInterests,
                ];

                try {
                    $response = $apiClient->lists->addListMember($listId, $subscriber);
                    $subscriptionSuccess = true;
                } catch (\MailchimpMarketing\ApiException $e) {
                    echo "Something went wrong with subscription: " . $e->getMessage();
                }
            }
        } catch (\MailchimpMarketing\ApiException $e) {
            echo "Something went wrong: " . $e->getMessage();
        }
    } else { ?>
        
            <div class="message">
                <div class="message-modal warning">
                    <div class="warning">
                        Email and interests must be provided!
                    </div>
                </div>
            </div>
        <?php
    }
}
?>

<!-- Block for message in case of success subscription -->
<div class="message <?php echo $subscriptionSuccess ? 'success' : 'hidden'; ?>">
    <div class="message-modal success">
        <div class="success">
            Thank you for subscription!
        </div>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
        var returnTimeout = 3000;
// Hide message after 3 seconds
    setTimeout(function () {
        var successMessage = document.querySelector(".message");
        if (successMessage) {
            successMessage.style.display = "none";
        }
    }, 3000);


    var form = document.querySelector("form");
    var loader = document.createElement("div");
    loader.className = "loader";
    form.appendChild(loader);

    form.addEventListener("submit", function () {
        loader.style.display = "block";
    });
});

</script>