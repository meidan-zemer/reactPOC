var React = require("react");
var App = require("../app/app.jsx");
var renderer = require("react-test-renderer");
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


test('Render App',function (){
   var component =renderer.create(
        <App scene={scene}/>
   )
   expect(component.toJSON()).toMatchSnapshot();
});