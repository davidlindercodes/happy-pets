import React, { Component } from 'react';

export class Clock extends Component {


  render ():JSX.Element {

  const day = new Date().getDay();
  const hour = new Date().getHours()

  if (day<6 && hour<9) {
    return <p className="font-bold"> Our shop is currently closed. <br></br>
        We&apos;re open today from 9am to 6pm.
    </p> 
  }
  else if ((day<6 && day != 0) && (hour>9 && hour<18)) {
        return <p className="font-bold">We&apos;re open until 6pm today</p>
  }
  else if ((day<6 && day != 0)  && hour>18) {
    return <p className="font-bold"> Our shop is currently closed. <br></br>
        We open again tomorrow at 9am.
    </p>
  }
  else if (day===6 && hour<9) {
    return <p className="font-bold"> Our shop is currently closed. <br></br>
    We&apos;re open today from 9am to 5pm.
</p>
}
else if (day===6 && (hour<17 && hour>9)) {
    return <p className="font-bold"> We&apos;re open until 5pm today. <br></br>
</p>
  }
  else if (day===6 && hour>17) {
    return <p className="font-bold"> Our shop is currently closed. <br></br>
        We open again tomorrow at 11am.
</p>
  }
  else if (day===0 && hour<11) {
    return <p className="font-bold"> Our shop is currently closed. <br></br>
            We&apos;re open today from 11am to 4pm.
</p>
  }
  else if (day===0 && (hour>10 && hour<16)) { return <p>
    We&apos;re open until 4pm today
</p> 
  }
else {
    return <p className="font-bold">Our shop is currently closed. <br></br>
    We open again tomorrow at 9am.</p>
}
}
}

// Business Hours
// Mon:	9:00 AM – 6:00 PM
// Tue:	9:00 AM – 6:00 PM
// Wed:	9:00 AM – 6:00 PM
// Thu:	9:00 AM – 6:00 PM
// Fri:	9:00 AM – 6:00 PM
// Sat:	9:00 AM – 5:00 PM
// Sun:	11:00 AM – 4:00 PM
