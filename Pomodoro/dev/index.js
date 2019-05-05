/*
   MVC Pomodoro
   4.04.2019
*/





/* ========================================================================= */
/* =============================== Helpers ↓ =============================== */
class EventEmitter {
   constructor() {
       this.events = {};
   }

   subscribe(type, listener) {
      // Подписывается
       this.events[type] = this.events[type] || [];
       this.events[type].push(listener);
   }

   notify(type, arg) {
      // Вызывает оповещения
       if (this.events[type]) {
           this.events[type].forEach(listener => listener(arg));
       }
   }
}
const events = new EventEmitter();

function converToHms(time) {
   const h = Math.floor(time / 3600);
   const m = (Math.floor(time / 60)) % 60;
   const s = time % 60; 
   return `${h ? (h + " : ") : ''}${m >= 10 ? (m + " : "): ("0" + m + " : ")}${s >= 10 ? (s): ("0" + s)}`;
}

function converToHmsObj(time) {
   const h = Math.floor(time / 3600);
   const m = (Math.floor(time / 60)) % 60;
   const s = time % 60; 
   return {
      h: h,
      m: m,
      s: s
   };
}

function hmsToSec(hmsObj) {
   return hmsObj.h * 3600 + hmsObj.m * 60 + hmsObj.s;
}

function editToDisplay(time){
   return +time >= 10 ? time : "0" + time;
}

function cleanValue(val) {
   val = parseInt(val);
   if (val>60)
      return 59;
   if (val < 0)
      return 0;
   if (isNaN(val))
      return 0;
   return val;
}

function save(data) {
   const string = JSON.stringify(data);

   localStorage.setItem('todos', string);
}

function load() {
   const string = localStorage.getItem('todos');
   const data = JSON.parse(string);

   return data;
}

function changeFavicon(src) {
   var link = document.createElement('link'),
       oldLink = document.getElementById('dynamic-favicon');
   link.id = 'dynamic-favicon';
   link.rel = 'shortcut icon';
   link.href = src;
   if (oldLink) {
    document.head.removeChild(oldLink);
   }
   document.head.appendChild(link);
  }

/* ============================== END Helpers ↑ ============================ */
/* ========================================================================= */



/* -----------------------------------------------------------------------------------------------------------------

   MAIN POMODORO TIMER MODUL  <==> MAIN POMODORO TIMER MODUL <==> MAIN POMODORO TIMER MODUL 

/* -----------------------------------------------------------------------------------------------------------------*/



/* ========================================================================= */
/* ================================ Model ↓ ================================ */

class Model extends EventEmitter {
   constructor() {
      super();
      this.workTime = load() ? load().workTime : 25*60;
      this.restTime = load() ? load().restTime : 5*60;
      this.coffeeTime = load() ? load().coffeeTime : 15*60;
      this.currentTime = 0;
      this.pomodoroCounter = 0;
      this.coffeeEveryNum = 4;
      this.state = {
         work: false,
         rest: false,
         coffee: false
      };
   }

   changeDefault (workTime, restTime, coffeeTime){
      this.workTime = workTime;
      this.restTime = restTime;
      this.coffeeTime = coffeeTime;
      events.notify("defaultDataChange");
   }



   currentState() {
      return Object.keys(this.state).filter((key) => this.state[key]).join('');
   }

   nextState() {
      const curState = this.currentState();
      this.state[curState] = false;
      if (curState === 'work'){
         if (this.pomodoroCounter && this.pomodoroCounter % this.coffeeEveryNum === 0)
            this.state.coffee = true;        
         else 
            this.state.rest = true;
      }
      
      else if (curState === 'coffee') {
         this.state.work = true;
         this.pomodoroCounter++;
      }

      else if (curState === 'rest') {
         this.state.work = true;
         this.pomodoroCounter++;
      }

      events.notify("stateChange", this.currentState());
   }

   changeState(onState){
      Object.keys(this.state).forEach(key => this.state[key] = false);
      if (onState in this.state){
         this.state[onState] = true;
         events.notify("stateChange", this.currentState());
      }
      else
         console.error('Wrong state input');
   }

   getCurrentTime() {
      return this.currentTime;
   }

   
   setCurrentAsWork() {
      this.currentTime = this.workTime;
      events.notify("currentChange", this.currentTime);
   }
   setCurrentAsRest() {
      this.currentTime = this.restTime;
      events.notify("currentChange", this.currentTime);
   }
   setCurrentAsCoffee() {
      this.currentTime = this.coffeeTime;
      events.notify("currentChange", this.currentTime);
   }

   tick() {
      this.currentTime--;
      events.notify("currentChange", this.currentTime);
   }

   
   resetModel() {
      this.pomodoroCounter = 0;
      this.currentTime = this.workTime;
      Object.keys(this.state).forEach(key => this.state[key] = false);
      events.notify("stateChange", this.currentState());
      events.notify("currentChange", this.currentTime);
   }
   

   
}
/* ============================== END Model ↑ ============================== */
/* ========================================================================= */















/* ========================================================================= */
/* ================================ View ↓ ================================= */

class View extends EventEmitter {
   constructor (model) {
      super ();
      this.model = model;
      
      this.timer = document.getElementById('time');
      this.state = document.getElementById('state');
      this.progressBar = document.getElementById('progressBar');

      this.startBtn = document.getElementById('start');
      this.pauseBtn = document.getElementById('pause');
      this.brakeBtn = document.getElementById('brake');
      this.coffeeBtn = document.getElementById('coffee');

      

      events.subscribe('currentChange', this.changeTime.bind(this));
      events.subscribe('currentChange', this.changeProgress.bind(this));
      events.subscribe('currentChange', this.changeTitleTime.bind(this));

      events.subscribe('stateChange', this.onStateChange.bind(this));
      events.subscribe('stateChange', this.changeProgress.bind(this));

      this.timer.textContent = converToHms(this.model.workTime);
   }

   defaultView() {
      document.title = "Pomodoro Timer";
      changeFavicon('./img/work.ico');
   }

   stateChangeEffect(text){
      this.state.style.opacity = 0;
      setTimeout(() => {
         this.state.style.opacity = 1;
         this.state.textContent = text;
      }, 300);
   }
   
   onStateChange(state){
      switch(state){
         case 'work': 
            console.log('state for view changed');
            this.stateChangeEffect('Code time !');
            changeFavicon('./img/work.ico');
            this.progressBar.style.backgroundColor = '#d2494a';
            break;
         case 'rest':
            console.log('state for view changed');
            this.stateChangeEffect('Rest time !');
            changeFavicon('./img/rest.ico');
            this.progressBar.style.backgroundColor = 'rgb(74, 197, 32)';
            break;
         case 'coffee':
            console.log('state for view changed');
            this.stateChangeEffect('Coffee time !');
            changeFavicon('./img/rest.ico');
            this.progressBar.style.backgroundColor = 'rgb(74, 197, 32)';
            break;
         default:
            this.state.style.opacity = 0;
      }
   }

   getFullTimeByState(state){
      switch(state){
         case 'work': return this.model.workTime;
         case 'rest': return this.model.restTime;
         case 'coffee': return this.model.coffeeTime;
         default: return "zero";
      }
   }
   changeTime(currentTime){
      this.timer.textContent = converToHms(currentTime);
   }

   changeTitleTime(currentTime){
      document.title = converToHms(currentTime);
   }
   changeProgress(currentTime){
      const full = this.getFullTimeByState(this.model.currentState());
      var percent;
      if (full === "zero") 
         percent = 0;
      
      else
         percent = 100-((currentTime*100)/ full);
      
      this.progressBar.style.width = percent + '%';
      return percent;
   }
   
   
}

/* ============================== END View ↑ =============================== */
/* ========================================================================= */















/* ========================================================================= */
/* ============================== Controller ↓ ============================= */

class Controller extends EventEmitter {
   constructor (model, view) {
      super ();
      this.model = model;
      this.view = view;
      this.timerId = undefined;
      

      this.view.startBtn.addEventListener('click', this.startClick.bind(this));
      this.view.pauseBtn.addEventListener('click', this.pauseClick.bind(this));
      this.view.brakeBtn.addEventListener('click', this.brakeClick.bind(this));
      this.view.coffeeBtn.addEventListener('click', this.coffeeClick.bind(this));
      
      events.subscribe('stateChange', this.onStateChange.bind(this));
      events.subscribe('defaultDataChange', this.brakeClick.bind(this));
   }

   onStateChange(state){
      switch(state){
         case 'work': 
            this.work();
            break;
         case 'rest':
            this.rest();
            break;
         case 'coffee':
            this.coffee();
            break;
      }
   }

   timerWorking() {
      clearInterval(this.timerId);
      const timerId = setInterval(() => {
         if (this.model.getCurrentTime() > 0){
            this.model.tick();
         }
         else {
            this.model.nextState();
         }      
      }, 1000);
      this.timerId = timerId;
   }

   work () {
      clearInterval(this.timerId);
      this.model.setCurrentAsWork();
      this.timerWorking();
   }
   rest () {
      clearInterval(this.timerId);
      this.model.setCurrentAsRest();
      this.timerWorking();
   }
   coffee () {
      clearInterval(this.timerId);
      this.model.setCurrentAsCoffee();
      this.timerWorking();
   }


   /* ======================== EVENTS ======================== */

   startClick () {
      const state = this.model.currentState();
      // Если текущее состояние не определенно значит инициализируем
      if( !state ){
         this.model.changeState('work');
      }
      else{
         this.timerWorking();
      }

   }

   pauseClick () {
      clearInterval(this.timerId);
   }

   brakeClick () {
      clearInterval(this.timerId);
      this.model.setCurrentAsWork();
      this.model.resetModel();
      this.view.defaultView();
   }
   
   coffeeClick () {
      this.model.changeState('coffee');

      // Небольшой костыль. 
      this.model.pomodoroCounter = 0;
      
   }

   

   
}

/* ============================ END Controller ↑ =========================== */
/* ========================================================================= */




















































/* -----------------------------------------------------------------------------------------------------------------

   MODUL FOR DEFAULT DATA CHANGE <==> MODUL FOR DEFAULT DATA CHANGE <==> MODUL FOR DEFAULT DATA CHANGE <==>

/* -----------------------------------------------------------------------------------------------------------------*/


/* ========================================================================= */
/* ================================ Model ↓ ================================ */

class EditModel {
   constructor(mianModel) {
      this.mianModel = mianModel;
      this.workTime = converToHmsObj(this.mianModel.workTime);
      this.restTime = converToHmsObj(this.mianModel.restTime);
      this.coffeeTime = converToHmsObj(this.mianModel.coffeeTime);
   }

   changeMainData() {
      this.mianModel.changeDefault(hmsToSec(this.workTime), hmsToSec(this.restTime), hmsToSec(this.coffeeTime));
      // Сохраним в localstorage
      save({
         workTime: hmsToSec(this.workTime),
         restTime: hmsToSec(this.restTime),
         coffeeTime: hmsToSec(this.coffeeTime)
      });
   }

   plusMin(timeType){
      switch(timeType){
         case 'work':   this.workTime.m += 1; break;
         case 'rest':   this.restTime.m += 1; break;
         case 'coffee': this.coffeeTime.m += 1; break;
      }
      events.notify('typeTimeChange', timeType);
   }
   minusMin(timeType){
      switch(timeType){
         case 'work': this.workTime.m -= 1; break;
         case 'rest': this.restTime.m -= 1; break;
         case 'coffee': this.coffeeTime.m -= 1; break;
         default: console.error('Wrong timeType for "minusMin"');
      }
      events.notify('typeTimeChange', timeType);
   }


   getTime() {
      return {
         workTime: this.workTime,
         restTime: this.restTime,
         coffeeTime: this.coffeeTime,
      };
   }

   changeMin(timeType, timeValue){
      switch(timeType){
         case 'work': this.workTime.m = timeValue; break;
         case 'rest': this.restTime.m = timeValue; break;
         case 'coffee': this.coffeeTime.m = timeValue; break;
         default: console.error('Wrong timeType for "changeTime"');
      }
      events.notify('typeTimeChange', timeType);
   }

   changeSec(timeType, timeValue){
      switch(timeType){
         case 'work': this.workTime.s = timeValue; break;
         case 'rest': this.restTime.s = timeValue; break;
         case 'coffee': this.coffeeTime.s = timeValue; break;
         default: console.error('Wrong timeType for "changeTime"');
      }
      events.notify('typeTimeChange', timeType);
   }
}

/* ============================== END Model ↑ ============================== */
/* ========================================================================= */




/* ========================================================================= */
/* ================================ View ↓ ================================= */

class EditView {
   constructor (editModel) {
      this.editModel = editModel;

      this.modal = document.getElementById('editModal');
      this.workBlock = document.getElementById('editWork');
      this.restBlock = document.getElementById('editRest');
      this.coffeeBlock = document.getElementById('editCoffee');

      this.editBtn = document.getElementById('edit');
      this.closeBtn = document.getElementById('close');

      events.subscribe('typeTimeChange', this.onDataChange.bind(this));

      this.editBtn.addEventListener('click', this.openModal.bind(this));
      this.closeBtn.addEventListener('click', this.closeModal.bind(this));

      this.changeTime();
   }  

   
   changeTime() {
      const workMin = this.workBlock.querySelector("input[data-type='min'] ");
      const workSec = this.workBlock.querySelector("input[data-type='sec']");
      workMin.value = editToDisplay(this.editModel.workTime.m);
      workSec.value = editToDisplay(this.editModel.workTime.s);

      const restMin = this.restBlock.querySelector("input[data-type='min'] ");
      const restSec = this.restBlock.querySelector("input[data-type='sec']");
      restMin.value = editToDisplay(this.editModel.restTime.m);
      restSec.value = editToDisplay(this.editModel.restTime.s);

      const coffeeMin = this.coffeeBlock.querySelector("input[data-type='min'] ");
      const coffeeSec = this.coffeeBlock.querySelector("input[data-type='sec']");
      coffeeMin.value = editToDisplay(this.editModel.coffeeTime.m);
      coffeeSec.value = editToDisplay(this.editModel.coffeeTime.s);

      
   }
   openModal() {
      const modal = this.modal;
      modal.style.display = 'block';
      const timerId = setInterval(() => {
         if (+modal.style.opacity< 1){
            modal.style.opacity = +modal.style.opacity + 0.06;
         }
         else{
            clearInterval(timerId);
         }
      }, 5);
   }

   closeModal() {
      const modal = this.modal;
      const timerId = setInterval(() => {
         if (+modal.style.opacity > 0){
            modal.style.opacity = +modal.style.opacity - 0.06;
         }
         else{
            modal.style.display = 'none';
            clearInterval(timerId);
         }
      }, 5);
   }
   onDataChange(timeType) {
      switch (timeType) {
         case "work":
            const workMin = this.workBlock.querySelector("input[data-type='min'] ");
            const workSec = this.workBlock.querySelector("input[data-type='sec']");
            workMin.value = editToDisplay(this.editModel.workTime.m);
            workSec.value = editToDisplay(this.editModel.workTime.s);
            break;
         case "rest":
            const restMin = this.restBlock.querySelector("input[data-type='min'] ");
            const restSec = this.restBlock.querySelector("input[data-type='sec']");
            restMin.value = editToDisplay(this.editModel.restTime.m);
            restSec.value = editToDisplay(this.editModel.restTime.s);
            break;
         case "coffee":
            const coffeeMin = this.coffeeBlock.querySelector("input[data-type='min'] ");
            const coffeeSec = this.coffeeBlock.querySelector("input[data-type='sec']");
            coffeeMin.value = editToDisplay(this.editModel.coffeeTime.m);
            coffeeSec.value = editToDisplay(this.editModel.coffeeTime.s);
            break;
      }
   }
}

/* ============================== END View ↑ =============================== */
/* ========================================================================= */




/* ========================================================================= */
/* ============================== Controller ↓ ============================= */

class EditController {
   constructor (editModel, editView) {
      this.editModel = editModel;
      this.editView = editView;

      this.minuses = document.querySelectorAll('.minus');
      this.pluses =  document.querySelectorAll('.plus');
      this.minInputs = document.querySelectorAll("input[data-type='min'] ");
      this.secInputs = document.querySelectorAll("input[data-type='sec'] ");

      this.saveBtn = document.getElementById('saveData');

      this.bindEvents();
   }

   bindEvents(){
      this.saveBtn.addEventListener('click', this.saveData.bind(this));
      const that = this;
      console.log(this.minuses)
      that.minuses.forEach( el => {
         el.addEventListener('click', that.minusClick.bind(that, el));
      });
      that.pluses.forEach( el => {
         el.addEventListener('click', that.plusClick.bind(that, el));
      });

      that.minInputs.forEach( el=> {
         el.addEventListener('change', that.minChange.bind(that, el));
      });

      that.secInputs.forEach( el=> {
         el.addEventListener('change', that.secChange.bind(that, el));
      });
      
   }
   minusClick(el){
      const timeType = el.parentNode.getAttribute('data-timeType');
      const timeType_ = timeType + "Time";
      console.log(this.editModel[timeType_]["m"]);
      if (this.editModel[timeType_]["m"]>0)
         this.editModel.minusMin(timeType);
      
   }
   plusClick(el){
      const timeType = el.parentNode.getAttribute('data-timeType');
      const timeType_ = timeType + "Time";
      console.log(this.editModel[timeType_]["m"]);
      if ((this.editModel[timeType_]["m"]) < 59)
         this.editModel.plusMin(timeType);
   }

   minChange(el){
      const timeType = el.parentNode.getAttribute('data-timeType');
      const val = cleanValue(el.value);
      this.editModel.changeMin(timeType, val);
   }

   secChange(el) {
      const timeType = el.parentNode.getAttribute('data-timeType');
      const val = cleanValue(el.value);
      this.editModel.changeSec(timeType, val);
   }

   saveData(){
      this.editModel.changeMainData();
      this.editView.closeModal();
   }

}

/* ============================ END Controller ↑ =========================== */
/* ========================================================================= */












/* ========================================================================= */
/* =================================  MAIN ↓ =============================== */
/* ========================================================================= */

(function(document){
   changeFavicon('./img/work.ico');
   const mainModel = new Model();
   const mianView = new View(mainModel);
   const mianController = new Controller(mainModel, mianView);
   
   const editModel = new EditModel(mainModel);
   const editView = new EditView(editModel);
   const editController = new EditController(editModel, editView);
})(document);





/* ========================================================================= */
/* =============================== END  MAIN ↓ ============================= */
/* ========================================================================= */