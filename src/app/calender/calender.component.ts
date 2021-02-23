import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  public  d = new Date();
  public day = this.d.getDay();
  public date = this.d. getDate();
  public  month = this.d. getMonth() + 1;
  public mcount = 1; //month count;
  public count = 0;
  public year = this.d. getFullYear();
  public dupmonth = this.month;
  public startingday;
  public p = 0;
  public month1;
  public daystr1;
  public ass;
  public assdate;
  public class;
  public classdate;
  public event;
  public eventdate;
  public dat;
  public assign;
  public classes;
  public events;
  public assclas;
  public asseve;
  public claseve;
  public assclasseve;
  public Sun = [];
  public Mon = [];
  public Tue = [];
  public Wed = [];
  public Thur = [];
  public Fri = [];
  public Sat = [];
  public addition = false;
 public monday = false;
 public tuesday = false;
 public wednesday = false;
 public thursday = false;
 public friday = false;
 public saturday = false;
 public sunday = false;
 public X;
 public Y;
 public assignmentsunarray = [];
//  public classessunarray = [];
//  public eventssunarray = [];
 public assignmentmonarray = []
//  public classesmonarray = [];
//  public eventsmonarray = [];
 public assignmenttuearray = []
//  public classestuearray = [];
//  public eventstuearray = [];
 public assignmentwedarray = []
//  public classeswedarray = [];
//  public eventswedarray = [];
 public assignmentthurarray = []
//  public classesthurarray = [];
//  public eventsthurarray = [];
 public assignmentfriarray = []
//  public classesfriarray = [];
//  public eventsfriarray = [];
 public assignmentsatarray = []
//  public classessatarray = [];
//  public eventssatarray = [];
public curr = new Date; // get current date
public first = this.curr.getDate() - this.curr.getDay(); // First day is the day of the month - the day of the week
public last = this.first + 6; // last day is the first day + 6
public data;
public sampledata;
public firstday = new Date(this.curr.setDate(this.first)).toUTCString();
public lastday = new Date(this.curr.setDate(this.last)).toUTCString();
public firstmonth =  new Date(this.firstday).getMonth() + 1;
public firstday1 = new Date(this.firstday).getDate();
public firstyear = new Date(this.firstday).getFullYear();
public lastmonth =  new Date(this.lastday).getMonth() + 1;
public lastday1 = new Date(this.lastday).getDate();
public lastyear = new Date(this.lastday).getFullYear();
// tslint:disable-next-line: max-line-length
public months = [ 'January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public daystr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public duplimonth = this.months[this.month - 1];
 public dupvar;
 public studentdetails = [];
 public dummydays;
 public dummystartingday;
 public dummyyear;
 public dummymonth;
  public getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
   };
   // tslint:disable-next-line: member-ordering
   public days = this. getDaysInMonth(this.month, this.year);

  // tslint:disable-next-line: max-line-length
  constructor() {
    this.startingday = new Date(this.year, Math.abs(this.month - this.mcount), 1).getDay();
    this.dummydays = this.days;
    this.dummystartingday = this.startingday;
    this.dummyyear = this.year;
    this.dummymonth = this.month - this.mcount;
    this.dateCalender(this.days, this.startingday, this.year, this.month - this.mcount);
  }

  ngOnInit(): void {
  }
dateCalender(days,startingday,year,month) {
 this.count = 0;
 for (let i = 0; i <= days; i++) {
    if (this.count < startingday) {
       if (this.count === 0 && this.count < startingday) {
         this.Sun.push(' ');
         this.count++;

       }
       if (this.count === 1 && this.count < startingday) {
         this.Mon.push(' ');
         this.count++;

       }
       if (this.count === 2 && this.count < startingday) {
         this.Tue.push(' ');
         this.count++;

       }
       if (this.count === 3 && this.count < startingday) {
         this.Wed.push(' ');
         this.count++;
       }
       if (this.count === 4 && this.count < startingday) {
       this.Thur.push(' ');
       this.count++;

       }
       if (this.count === 5 && this.count <startingday) {
         this.Fri.push(' ');
         this.count++;

       }
   } else {
     if ( i > 0) {
       this.daystr1 = new Date( year, Math.abs(month), i).getDay();
       // console.log('month', this.month)
       if (this.daystr[this.daystr1] === 'Sun' ) {
           this.p = this.daystr1;
           this.Sun.push(i);
          //  console.log(this.Sun);
     }
       if (this.daystr[this.daystr1] === 'Mon') {
       this.p = this.daystr1;
       this.Mon.push(i);
     }
       if (this.daystr[this.daystr1] === 'Tue') {
       this.p = this.daystr1;
       this.Tue.push(i);
     }
       if (this.daystr[this.daystr1] === 'Wed') {
       this.p = this.daystr1;
       this.Wed.push(i);
     }
       if (this.daystr[this.daystr1] === 'Thur') {
       this.p = this.daystr1;
       this.Thur.push(i);
     }
       if (this.daystr[this.daystr1] === 'Fri') {
       this.p = this.daystr1;
       this.Fri.push(i);
     }
       if (this.daystr[this.daystr1] === 'Sat') {
       this.p = this.daystr1;
       this.Sat.push(i);
     }
     }
   }
 }
}
checking(studentdetails,month,year) {
   this.Sun=[];this.Mon=[];this.Tue=[];this.Wed=[];this.Thur=[];this.Fri=[];this.Sat=[];
   this.dateCalender(this.dummydays, this.dummystartingday, this.dummyyear, this.dummymonth);
   console.log(this.Tue); 
   for(let z = 0; z < studentdetails.length; z++) {
    // console.log('@@@@@@@@@222');
    if(studentdetails[z].workCategory === 'event') {
      this.class =  new Date(studentdetails[z].data);
      if (month === this.class.getMonth() + 1 && year === this.class.getFullYear()) {
      this.classdate = this.class.getDate();
      // console.log('classdate',this.classdate);
      // console.log('date', this.assdate);
      for (let  i = 0; i < 6; i++) {
        // console.log(this.Sun[i]);
        if (this.Sun[i] === this.classdate || this.Sun[i] === this.classdate + '.' || this.Sun[i] === this.classdate + '*' || this.Sun[i] === this.classdate + '*'+'.'|| this.Sun[i] === this.classdate + '.' + '*' ) {
          // console.log('ggg');
          this.Sun[i] = this.Sun[i] + '@';
        }
        if (this.Mon[i] === this.classdate || this.Mon[i] === this.classdate + '.' || this.Mon[i] === this.classdate + '*' || this.Mon[i] === this.classdate + '*'+'.'|| this.Mon[i] === this.classdate + '.' + '*' ) {
            this.Mon[i] = this.Mon[i] + '@';
           }
        if (this.Tue[i] === this.classdate || this.Tue[i] === this.classdate + '.'|| this. Tue[i] === this.classdate + '*' || this.Tue[i] === this.classdate + '*'+'.'|| this.Tue[i] === this.classdate + '.' + '*') {
          this.Tue[i] = this.Tue[i] + '@';
          }
        if (this.Wed[i] === this.classdate || this.Wed[i] === this.classdate + '.'|| this.Wed[i] === this.classdate + '*' || this.Wed[i] === this.classdate + '*'+'.'|| this.Wed[i] === this.classdate + '.' + '*') {
          this.Wed[i] = this.Wed[i] + '@';
          }
        if (this.Thur[i] === this.classdate || this.Thur[i] === this.classdate + '.'|| this.Thur[i] === this.classdate + '*' || this.Thur[i] === this.classdate + '*'+'.'|| this.Thur[i] === this.classdate + '.' + '*') {
          this.Thur[i] = this.Thur[i] + '@';
          }
        if (this.Fri[i] === this.classdate || this.Fri[i] === this.classdate + '.'|| this.Fri[i] === this.classdate + '*' || this.Fri[i] === this.classdate + '*'+'.'|| this.Fri[i] === this.classdate + '.' + '*') {
          this.Fri[i] = this.Fri[i] + '@';
         }
        if (this.Sat[i] === this.classdate || this.Sat[i] === this.classdate + '.'|| this.Sat[i] === this.classdate + '*' || this.Sat[i] === this.classdate + '*'+'.'|| this.Sat[i] === this.classdate + '.' + '*' ) {
          this.Sat[i] = this.Sat[i] + '@';
          }
      }
    }
    }
    if(studentdetails[z].workCategory === 'assignment') {
      this.class =  new Date(studentdetails[z].data);
      if (month === this.class.getMonth() + 1 && year === this.class.getFullYear()) {
      this.classdate = this.class.getDate();
      // console.log('date', this.assdate);
      for (let  i = 0; i < 6; i++) {
        // console.log(this.Sun[i]);
        if (this.Sun[i] === this.classdate || this.Sun[i] === this.classdate + '.' || this.Sun[i] === this.classdate + '@' || this.Sun[i] === this.classdate + '@'+'.'|| this.Sun[i] === this.classdate + '.' + '@' ) {
          // console.log('ggg');
          this.Sun[i] = this.Sun[i] + '*';
        }
        if (this.Mon[i] === this.classdate || this.Mon[i] === this.classdate + '.' || this.Mon[i] === this.classdate + '@' || this.Mon[i] === this.classdate + '@'+'.'|| this.Mon[i] === this.classdate + '.' + '@') {
            this.Mon[i] = this.Mon[i] + '*';
           }
        if (this.Tue[i] === this.classdate || this.Tue[i] === this.classdate + '.'|| this.Tue[i] === this.classdate + '@' || this.Tue[i] === this.classdate + '@'+'.'|| this.Tue[i] === this.classdate + '.' + '@') {
          this.Tue[i] = this.Tue[i] + '*';
          }
        if (this.Wed[i] === this.classdate || this.Wed[i] === this.classdate + '.'|| this.Wed[i] === this.classdate + '@' || this.Wed[i] === this.classdate + '@'+'.'|| this.Wed[i] === this.classdate + '.' + '@') {
          this.Wed[i] = this.Wed[i] + '*';
          }
        if (this.Thur[i] === this.classdate || this.Thur[i] === this.classdate + '.'|| this.Thur[i] === this.classdate + '@' || this.Thur[i] === this.classdate + '@'+'.'|| this.Thur[i] === this.classdate + '.' + '@') {
          this.Thur[i] = this.Thur[i] + '*';
          }
        if (this.Fri[i] === this.classdate || this.Fri[i] === this.classdate + '.'|| this.Fri[i] === this.classdate + '@' || this.Fri[i] === this.classdate + '@'+'.'|| this.Fri[i] === this.classdate + '.' + '@') {
          this.Fri[i] = this.Fri[i] + '*';
         }
        if (this.Sat[i] === this.classdate || this.Sat[i] === this.classdate + '.' || this.Sat[i] === this.classdate + '@' || this.Sat[i] === this.classdate + '@'+'.'|| this.Sat[i] === this.classdate + '.' + '@') {
          this.Sat[i] = this.Sat[i] + '*';
          }
      }
    }
    }
    if(studentdetails[z].workCategory === 'class') {
      //  console.log('entered');
       this.class =  new Date(studentdetails[z].data);
       if (month === this.class.getMonth() + 1 && year === this.class.getFullYear()) {
       this.classdate = this.class.getDate();
       // console.log('date', this.assdate);
       for (let  i = 0; i < 6; i++) {
         // console.log(this.Sun[i]);
         if (this.Sun[i] === this.classdate || this.Sun[i] === this.classdate + '*'|| this.Sun[i] === this.classdate + '@' || this.Sun[i] === this.classdate + '@'+'*'|| this.Sun[i] === this.classdate + '*' + '@') {
           // console.log('ggg');
           this.Sun[i] = this.Sun[i] + '.';
         }
         if (this.Mon[i] === this.classdate || this.Mon[i] === this.classdate + '*'|| this.Mon[i] === this.classdate + '@' || this.Mon[i] === this.classdate + '@'+'*'|| this.Mon[i] === this.classdate + '*' + '@' ) {
             this.Mon[i] = this.Mon[i] + '.';
            }
         if (this.Tue[i] === this.classdate || this.Tue[i] === this.classdate + '*'|| this.Tue[i] === this.classdate + '@' || this.Tue[i] === this.classdate + '@'+'*'|| this.Tue[i] === this.classdate + '*' + '@') {
           this.Tue[i] = this.Tue[i] + '.';
           }
         if (this.Wed[i] === this.classdate || this.Wed[i] === this.classdate + '*'|| this.Wed[i] === this.classdate + '@' || this.Wed[i] === this.classdate + '@'+'*'|| this.Wed[i] === this.classdate + '*' + '@') {
           this.Wed[i] = this.Wed[i] + '.';
           }
         if (this.Thur[i] === this.classdate || this.Thur[i] === this.classdate + '*'|| this.Thur[i] === this.classdate + '@' || this.Thur[i] === this.classdate + '@'+'*'|| this.Thur[i] === this.classdate + '*' + '@') {
           this.Thur[i] = this.Thur[i] + '.';
           }
         if (this.Fri[i] === this.classdate || this.Fri[i] === this.classdate + '*'|| this.Fri[i] === this.classdate + '@' || this.Fri[i] === this.classdate + '@'+'*'|| this.Fri[i] === this.classdate + '*' + '@') {
           this.Fri[i] = this.Fri[i] + '.';
          }
         if (this.Sat[i] === this.classdate || this.Sat[i] === this.classdate + '*' || this.Sat[i] === this.classdate + '@' || this.Sat[i] === this.classdate + '@'+'*'|| this.Sat[i] === this.classdate + '*' + '@') {
           this.Sat[i] = this.Sat[i] + '.';
           }
       }
     }
     }
   
   }
}
  prev() {
    this.Sun = [];
    this.Mon = [];
    this.Tue = [];
    this.Wed = [];
    this.Thur = [];
    this.Fri = [];
    this.Sat = [];
    if (this.month - this.mcount === 0) {
      this.month = 12;
      this.mcount = 0;
      // console.log(this.mcount);
    }
    this.mcount = this.mcount + 1;
    if (this.month - this.mcount  === 11 ) {
      this.year = this.year - 1;
    }
    // console.log(this.getDaysInMonth(this.month - this.mcount + 1, this.year), 'month', this.months[(this.month - this.mcount)]);
    this.duplimonth = this.months[Math.abs(this.month - this.mcount)];
    this.month1 = Math.abs(this.month - this.mcount) + 1;
  
    this.days = this.getDaysInMonth(this.month - this.mcount + 1, this.year);
    this.count = 0;
    this.startingday = new Date(this.year, Math.abs(this.month - this.mcount), 1).getDay();
    this.dateCalender(this.days, this.startingday, this.year, this.month - this.mcount);
    this.dummydays = this.days;
    this.dummystartingday = this.startingday;
    this.dummyyear = this.year;
    this.dummymonth = this.month - this.mcount;
    this.checking(this.studentdetails,this.month1, this.year)
  }
  next() {
    this.Sun = [];
    this.Mon = [];
    this.Tue = [];
    this.Wed = [];
    this.Thur = [];
    this.Fri = [];
    this.Sat = [];
    if (this.month - this.mcount === 11) {
      this.month = 0;
      this.mcount = 1;
      // console.log(this.mcount);
    }
    this.mcount = this.mcount - 1;
    if (this.month - this.mcount === 0) {
      this.year = this.year + 1;
    }
    // console.log(this.getDaysInMonth(this.month - this.mcount + 1, this.year), 'month', this.months[(this.month - this.mcount)]);
    this.duplimonth = this.months[Math.abs(this.month - this.mcount)];
    this.daystr1 = new Date( this.year, Math.abs(this.month - this.mcount), 4).getDay();
    this.days = this.getDaysInMonth(this.month - this.mcount + 1, this.year);
    this.count = 0;
    this.month1 = this.month - this.mcount + 1;
    // console.log('next month', this.month1)
    this.startingday = new Date(this.year, Math.abs(this.month - this.mcount), 1).getDay();
    this.dateCalender(this.days, this.startingday, this.year, this.month - this.mcount);
    this.dummydays = this.days;
    this.dummystartingday = this.startingday;
    this.dummyyear = this.year;
    this.dummymonth = this.month - this.mcount;
    this.checking(this.studentdetails,this.month1, this.year);
   }
  isnum(i) {
  if (typeof i === 'string') {
  if (i === ' ') {
    this.dat = ' ';
    this.dat = this.dat[0];
    this.assign = false;
    this.classes = false;
    this.events = false;
    this.assclas = false;
    this.asseve = false;
    this.claseve = false;
    this.assclasseve = false;
  
  }
  if (i.includes('*') && !i.includes('@') && !i.includes('.')) {
    this.dat = i.split('*');
    this.dat = this.dat[0];
    // console.log('dat', this.dat);
    this.assign = true;
    this.classes = false;
    this.events = false;
    this.assclas = false;
    this.asseve = false;
    this.claseve = false;
    this.assclasseve = false;
  }
  if (!i.includes('*') && i.includes('@') && !i.includes('.')) {
    this.dat = i.split('@');
    this.dat = this.dat[0];
    // console.log('dat', this.dat);
    this.classes = false;
    this.assign = false;
    this.events = true;
    this.assclas = false;
    this.asseve = false;
    this.claseve = false;
    this.assclasseve = false;
  }
  if (!i.includes('*') && !i.includes('@') && i.includes('.')) {
    this.dat = i.split('.');
    this.dat = this.dat[0];
    this.assclas = false;
    this.events = false;
    this.classes = true;
    this.assign = false;
    this.asseve = false;
    this.claseve = false;
    this.assclasseve = false;
  }
  if (i.includes('*.') || i.includes('.*') && !i.includes('*@') && !i.includes('.@')) {
    if(i.includes('*.')) {
      this.dat = i.split('*.');
    }
    if(i.includes('.*')) {
      this.dat = i.split('.*');
    }
    this.dat = this.dat[0];
    this.assclas = true;
    this.events = false;
    this.classes = false;
    this.assign = false;
    this.asseve = false;
    this.claseve = false;
    this.assclasseve = false;
  }
  if (!i.includes('*.') && i.includes('*@') || i.includes('@*') && !i.includes('.@')) {
    if(i.includes('*@')) {
      this.dat = i.split('*@');
    }
    if(i.includes('@*')) {
      this.dat = i.split('@*');
    }
    this.dat = this.dat[0];
    this.asseve = true;
    this.assclas = false;
    this.events = false;
    this.classes = false;
    this.assign = false;
    this.claseve = false;
    this.assclasseve = false;
  }
  if (!i.includes('*.') && !i.includes('*@') && i.includes('.@') || i.includes('@.')) {
    if(i.includes('.@')) {
      this.dat = i.split('.@');
    }
    if(i.includes('@.')) {
      this.dat = i.split('@.');
    }
    this.dat = this.dat[0];
    this.claseve = true;
    this.asseve = false;
    this.assclas = false;
    this.events = false;
    this.classes = false;
    this.assign = false;
    this.assclasseve = false;
  }
  if (i.includes('*.@') || i.includes('.*@') || i.includes('@.*') || i.includes('@*.') || i.includes('*@.') ||i.includes('.@*')) {
    if (i.includes('*.@')) {
      this.dat = i.split('*.@');
    }
    // console.log(this.dat);
    if (i.includes('.*@')) {
    this.dat = i.split('.*@');
    }
    // console.log(this.dat);
    if (i.includes('@.*')) {
      this.dat = i.split('@.*');
    }
    if (i.includes('@*.')) {
      this.dat = i.split('@*.');
    }
    if (i.includes('*@.')) {
      this.dat = i.split('*@.');
    }
    if (i.includes('.@*')) {
      this.dat = i.split('.@*');
    }
    this.dat = this.dat[0];
    this.assclasseve = true;
    this.claseve = false;
    this.asseve = false;
    this.assclas = false;
    this.events = false;
    this.classes = false;
    this.assign = false;
  }
  }
  // console.log('****',this.studentdetails)
  return  typeof i === 'number';
  }
 

}
