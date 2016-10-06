var React = require("react");
var Scene = require("./scene.jsx")

var Edge = React.createClass({
   render:function(){
			var i=0;
			var numOfConditions = this.props.edge && this.props.edge.conditions ? this.props.edge.conditions.length : 0;
       return(
           <span className="edge">
		   {
			   numOfConditions ? this.props.edge.conditions.map(function(c,j){

			                    return <span className="condition" key={i++}> {c.variable +( j<numOfConditions-1 ? "+" : "") } </span>;}
			                ) : null
		   }
           </span>
       )
   } 
});

module.exports = Edge;