var React = require("react");
var ReactDom = require("react-dom");
var $ =  require("./lib/jquery/dist/jquery.min.js");
var Scene = require("./scene.jsx");
var Edge = require("./edge.jsx");

var App = React.createClass({

    getInitialState:function(){
        return {
                scene:{}
            };

    },

    updateRootScene:function(scene){
        this.setState({scene:scene});
    },

    addChild:function(name,parentScene){
        parentScene.edges.push({
            destination:{
                sceneName:name
            }
        });

       this.forceUpdate();
    },

    getCurrentTree:function(){
        return this.state.scene;
    },

    componentDidMount: function(){

        $.get(JSONLocation ? JSONLocation : "flowcharts.json", this.updateRootScene);
    },

    render:function(){
            var i=0;
            return (
                    <ul>
                        <Scene key={i++} scene={this.state.scene} addChildCB={this.addChild}/>
                    </ul>
                   )
        }
});



ReactDom.render(<App/>, document.getElementById("container"));
