/**
 * @typedef {object} User
 * @property {string} name
 * @property {number} age
 * 
 * @description 특정 아이디에 해당하는 사용자 정보를 받아오는 함수
 * @param {number} id 사용자 아이디
 * @return {Promise<User>} 사용자 정보
 **/
function fetchUserById(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  return fetch(url).then((res) => res.json()) // { name: 'capt', age: 100 }
}

TODO: 아래 모나코로 JSDoc 효과 안보이면 그냥 위 코드로

  < !-- ```ts {monaco}
/**
 * @description 특정 아이디에 해당하는 사용자 정보를 받아오는 함수
 * @param {number} id 사용자 아이디
 * @return {object} 사용자 정보
 **/
function fetchUserById(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
return fetch(url).then((res) => res.json()) // { name: 'capt', age: 100 }
}

fetchUserById('100')
  ``` -->
