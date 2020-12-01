<?php

class ItemOwners
{
    public static function groupByOwners($items)
    {
        //TODO: Implement this
        $uniqueOwners = [];
        foreach ($items as $item) {
            if (!in_array($item, $uniqueOwners)) {

            }

        }
        return null;
    }
}

$items = array(
    "Baseball Bat" => "John",
    "Golf ball" => "Stan",
    "Tennis Racket" => "John"
);
echo json_encode(ItemOwners::groupByOwners($items));

?>