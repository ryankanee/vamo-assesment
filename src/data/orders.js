// Dummy order data with multiple orders
export const orders = [
  {
    id: "ORD-2024-001",
    orderNumber: "ORD-2024-001",
    firstName: "Ryan",
    lastName: "Kane",
    estimatedDelivery: "Today, 3:45 PM",
    estimate: "10 minutes",
    address: "123 Main Street, San Francisco, CA 94102",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
    },
    trackingSteps: [
      {
        title: "Order Confirmed",
        description: "Your order has been confirmed and is being prepared",
        status: "Confirmed",
        timestamp: "2:30 PM",
      },
      {
        title: "Preparing",
        description: "Your order is being prepared by our kitchen",
        status: "Preparing",
        timestamp: "2:35 PM",
      },
      {
        title: "Ready for Pickup",
        description: "Your order is ready and waiting for delivery driver",
        status: "Ready",
        timestamp: "3:15 PM",
      },
      {
        title: "Out for Delivery",
        description: "Your order is on its way to you",
        status: "Out for Delivery",
        timestamp: "3:20 PM",
      },
      {
        title: "Delivered",
        description: "Your order has been delivered successfully",
        status: "Delivered",
        timestamp: "3:45 PM",
      },
    ],
    items: [
      {
        name: "Margherita Pizza",
        emoji: "🍕",
        price: 18.99,
        quantity: 1,
        description: "Fresh mozzarella, tomato sauce, basil",
      },
      {
        name: "Caesar Salad",
        emoji: "🥗",
        price: 12.5,
        quantity: 2,
        description: "Romaine lettuce, parmesan, croutons",
      },
      {
        name: "Chocolate Cake",
        emoji: "🍰",
        price: 8.99,
        quantity: 1,
        description: "Rich chocolate cake with ganache",
      },
    ],
    deliveryFee: 3.99,
    tax: 4.32,
  },
  {
    id: "ORD-2024-002",
    orderNumber: "ORD-2024-002",
    firstName: "Sarah",
    lastName: "Johnson",
    estimatedDelivery: "Tomorrow, 12:30 PM",
    estimate: "15 minutes",
    address: "456 Oak Avenue, Los Angeles, CA 90210",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
    trackingSteps: [
      {
        title: "Order Confirmed",
        description: "Your order has been confirmed and is being prepared",
        status: "Confirmed",
        timestamp: "11:00 AM",
      },
      {
        title: "Preparing",
        description: "Your order is being prepared by our kitchen",
        status: "Preparing",
        timestamp: "11:15 AM",
      },
      {
        title: "Ready for Pickup",
        description: "Your order is ready and waiting for delivery driver",
        status: "Ready",
        timestamp: "12:00 PM",
      },
      {
        title: "Out for Delivery",
        description: "Your order is on its way to you",
        status: "Out for Delivery",
        timestamp: "12:10 PM",
      },
      {
        title: "Delivered",
        description: "Your order has been delivered successfully",
        status: "Delivered",
        timestamp: "12:30 PM",
      },
    ],
    items: [
      {
        name: "BBQ Chicken Pizza",
        emoji: "🍕",
        price: 22.99,
        quantity: 1,
        description: "BBQ sauce, chicken, red onions, cilantro",
      },
      {
        name: "Buffalo Wings",
        emoji: "🍗",
        price: 15.99,
        quantity: 1,
        description: "Spicy buffalo wings with ranch dip",
      },
      {
        name: "Garlic Bread",
        emoji: "🍞",
        price: 6.99,
        quantity: 2,
        description: "Crispy garlic bread with herbs",
      },
    ],
    deliveryFee: 4.5,
    tax: 5.2,
  },
  {
    id: "ORD-2024-003",
    orderNumber: "ORD-2024-003",
    firstName: "Mike",
    lastName: "Chen",
    estimatedDelivery: "Today, 7:15 PM",
    estimate: "12 minutes",
    address: "789 Pine Street, Seattle, WA 98101",
    coordinates: {
      lat: 47.6062,
      lng: -122.3321,
    },
    trackingSteps: [
      {
        title: "Order Confirmed",
        description: "Your order has been confirmed and is being prepared",
        status: "Confirmed",
        timestamp: "6:00 PM",
      },
      {
        title: "Preparing",
        description: "Your order is being prepared by our kitchen",
        status: "Preparing",
        timestamp: "6:10 PM",
      },
      {
        title: "Ready for Pickup",
        description: "Your order is ready and waiting for delivery driver",
        status: "Ready",
        timestamp: "6:45 PM",
      },
      {
        title: "Out for Delivery",
        description: "Your order is on its way to you",
        status: "Out for Delivery",
        timestamp: "6:50 PM",
      },
      {
        title: "Delivered",
        description: "Your order has been delivered successfully",
        status: "Delivered",
        timestamp: "7:15 PM",
      },
    ],
    items: [
      {
        name: "Veggie Supreme Pizza",
        emoji: "🍕",
        price: 20.99,
        quantity: 1,
        description: "Bell peppers, mushrooms, onions, olives, tomatoes",
      },
      {
        name: "Greek Salad",
        emoji: "🥗",
        price: 14.99,
        quantity: 1,
        description: "Mixed greens, feta, olives, tomatoes, cucumber",
      },
      {
        name: "Tiramisu",
        emoji: "🍰",
        price: 9.99,
        quantity: 1,
        description: "Classic Italian dessert with coffee and mascarpone",
      },
      {
        name: "Coca Cola",
        emoji: "🥤",
        price: 2.99,
        quantity: 2,
        description: "Refreshing cola drink",
      },
    ],
    deliveryFee: 3.99,
    tax: 6.15,
  },
  {
    id: "ORD-2024-004",
    orderNumber: "ORD-2024-004",
    firstName: "Emily",
    lastName: "Rodriguez",
    estimatedDelivery: "Today, 5:20 PM",
    estimate: "8 minutes",
    address: "321 Elm Street, Austin, TX 78701",
    coordinates: {
      lat: 30.2672,
      lng: -97.7431,
    },
    trackingSteps: [
      {
        title: "Order Confirmed",
        description: "Your order has been confirmed and is being prepared",
        status: "Confirmed",
        timestamp: "4:00 PM",
      },
      {
        title: "Preparing",
        description: "Your order is being prepared by our kitchen",
        status: "Preparing",
        timestamp: "4:05 PM",
      },
      {
        title: "Ready for Pickup",
        description: "Your order is ready and waiting for delivery driver",
        status: "Ready",
        timestamp: "4:45 PM",
      },
      {
        title: "Out for Delivery",
        description: "Your order is on its way to you",
        status: "Out for Delivery",
        timestamp: "4:50 PM",
      },
      {
        title: "Delivered",
        description: "Your order has been delivered successfully",
        status: "Delivered",
        timestamp: "5:20 PM",
      },
    ],
    items: [
      {
        name: "Pepperoni Pizza",
        emoji: "🍕",
        price: 19.99,
        quantity: 2,
        description: "Classic pepperoni with mozzarella cheese",
      },
      {
        name: "Mozzarella Sticks",
        emoji: "🧀",
        price: 8.99,
        quantity: 1,
        description: "Crispy breaded mozzarella with marinara sauce",
      },
      {
        name: "Chocolate Chip Cookies",
        emoji: "🍪",
        price: 5.99,
        quantity: 6,
        description: "Fresh baked chocolate chip cookies",
      },
    ],
    deliveryFee: 2.99,
    tax: 3.85,
  },
];

// Helper function to get order by ID
export const getOrderById = (id) => {
  return orders.find((order) => order.id === id);
};

// Helper function to get all orders
export const getAllOrders = () => {
  return orders;
};
