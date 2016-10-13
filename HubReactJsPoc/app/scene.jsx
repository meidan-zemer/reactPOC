var React = require("react");
var Edge = require("./edge.jsx");
var ManageNode = require("./manageNode.jsx");

var Scene = React.createClass({
        getInitialState:function(){
          return {
              currentNode:{}
              };
        },

        addNode: function(name){
            this.props.addChildCB(name,this.props.scene);
        },

        render:function(){
            var i=0;
            var _that = this;
            return(
               <li className="scene" >
               <ManageNode addNewNodeCB={this.addNode}/>
                 <span className="scene-title">
                    {this.props.scene.sceneName}
                 </span>
                 {
                   this.props.scene && this.props.scene.edges && this.props.scene.edges.length &&
                                 <ul>
                                 {
                                        this.props.scene.edges.map(function(e){
                                                                            return (
                                                                                    <Scene scene={e.destination} addChildCB={_that.props.addChildCB}  key={++i}/>
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