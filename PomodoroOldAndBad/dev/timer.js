


var WORK_TIME = 25*60;
var REST_TIME = 5*60;

// Меняет иконку сайта
function change_favicon(img) {
  var favicon = document.querySelector('link[rel="shortcut icon"]');
  
  if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'shortcut icon');
      var head = document.querySelector('head');
      head.appendChild(favicon);
  }
  
  
  favicon.setAttribute('type', 'image/png');
  favicon.setAttribute('href', img);
}

$ = {
  // print(){
  //   console.log("==================================");
  //   console.log(`isWork: ${this.isWork}`);
  //   console.log(`isRest: ${this.isRest}`);
  //   console.log(`isPause: ${this.isPause}`);
  //   console.log(`isBrake: ${this.isBrake}`);
  //   console.log(`startCounter: ${this.startCounter}`);
  //   console.log("==================================");
  // },

  el: document.getElementById('time'),
  startBtn: document.getElementById('start'),
  pauseBtn: document.getElementById('pause'),
  brakeBtn: document.getElementById('brake'),
  progress: document.getElementById('progress-bar'),
  state: document.getElementById('state'),

  pomodoroCounter: 0,
  startCounter: 0,

  isWork: true,
  isRest: false,
  isPause: false,
  isBrake: false,

  wokrTime: WORK_TIME,
  restTime: REST_TIME,

  // конвертирует секунды в ч/м/с
  toDisplay(sec){
    let h = Math.floor(sec/3600),
      m = Math.floor(sec/60),
      s = sec%60;
    return `${h ? (h + " : ") : ''}${m>=10 ? (m + " : "): ("0" + m + " : ")}${s>=10 ? (s): ("0" + s)}`;
  },

  toDisplaySmaller(sec){
    let h = Math.floor(sec/3600),
      m = Math.floor(sec/60),
      s = sec%60;
    return `${h ? (h + ":") : ''}${m>=10 ? (m + ":"): ("0" + m + ":")}${s>=10 ? (s): ("0" + s)}`;
  },

  // Отнимает секудну от времени работы, обнновляет DOM
  tickWork(){
    this.wokrTime--;
    this.el.innerHTML = this.toDisplay(this.wokrTime);
    document.title = this.toDisplaySmaller(this.wokrTime);
    if (this.progress.style.backgroundColor !== "#d2494a"){
      this.progress.style.backgroundColor = "#d2494a";
    }
    this.progress.style.width  = (100 - (this.wokrTime * 100 / WORK_TIME)) + "%";
    return this.wokrTime;
  },

  // Отнимает секудну от времени отдыха, обновляет DOM
  tickRest(){
    this.restTime--;
    this.el.innerHTML = this.toDisplay(this.restTime);
    document.title = this.toDisplaySmaller(this.restTime);
    if(this.progress.style.backgroundColor !== "#4fb326"){
      this.progress.style.backgroundColor = "#4fb326";
    }
    this.progress.style.width  = (100 - (this.restTime * 100 / REST_TIME)) + "%";
    return this.restTime;
  },

  // Обрабатывает событие по нажатю на старт, обновляет DOM
  onStart(){
    if (this.startCounter === 0){
      if (this.isWork) {
        this.isBrake = false;
        this.isPause = false;
        
        this.timerInit();
      }
      else if (this.isRest){
        this.isBrake = false;
        this.isPause = false;
        
        this.timerInit();
      }
    }
    this.startCounter++;
  },

  // Обрабатывает событие по нажатю на паузу
  onPause(intervalId){
    clearInterval(intervalId);
    this.isPause = true;
    this.isBrake = false;
    this.startCounter = 0;

  },

  // Обрабатывает событие по нажатю на стоп
  onBrake(intervalId){
    this.isWork = true;
    this.isRest = false;
    this.isPause = true;
    this.isBrake = true;
    this.startCounter = 0;
    this.pomodoroCounter = 0;
    this.wokrTime = WORK_TIME;
    this.restTime = REST_TIME;
    this.progress.style.width  = 0;
    this.state.innerHTML = 'Code time !';
    this.el.innerHTML = this.toDisplay(this.wokrTime);
    clearInterval(intervalId);
    
    

  },

  // Срабатывает по когда время заканчивается
  onEnd(intervalId){
    clearInterval(intervalId);
    alert('Продолжить ?');

    if (this.isWork){
      // Время работы закончилось:
      this.isWork = false;
      this.isRest = true;
      
      this.timerInit();
    }
    else if (this.isRest){
       // Время отдыха закончилось:
      this.isWork = true;
      this.isRest = false;
      this.wokrTime = WORK_TIME;
      this.restTime = REST_TIME;
      
      this.timerInit();
      this.pomodoroCounter++;
    }

  },

   // Эффекты, срабатывают при запуске отсчеста работы:
  workingEffects(){
    change_favicon('./work.ico');
    this.state.innerHTML = 'Code time !';
  },

  // Эффекты, срабатывают при запуске отсчеста отдыха:
  restingEffects(){
    change_favicon('./rest.ico');
    this.state.innerHTML = 'Time to break !';
  },

  timerInit(){
    
    this.state.style.opacity = 1;
    let that = this;
    if (this.isWork){
      // Начинается отсчет времени работы
      let tick_ = this.tickWork;
      this.workingEffects();
      
      var workId = setInterval(function(){
        if (that.wokrTime > 0){
          if (!that.isPause && !that.isBrake)
            tick_.call(that);
          if (that.isPause){
            that.onPause(workId);
          }
          if (that.isBrake){
            that.onBrake(workId);
          }
        }
        else{
          that.onEnd(workId);
        }
      }, 1000);
    }
    if (this.isRest) {
      // Начинается отсчет времени отдыха
      let tick_ = this.tickRest;
      this.restingEffects();

      let restId = setInterval(function(){
        if (that.restTime > 0){
          if (!that.isPause && !that.isBrake)
            tick_.call(that);
          if (that.isPause){
            that.onPause(restId);
          }
          if (that.isBrake){
            that.onBrake(restId);
          }
        }
        else{
          that.onEnd(restId);
        }
        
      }, 1000);
    }
    
  },  

};

document.title = $.toDisplaySmaller(WORK_TIME);
$.el.innerHTML = $.toDisplay(WORK_TIME);

// Events
$.startBtn.addEventListener("click", function () {
  $.onStart();
});
$.pauseBtn.addEventListener("click", function () {
  $.onPause();
});
$.brakeBtn.addEventListener("click", function () {
  $.onBrake();
});



