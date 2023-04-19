/**
 * @typedef {Object} User
 * @property {string} name 사용자 이름. ex) capt
 * @property {number} age 사용자 나이. ex) 100
 *
 * @description 특정 아이디에 해당하는 사용자 정보를 받아오는 함수
 * @param {number} id 사용자 아이디
 * @return {Promise<User>} 사용자 정보
 **/
function fetchUserById(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return fetch(url).then(res => res.json()); // { name: 'capt', age: 100 }
}

fetchUserById().then(res => res.na);
