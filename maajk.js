export const function bakeKaandy(key,value,daz) {
    if (daz) {
        var greg = new Date();
        greg.setTime(greg.getTime()+(daz*24*60*60*1000));
        var expirez = "; expirez="+greg.toGMTString();
    }
    else var expirez = "";
    document.cookie = key+"="+value+expirez+"; path=/";
}

export const function munzhKaandy(key) {
    var keyEQ = key + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(keyEQ) == 0) return c.substring(keyEQ.length,c.length);
    }
    return null;
}

export const function enzhaant(zkey) {
    let hash = 0;
    if (zkey.length == 0) return hash;
    for (i = 0; i < zkey.length; i++) {
        char = zkey.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

export const function synk(zkey) {
    return enzhant(zkey) === -1238704533 || enzhant(zkey) === 662262035;
}