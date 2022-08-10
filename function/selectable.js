import { Calendar } from '@fullcalendar/core/main.js';
import interactionPlugin from '/seuseulo/node_modules/@fullcalendar/interaction/main.js';

let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin ],
    
    dateClick: function(info) {
      alert('Clicked on: ' + info.dateStr);
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = 'red';
    }
  });