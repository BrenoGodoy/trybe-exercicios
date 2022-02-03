a = 2000;
b = 2000;
c = 1001;

if (a > b && a > c) {
    console.log("A!");
}
else if (b > a && b > c) {
    console.log("B!");
}
else if (c > a && c > b) {
    console.log("C!");
}
else {
    console.log("Existem valores iguais!");
}