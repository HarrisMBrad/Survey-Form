fn add(num_one: i32, num_two: i32) -> i32 {
    num_one + num_two
}

fn main() {
    let mut total = add(8, 20);
    let mut free_shipping = false;

    if total > 50 {
        println!("You are qualified for free shipping!");
        free_shipping = true;
    } else if total > 20 {
        println!(" If you add more items, you can qualify for free shipping!");
    } else {
        println!("No free shipping");
    }

    total = match free_shipping {
        true => total + 0,
        false => total + 5,
    };

    match total {
        1 => println!("1"),
        2 => println!("2"),
        _ => println!("No Match Found: Time to Dev"),
    }

    println!("Total: {:?}", total);

    let items: [i32; 6] = [1, 2, 3, 4, 5, 6];
    println!("{:?}", items);

    let vector_items = vec![1, 2, 3, 4, 5, 6];
    let mut vector_items_2 = Vec::new();
    vector_items_2.push(1);
    vector_items_2.push(2);
    vector_items_2.push(3);
    vector_items_2.push(4);
    vector_items_2.push(5);
    vector_items_2.push(6);

    println!("{:?}", vector_items);
    println!("{:?}", vector_items_2);
}
