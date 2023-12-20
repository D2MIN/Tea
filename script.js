let s1 = document.getElementById("set1");
let s2 = document.getElementById("set2");
let s3 = document.getElementById("set3");

s1.addEventListener('mouseenter', function() {
    this.style.border = "4px solid black";
    this.style.minHeight = "450px";
    this.style.fontWeight = "600";
    s2.style.border = "2px solid black";
    s2.style.minHeight = "450px";
    s2.style.fontWeight = "400";
});

s1.addEventListener('mouseleave', function() {
    this.style.border = "2px solid black";
    this.style.minHeight = "450px";
    this.style.fontWeight = "400";
    s2.style.border = "4px solid black";
    s2.style.minHeight = "450px";
    s2.style.fontWeight = "600";
});

s2.addEventListener('mouseenter', function() {
    this.style.border = "4px solid black";
    this.style.minHeight = "450px";
    this.style.fontWeight = "600";
});

s2.addEventListener('mouseleave', function() {
    this.style.border = "2px solid black";
    this.style.minHeight = "400px";
    this.style.fontSize = "18px";
    s2.style.border = "4px solid black";
    s2.style.minHeight = "450px"
    s2.style.fontWeight = "600";
});

s3.addEventListener('mouseenter', function() {
    this.style.border = "4px solid black";
    this.style.minHeight = "450px";
    this.style.fontWeight = "600";
    s2.style.border = "2px solid black";
    s2.style.minHeight = "400px";
    s2.style.fontWeight = "400";
});

s3.addEventListener('mouseleave', function() {
    this.style.border = "2px solid black";
    this.style.minHeight = "400px";
    this.style.fontWeight = "400";
    s2.style.border = "4px solid black";
    s2.style.minHeight = "450px";
    s2.style.fontWeight = "600";
});
