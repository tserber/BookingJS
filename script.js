//Task A
function get_number_from_text(txt){
    return parseInt(txt.match(/\d/g).join(""));
};

let all_rooms = document.getElementsByClassName("js-rt-block-row e2e-hprt-table-row");
let minimum_price_room = all_rooms[0];
let minimum_price = get_number_from_text(minimum_price_room.getElementsByClassName("bui-u-sr-only")[1].innerHTML);


function get_only_two_person_rooms(all_rooms_var){
    let double_rooms = new Array();
    let is_double = false;
    for (let i = 0; i < all_rooms_var.length; i++){
        let current_room = all_rooms_var[i];
        is_double = current_room.getElementsByClassName("bicon bicon-occupancy").length == 2;
        if (is_double)
            double_rooms.push(current_room);
    };
    return double_rooms
};
let two_person_rooms = get_only_two_person_rooms(all_rooms)
let min_price = get_number_from_text(two_person_rooms[0].getElementsByClassName("bui-u-sr-only")[1].innerHTML);
let two_person_room_cheapest = two_person_rooms[0];

for (let i = 0; i < two_person_rooms.length; i++) {
    let current = get_number_from_text(two_person_rooms[i].getElementsByClassName("bui-u-sr-only")[1].innerHTML)
    if (current < min_price){
        min_price = current;
        two_person_room_cheapest = two_person_rooms[i];
        alert(get_number_from_text(two_person_room_cheapest.getElementsByClassName("bui-u-sr-only")[1].innerHTML));

    };
};


let select_select = two_person_room_cheapest.querySelector(".js-hprt-nos-select")
select_select.value = '1';
select_select.dispatchEvent(new Event('change'));;
let button = document.getElementsByClassName("bui-button__text js-reservation-button__text")[0];
    button.click()

///////////////////
//Task B
function get_price(s) {
    return s.match(/\d+[.,]\d+/, "");
}

function get_currency(s) {
    return s.match(/\w+/, "");
}



let currency_and_price = document.getElementsByClassName("bp-price-details__charge-value e2e-price-details__total-charge--property")
[0].getElementsByTagName("span")[0].innerHTML;

let room_name = document.getElementsByClassName("bui-list__item")[0].getElementsByTagName("div")[0].innerHTML;

console.log("Price : " + get_price(currency_and_price));
console.log("Currency : " + get_currency(currency_and_price));
console.log("Room name : " + room_name);