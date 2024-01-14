<!-- <?php
// require_once './../../vendor/autoload.php';

// $apiKey = "edd5bfc3060a93d4342d8a39d9cf036e-us21";
// $listId = "84ef1f380b";


// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $email = isset($_POST["email"]) ? $_POST["email"] : '';
//     $selectedInterests = isset($_POST["interest"]) ? $_POST["interest"] : [];

//     if (!empty($email) && !empty($selectedInterests)) {
//         $apiClient = new MailchimpMarketing\ApiClient();
//         $apiClient->setConfig([
//             'apiKey' => $apiKey,
//             'server' => 'us21'
//         ]);

//         // Check if the email already exists in the list
//         try {
//             $response = $apiClient->lists->getListMembersInfo($listId);
//             $members = $response->members;

//             $emailExists = false;
//             foreach ($members as $member) {
//                 if ($member->email_address === $email) {
//                     $emailExists = true;
//                     break;
//                 }
//             }

//             if ($emailExists) {
//                 echo "Subscriber with this email already exists.";
//             } else {
//                 // Add a new subscriber
//                 $subscriber = [
//                     'email_address' => $email,
//                     'status' => 'subscribed',
//                     'tags' => $selectedInterests,
//                 ];

//                 try {
//                     $response = $apiClient->lists->addListMember($listId, $subscriber);
                    
//                 } catch (\MailchimpMarketing\ApiException $e) {
//                     echo "Something went wrong with subscription: " . $e->getMessage();
//                 }
//             }
//         } catch (\MailchimpMarketing\ApiException $e) {
//             echo "Something went wrong: " . $e->getMessage();
//         }
//     } else {
//         echo "Email and interests must be provided.";
//     }
// } else {
//     echo "Form not submitted.";
// }
// ?>
<div id="success-message" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background:#E9F8F7; padding: 20px; border: 3px solid #006A6B; border-radius: 5px; color: #006A6B; ">
    Thank you for subscription!
</div>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        var returnTimeout = 300000;

        setTimeout(function () {
            history.back();
        }, returnTimeout);
    });
</script> -->
