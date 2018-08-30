<template>
  <div class="portfolio">
    <div class="wrapper">
      <div class="aside">
        <img src="../assets/img.jpg" >
        <p class="name">{{name}}</p>
        <p class="function">{{title}}</p>

        <ul>
          <li>
            <a>About me</a>
            <a>Experience</a>
            <a>Education</a>
            <a>Skills</a>
          </li>
        </ul>

      </div>
      <div class="content">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      name: 'Gabriel Nicolau',
      title : 'Web Developer'
    }
  }
}
</script>

<style>

body{
  padding: 0;
  margin: 0;
}

.portfolio{
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

.portfolio .wrapper{
  display: grid;
  grid-template-columns: 300px auto;
}

.portfolio .wrapper .aside{
  background: url('../assets/bg-black.jpg');
  height: 100vh;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

.portfolio .wrapper .aside img{
  border-radius: 150px;
  max-width: 150px;
  margin-top: 50px;
}

</style>