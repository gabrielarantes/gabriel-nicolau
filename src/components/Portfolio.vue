<template>
  <div class="portfolio">
    <div class="wrapper">
      <div class="aside">
        <img src="../assets/img.jpg" >
        <p class="name">Gabriel Nicolau</p>
        <p class="function">Web Developer</p>

        <div class="menu">
          <a href="about">About me</a>
          <a href="experience">Experience</a>
          <a href="education">Education</a>
          <a href="skills">Skills</a>
        </div>
          

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

<style scope>

@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');
/*@import url('https://fonts.googleapis.com/css?family=PT+Serif');*/

body{
  padding: 0;
  margin: 0;
  /*font-family: 'PT Serif', sans-serif;*/
  font-family: 'Rubik', sans-serif;
}

.portfolio{
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

.portfolio .wrapper{
  display: grid;
  grid-template-columns: 350px auto;
}

.portfolio .wrapper .aside{
  background: url('../assets/bg-black.jpg');
  height: 100%;
  color: #fff;
  text-align: center;
  padding: 50px 30px;
  text-transform: uppercase;
  /*overflow: hidden;*/
}

.portfolio .wrapper .aside img{
  border-radius: 200px;
  max-width: 200px;
  margin: 0;
}

.portfolio .wrapper .aside p{
  display: block;
}

.portfolio .wrapper .aside p.name{
  font-size: 27px;
  line-height: 27px;
  margin: 0;
  padding : 25px 0 15px 0;
  font-weight: 400;
}

.portfolio .wrapper .aside p.function{
  font-size: 20px;
  line-height: 20px;
  padding: 20px 0;
  margin : 0;
}

.portfolio .wrapper .aside .menu{
  margin-top: 45px;
  display: block;
}

.portfolio .wrapper .aside a{
 font-size: 16px;
 display: block;
 text-align: left;
 margin: 15px 0;
 color: #fff;
 text-decoration: none;
 opacity : .7;

}

.portfolio .wrapper .aside a:hover{
  opacity : 1;
}


</style>