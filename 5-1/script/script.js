new Vue({
    el: '#app',
    data() {
      return {
        menus:[{
          label:'top',
          path:'./index.html'
        },{
          label:'ABOUT',
        psth:'./about.html'
       },{
        label:'SHEDULE',
        path:'./schedule.html'
       },{
        label:'CONTACT',
        path:'./contact.html'
       }]
      };
    }
  });