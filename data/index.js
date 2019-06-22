export function initProduct() {
  return [
    {
      $id: 1,
      name: 'Cold Brew with Cascara Cold Foam',
      description:
        'Sweetened cold foam is flavored with our Cascara syrup (for subtle notes of dark brown sugar and luscious maple) atop our bold, smooth Starbucks® Cold Brew, and finished with just a hint of vanilla syrup.',
      price: 75
    },
    {
      $id: 2,
      name: 'Iced Espresso Classics',
      description:
        'We cannot guarantee that any unpackaged products served in our stores are allergen-free because we use shared equipment to store, prepare, and serve them. Customers with allergies can find ingredient information for products on the labels of our packaged products or online at Starbucks.com/menu.',
      price: 70
    },
    {
      $id: 3,
      name: 'Iced Coffee',
      description:
        'Nutrition information is calculated based on our standardized recipes. Because our beverages are handcrafted and may be customized, exact information may vary.',
      price: 60
    },
    {
      $id: 1,
      name: 'Iced Coffee with Milk',
      description:
        'There’s a new flavor experience just waiting to be discovered. We partnered with The Culinary Institute of America to create a perfect coffee for your savory breakfasts, so all you have to do is brew. Pair with omelets, bacon, avocado toast and more to enjoy an extra special start to your everyday.',
      price: 65
    }
  ]
}

export function initOrder() {
  return {
    $id: 1,
    user_id: 1
  }
}
