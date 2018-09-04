<template>
  <div class="portfolio">
    <div class="wrapper">
      <div class="aside">
        <img src="../assets/img.jpg" >
        <p class="name">Gabriel Nicolau</p>
        <p class="function">Web Developer</p>

        <div class="menu">
          
          <a v-on:click.prevent.stop=" contentapp = 'about' " >About me</a>
          <a v-on:click.prevent.stop=" contentapp = 'experience' " >Experience</a>
          <!-- <a v-on:click="changeContent('education')" >Education</a> -->
          <a v-on:click.prevent.stop=" contentapp = 'skills' " >Skills</a>
        </div>
          

      </div>

      <div class="content">
        <!-- <div class="lds-ripple"><div></div><div></div></div> -->

        <transition name="fade">
          <div v-if="contentapp == 'about'">
            <h1>About Me</h1>
            <p>Hello! My name is Gabriel Nicolau. I'm web developer</p>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="contentapp == 'experience'">
            <h1>Experience</h1>
            <p>Hello! My name is Gabriel Nicolau. I'm web developer</p>
          </div>
        </transition>

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
      title : 'Web Developer',
      contentapp : 'about'
    }
  },

  methods : {
    
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
  background: url('../assets/bg-black.png');
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


/*div loading*/

.lds-ripple {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;

  left: 50%;
  top: 50%;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #000;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

/*-------------------------------*/

.fade-enter-active, .fade-leave-active{
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}

/*------------- GERAIS --------------*/

h1{
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}

</style>