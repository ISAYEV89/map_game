$(function () {


    let cityData = [
        ['AZE1676', 'Ağstafa'],
        ['AZE1677', 'Daşkəsən'],
        ['AZE1678', 'Gədəbəy'],
        ['AZE1679', 'Gəncə'],
        ['AZE1680', 'Xanlar'],
        ['AZE1681', 'Goranboy'],
        ['AZE1682', 'Kəlbəcər'],
        ['AZE1683', 'Mingəçevir'],
        ['AZE1684', 'Qazax'],
        ['AZE1685', 'Şəmkir'],
        ['AZE1686', 'Samux'],
        ['AZE1687', 'Tovuz'],
        ['AZE1688', 'Yevlakh Rayon'],
        ['AZE1689', 'Bakı'],
        ['AZE1690', 'Abşeron'],
        ['AZE1691', 'Ağdam'],
        ['AZE1692', 'Ağdaş'],
        ['AZE1693', 'Ağsu'],
        ['AZE1694', 'Hajigabul'],
        ['AZE1695', 'Astara'],
        ['AZE1696', 'Bərdə'],
        ['AZE1697', 'Beyləqan'],
        ['AZE1698', 'Biləsuvar'],
        ['AZE1699', 'Cəbrayıl'],
        ['AZE1700', 'Cəlilabad'],
        ['AZE1701', 'Dəvəçi'],
        ['AZE1702', 'Füzuli'],
        ['AZE1703', 'Göyçay'],
        ['AZE1704', 'İmişli'],
        ['AZE1705', 'İsmayıllı'],
        ['AZE1706', 'Kürdəmir'],
        ['AZE1707', 'Lankaran'],
        ['AZE1708', 'Masallı'],
        ['AZE1709', 'Lerik'],
        ['AZE1710', 'Neftçala'],
        ['AZE1711', 'Qobustan'],
        ['AZE1712', 'Siyəzən'],
        ['AZE1713', 'Saatlı'],
        ['AZE1714', 'Sabirabad'],
        ['AZE1715', 'Salyan'],
        ['AZE1716', 'Şamaxı'],
        ['AZE1717', 'Sumqayıt'],
        ['AZE1718', 'Ucar'],
        ['AZE1719', 'Xizı'],
        ['AZE1720', 'Yardımlı'],
        ['AZE1721', 'Zərdab'],
        ['AZE1722', 'Ağcabədi'],
        ['AZE1723', 'Balakən'],
        ['AZE1724', 'Qəbələ'],
        ['AZE1725', 'Oğuz'],
        ['AZE1726', 'Qax'],
        ['AZE1727', 'Şəki'],
        ['AZE1728', 'Quba'],
        ['AZE1729', 'Qusar'],
        ['AZE1730', 'Xaçmaz'],
        ['AZE1731', 'Zaqatala'],
        ['AZE1734', 'Xocavənd'],
        ['AZE1735', 'Laçın'],
        ['AZE1736', 'Qubadli'],
        ['AZE1737', 'Şuşa'],
        ['AZE1738', 'Tərtər'],
        ['AZE1739', 'Xocalı'],
        ['AZE1740', 'Zəngilan'],
        ['AZE2415', 'Sədərək'],
        ['AZE2418', 'Ordubad'],
        ['AZE2419', 'Şərur'],
        ['AZE2420', 'Babək'],
        ['AZE2421', 'Culfa'],
        ['AZE2422', 'Naxçıvan'],
        ['AZE2423', 'Şahbuz'],
        ['AZE4838', 'Stepanakert'],
        ['AZE5561', 'Naftalan'],
        ['AZE5562', 'Lankaran'],
        ['AZE5563', 'Shirvan'],
        ['AZE5564', 'Şəki'],
        ['AZE5565', 'Şuşa'],
        ['AZE5566', 'Yevlakh'],
        ['AZE5567', 'Kangarli']
    ];


    //////  Array ichinde melumati gore arrayin indexini tapmaq uchun

    function findIndexNumber(array, str) {
        let indexNumber = array.indexOf(str);
        if (indexNumber < 0) {
            for (i = 0; i < array.length; i++) {

                let indexNumber = array[i].indexOf(str);
                if (indexNumber > -1) {
                    return i;
                }
            }
        }
    }

    //findIndexNumber(cityData2, "AZE1677");


    $(document).on('click', 'path', function () {

        //////////// Lazim olan class adini tapmaq uchun

        let getClass = $(this).attr('class');
        let classArray = getClass.split(" ");

        for (i = 0; i < classArray.length; i++) {
            if (classArray[i].startsWith('sm_state')) {
                var cityCode = classArray[i];
                break;
            }
        }

        cityCode = cityCode.split("_");
        // console.log(cityCode);
        cityCode = cityCode[2];


        let number = findIndexNumber(cityData, cityCode); // data da index nomresi

        $(this).addClass('selected'); // sechdiyini gostermek uchun


        /// Diger varianlari yaratmaq uchun


        var option1 = number;
        var option2 = Math.floor(Math.random() * cityData.length);
        var option3 = Math.floor(Math.random() * cityData.length);
        var option4 = Math.floor(Math.random() * cityData.length);
        var option5 = Math.floor(Math.random() * cityData.length);


        // test variantlari random gelmesi uchun

        let exp = ["bir", "iki", "uch", "dord", "besh"];

        let a = Math.floor(Math.random() * exp.length);


        for (i = 0; i < a.length; i++) {

        }

        console.log(a);


        for (i = 1; i <= 5; i++) {
            // $('#option' + i).text(cityData[xxx][1]);
        }

        //cityData[number][1]

          console.log(cityData[option1][1], cityData[option2][1], cityData[option3][1], cityData[option4][1], cityData[option5][1]);

    });

});

