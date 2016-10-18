var React = require("react");
var App = require("../app/app.jsx");
var Scene = require("../app/scene.jsx");
var ReactTestUtils = require('react-addons-test-utils');

var scene = {
                "sceneName": "Opening",
                "edges": [{
                    "destination": {
                        "sceneName": "World of Content",
                        "edges": [{
                            "destination": {
                                "sceneName": "Content Rec",
                                "edges": [{
                                    "destination": {
                                        "sceneName": "App Intro",
                                        "edges": [{
                                            "destination": {
                                                "sceneName": "TV Go",
                                                "edges": [{
                                                    "destination": {
                                                        "sceneName": "Wifi Hotspots",
                                                        "edges": [{
                                                            "destination": {
                                                                "sceneName": "Wifi App",
                                                                "edges": [{
                                                                    "destination": {
                                                                        "sceneName": "My Account",
                                                                        "edges": [{
                                                                                "destination": {
                                                                                    "sceneName": "CTA"
                                                                                }
                                                                            }

                                                                        ]
                                                                    }
                                                                }]
                                                            },
                                                            "conditions": [{
                                                                "variable": "No TV"
                                                            }]
                                                        }]
                                                    },
                                                    "conditions": [{
                                                        "variable": "X1 on legacy"
                                                    }, {
                                                        "variable": "Upper tier Internat"
                                                    }]
                                                }, {
                                                    "destination": {
                                                        "sceneName": "Aports App"
                                                    },
                                                    "conditions": [{
                                                        "variable": "X1 Only"
                                                    }, {
                                                        "variable": "Viewing History Sports"
                                                    }]
                                                }, {
                                                    "destination": {
                                                        "sceneName": "Kid Zone"
                                                    },
                                                    "conditions": [{
                                                        "variable": "X1 Only"
                                                    }, {
                                                        "variable": "Viewing History Kids"
                                                    }]
                                                }]

                                            },
                                            "conditions": null
                                        }]

                                    }
                                }]
                            },
                            "conditions": [{
                                "variable": "X1"
                            }]
                        }]
                    },
                    "conditions": [{
                        "variable": "TV/TV Internet"
                    }]
                }]
            };

test('Get Tree JSON',function (){
   var json = JSON.parse(JSON.stringify(scene));
   var AppInstance = ReactTestUtils.renderIntoDocument(<App scene={json}/>);
   expect(json).toEqual(AppInstance.getCurrentTree());
});

test("Add node to root",function(){
    var json = JSON.parse(JSON.stringify(scene));
    var newSceneName = "New Opening";
    var AppInstance = ReactTestUtils.renderIntoDocument(<App scene={json}/>);
    AppInstance.addChild(newSceneName,json);
    var newJson=AppInstance.getCurrentTree();
    expect(newSceneName).toEqual(newJson.edges[1].destination.sceneName);
});

test('Add node to "Kid Zone"',function(){
    var json = JSON.parse(JSON.stringify(scene));
    var newSceneName = "Kid Zone child";
    var AppInstance = ReactTestUtils.renderIntoDocument(<App scene={Object.assign({}, json)}/>);
    var KidZoneComponent = ReactTestUtils.scryRenderedComponentsWithType(AppInstance, Scene).filter(function(c){
           if(c.getSceneName() == "Kid Zone")
                return true;
            return false;
    });
    KidZoneComponent[0].addNode(newSceneName);
    var expectedJSON = {"sceneName":"Opening","edges":[{"destination":{"sceneName":"World of Content","edges":[{"destination":{"sceneName":"Content Rec","edges":[{"destination":{"sceneName":"App Intro","edges":[{"destination":{"sceneName":"TV Go","edges":[{"destination":{"sceneName":"Wifi Hotspots","edges":[{"destination":{"sceneName":"Wifi App","edges":[{"destination":{"sceneName":"My Account","edges":[{"destination":{"sceneName":"CTA"}}]}}]},"conditions":[{"variable":"No TV"}]}]},"conditions":[{"variable":"X1 on legacy"},{"variable":"Upper tier Internat"}]},{"destination":{"sceneName":"Aports App"},"conditions":[{"variable":"X1 Only"},{"variable":"Viewing History Sports"}]},{"destination":{"sceneName":"Kid Zone","edges":[{"destination":{"sceneName":"Kid Zone child"}}]},"conditions":[{"variable":"X1 Only"},{"variable":"Viewing History Kids"}]}]},"conditions":null}]}}]},"conditions":[{"variable":"X1"}]}]},"conditions":[{"variable":"TV/TV Internet"}]}]};
    expect(expectedJSON).toEqual(AppInstance.getCurrentTree());

});