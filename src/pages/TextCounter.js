import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TbTerminal, TbNumbers } from "react-icons/tb";
import { LuWholeWord } from "react-icons/lu";
import { TiSortAlphabetically } from "react-icons/ti";
import { MdOutlineShortText } from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";

import { useToken } from "../hooks/useToken";

import { TextCounterHeader } from "../components/TextCounterHeader";
import { CharacterCard } from "../components/CharacterCard";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";

import { getUser, getUserCounts, saveCount, getCount, updateCount } from "../services/dataService";

export const TextCounter = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const tcid = JSON.parse(sessionStorage.getItem("tcid"));
  const isTokenExpired = useToken();

  const textareaRef = useRef();

  const [clearBtn, setClearBtn] = useState(false);
  const [toggleMoreOption, setToggleMoreOption] = useState(false);
  const [resultList, setResultList] = useState([]);
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);
  const [countList, setCountList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
  const [updateId, setUpdateId] = useState(null);


  const [characterLength, setCharacterLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);
  const [letterLength, setLetterLength] = useState(0);
  const [numberLength, setNumberLength] = useState(0);

  const [spaceLength, setSpaceLength] = useState(0);
  const [exclamationLength, setExclamationLength] = useState(0);
  const [quotationLength, setQuotationLength] = useState(0);
  const [numberSignLength, setNumberSignLength] = useState(0);
  const [dollarSignLength, setDollarSignLength] = useState(0);
  const [percentSignLength, setPercentSignLength] = useState(0);
  const [ampersandLength, setAmpersandLength] = useState(0);
  const [apostropheLength, setApostropheLength] = useState(0);
  const [leftParenthesisLength, setLeftParenthesisLength] = useState(0);
  const [rightParenthesisLength, setRightParenthesisLength] = useState(0);
  const [asteriskLength, setAsteriskLength] = useState(0);
  const [plusSignLength, setPlusSignLength] = useState(0);
  const [commaLength, setCommaLength] = useState(0);
  const [hyphenLength, setHyphenLength] = useState(0);
  const [periodLength, setPeriodLength] = useState(0);
  const [slashLength, setSlashLength] = useState(0);

  const [uppercaseALength, setUppercaseALength] = useState(0);
  const [uppercaseBLength, setUppercaseBLength] = useState(0);
  const [uppercaseCLength, setUppercaseCLength] = useState(0);
  const [uppercaseDLength, setUppercaseDLength] = useState(0);
  const [uppercaseELength, setUppercaseELength] = useState(0);
  const [uppercaseFLength, setUppercaseFLength] = useState(0);
  const [uppercaseGLength, setUppercaseGLength] = useState(0);
  const [uppercaseHLength, setUppercaseHLength] = useState(0);
  const [uppercaseILength, setUppercaseILength] = useState(0);
  const [uppercaseJLength, setUppercaseJLength] = useState(0);
  const [uppercaseKLength, setUppercaseKLength] = useState(0);
  const [uppercaseLLength, setUppercaseLLength] = useState(0);
  const [uppercaseMLength, setUppercaseMLength] = useState(0);
  const [uppercaseNLength, setUppercaseNLength] = useState(0);
  const [uppercaseOLength, setUppercaseOLength] = useState(0);
  const [uppercasePLength, setUppercasePLength] = useState(0);
  const [uppercaseQLength, setUppercaseQLength] = useState(0);
  const [uppercaseRLength, setUppercaseRLength] = useState(0);
  const [uppercaseSLength, setUppercaseSLength] = useState(0);
  const [uppercaseTLength, setUppercaseTLength] = useState(0);
  const [uppercaseULength, setUppercaseULength] = useState(0);
  const [uppercaseVLength, setUppercaseVLength] = useState(0);
  const [uppercaseWLength, setUppercaseWLength] = useState(0);
  const [uppercaseXLength, setUppercaseXLength] = useState(0);
  const [uppercaseYLength, setUppercaseYLength] = useState(0);
  const [uppercaseZLength, setUppercaseZLength] = useState(0);

  const [lowercaseALength, setLowercaseALength] = useState(0);
  const [lowercaseBLength, setLowercaseBLength] = useState(0);
  const [lowercaseCLength, setLowercaseCLength] = useState(0);
  const [lowercaseDLength, setLowercaseDLength] = useState(0);
  const [lowercaseELength, setLowercaseELength] = useState(0);
  const [lowercaseFLength, setLowercaseFLength] = useState(0);
  const [lowercaseGLength, setLowercaseGLength] = useState(0);
  const [lowercaseHLength, setLowercaseHLength] = useState(0);
  const [lowercaseILength, setLowercaseILength] = useState(0);
  const [lowercaseJLength, setLowercaseJLength] = useState(0);
  const [lowercaseKLength, setLowercaseKLength] = useState(0);
  const [lowercaseLLength, setLowercaseLLength] = useState(0);
  const [lowercaseMLength, setLowercaseMLength] = useState(0);
  const [lowercaseNLength, setLowercaseNLength] = useState(0);
  const [lowercaseOLength, setLowercaseOLength] = useState(0);
  const [lowercasePLength, setLowercasePLength] = useState(0);
  const [lowercaseQLength, setLowercaseQLength] = useState(0);
  const [lowercaseRLength, setLowercaseRLength] = useState(0);
  const [lowercaseSLength, setLowercaseSLength] = useState(0);
  const [lowercaseTLength, setLowercaseTLength] = useState(0);
  const [lowercaseULength, setLowercaseULength] = useState(0);
  const [lowercaseVLength, setLowercaseVLength] = useState(0);
  const [lowercaseWLength, setLowercaseWLength] = useState(0);
  const [lowercaseXLength, setLowercaseXLength] = useState(0);
  const [lowercaseYLength, setLowercaseYLength] = useState(0);
  const [lowercaseZLength, setLowercaseZLength] = useState(0);

  const [digitZeroLength, setDigitZeroLength] = useState(0);
  const [digitOneLength, setDigitOneLength] = useState(0);
  const [digitTwoLength, setDigitTwoLength] = useState(0);
  const [digitThreeLength, setDigitThreeLength] = useState(0);
  const [digitFourLength, setDigitFourLength] = useState(0);
  const [digitFiveLength, setDigitFiveLength] = useState(0);
  const [digitSixLength, setDigitSixLength] = useState(0);
  const [digitSevenLength, setDigitSevenLength] = useState(0);
  const [digitEightLength, setDigitEightLength] = useState(0);
  const [digitNineLength, setDigitNineLength] = useState(0);
  const [colonLength, setColonLength] = useState(0);
  const [semicolonLength, setSemicolonLength] = useState(0);
  const [lessThanLength, setLessThanLength] = useState(0);
  const [equalSignLength, setEqualSignLength] = useState(0);
  const [greaterThanLength, setGreaterThanLength] = useState(0);
  const [questionMarkLength, setQuestionMarkLength] = useState(0);
  const [atSignLength, setAtSignLength] = useState(0);
  const [leftSquareBracketLength, setLeftSquareBracketLength] = useState(0);
  const [backslashLength, setBackslashLength] = useState(0);
  const [rightSquareBracketLength, setRightSquareBracketLength] = useState(0);
  const [caretLength, setCaretLength] = useState(0);
  const [underscoreLength, setUnderscoreLength] = useState(0);
  const [graveAccentLength, setGraveAccentLength] = useState(0);
  const [leftCurlyBraceLength, setLeftCurlyBraceLength] = useState(0);
  const [verticalBarLength, setVerticalBarLength] = useState(0);
  const [rightCurlyBraceLength, setRightCurlyBraceLength] = useState(0);
  const [tildeLength, setTildeLength] = useState(0);
  const [enterLength, setEnterLength] = useState(0);
  const [lineLength, setLineLength] = useState(0);


  const ASCIIChar = [
    {"id": 1, "character": " ", "length": spaceLength, "entity_number": "&#32;", "name": "Space"},
    {"id": 2, "character": "!", "length": exclamationLength, "entity_number": "&#32;", "name": "Exclamation"},
    {"id": 3, "character": "\"", "length": quotationLength, "entity_number": "&#34;", "name": "Quotation"},
    {"id": 4, "character": "#", "length": numberSignLength, "entity_number": "&#35;", "name": "Number sign"},
    {"id": 5, "character": "$", "length": dollarSignLength, "entity_number": "&#36;", "name": "Dollar sign"},
    {"id": 6, "character": "%", "length": percentSignLength, "entity_number": "&#37;", "name": "Percent sign"},
    {"id": 7, "character": "&", "length": ampersandLength, "entity_number": "&#38;", "name": "Ampersand"},
    {"id": 8, "character": "'", "length": apostropheLength, "entity_number": "&#39;", "name": "Apostrophe"},
    {"id": 9, "character": "(", "length": leftParenthesisLength, "entity_number": "&#40;", "name": "Left parenthesis"},
    {"id": 10, "character": ")", "length": rightParenthesisLength, "entity_number": "&#41;", "name": "Right parenthesis"},
    {"id": 11, "character": "*", "length": asteriskLength, "entity_number": "&#42;", "name": "Asterisk"},
    {"id": 12, "character": "+", "length": plusSignLength, "entity_number": "&#43;", "name": "Plus sign"},
    {"id": 13, "character": ",", "length": commaLength, "entity_number": "&#44;", "name": "Comma"},
    {"id": 14, "character": "-", "length": hyphenLength, "entity_number": "&#45;", "name": "Hyphen"},
    {"id": 15, "character": ".", "length": periodLength, "entity_number": "&#46;", "name": "Period"},
    {"id": 16, "character": "/", "length": slashLength, "entity_number": "&#47;", "name": "Slash"},

    {"id": 17, "character": "0", "length": digitZeroLength, "entity_number": "&#48;", "name": "Digit 0"},
    {"id": 18, "character": "1", "length": digitOneLength, "entity_number": "&#49;", "name": "Digit 1"},
    {"id": 19, "character": "2", "length": digitTwoLength, "entity_number": "&#50;", "name": "Digit 2"},
    {"id": 20, "character": "3", "length": digitThreeLength, "entity_number": "&#51;", "name": "Digit 3"},
    {"id": 21, "character": "4", "length": digitFourLength, "entity_number": "&#52;", "name": "Digit 4"},
    {"id": 22, "character": "5", "length": digitFiveLength, "entity_number": "&#53;", "name": "Digit 5"},
    {"id": 23, "character": "6", "length": digitSixLength, "entity_number": "&#54;", "name": "Digit 6"},
    {"id": 24, "character": "7", "length": digitSevenLength, "entity_number": "&#55;", "name": "Digit 7"},
    {"id": 25, "character": "8", "length": digitEightLength, "entity_number": "&#56;", "name": "Digit 8"},
    {"id": 26, "character": "9", "length": digitNineLength, "entity_number": "&#57;", "name": "Digit 9"},
    {"id": 27, "character": ":", "length": colonLength, "entity_number": "&#58;", "name": "Slash"},
    {"id": 28, "character": ";", "length": semicolonLength, "entity_number": "&#59;", "name": "Semicolon"},
    {"id": 29, "character": "<", "length": lessThanLength, "entity_number": "&#60;", "name": "Less than"},
    {"id": 30, "character": "=", "length": equalSignLength, "entity_number": "&#61;", "name": "Equal sign"},
    {"id": 31, "character": ">", "length": greaterThanLength, "entity_number": "&#62;", "name": "Greater than"},
    {"id": 32, "character": "?", "length": questionMarkLength, "entity_number": "&#63;", "name": "Question mark"},
    {"id": 33, "character": "@", "length": atSignLength, "entity_number": "&#64;", "name": "At sign"},

    {"id": 34, "character": "A", "length": uppercaseALength, "entity_number": "&#65;", "name": "Uppercase A"},
    {"id": 35, "character": "B", "length": uppercaseBLength, "entity_number": "&#66;", "name": "Uppercase B"},
    {"id": 36, "character": "C", "length": uppercaseCLength, "entity_number": "&#67;", "name": "Uppercase C"},
    {"id": 37, "character": "D", "length": uppercaseDLength, "entity_number": "&#68;", "name": "Uppercase D"},
    {"id": 38, "character": "E", "length": uppercaseELength, "entity_number": "&#69;", "name": "Uppercase E"},
    {"id": 39, "character": "F", "length": uppercaseFLength, "entity_number": "&#70;", "name": "Uppercase F"},
    {"id": 40, "character": "G", "length": uppercaseGLength, "entity_number": "&#71;", "name": "Uppercase G"},
    {"id": 41, "character": "H", "length": uppercaseHLength, "entity_number": "&#72;", "name": "Uppercase H"},
    {"id": 42, "character": "I", "length": uppercaseILength, "entity_number": "&#73;", "name": "Uppercase I"},
    {"id": 43, "character": "J", "length": uppercaseJLength, "entity_number": "&#74;", "name": "Uppercase J"},
    {"id": 44, "character": "K", "length": uppercaseKLength, "entity_number": "&#75;", "name": "Uppercase K"},
    {"id": 45, "character": "L", "length": uppercaseLLength, "entity_number": "&#76;", "name": "Uppercase L"},
    {"id": 46, "character": "M", "length": uppercaseMLength, "entity_number": "&#77;", "name": "Uppercase M"},
    {"id": 47, "character": "N", "length": uppercaseNLength, "entity_number": "&#78;", "name": "Uppercase N"},
    {"id": 48, "character": "O", "length": uppercaseOLength, "entity_number": "&#79;", "name": "Uppercase O"},
    {"id": 49, "character": "P", "length": uppercasePLength, "entity_number": "&#80;", "name": "Uppercase P"},
    {"id": 50, "character": "Q", "length": uppercaseQLength, "entity_number": "&#81;", "name": "Uppercase Q"},
    {"id": 51, "character": "R", "length": uppercaseRLength, "entity_number": "&#82;", "name": "Uppercase R"},
    {"id": 52, "character": "S", "length": uppercaseSLength, "entity_number": "&#83;", "name": "Uppercase S"},
    {"id": 53, "character": "T", "length": uppercaseTLength, "entity_number": "&#84;", "name": "Uppercase T"},
    {"id": 54, "character": "U", "length": uppercaseULength, "entity_number": "&#85;", "name": "Uppercase U"},
    {"id": 55, "character": "V", "length": uppercaseVLength, "entity_number": "&#86;", "name": "Uppercase V"},
    {"id": 56, "character": "W", "length": uppercaseWLength, "entity_number": "&#87;", "name": "Uppercase W"},
    {"id": 57, "character": "X", "length": uppercaseXLength, "entity_number": "&#88;", "name": "Uppercase X"},
    {"id": 58, "character": "Y", "length": uppercaseYLength, "entity_number": "&#89;", "name": "Uppercase Y"},
    {"id": 59, "character": "Z", "length": uppercaseZLength, "entity_number": "&#90;", "name": "Uppercase Z"},

    {"id": 60, "character": "[", "length": leftSquareBracketLength, "entity_number": "&#91;", "name": "Left square bracket"},
    {"id": 61, "character": "\\", "length": backslashLength, "entity_number": "&#92;", "name": "Backslash"},
    {"id": 62, "character": "]", "length": rightSquareBracketLength, "entity_number": "&#93;", "name": "Right square bracket"},
    {"id": 63, "character": "^", "length": caretLength, "entity_number": "&#94;", "name": "Caret"},
    {"id": 64, "character": "_", "length": underscoreLength, "entity_number": "&#95;", "name": "Underscore"},
    {"id": 65, "character": "`", "length": graveAccentLength, "entity_number": "&#96;", "name": "Grave accent"},

    {"id": 66, "character": "a", "length": lowercaseALength, "entity_number": "&#97;", "name": "Lowercase a"},
    {"id": 67, "character": "b", "length": lowercaseBLength, "entity_number": "&#98;", "name": "Lowercase b"},
    {"id": 68, "character": "c", "length": lowercaseCLength, "entity_number": "&#99;", "name": "Lowercase c"},
    {"id": 69, "character": "d", "length": lowercaseDLength, "entity_number": "&#100;", "name": "Lowercase d"},
    {"id": 70, "character": "e", "length": lowercaseELength, "entity_number": "&#101;", "name": "Lowercase e"},
    {"id": 71, "character": "f", "length": lowercaseFLength, "entity_number": "&#102;", "name": "Lowercase f"},
    {"id": 72, "character": "g", "length": lowercaseGLength, "entity_number": "&#103;", "name": "Lowercase g"},
    {"id": 73, "character": "h", "length": lowercaseHLength, "entity_number": "&#104;", "name": "Lowercase h"},
    {"id": 74, "character": "i", "length": lowercaseILength, "entity_number": "&#105;", "name": "Lowercase i"},
    {"id": 75, "character": "j", "length": lowercaseJLength, "entity_number": "&#106;", "name": "Lowercase j"},
    {"id": 76, "character": "k", "length": lowercaseKLength, "entity_number": "&#107;", "name": "Lowercase k"},
    {"id": 77, "character": "l", "length": lowercaseLLength, "entity_number": "&#108;", "name": "Lowercase l"},
    {"id": 78, "character": "m", "length": lowercaseMLength, "entity_number": "&#109;", "name": "Lowercase m"},
    {"id": 79, "character": "n", "length": lowercaseNLength, "entity_number": "&#110;", "name": "Lowercase n"},
    {"id": 80, "character": "o", "length": lowercaseOLength, "entity_number": "&#111;", "name": "Lowercase o"},
    {"id": 81, "character": "p", "length": lowercasePLength, "entity_number": "&#112;", "name": "Lowercase p"},
    {"id": 82, "character": "q", "length": lowercaseQLength, "entity_number": "&#113;", "name": "Lowercase q"},
    {"id": 83, "character": "r", "length": lowercaseRLength, "entity_number": "&#114;", "name": "Lowercase r"},
    {"id": 84, "character": "s", "length": lowercaseSLength, "entity_number": "&#115;", "name": "Lowercase s"},
    {"id": 85, "character": "t", "length": lowercaseTLength, "entity_number": "&#116;", "name": "Lowercase t"},
    {"id": 86, "character": "u", "length": lowercaseULength, "entity_number": "&#117;", "name": "Lowercase u"},
    {"id": 87, "character": "v", "length": lowercaseVLength, "entity_number": "&#118;", "name": "Lowercase v"},
    {"id": 88, "character": "w", "length": lowercaseWLength, "entity_number": "&#119;", "name": "Lowercase w"},
    {"id": 89, "character": "x", "length": lowercaseXLength, "entity_number": "&#120;", "name": "Lowercase x"},
    {"id": 90, "character": "y", "length": lowercaseYLength, "entity_number": "&#121;", "name": "Lowercase y"},
    {"id": 91, "character": "z", "length": lowercaseZLength, "entity_number": "&#122;", "name": "Lowercase z"},


    {"id": 92, "character": "{", "length": leftCurlyBraceLength, "entity_number": "&#123;", "name": "Left curly brace"},
    {"id": 93, "character": "|","length": verticalBarLength, "entity_number": "&#124;", "name": "Vertical bar"},
    {"id": 94, "character": "}","length": rightCurlyBraceLength, "entity_number": "&#125;", "name": "Right curly brace"},
    {"id": 95, "character": "~","length": tildeLength, "entity_number": "&#126;", "name": "Tilde"},
    {"id": 96, "character": "\n","length": enterLength, "entity_number": "&#9166;", "name": "Enter"}
  ];

  const letterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const handleCounter = () => {
    const  value = textareaRef.current.value;
    if(value.length) {
      setClearBtn(true);
      setCharacterLength(value.split("").length);

      // https://stackoverflow.com/questions/62881201/javascript-regexp-new-lines-and-empty-spaces-at-start-and-end-of-a-string
      const words = textareaRef.current.value
                    .split(" ") // split by space
                    .map(x => x.trim()) // clean up the new lines
                    .filter(Boolean) // remove empty lines
                    .join('\n') // join back together

                    .split("\n") // split again by new lines
                    .map(x => x.trim()) // clean up the new lines;
                    .filter(Boolean) // remove empty lines


      setWordLength(words.length);

      const letters = value.split("").filter(item => letterArr.includes(item));
      setLetterLength(letters.length);

      setAllCharacterState(value);
      
    } else {
      setClearBtn(false);
      setResultList([]);
      unsetAllCharacterState();
    }
  }

  function setAllCharacterState(value) {

    setSpaceLength(value.split(" ").length - 1);
    setExclamationLength(value.split("!").length - 1);
    setQuotationLength(value.split('"').length - 1);
    setNumberSignLength(value.split("#").length - 1);
    setDollarSignLength(value.split("$").length - 1);
    setPercentSignLength(value.split("%").length - 1);
    setAmpersandLength(value.split("&").length - 1);
    setApostropheLength(value.split("'").length - 1);
    setLeftParenthesisLength(value.split("(").length - 1);
    setRightParenthesisLength(value.split(")").length - 1);
    setAsteriskLength(value.split("*").length - 1);
    setPlusSignLength(value.split("+").length - 1);
    setCommaLength(value.split(",").length - 1);
    setHyphenLength(value.split("-").length - 1);
    setPeriodLength(value.split(".").length - 1);
    setSlashLength(value.split("/").length - 1);

    setUppercaseALength(value.split("A").length - 1);
    setUppercaseBLength(value.split("B").length - 1);
    setUppercaseCLength(value.split("C").length - 1);
    setUppercaseDLength(value.split("D").length - 1);
    setUppercaseELength(value.split("E").length - 1);
    setUppercaseFLength(value.split("F").length - 1);
    setUppercaseGLength(value.split("G").length - 1);
    setUppercaseHLength(value.split("H").length - 1);
    setUppercaseILength(value.split("I").length - 1);
    setUppercaseJLength(value.split("J").length - 1);
    setUppercaseKLength(value.split("K").length - 1);
    setUppercaseLLength(value.split("L").length - 1);
    setUppercaseMLength(value.split("M").length - 1);
    setUppercaseNLength(value.split("N").length - 1);
    setUppercaseOLength(value.split("O").length - 1);
    setUppercasePLength(value.split("P").length - 1);
    setUppercaseQLength(value.split("Q").length - 1);
    setUppercaseRLength(value.split("R").length - 1);
    setUppercaseSLength(value.split("S").length - 1);
    setUppercaseTLength(value.split("T").length - 1);
    setUppercaseULength(value.split("U").length - 1);
    setUppercaseVLength(value.split("V").length - 1);
    setUppercaseWLength(value.split("W").length - 1);
    setUppercaseXLength(value.split("X").length - 1);
    setUppercaseYLength(value.split("Y").length - 1);
    setUppercaseZLength(value.split("Z").length - 1);

    setLowercaseALength(value.split("a").length - 1);
    setLowercaseBLength(value.split("b").length - 1);
    setLowercaseCLength(value.split("c").length - 1);
    setLowercaseDLength(value.split("d").length - 1);
    setLowercaseELength(value.split("e").length - 1);
    setLowercaseFLength(value.split("f").length - 1);
    setLowercaseGLength(value.split("g").length - 1);
    setLowercaseHLength(value.split("h").length - 1);
    setLowercaseILength(value.split("i").length - 1);
    setLowercaseJLength(value.split("j").length - 1);
    setLowercaseKLength(value.split("k").length - 1);
    setLowercaseLLength(value.split("l").length - 1);
    setLowercaseMLength(value.split("m").length - 1);
    setLowercaseNLength(value.split("n").length - 1);
    setLowercaseOLength(value.split("o").length - 1);
    setLowercasePLength(value.split("p").length - 1);
    setLowercaseQLength(value.split("q").length - 1);
    setLowercaseRLength(value.split("r").length - 1);
    setLowercaseSLength(value.split("s").length - 1);
    setLowercaseTLength(value.split("t").length - 1);
    setLowercaseULength(value.split("u").length - 1);
    setLowercaseVLength(value.split("v").length - 1);
    setLowercaseWLength(value.split("w").length - 1);
    setLowercaseXLength(value.split("x").length - 1);
    setLowercaseYLength(value.split("y").length - 1);
    setLowercaseZLength(value.split("z").length - 1);

    setDigitZeroLength(value.split("0").length - 1);
    setDigitOneLength(value.split("1").length - 1);
    setDigitTwoLength(value.split("2").length - 1);
    setDigitThreeLength(value.split("3").length - 1);
    setDigitFourLength(value.split("4").length - 1);
    setDigitFiveLength(value.split("5").length - 1);
    setDigitSixLength(value.split("6").length - 1);
    setDigitSevenLength(value.split("7").length - 1);
    setDigitEightLength(value.split("8").length - 1);
    setDigitNineLength(value.split("9").length - 1);
    setColonLength(value.split(":").length - 1);
    setSemicolonLength(value.split(";").length - 1);
    setLessThanLength(value.split("<").length - 1);
    setEqualSignLength(value.split("=").length - 1);
    setGreaterThanLength(value.split(">").length - 1);
    setQuestionMarkLength(value.split("?").length - 1);
    setAtSignLength(value.split("@").length - 1);
    setLeftSquareBracketLength(value.split("[").length - 1);
    setBackslashLength(value.split("\\").length - 1);
    setRightSquareBracketLength(value.split("]").length - 1);
    setCaretLength(value.split("^").length - 1);
    setUnderscoreLength(value.split("_").length - 1);
    setGraveAccentLength(value.split("`").length - 1);
    setLeftCurlyBraceLength(value.split("{").length - 1);
    setVerticalBarLength(value.split("|").length - 1);
    setRightCurlyBraceLength(value.split("}").length - 1);
    setTildeLength(value.split("~").length - 1);
    setEnterLength(value.split("\n").length - 1);
  }

  function unsetAllCharacterState() {
    setCharacterLength(0);
    setNumberLength(0);
    setLetterLength(0);
    setWordLength(0);
    setSpaceLength(0);
    setExclamationLength(0);
    setQuotationLength(0);
    setNumberSignLength(0);
    setDollarSignLength(0);
    setPercentSignLength(0);
    setAmpersandLength(0);
    setApostropheLength(0);
    setLeftParenthesisLength(0);
    setRightParenthesisLength(0);
    setAsteriskLength(0);
    setPlusSignLength(0);
    setCommaLength(0);
    setHyphenLength(0);
    setPeriodLength(0);
    setSlashLength(0);

    setUppercaseALength(0);
    setUppercaseBLength(0);
    setUppercaseCLength(0);
    setUppercaseDLength(0);
    setUppercaseELength(0);
    setUppercaseFLength(0);
    setUppercaseGLength(0);
    setUppercaseHLength(0);
    setUppercaseILength(0);
    setUppercaseJLength(0);
    setUppercaseKLength(0);
    setUppercaseLLength(0);
    setUppercaseMLength(0);
    setUppercaseNLength(0);
    setUppercaseOLength(0);
    setUppercasePLength(0);
    setUppercaseQLength(0);
    setUppercaseRLength(0);
    setUppercaseSLength(0);
    setUppercaseTLength(0);
    setUppercaseULength(0);
    setUppercaseVLength(0);
    setUppercaseWLength(0);
    setUppercaseXLength(0);
    setUppercaseYLength(0);
    setUppercaseZLength(0);

    setLowercaseALength(0);
    setLowercaseBLength(0);
    setLowercaseCLength(0);
    setLowercaseDLength(0);
    setLowercaseELength(0);
    setLowercaseFLength(0);
    setLowercaseGLength(0);
    setLowercaseHLength(0);
    setLowercaseILength(0);
    setLowercaseJLength(0);
    setLowercaseKLength(0);
    setLowercaseLLength(0);
    setLowercaseMLength(0);
    setLowercaseNLength(0);
    setLowercaseOLength(0);
    setLowercasePLength(0);
    setLowercaseQLength(0);
    setLowercaseRLength(0);
    setLowercaseSLength(0);
    setLowercaseTLength(0);
    setLowercaseULength(0);
    setLowercaseVLength(0);
    setLowercaseWLength(0);
    setLowercaseXLength(0);
    setLowercaseYLength(0);
    setLowercaseZLength(0);

    setDigitZeroLength(0);
    setDigitOneLength(0);
    setDigitTwoLength(0);
    setDigitThreeLength(0);
    setDigitFourLength(0);
    setDigitFiveLength(0);
    setDigitSixLength(0);
    setDigitSevenLength(0);
    setDigitEightLength(0);
    setDigitNineLength(0);
    setColonLength(0);
    setSemicolonLength(0);
    setLessThanLength(0);
    setEqualSignLength(0);
    setGreaterThanLength(0);
    setQuestionMarkLength(0);
    setAtSignLength(0);
    setLeftSquareBracketLength(0);
    setBackslashLength(0);
    setRightSquareBracketLength(0);
    setCaretLength(0);
    setUnderscoreLength(0);
    setGraveAccentLength(0);
    setLeftCurlyBraceLength(0);
    setVerticalBarLength(0);
    setRightCurlyBraceLength(0);
    setTildeLength(0);
    setEnterLength(0);
    setLineLength(0);
  }


  useEffect(() => {
    setNumberLength(digitZeroLength + digitOneLength + digitTwoLength + digitThreeLength + digitFourLength + digitFiveLength + digitSixLength + digitSevenLength + digitEightLength + digitNineLength);

  }, [digitZeroLength, digitOneLength, digitTwoLength, digitThreeLength, digitFourLength, digitFiveLength, digitSixLength, digitSevenLength, digitEightLength, digitNineLength]);

  useEffect(() => {
    textareaRef.current.value ? setLineLength(enterLength + 1) : setLineLength(0);
  }, [textareaRef, enterLength]);

  useEffect(() => {
    if(characterLength > 0 ){
      const characterList = ASCIIChar.filter(item => item.length > 0);
      characterList.length > 0 ? setResultList([...characterList]) : setResultList([]);
    }
  }, [characterLength]); //eslint-disable-line
  
  const handleClear = () => {
    textareaRef.current.value = "";
    setClearBtn(false);
    setResultList([]);
    setUpdateId(null);
    setIsUpdateEnabled(false);
    unsetAllCharacterState();
  }

  async function checkLoggedIn() {
    try {
      const data = await getUser();
      if(token && !isTokenExpired && tcid === data.id) {
        return data;
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  async function getSavedCounts() {
    try {
      const data = await getUserCounts();
      if(data) {
        setCountList(data);
        return data;
      } else {
        // toast.error(data);
      }
    } catch (error) {
      // toast.error(error.message);
    }
  }
  
  useEffect(() => {
    if(token) {
      getSavedCounts();
    }
  }, [token]);

  async function handleSaveCount() {
    try {
      setShowLoading(true);
      const user = await checkLoggedIn();
      const dataToSave = {
        text: textareaRef.current.value,
        character_length: characterLength,
        letter_length: letterLength,
        word_length: wordLength,
        number_length: numberLength,
        line_length: lineLength,
        result_list: resultList,
        user: {
          name: user.name,
          email: user.email,
          id: user.id
        },
        creation_time: new Date().toLocaleString(),
        update_time: null
      }
      const data = await saveCount(dataToSave);
      if(data) {
        setShowLoading(false);
        getSavedCounts();
        textareaRef.current.value="";
        setCharacterLength(0);
        setLetterLength(0);
        setWordLength(0);
        setNumberLength(0);
        setLineLength(0);
        setResultList([]);
        setClearBtn(false);
        unsetAllCharacterState();
        toast.success("Saved!");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function enableCountUpdate(id) {
    try {
      setShowLoading(true);
      const item = await getCount(id);

      if(item) {
        setShowLoading(false);
        textareaRef.current.value = item.text;
        setNumberLength(item.number_length);
        setLineLength(item.line_length);
        handleCounter();
        
        setIsUpdateEnabled(true);
        setUpdateId(id);
        setClearBtn(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleUpdateCount() {
    try {
      setShowLoading(true);
      const user = await checkLoggedIn();
      const item = await getCount(updateId);

      const dataToSave = {
        text: textareaRef.current.value,
        character_length: characterLength,
        letter_length: letterLength,
        word_length: wordLength,
        number_length: numberLength,
        line_length: lineLength,
        result_list: resultList,
        user: {
          name: user.name,
          email: user.email,
          id: user.id
        },
        creation_time: item.creation_time,
        update_time: new Date().toLocaleString()
      }
      const data = await updateCount(updateId, dataToSave);
      if(data) {
        setShowLoading(false);
        getSavedCounts();
        textareaRef.current.value="";
        setCharacterLength(0);
        setLetterLength(0);
        setWordLength(0);
        setNumberLength(0);
        setLineLength(0);
        unsetAllCharacterState();
        setResultList([]);
        setClearBtn(false);
        setUpdateId(null);
        setIsUpdateEnabled(false);
        toast.success("Updated!");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <TextCounterHeader enableCountUpdate={enableCountUpdate} getSavedCounts={getSavedCounts} countList={countList} setToggleLoginModal={setToggleLoginModal} setToggleRegistrationModal={setToggleRegistrationModal} />
      <main>        
        <section className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-full md:w-1/5 flex flex-col text-sm items-start">
            <div className="defaultItem">
              <p className="flex items-center gap-1 my-1"><TbTerminal className="inline-block border dark:border-gray-200 w-6 h-6 bg-gray-50 dark:bg-gray-300 rounded-md"/><span className="inline-block border py-px px-2 bg-gray-50 dark:bg-gray-300 rounded-md line-clamp-1 whitespace-nowrap">Character: {characterLength}</span></p>

              <p className="flex items-center gap-1 my-1"><TiSortAlphabetically className="inline-block border w-6 h-6  bg-gray-50 dark:bg-gray-300  rounded-md"/><span className="inline-block border py-px px-2  bg-gray-50 dark:bg-gray-300 rounded-md line-clamp-1 whitespace-nowrap">Letter: {letterLength}</span></p>

              <p className="flex items-center gap-1 my-1"><LuWholeWord className="inline-block border w-6 h-6  bg-gray-50 dark:bg-gray-300 rounded-md"/><span className="inline-block border py-px px-2  bg-gray-50 dark:bg-gray-300 rounded-md line-clamp-1 whitespace-nowrap">Word: {wordLength}</span></p>

              <p className="flex items-center gap-1 my-1"><TbNumbers className="inline-block border w-6 h-6  bg-gray-50 dark:bg-gray-300 rounded-md"/><span className="inline-block border py-px px-2  bg-gray-50 dark:bg-gray-300 rounded-md line-clamp-1 whitespace-nowrap">Number: {numberLength}</span></p>
              
              <p className="flex items-center gap-1 my-1"><MdOutlineShortText className="inline-block border w-6 h-6  bg-gray-50 dark:bg-gray-300 rounded-md"/><span className="inline-block border py-px px-2  bg-gray-50 dark:bg-gray-300 rounded-md line-clamp-1 whitespace-nowrap">Line: {lineLength}</span></p>
            </div>

            {resultList.length > 0 && !toggleMoreOption && <button onClick={() => setToggleMoreOption(!toggleMoreOption)} className="focus:outline-none text-gray-800 dark:text-gray-100 text-sm text-left my-5 p-px"> Show More Options <FaAngleDown size={"16px"}/></button>}
            {resultList.length > 0 && toggleMoreOption && <button onClick={() => setToggleMoreOption(!toggleMoreOption)} className="focus:outline- text-gray-800 dark:text-gray-100 text-sm text-left my-5 p-px"> Hide More Options <FaAngleUp size={"16px"}/></button>}
            
            <div className={`cards moreItem ${toggleMoreOption ? "flex flex-wrap gap-4 items-start md:block" : "hidden"}`}>
              {resultList.map(item => (
                <CharacterCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className=" w-full md:w-4/5 text-center">
            <textarea ref={textareaRef} onChange={handleCounter} className="w-full h-64  border bg-gray-50 dark:bg-gray-300 border-gray-100 p-4 shadow rounded-lg leading-7" placeholder="Type or pate your text!" autoComplete="off"></textarea>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {!clearBtn &&  <button className="bg-gray-500 text-gray-50 py-2 px-8 my-5 rounded cursor-not-allowed focus:outline-none" disabled="disabled">Clear</button>}

              {clearBtn && <button onClick={handleClear} className="bg-rose-600 hover:bg-rose-500 text-gray-50 py-2 px-8 my-5 rounded cursor-pointer focus:outline-none">Clear</button>}

              {!token && !isUpdateEnabled &&  characterLength > 0 && <button onClick={() => setToggleLoginModal(true)}  className="bg-blue-600 hover:bg-blue-500 text-blue-50 py-2 px-8 my-5 rounded focus:outline-none">Login to save</button>}

              {token && !isUpdateEnabled &&  characterLength > 0 && <button onClick={handleSaveCount}  className="bg-blue-600 hover:bg-blue-500 text-blue-50 py-2 px-8 my-5 rounded focus:outline-none">Save This Count</button>}

              {isUpdateEnabled &&  characterLength > 0 && <button onClick={handleUpdateCount}  className="bg-blue-600 hover:bg-blue-500 text-blue-50 py-2 px-8 my-5 rounded focus:outline-none">Update</button>}
            </div>
          </div>
        </section>

        {!token && toggleLoginModal &&  <LoginModal setToggleLoginModal={setToggleLoginModal} setToggleRegistrationModal={setToggleRegistrationModal} />}

        {!token && toggleRegistrationModal && <RegisterModal setToggleLoginModal={setToggleLoginModal} setToggleRegistrationModal={setToggleRegistrationModal}/>}
      </main>
      {showLoading &&
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50">
          <span className="w-96 absolute top-1/2 left-1/2 m-auto"><BiLoaderCircle  className="animate-spin" size={"30px"} color="white"/></span>
        </div>
      }
    </>

  )
}