var React = require("react");
var ReactDom = require("react-dom");
var $ =  require("./lib/jquery/dist/jquery.min.js");
var Scene = require("./scene.jsx");
var Edge = require("./edge.jsx");

var App = React.createClass({
   render:function(){	  	   
	   var result = [];	   
	   var sceneQueue = [this.props.scene];
	   var i=0;
	   while(sceneQueue.length > 0){
		   var currentScene = sceneQueue.shift(1);
		   if(!currentScene)
			   continue;
		   result.push(<Scene scene={currentScene} key={i++}/>);
		   if(currentScene.edegs){
			   sceneQueue = sceneQueue.concat(currentScene.edegs.map(function(e){
				   result.push(<Edge edge={e} key={i++}/>);
				   return e.destination;			   
			   }));			   
		   }
		   
	   }
	   
       return(
           <div className="app">
		   {result}
           </div>
       )
   } 
});

$.get("flowcharts.json", function(result){
	ReactDom.render(<App scene={result}/>, document.getElementById("container"));
});

