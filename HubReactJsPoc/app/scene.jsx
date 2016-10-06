var React = require("react");
var Edge = require("./edge.jsx");

var Scene = React.createClass({
   render:function(){
        var i=0;
        return(
           <li className="scene" >
             <span className="scene-title">{this.props.scene.sceneName}</span>
             {
               this.props.scene && this.props.scene.edeges && this.props.scene.edeges.length &&
                             <ul>
                             {
                                    this.props.scene.edeges.map(function(e){
                                                                        return (
                                                                                <Scene scene={e.destination} key={++i}/>
                                                                                )
                                     })
                             }
                             </ul>
             }
           </li>
       )
   }
});

module.exports = Scene;