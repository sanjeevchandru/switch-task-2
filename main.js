var mobilename="iphone";
document.write("Mobile Shop"+"<br>");
document.write("_____________"+"<br>");
switch(mobilename){
    case "oppo":
        document.write("OPPO A17,OPPO A58,OPPO Reno 10,OPPO F23 5G IS Available"+"<br>");
        document.write("starting rate 9999/-");
    break;
    case "samsung":
        document.write("SAMSUNG Galaxy M01,SAMSUNG Galaxy F13,SAMSUNG Galaxy F34 5G is Available"+"<br>");
        document.write("starting rate 10999/-");
    break;
    case "vivo":
        document.write("VIVO Y27,VIVO Y36,VIVO Y29e 5G,VIVO Y100A 5G IS Available"+"<br>");
        document.write("starting rate 8999/-");
    break;
    case "nokia":
        document.write("NOKIA G21,NOKIA G42 5G,NOKIA C12 IS Available"+"<br>");
        document.write("starting rate 999/-");
    break;
    case "iphone":
        document.write("IPHONE 13,IPHONE 15,IPHONE 15 ProMax,IPHONE 14 5G IS Available"+"<br>");
        document.write("starting rate 29999/-");
    break;
    default:
        document.write("ONLY TO CHECK oppo,samsung,vivo,nokia and iphone ");

}