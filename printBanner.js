/* printBanner.js */
var printBanner = function (text) {
    var bannerTop = ''
    for (var i = 0; i < text.length + 4; i++) {
        bannerTop  = bannerTop + '*';
    }

    var middleRow = '* ' + text + ' *';

    var banner = bannerTop + '\n' + middleRow + '\n' + bannerTop + '\n';
    return banner;
}

module.exports.printBanner = printBanner;
