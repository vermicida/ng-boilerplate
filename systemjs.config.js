
(function() {

    // Default SystemJS config.
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

    // Sets the package loader.
    var setPackageLoader = System.packageWithIndex
        // Individual files (~300 requests).
        ? function(pkg) { config.packages["@angular/" + pkg] = { main: "index.js", defaultExtension: "js" }; }
        // Bundled (~40 requests).
        : function(pkg) { config.packages["@angular/" + pkg] = { main: "/bundles/" + pkg + ".umd.js", defaultExtension: "js" }; };
    
    // Adds the Angular packages loaders.
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

     // Pass the generated config to SystemJS.
     System.config(config);

})();
