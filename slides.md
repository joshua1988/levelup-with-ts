---
# try also 'default' to start simple
theme: vuetiful
class: 'text-center'
# emoji : https://emojipedia.org/twitter/
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
altCover: true
---

# 타입스크립트로 FE 개발 레벨업

<br>

<small>장기효(캡틴판교)</small>

---
layout: 'intro'
---

# 장기효

<div class="leading-8 opacity-80">
프런트엔드 개발자<br>
<a href="https://www.youtube.com/channel/UCX04UECIFaAjNnsak6GzpZg" target="_blank"><logos-youtube-icon class="inline-block m-1" />캡틴판교의 프런트엔드 개발 상담소 유튜브 채널 운영</a><br>
<a href="https://www.inflearn.com/users/@captain" target="_blank"><img style="height: 1em; margin: 0 0.3em 0.1em 0.3em;" class="inline-block mb-0.8" src="/inflearn.png"/>대학생, 실무자를 위한 인프런 멘토링 프로그램 운영</a><br>
</div>

<div class="my-10 grid grid-cols-[40px,1fr] gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/joshua1988" target="_blank">CaptainPangyo</a></div>
  <mdi-book-open-outline class="opacity-50" />
  <div>
    <a href="https://joshua1988.github.io/vue-camp/" target="_blank">Cracking Vue.js</a> | 
    <a href="https://joshua1988.github.io/ts/" target="_blank">타입스크립트 핸드북</a>
  </div>
</div>

<img src="/shield.png" class="rounded-full w-40 abs-tr mt-16 mr-12"/>

---
layout: big-points
---

<style>
/* local stylesheet */
.slidev-layout .big-content p, .slidev-layout .big-content .contents-custom li {
  font-size: 1.475rem;
  line-height: 2.55rem;
}
</style>

# 목차

<div class="contents-custom">
  <ul>
    <li>프런트엔드 입문자의 고민</li>
    <li>타입스크립트 소개</li>
    <li>타입스크립트를 도입하기 어려운 이유?</li>
    <li>타입스크립트 소개</li>
    <!-- <li></li>
    <li></li> -->
  </ul>
</div>

---
layout: section
---

# 프런트엔드 개발 입문자의 고민

---
layout: big-points
title:
titleRow: true
---

<style>
/* local stylesheet */
.quote {
  line-height: 3rem !important;
}
.reference {
  margin-bottom: 5rem !important;
}
</style>

<div class="min-h-1 text-3xl font-bold quote">
취직/이직하고 싶은데 타입스크립트도 알아야 하나요? <br>
</div>
<p class="text-right reference">주니어 Frontend 개발자들의 고민</p>

---

# 흔한 프런트엔드 개발 채용공고

<img style="height: 55%;" src="/baemin.png"/>

---

# 흔한 프런트엔드 개발 채용공고

<br>

<img style="height: 70%;" src="/coupang.png"/>

---
layout: section
---

# 타입스크립트가 대체 뭐길래

---

# 10년된 언어

<img style="height: 55%;" src="/when-ts-come-out.png"/>

---
layout: big-points
title: 뼈아픈 현실
titleRow: true
---

<style>
/* local stylesheet */
.quote {
  line-height: 3rem !important;
}
.reference {
  margin-bottom: 5rem !important;
}
</style>

<div class="min-h-1 text-3xl font-bold quote">
FE 전문 개발자가 있는 조직은 거의 다 쓰고 있다.<br>
아니면 쓰려고 공부하고 있거나...
</div>
<p class="text-right reference">10년차 직장인</p>

---

# 시대의 대세

<div class="flex" style="height: 100%; justify-content: center;">
  <img style="height: 47%;" src="/ts-meme.png"/>
</div>

---
layout: section
---

# 다들 왜 타입스크립트를 쓸까?

---

# 유지보수가 쉽고 생산성이 높다?

<div class="flex" style="height: 100%; justify-content: center;">
  <img style="height: 80%;" src="/dx1.png"/>
</div>

---

# 유지보수가 쉽고 생산성이 높다?

<div class="flex" style="height: 100%; justify-content: center;">
  <img style="height: 80%;" src="/dx2.png"/>
</div>

---

# 첫째도 둘째도 개발자 경험

<div class="flex" style="height: 100%; justify-content: center;">
  <img style="height: 80%;" src="/dx3.png"/>
</div>

---

# 첫째도 둘째도 개발자 경험

<div class="flex" style="height: 100%; justify-content: center;">
  <img style="height: 80%;" src="/dx4.png"/>
</div>

---
layout: section
---

# 타입스크립트의 개발자 경험

---

# 타입스크립트란?

<v-clicks>

- 자바스크립트에 타입을 부여한 언어

</v-clicks>

<div class="grid grid-cols-2 gap-x-4">

<div v-click>

```js
// JavaScript
const message = 'hi';

function sum(a, b) {
  return a + b;
}
```

</div><div v-click>

```ts
// TypeScript
const message: string = 'hi';

function sum(a: number, b: number): number {
  return a + b;
}
```

</div></div>

---

# 타입스크립트의 개발자 경험

<v-clicks>

- DX(Developer Experience) : 코드를 빠르고 정확하게 작성할 수 있음

</v-clicks>

<div class="grid grid-cols-2 gap-x-4 mt-2">

<div v-click>

### 메모장

<img src="/mac-memo.png"/>

</div><div v-click>

### IDE - 통합 개발 환경

<img src="/ide.png"/>

</div></div>

<!-- - 1안 : (좌측 - JS로 라이브 코드 작성) | (우측 - TS로 라이브 코드 작성)
- 2안 : 코드 작성하는 과정 스크린 플로로 촬영 후 GIF 임베드 -->

---

# 타입스크립트의 사용자 경험

<v-clicks>

- UX(User Experience) : 사용자를 보호해 준다 === 사용자 경험을 향상시켜준다

</v-clicks>

<div class="grid grid-cols-2 gap-x-4 mt-2">

<div v-click>

### JavaScript

```js
var ten = '10';
ten.toFixed(2); // Uncaught TypeError: b.toFixed is not a function

const sum = (a, b) => a + b;
sum(10, '20'); // 30?
```

</div><div v-click>

### TypeScript

```ts {monaco}






var ten = '10';
ten.toFixed(2);

const sum = (a: number, b: number) => a + b;
sum(10, '20');
```

</div></div>

<v-clicks>

<Badge type="info">INFO</Badge> 사용자보다 개발자가 에러를 먼저 발견!

</v-clicks>

---
layout: section
---

# 현실적인 고민과 해결 방법

---
layout: big-points
title: 타입스크립트를 도입하기 어려운 이유?
titleRow: true
---

<style>
/* local stylesheet */
.slidev-layout .big-content p, .slidev-layout .big-content li {
  font-size: 1.475rem;
  line-height: 2.55rem;
}
</style>

<v-clicks>

<div class="min-h-1 text-2xl font-bold">
학습 비용
</div>

<div class="mt-4">

- JS도 잘 모르는데 TS는 어떻게 배워요?
- 언어를 하나 더 배우는게 힘듭니다

</div>

<div class="mt-8 min-h-1 text-2xl font-bold">
적용 비용
</div>

<div class="mt-4">

- 이미 JS로 만든 서비스를 운영하고 있어요.
- TS를 적용하려면 코드를 전부 다 다시 써야 하는거 아닌가요?

</div>

</v-clicks>

---

# 현실적인 접근 방식 - JSDoc

<div class="grid grid-cols-2 gap-x-4 mt-2">

<div v-click>

### JavaScript

```js
var ten = '10';
ten.toFixed(2); // Uncaught TypeError: b.toFixed is not a function

function sum(a, b) {
  return a + b;
}
sum(10, '20'); // 30?
```

</div><div v-click>

### JavaScript with JSDoc

```js {monaco}
var ten = '10';
ten.toFixed(2);

function sum(a, b) {
  return a + b;
}
sum(10, '20');






// jsdoc demo
```

</div></div>

---

# JSDoc을 적용한 자바스크립트 파일

<img style="height: 45%;" src="/jsdoc-result.png"/>

---

# JSDoc이란?

<v-clicks>

- JSDoc이란 일정한 형식으로 코드에 설명을 추가하는 주석

</v-clicks>

<div class="grid grid-cols-2 gap-x-4 mt-2">

<div v-click>

```js
// app.js

/**
 * @typedef {Object} User
 * @property {string} name 사용자 이름. ex) capt
 * @property {number} age 사용자 나이. ex) 100
 *
 * @param {number} id 사용자 아이디
 * @return {Promise<User>} 사용자 정보
 **/
function fetchUserById(id) {
  const url = `https://infcon.day/users/${id}`;
  return fetch(url).then(res => res.json());
    // { name: 'capt', age: 100 }
}
```

</div><div v-click>

<img src="/jsdoc-effect.png"/>

</div></div>

<v-clicks>

<Badge type="info">TIP!</Badge> 간단한 API 함수부터 적용해 보세요.

</v-clicks>

---

# JSDoc보다는 타입스크립트가 편합니다...

<div class="grid grid-cols-2 gap-x-4 mt-2">

<div v-click>

### JavaScript with JSDoc

```js
/**
 * @typedef {Object} User
 * @property {string} name 사용자 이름. ex) capt
 * @property {number} age 사용자 나이. ex) 100
 *
 * @param {number} id 사용자 아이디
 * @return {Promise<User>} 사용자 정보
 **/
function fetchUserById(id) {
  const url = `https://infcon.day/users/${id}`;
  return fetch(url).then(res => res.json());
}
```

</div><div v-click>

### TypeScript

```ts
interface User {
  name: string;
  age: number;
}

function fetchUserById(id: number): Promise<User> {
  const url = `https://infcon.day/users/${id}`;
  return fetch(url).then(res => res.json());
}
```

</div></div>

---
layout: big-points
---

# <Badge type="warn" style="font-size: 0.9em;line-height: 1.1em;">결론</Badge>
# TS가 어렵다면 JSDoc으로 시작해보고
# 재밌어지면 TS를 차근히 배워보자

<br>
<br>
<br>

---
layout: section
---

# 타입스크립트 배우기

---

# 타입스크립트 공식 사이트

<div class="flex" style="height: 65%; justify-content: center;">
  <img style="height: 100%;" src="/ts-official.png"/>
</div>

<div class="mt-2" style="text-align: right;">
  <a href="https://joshua1988.github.io/ts" target="_blank">https://joshua1988.github.io/ts</a>
</div>

---
layout: big-points
title: 타입스크립트 핸드북
titleRow: true
---

<iframe width="860" height="350" src="https://joshua1988.github.io/ts/intro.html"></iframe>

<div class="mt-2" style="text-align: right;">
<a href="https://joshua1988.github.io/ts/intro.html" target="_blank">https://joshua1988.github.io/ts/intro.html</a>
</div>

---

# 타입스크립트 온라인 강의

<div class="flex" style="height: 40%; justify-content: center;">
  <img style="height: 100%;" src="/ts-course.png"/>
</div>

<div class="mt-2" style="text-align: center;">
  <p>오늘 참석하신 분들이 사용할 수 있는 50% 쿠폰입니다.<br><strong>10210-c1d72ee9dbfa</strong>
  </p>
  <a href="https://inf.run/VnrZ" target="_blank">강의링크 : https://inf.run/VnrZ</a>
</div>

---
layout: big-points
titleRow: true
---

# 그리고 마지막.. 하나 더!

<br>
<br>
<br>

---

# 2년간 집필한 타입스크립트 책이 곧 출간됩니다.

<div class="flex" style="height: 40%; justify-content: center;">
  <img style="height: 100%;" src="/길벗 머시기.png"/>
</div>

---
layout: outro
website: 'https://joshua1988.github.io'
youtubeUrl: https://bit.ly/3mgTeWZ
repository: 'github.com/joshua1988'
---

<div style="color: white;">
  <p style="margin-bottom: 2rem">감사합니다.</p>
  <!-- <p>Q & A</p> -->
</div>