const INITIAL_STATE = [
  {
    title: 'hats',
    imageUrl: '/assets/hats.jpg',
    id: 1,
    linkUrl: '/shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: '/assets/jackets.jpg',
    id: 2,
    linkUrl: '/shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: '/assets/sneakers.jpg',
    id: 3,
    linkUrl: '/shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl: '/assets/womens.jpg',
    size: 'large',
    id: 4,
    linkUrl: '/shop/womens',
  },
  {
    title: 'mens',
    imageUrl: '/assets/mens.jpg',
    size: 'large',
    id: 5,
    linkUrl: '/shop/mens',
  },
];

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
