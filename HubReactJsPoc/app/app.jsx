var React = require("react");
var Scene = require("./scene.jsx");

var App = React.createClass({

    getInitialState:function(){
        return {
                scene:this.props.scene
            };

    },

    addChild:function(name,parentScene){
        if(!parentScene.edges)
            parentScene.edges=[];

        parentScene.edges.push({
            destination:{
                sceneName:name
            }
        });

       this.forceUpdate();
    },

    downloadJson:function(){
        document.location = 'data:Application/octet-stream,' +
                                 encodeURIComponent(JSON.stringify(this.getCurrentTree()));
    },

    getCurrentTree:function(){
        return this.state.scene;
    },

    render:function(){
            var i=0;
            return (<div>
                        <input type="button" value="Download JSON" onClick={this.downloadJson}/>
                        <ul>
                            <Scene key={i++} scene={this.state.scene} addChildCB={this.addChild}/>
                        </ul>
                    </div>
                   )
        }
});

module.exports = App;