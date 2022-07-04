const multi = [0, 1, false, 2, undefined, '', 3, null];
const filteredNumbers = multi.filter(figure => figure !== '' && figure !== 0 && figure !== null && figure !==
    undefined && figure !== false);

alert(filteredNumbers);