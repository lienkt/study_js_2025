const dataNotification = [
  {
    email: "email@example.com",
    first_name: "Tony",
    last_name: "Nguyen",
    avatar_url: "http://example.com/pic.jpg",
    createdAt: "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    group: "Billing", // | "Collaboration" | "Simulation",
    type: "warning", // "info" | "warning" | "alert" | "success",
  },
  {
    email: "email@example.com",
    first_name: "John",
    last_name: "Doe",
    avatar_url: "http://example.com/pic.jpg",
    createdAt: "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    group: "Collaboration", // | "Collaboration" | "Simulation",
    type: "info", // "info" | "warning" | "alert" | "success",
  },
  {
    email: "email@example.com",
    first_name: "Thang",
    last_name: "Doe",
    avatar_url: "http://example.com/pic.jpg",
    createdAt: "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    group: "Simulation", // | "Collaboration" | "Simulation",
    type: "warning", // "info" | "warning" | "alert" | "success",
  },
  {
    email: "email@example.com",
    first_name: "Stefan",
    last_name: "Doe",
    avatar_url: "http://example.com/pic.jpg",
    createdAt: "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    group: "Billing", // | "Collaboration" | "Simulation",
    type: "alert", // "info" | "warning" | "alert" | "success",
  },
  {
    email: "email@example.com",
    first_name: "John",
    last_name: "Doe",
    avatar_url: "http://example.com/pic.jpg",
    createdAt: "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    group: "Billing", // | "Collaboration" | "Simulation",
    type: "success", // "info" | "warning" | "alert" | "success",
  },
];

// const output =  {
//   Billing: [
//     {}
//   ],
//   Collaboration: [
//     {}
//   ],
//   Simulation: [
//     {}
//   ],
// }

const userGroups = dataNotification.reduce((acc, user) => {
  (acc[user.group] ??= []).push(user);
  return acc;
}, {});
console.log(userGroups);
