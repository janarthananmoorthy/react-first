import React, { Component } from 'react';
class App extends Component {

	constructor(props) {
		super(props);
		console.log('In constructor');
    	this.state = {
      		error: null,
      		isLoaded: false,
      		item: null
    	};
    	console.log('In constructor end');
  	}

	componentWillMount() {
		console.log('In component Didmount');
		fetch('https://reqres.in/api/users?page=2', 
			{
  				crossDomain:true,
  				method: 'GET',
  				headers: {
    				'Content-Type':'application/json'
  				}
			})
			.then(response => response.json())
			.then(response => {
					this.setState({item : response});
			});
		console.log('In component Didmount end');
	}

   	render(){
   	  	const { error, isLoaded, item } = this.state;
   	  	const country 		= ['India', 'Pakistan', 'USA'];
   	  	const arrayObject 	= [{"name":"test1"}, {"name":"test2"}];
   	  	console.log('item..........', item);
      	return(
         	<div>
            	<h1>Hello World</h1>

            	<table border='1'>
	            	<tbody>
	            		{item && item.data && item.data.map(obj => { return <tr><td>{obj.id}</td></tr> })}
	            	</tbody>
            	</table>

            	<ol>
            		{country.map((value, index) => { return <li>{value}</li> })}
            	</ol>

            	<ul>
            		{arrayObject.map(obj => { return <li>name: {obj.name}</li>})}
            	</ul>
         	</div>
      	);
   	}
}
export default App;