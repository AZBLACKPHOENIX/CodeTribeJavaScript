function kangaroo(x1, v1, x2, v2) {
    let position = x2 - x1;
    let level = v2 - v1;

    if (level !== 0 && position % level === 0 && position / level < 0) {
        return "YES";
    } else {
        return "NO";
    }
}

//Explination  Of The Code
// level !== 0                 They're not jumping at the same speed
// position % level === 0   They can meet after a whole number of jumps
// position / level < 0 The one behind is jumping faster and catching up
// In order to return YES, the constraints must meet all these conditions