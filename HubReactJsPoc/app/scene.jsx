var React = require("react");
var Edge = require("./edge.jsx");

var Scene = React.createClass({
        getInitialState:function(){
          return {
              currentNode:{}
              };
        },
        addNode: function(name){
            this.props.addChildCB(name,this.props.scene);
        },
        deleteChildCB:function(){

        },
        deleteNode:function(){
            if(this.props.deleteChildCB)
            {
                this.props.deleteChildCB();
            }
        },

        render:function(){
            var i=0;
            var _that = this;
            return(
               <li className="scene" >
                 <span className="scene-title">{this.props.scene.sceneName}</span>
                 {
                   this.props.scene && this.props.scene.edeges && this.props.scene.edeges.length &&
                                 <ul>
                                 {
                                        this.props.scene.edeges.map(function(e){
                                                                            return (
                                                                                    <Scene scene={e.destination} addChildCB={_that.props.addChildCB} deleteChildCB={_that.deleteChildCB} key={++i}/>
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