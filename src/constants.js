import icon from './assets/profile-icon.png'
import productImg_1 from './assets/product-1.svg'
import productImg_2 from './assets/product-2.svg'
import product1 from './assets/product1.webp'

const users = [
  {
    uid: 1,
    profile_image: icon,
    name: 'Sharjeel Hussain',
    phone: "03252105103",
    email: "sharjeel@gmail.com",
    subscriptionPlan: "annual", // annual, monthly
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 2,
    profile_image: icon,
    name: 'Ayesha Khan',
    phone: "03252345678",
    email: "ayesha.khan@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 3,
    profile_image: icon,
    name: 'Ahmed Ali',
    phone: "03257654321",
    email: "ahmed.ali@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 4,
    profile_image: icon,
    name: 'Sara Malik',
    phone: "03251234567",
    email: "sara.malik@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 5,
    profile_image: icon,
    name: 'Bilal Siddiqui',
    phone: "03259876543",
    email: "bilal.siddiqui@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 6,
    profile_image: icon,
    name: 'Hina Aslam',
    phone: "03253456789",
    email: "hina.aslam@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 7,
    profile_image: icon,
    name: 'Zain Ul Abidin',
    phone: "03257651234",
    email: "zain.abidin@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 8,
    profile_image: icon,
    name: 'Mariam Raza',
    phone: "03253456987",
    email: "mariam.raza@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 9,
    profile_image: icon,
    name: 'Omar Farooq',
    phone: "03251239876",
    email: "omar.farooq@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 10,
    profile_image: icon,
    name: 'Hassan Iqbal',
    phone: "03257658765",
    email: "hassan.iqbal@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 11,
    profile_image: icon,
    name: 'Nida Tariq',
    phone: "03252349876",
    email: "nida.tariq@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 12,
    profile_image: icon,
    name: 'Usman Sheikh',
    phone: "03259872345",
    email: "usman.sheikh@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 13,
    profile_image: icon,
    name: 'Hira Qureshi',
    phone: "03257623489",
    email: "hira.qureshi@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 14,
    profile_image: icon,
    name: 'Ali Haider',
    phone: "03252123987",
    email: "ali.haider@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 15,
    profile_image: icon,
    name: 'Fatima Khalid',
    phone: "03254321987",
    email: "fatima.khalid@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 16,
    profile_image: icon,
    name: 'Kamran Javed',
    phone: "03257651923",
    email: "kamran.javed@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 17,
    profile_image: icon,
    name: 'Sana Ahmed',
    phone: "03251234987",
    email: "sana.ahmed@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 18,
    profile_image: icon,
    name: 'Raza Shah',
    phone: "03254329871",
    email: "raza.shah@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 19,
    profile_image: icon,
    name: 'Amina Butt',
    phone: "03258764321",
    email: "amina.butt@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 20,
    profile_image: icon,
    name: 'Fahad Khan',
    phone: "03257649871",
    email: "fahad.khan@example.com",
    subscriptionPlan: "monthly",
    startDate: "start Date",
    endDate: "End Date", 
  },
  {
    uid: 21,
    profile_image: icon,
    name: 'Zara Saeed',
    phone: "03252348765",
    email: "zara.saeed@example.com",
    subscriptionPlan: "annual",
    startDate: "start Date",
    endDate: "End Date", 
  }
];

const products = [
  {
    img: productImg_1,
    title: "John Michael",
    tag: "Aveeno",
    online: true,
    date: "23/04/18",
    id: 1
  },
  {
    img: productImg_2,
    title: "John Michael",
    tag: "execute",
    online: true,
    date: "23/04/18",
    id: 2
  },
  {
    img: productImg_1,
    title: "Jane Doe",
    tag: "Neutrogena",
    online: false,
    date: "25/05/18",
    id: 3
  },
  {
    img: productImg_2,
    title: "Chris Evans",
    tag: "L'Oréal",
    online: true,
    date: "28/06/18",
    id: 4
  },
  {
    img: productImg_1,
    title: "Sarah Connor",
    tag: "Dove",
    online: false,
    date: "01/07/18",
    id: 5
  },
  {
    img: productImg_2,
    title: "Tony Stark",
    tag: "Nivea",
    online: true,
    date: "12/08/18",
    id: 6
  },
  {
    img: productImg_1,
    title: "Bruce Wayne",
    tag: "Garnier",
    online: false,
    date: "15/09/18",
    id: 7
  },
  {
    img: productImg_2,
    title: "Diana Prince",
    tag: "Pantene",
    online: true,
    date: "18/10/18",
    id: 8
  },
  {
    img: productImg_1,
    title: "Peter Parker",
    tag: "Head & Shoulders",
    online: true,
    date: "22/11/18",
    id: 9
  },
  {
    img: productImg_2,
    title: "Clark Kent",
    tag: "Clear",
    online: false,
    date: "25/12/18",
    id: 10
  },
  {
    img: productImg_1,
    title: "Natasha Romanoff",
    tag: "Tresemme",
    online: true,
    date: "05/01/19",
    id: 11
  },
  {
    img: productImg_2,
    title: "Steve Rogers",
    tag: "Aveeno",
    online: false,
    date: "10/02/19",
    id: 12
  },
  {
    img: productImg_1,
    title: "Wanda Maximoff",
    tag: "Dove",
    online: true,
    date: "14/03/19",
    id: 13
  },
  {
    img: productImg_2,
    title: "Stephen Strange",
    tag: "Neutrogena",
    online: false,
    date: "18/04/19",
    id: 14
  },
  {
    img: productImg_1,
    title: "Scott Lang",
    tag: "Garnier",
    online: true,
    date: "22/05/19",
    id: 15
  },
  {
    img: productImg_2,
    title: "Bruce Banner",
    tag: "Pantene",
    online: false,
    date: "25/06/19",
    id: 16
  },
  {
    img: productImg_1,
    title: "Carol Danvers",
    tag: "L'Oréal",
    online: true,
    date: "29/07/19",
    id: 17
  },
  {
    img: productImg_2,
    title: "Bucky Barnes",
    tag: "Nivea",
    online: false,
    date: "01/08/19",
    id: 18
  },
  {
    img: productImg_1,
    title: "Sam Wilson",
    tag: "Clear",
    online: true,
    date: "04/09/19",
    id: 19
  },
  {
    img: productImg_2,
    title: "T'Challa",
    tag: "Tresemme",
    online: false,
    date: "07/10/19",
    id: 20
  }
];

const beauty_products = [
  {
    id: 1,
    img: product1,
    tag: "Aveeno",
    title: "Mild Cherry Blossom Eye Cream Skin Care",
  },
  {
    id: 2,
    img: product1,
    tag: "Aveeno",
    title: "Mild Cherry Blossom Eye Cream Skin Care",
  },
  {
    id: 3,
    img: product1,
    tag: "Aveeno",
    title: "Mild Cherry Blossom Eye Cream Skin Care",
  },
  {
    id: 4,
    img: product1,
    tag: "Aveeno",
    title: "Mild Cherry Blossom Eye Cream Skin Care",
  },
  {
    id: 5,
    img: product1,
    tag: "Aveeno",
    title: "Mild Cherry Blossom Eye Cream Skin Care",
  },
  {
    id: 6,
    img: product1,
    tag: "Aveeno",
    title: "Mild Cherry Blossom Eye Cream Skin Care",
  },

];

export { users, products, beauty_products }