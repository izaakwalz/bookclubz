const KEYS = {
  user: 'user',
  ID: 'ID',
  club: 'club',
  comments: 'comments',
};

export const addClub = (data) => {
  let club = getData(KEYS.club);
  data['id'] = generateId();
  club.push(data);
  localStorage.setItem(KEYS.club, JSON.stringify(club));
};

export const addComments = (data) => {
  let comments = getData(KEYS.comments);
  data['id'] = generateId();
  comments.push(data);
  localStorage.setItem(KEYS.comments, JSON.stringify(comments));
};

export const generateId = () => {
  if (localStorage.getItem(KEYS.ID) == null) localStorage.setItem(KEYS.ID, '0');
  var id = parseInt(localStorage.getItem(KEYS.ID));
  localStorage.setItem(KEYS.ID, (++id).toString());
  return id;
};

export const getData = (data) => {
  if (localStorage.getItem(data) == null)
    localStorage.setItem(data, JSON.stringify([]));
  let item = JSON.parse(localStorage.getItem(data));

  return item;
};

// export const getComments = () => {
//   if (localStorage.getItem(KEYS.comments) == null)
//     localStorage.setItem(KEYS.comments, JSON.stringify([]));
//   let comments = JSON.parse(localStorage.getItem(KEYS.comments));

//   return comments;
// };

export const getItem = (data) => {
  let item = localStorage.getItem(data);

  return item;
};
