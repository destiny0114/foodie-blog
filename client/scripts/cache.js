"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var matter = require("gray-matter");
function getPosts() {
    var files = fs.readdirSync(path.join("posts"));
    var posts = files.map(function (filename) {
        var slug = filename.replace(".md", "");
        var formatter = matter.read(path.join("posts", filename)).data;
        return { slug: slug, formatter: formatter };
    });
    return JSON.stringify(posts);
}
var fileContents = "export const posts = ".concat(getPosts());
try {
    fs.readdirSync("cache");
}
catch (error) {
    fs.mkdirSync("cache");
}
fs.writeFile("cache/data.ts", fileContents, function (err) {
    if (err)
        return console.log(err);
    console.log("Posts cached.");
});
