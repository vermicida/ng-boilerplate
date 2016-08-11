
(function() {

    var config = {
        map: {
            "app": "app",
            "@angular": "node_modules/@angular",
            "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
            "rxjs": "node_modules/rxjs"
        },
        packages: {
            "app": { main: "main.js", defaultExtension: "js" },
            "angular2-in-memory-web-api": { main: "index.js", defaultExtension: "js" },
            "rxjs": { defaultExtension: "js" }
        }
    };

    var setPackageLoader = System.packageWithIndex
        ? function(pkg) { config.packages["@angular/" + pkg] = { main: "index.js", defaultExtension: "js" }; }
        : function(pkg) { config.packages["@angular/" + pkg] = { main: "/bundles/" + pkg + ".umd.js", defaultExtension: "js" }; };
    
    ["common",
     "compiler",
     "core",
     "forms",
     "http",
     "platform-browser",
     "platform-browser-dynamic",
     "router",
     "router-deprecated",
     "upgrade"].forEach(setPackageLoader);

    System.config(config);

})();
