var React = require("react");
var Scene = require("./scene.jsx")

var Edge = React.createClass({
   render:function(){
			var i=0;
       return(
           <div className="edge">
		   {			   
			   this.props.edge && this.props.edge.conditions ? this.props.edge.conditions.map(function(c){return <h3 key={i++}>{c.variable + "+"}</h3>;}) : null
		   }		   
           </div>
       )
   } 
});

module.exports = Edge;