<?php

class ItemOwners
{
    public static function groupByOwners($items)
    {
        //TODO: Implement this
        $uniqueOwners = [];
        foreach ($items as  $item => $owner) {
            if (!in_array($owner, $uniqueOwners)) {
                array_push($uniqueOwners,$owner);
            }
        }
        $groupedByOwners =[];
        sort($uniqueOwners);

        foreach ($uniqueOwners as $owner1){
            $temp = [];
            foreach ($items as  $item => $owner2) {
              if($owner1 == $owner2){
                  array_push($temp,$item);
              }
            }
            $groupedByOwners[$owner1] = $temp;
        }
        return $groupedByOwners;
    }
}

$items = array(
    "Cricket Bat" => "John",
    "Golf Bat" => "John",
    "Tennis Bat" => "John",
    "Golf ball" => "Stan",
    "Tennis Racket" => "John",
    "rugby ball" => "Stan",
    "Soccer Ball" => "Gary",
    "hockey ball" => "Stan"
);
echo json_encode(ItemOwners::groupByOwners($items));

?>