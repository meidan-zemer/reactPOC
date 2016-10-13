var React = require("react");

var ManageNode = React.createClass({
    getInitialState:function(){
        return {
                    openForm:false,
                    value:""
         };
    },
    updateNewNodeName:function(event){
         this.setState({value: event.target.value});
    },

    openAddNodeForm:function(){
        this.setState({openForm: true});
    },

    addNewNode:function(event){
        this.setState({openForm: false});
        this.props.addNewNodeCB(this.state.value);
        this.setState({value:""});
    },

    render:function(){
        var res = [];
        var i=0;
        res.push(<a href="javascript: void(0)" key={i++} className="add-child" onClick={this.openAddNodeForm}>+</a>);
        if(this.state.openForm)
            res.push(<div key={i++} className="add-child-form">
                <input key={i++} type="text" value={this.state.value} onChange={this.updateNewNodeName}/>
                <input key={i++} type="button" onClick={this.addNewNode} value="Add Child"/>
            </div>);
        return (
                <span className="node-management">
                    {res}
                </span>
                );
    }
});

module.exports = ManageNode;