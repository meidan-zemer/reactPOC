var React = require("react");
var App = require("../app/app.jsx");
var ReactTestUtils = require('react-addons-test-utils');

debugger;
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
   var AppInstance = ReactTestUtils.renderIntoDocument(<App scene={scene}/>);
   expect(scene).toEqual(AppInstance.getCurrentTree());
});


test("Add node",function(){
    var newSceneName = "New Opening"
    var AppInstance = ReactTestUtils.renderIntoDocument(<App scene={scene}/>);
    AppInstance.addChild(newSceneName,scene);
    var newJson=AppInstance.getCurrentTree();
    expect(newSceneName).toEqual(newJson.edges[1].destination.sceneName);
});