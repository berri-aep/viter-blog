<?php
$conn = null;
$conn = checkDbConnection();
$content = new Content($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("contentid", $_GET)) {
    checkPayload($data);

    $content->content_aid = $_GET['contentid'];
    $content->content_title = checkIndex($data, "content_title");
    $content->content_category = checkIndex($data, "content_category");
    $content->content_level = checkIndex($data, "content_level");
    $content->content_serving = checkIndex($data, "content_serving");
    $content->content_prep_time = checkIndex($data, "content_prep_time");
    $content->content_image = checkIndex($data, "content_image");
    $content->content_ingredients = json_encode($data["content_ingredients"]);
    $content->content_description = checkIndex($data, "content_description");
    $content->content_instruction = checkIndex($data, "content_instruction");


    $content->content_datetime = date("Y-m-d H:i:s");
    $content_title_old = strtolower($data["content_title_old"]);
    // checkId($content->content_aid);
    compareName($content, $content_title_old, $content->content_title);

    $query = checkUpdate($content);
    returnSuccess($content, "content", $query);
}

checkEndpoint();