//
// ROUTES
//

// AUTH

// USERS
const userData = {
  status: "success",
  data: [
    {
      user_id: 1,
      username: "ned",
      email: "ned@email.com",
      password: "test",
    },
    {
      user_id: 2,
      username: "ned1",
      email: "ned1@email.com",
      password: "test1",
    },
  ],
};

// NEW PLACE: Costs
const newCosts = {
  status: "success",
  data: [
    {
      type: "new_costs",
      user_id: 1,
      cost_name: "Couch",
      cost_price: 1000,
      description: "Lorem Ipsum",
    },
    {
      type: "new_costs",
      user_id: 1,
      cost_name: "Mattress",
      cost_price: 700,
      description: "Lorem Ipsum",
    },
    {
      type: "new_costs",
      user_id: 1,
      cost_name: "Cleaning",
      cost_price: 200,
      description: "Lorem Ipsum",
    },
  ],
};

// OLD PLACE: Rooms to clean out
const oldPlace = {
  status: "success",
  data: [
    {
      type: "old_rooms",
      user_id: 1,
      room_name: "Living Room",
      current_tasks: "",
      status: "complete",
    },
    {
      type: "old_rooms",
      user_id: 1,
      room_name: "Kitchen",
      current_tasks:
        "finish boxing cutlery, decide on tupperware, clean under sink",
      status: "doing",
    },
    {
      type: "old_rooms",
      user_id: 1,
      room_name: "My Bedroom",
      current_tasks:
        "put all collectables in boxes, filter out clothes and bag them",
      status: "not_started",
    },
  ],
};

// OLD PLACE: Costs
const oldCosts = {
  status: "success",
  data: [
    {
      type: "old_costs",
      user_id: 1,
      cost_name: "Gardening",
      cost_price: 3000,
      description: "Lorem Ipsum",
    },
    {
      type: "old_costs",
      user_id: 1,
      cost_name: "Real Estate Agent",
      cost_price: 5000,
      description: "Lorem Ipsum",
    },
  ],
};

// TOTAL REPORT -> might just be worth doing on the frontend

//
// NOTES
//

// localhost:5500/api/v0.1/old_costs/ -> target all old_costs data with user_id obtained from session

// localhost:5500/api/v0.1/old_costs/[cost_id] -> target specific cost data
//                                -> check if user_id in session matches etc to validate
