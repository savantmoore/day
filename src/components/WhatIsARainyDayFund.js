//src/components/WhatIsARainyDayFund
import React, { Component } from 'react';
import {Link} from 'react-router'
import { Button } from 'react-bootstrap';

const WhatIsARainyDayFund = () =>  {

    return (
        <div id="WhatIsARainyDayFund">
		   <h1>Save FRWD</h1>

		 
		   <h3>
				Today is your first step towards maintained wealth<br/><br/>
				1. Spend less than you earn.<br/><br/>
				2. After every paycheck, pay yourself first.<br/><br/>
				3. <a href="https://www.instagram.com/frwdinc" target="_blank" class="social instagram">Follow us on Instagram</a><br/><br/>
		   </h3>

	        <Button className="nav-btn" block>
	    		<Link className="link" to="assumptions">Income</Link>
	    	</Button>
        </div>
    );
}


export default WhatIsARainyDayFund;
