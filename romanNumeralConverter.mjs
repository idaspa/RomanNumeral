function decToRoman(dec) {

    let output = "";
    while (dec > 0) {
        let diff = 0;

        if (dec >= 1000) {
            diff = 1000
            output += "M";
        }
        else if (dec >= 990) {
            diff = 990;
            output += "XM";
        }
        else if (dec >= 500) {
            diff = 500;
            output += "D";
        }
        else if (dec >= 490) {
            diff = 490;
            output += "XD";
        }
        else if (dec >= 100) {
            diff = 100;
            output += "C";
        }
        else if (dec >= 90) {
            diff = 90;
            output += "XC";
        }
        else if (dec >= 50) {
            diff = 50;
            output += "L";
        }
        else if (dec >= 40) {
            diff = 40;
            output += "XL";
        }
        else if (dec >= 10) {
            diff = 10;
            output += "X";
        }
        else if (dec >= 9) {
            diff = 9;
            output += "IX";
        }
        else if (dec >= 5) {
            output += "V";
            diff = 5;
        }
        else if (dec >= 4) {
            output += "IV";
            diff = 4
        }
        else {
            output += "I";
            diff = 1;
        }

        dec -= diff
    }
    return output;
}



export default decToRoman;