const INITIAL_STATE = [
  {
    title: 'hats',
    imageUrl: '/assets/hats.jpg',
    id: 1,
    linkUrl: 'hats',
  },
  {
    title: 'jackets',
    imageUrl: '/assets/jackets.jpg',
    id: 2,
    linkUrl: '',
  },
  {
    title: 'sneakers',
    imageUrl: '/assets/sneakers.jpg',
    id: 3,
    linkUrl: '',
  },
  {
    title: 'womens',
    imageUrl: '/assets/womens.jpg',
    size: 'large',
    id: 4,
    linkUrl: '',
  },
  {
    title: 'mens',
    imageUrl: '/assets/mens.jpg',
    size: 'large',
    id: 5,
    linkUrl: '',
  },
];

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
