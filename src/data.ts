import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name:'Appam',
    cookTime:'15-20',
    price:10,
    favorite:false,
    origins:['Rava Appam'],
    stars:4,
    imageUrl:'/assets/appam.jpg',
    tags:['Appam','All'],
  },
  {
    id:'2',
    name:'Cheese Masala Dosa',
    cookTime:'10-15',
    price:25,
    favorite: true,
    origins:['Stuffed with cheese'],
    stars:4.5,
    imageUrl:'/assets/Cheese Masala Dosa.jpg',
    tags:['Dosa','All'],

  },
  {
    id:'3',
    name:'Idli Fry',
    cookTime:'10-15',
    price:15,
    favorite:true,
    origins:['Fried with special spices'],
    stars:4,
    imageUrl:'/assets/idli fry.jpg',
    tags:['Idli','All'],

  },
  {
    id:'4',
    name:'Idli',
    cookTime:'5-10',
    price:12,
    favorite:false,
    origins:['Served with chutney and rassam'],
    stars:4.5,
    imageUrl:'/assets/idli.jpg',
    tags:['Idli','All'],

  },
  {
    id:'5',
    name:'Masala Dosa',
    cookTime:'10-15',
    price:15,
    favorite:true,
    origins:['Stuffed with spiced and savory potato filling'],
    stars:4.5,
    imageUrl:'/assets/masala dosa.jpg',
    tags:['Dosa','All'],

  },
  {
    id:'6',
    name:'Onion Uttapam',
    cookTime:'10-15',
    price:17,
    favorite: true,
    origins:['Topped with Onions'],
    stars:4.5,
    imageUrl:'/assets/onion uttapam.jpg',
    tags:['Uttapam','All'],

  },
  {
    id:'7',
    name:'Plain Dosa',
    cookTime:'5-10',
    price:10,
    favorite:false,
    origins:['Made with a fermented batter of rice'],
    stars:4.5,
    imageUrl:'/assets/plain dosa.jpg',
    tags:['Dosa','All'],

  },
  {
    id:'8',
    name:'Rasam',
    cookTime:'5-10',
    price:15,
    favorite:false,
    origins:['A soup of spices'],
    stars:4.5,
    imageUrl:'/assets/rassam.jpg',
    tags:['Rasam','All'],

  },
  {
    id:'9',
    name:'Rasam Rice',
    cookTime:'10-15',
    price:27,
    favorite:true,
    origins:['Made from combining rice and rasam'],
    stars:4.5,
    imageUrl:'/assets/rasam rice.jpg',
    tags:['Special Dishes','All'],

  },
  {
    id:'10',
    name:'Paal Payasam',
    cookTime:'10-15',
    price:30,
    favorite:true,
    origins:['Kheer made with rice and milk'],
    stars:4.5,
    imageUrl:'/assets/paal payasam.jpg',
    tags:['Special Dishes','All'],

  },

]

export const sample_tags:Tag[] = [
  { name:'All',count:10},
  { name:'Dosa',count:3},
  { name:'Idli',count:2},
  { name:'Uttapam',count:1},
  { name:'Rasam',count:1},
  { name:'Appam',count:1},
  { name:'Special Dishes',count:2},
]