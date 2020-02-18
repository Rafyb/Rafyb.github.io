<template>
    <div class="timeline">
        <ul>
            <li v-for="time in timeline" :key="time.id" ><span></span>
            <div>
            <div class="title">{{time.title}}</div>
            <div class="info">{{time.info}}</div>
            <div class="utils"><a :href="time.utils[0].text">{{time.utils[0].text}}</a></div>
            <div class="type">{{time.desc}}</div>
            <div class="img"><a v-bind:href="time.img.link"><img v-bind:src="time.img.src"></a></div>
            </div> <span class="number"><span>{{time.dateFirst}}</span> <span>{{time.dateSecond}}</span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'timeline',
  props:{
      timeline:Array
  }
}
</script>

<style scoped>
ul {
    margin: 0;
    list-style: none;
    position: relative;
    padding: 1px 40px;
    color: rgb(83, 83, 83);
    font-size: 13px;
}
ul:before {
    content: "";
    width: 5px;
    height: 100%;
    left:71px;
    position: absolute;
    border-left: 3px dashed rgb(56, 56, 56);
}
ul li {
    position: relative;
    margin-left: 30px;
    background-color: rgb(209, 209, 209);
    padding: 14px;
    border-radius: 6px;
    left:30px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
    transition: box-shadow .3s;
    color : #181818;
}
ul li:hover {
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.411);
    background-color: rgb(49, 49, 49);
    color : #f8f8f8;
}
ul li:not(:first-child) {
    margin-top: 60px;
}
ul li > span {
    width: 5px;
    height: 100%;
    background: rgb(43, 43, 43);
    top: 0;
    position: absolute;
    left:-30px;
}
ul li > span:before, ul li > span:after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgb(32, 32, 32);
    position: absolute;
    background: #86b7e7;
    left:-8px;
    top: 0;
}
ul li span:after {
    top: 100%;
}
ul li > div {
    margin-left: 10px;
}
div .title{
    font-weight: 600;
    font-size: 20px;
    width:80%;
}
div .type{
    margin-top: 15px;
    font-size: 16px;
}
div a{
    text-decoration: none;
    margin-top: 10px;
    font-size: 16px;
    color:#0768a0;
}
div a:hover{
    color:#86b7e7;
}
div .info {
    font-weight: 300;
    font-size : 16px;
    font-style : italic;
    margin-bottom: 10px;
    width:80%;
  }
div .img {
    position: absolute;
    right: -5px;
    top: -50px;
    border-radius: 5px;
    background-color: #ffffffa8;
}
div > div {
    margin-top: 5px;
}
span.number {
    height: 100%;
}
span.number span {
    position: absolute;
    font-size: 15px;
    left: -55px;
    font-weight: bold;
}
span.number span:first-child {
    top: 0;
}
span.number span:last-child {
    top: 100%;
}
</style>