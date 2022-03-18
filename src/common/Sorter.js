
export default function sortTags(list) {
    let i, l, mi, ml, x;
    // copy the original array
    list = list.slice(0);

    // split the strings, converting numeric (integer) parts to integers
    // and leaving letters as strings
    for( i = 0, l = list.length; i < l; i++ ) {
        list[i] = list[i].match(/(\d+|[a-z]+)/g);
        for( mi = 0, ml = list[i].length; mi < ml ; mi++ ) {
            x = parseInt(list[i][mi], 10);
            list[i][mi] = !!x || x === 0 ? x : list[i][mi];
        }
    }

    // sort deeply, without comparing integers as strings
    list = list.sort(function(a, b) {
        let i = 0, l = a.length, res = 0;
        while( res === 0 && i < l) {
            if( a[i] !== b[i] ) {
                res = a[i] < b[i] ? -1 : 1;
                break;
            }

            i++;
        }
        return res;
    });

    // glue it together again
    for( i = 0, l = list.length; i < l; i++ ) {
        list[i] = list[i].join("");
    }
    return list;
}