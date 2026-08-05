import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendar',
  imports: [
    FullCalendarModule
  ],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    plugins: [
      dayGridPlugin,
      interactionPlugin
    ],

    editable: true,

    selectable: true,

    events: [
      {
        title: 'Création Portfolio',
        date: '2026-08-05'
      },
      {
        title: 'Mise en ligne',
        date: '2026-08-18'
      }
    ]

  };

}