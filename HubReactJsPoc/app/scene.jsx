var React = require("react");
var Edge = require("./edge.jsx");

var Scene = React.createClass({
   render:function(){
       return(
           <div className="scene">
			 <h3 className="text-center">{this.props.scene.sceneName}</h3>
           </div>
       )
   } 
});

module.exports = Scene;