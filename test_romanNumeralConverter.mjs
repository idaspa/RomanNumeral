import test from "./test.mjs"
import decToRoman from "../romanNumeralConverter.mjs"

test(decToRoman("a"), "", "Kovertering av ikke riktig input");

test(decToRoman(1), "I", "Konvertering av 1 til Romersk");
test(decToRoman(2), "II", "Konvertering av 2 til Romersk");
test(decToRoman(4), "IV", "Konvertering av 4 til Romersk");
test(decToRoman(5), "V", "Konvertering av 5 til Romersk");
test(decToRoman(6), "VI", "Konvertering av 6 til Romersk");
test(decToRoman(7), "VII", "Konvertering av 7 til Romersk");
test(decToRoman(9), "IX", "Konvertering av 9 til Romersk");
test(decToRoman(10), "X", "Konvertering av 10 til Romersk");
test(decToRoman(38), "XXXVIII", "Konvertering av 38 til Romersk");
test(decToRoman(39), "XXXIX", "Konvertering av 39 til Romersk");
test(decToRoman(40), "XL", "Konvertering av 40 til Romersk");
test(decToRoman(50), "L", "Konvertering av 50 til Romersk");
test(decToRoman(90), "XC", "Konvertering av 90 til Romersk");
test(decToRoman(100), "C", "Konvertering av 100 til Romersk");
test(decToRoman(490), "XD", "konvertering av 490 til Romersk");
test(decToRoman(500), "D", "Konvertering av 500 til Romersk");
test(decToRoman(990), "XM", "Konvertering av 990 til Romersk");
test(decToRoman(1000), "M", "Konvertering av 1000 til romersk");

