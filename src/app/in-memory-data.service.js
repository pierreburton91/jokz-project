"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var jokes = [
            {
                "id": 0,
                "title": "nostrud duis",
                "content": "In nulla consectetur dolore laborum amet aute voluptate consectetur ipsum elit ullamco sint.<br><br>Magna velit est dolor reprehenderit ullamco velit aliquip id laboris non. Amet incididunt quis deserunt eiusmod aute elit. Commodo fugiat ullamco ea ipsum Lorem labore commodo quis mollit sunt dolor elit minim. Velit officia dolor nisi cillum deserunt nisi cupidatat fugiat et esse veniam irure tempor. Proident nisi et eu deserunt esse ad ipsum. Nisi esse aute sint laborum non nostrud et proident.\r\n",
                "author": "tandrews5",
                "authorId": 6
            },
            {
                "id": 1,
                "title": "fugiat ut",
                "content": "Do culpa sint est amet cillum mollit aliqua minim nulla elit proident cupidatat. Id consectetur fugiat reprehenderit qui sint aliquip minim laborum. Commodo velit exercitation aliquip proident consectetur sit adipisicing ea velit. Sunt ex ea occaecat voluptate dolor. Ullamco incididunt reprehenderit in id elit.\r\n",
                "author": "tandrews5",
                "authorId": 6
            },
            {
                "id": 2,
                "title": "sint voluptate",
                "content": "Aliqua ea quis dolore aliquip et eiusmod Lorem nisi incididunt incididunt magna magna. In est pariatur do irure excepteur aute est. Velit enim ea Lorem deserunt occaecat cupidatat sit esse cillum adipisicing. Sint consequat dolore dolor dolore dolore incididunt culpa et cillum nostrud ad elit anim. Reprehenderit voluptate ea veniam ex sunt. Ad non commodo pariatur commodo amet deserunt est et voluptate qui id non esse eiusmod.\r\n",
                "author": "tandrews5",
                "authorId": 6
            },
            {
                "id": 3,
                "title": "proident quis",
                "content": "Magna enim irure nisi dolore esse consequat et culpa minim proident ipsum. Qui ipsum magna reprehenderit dolore labore ipsum elit aute eiusmod exercitation in Lorem deserunt cupidatat. Sint reprehenderit exercitation excepteur eiusmod eiusmod dolore eu in velit eu enim nulla. Laborum anim aliquip mollit eu cillum nulla nostrud et sunt cillum ea amet. Do ex exercitation velit est proident excepteur laborum sit nisi occaecat proident ullamco excepteur duis.\r\n",
                "author": "preyes1",
                "authorId": 2
            },
            {
                "id": 4,
                "title": "do reprehenderit",
                "content": "Proident mollit et sint voluptate. Dolore ullamco reprehenderit consectetur adipisicing. Proident eiusmod ullamco cupidatat non dolor enim sint deserunt est. Voluptate magna eiusmod excepteur culpa tempor qui reprehenderit ipsum sit. Incididunt ad in minim cupidatat mollit nulla nulla ullamco est incididunt in.\r\n",
                "author": "preyes1",
                "authorId": 2
            },
            {
                "id": 5,
                "title": "excepteur voluptate",
                "content": "Sit sint eiusmod mollit incididunt cupidatat duis fugiat incididunt excepteur consequat est ipsum qui eu. Anim voluptate nostrud aliquip aliquip mollit adipisicing eu eiusmod cillum ut ut. Elit duis reprehenderit aute occaecat magna enim laboris elit nulla.\r\n",
                "author": "hjenkins3",
                "authorId": 4
            },
            {
                "id": 6,
                "title": "et incididunt",
                "content": "Duis sint duis Lorem ea proident id aute ea incididunt pariatur tempor laboris voluptate pariatur. Eiusmod pariatur labore incididunt nulla commodo enim et excepteur. In fugiat dolor proident qui. Lorem cupidatat sunt ea velit.\r\n",
                "author": "hjenkins3",
                "authorId": 4
            },
            {
                "id": 7,
                "title": "laborum anim",
                "content": "Laborum eiusmod nulla ipsum ea laboris eiusmod esse. Duis ut sit nostrud duis exercitation ea adipisicing. Cillum excepteur in aliquip do sit quis exercitation quis fugiat reprehenderit consequat. Dolore dolore et sit veniam ad culpa et. Culpa cillum cupidatat fugiat commodo. Anim occaecat nostrud elit sit ad non.\r\n",
                "author": "hjenkins3",
                "authorId": 4
            },
            {
                "id": 8,
                "title": "nulla nulla",
                "content": "Velit cupidatat officia voluptate ut irure esse tempor veniam qui. Ullamco commodo fugiat adipisicing exercitation sit dolore esse sunt veniam. Tempor duis eiusmod voluptate deserunt. Mollit ullamco enim est et.\r\n",
                "author": "tkim6",
                "authorId": 7
            },
            {
                "id": 9,
                "title": "ea eu",
                "content": "Ea aliquip sit dolore cupidatat nisi ullamco nulla ipsum. Cillum nisi incididunt nulla in reprehenderit voluptate officia sit tempor nisi mollit sunt sit. Dolore sunt quis id occaecat consectetur deserunt nostrud esse nisi commodo laborum deserunt adipisicing. Incididunt exercitation cillum commodo sit. Do elit proident non aliqua adipisicing sit Lorem aliqua qui veniam in elit consequat. Ipsum deserunt aliqua dolore ad quis et amet eu minim anim pariatur.\r\n",
                "author": "tkim6",
                "authorId": 7
            },
            {
                "id": 10,
                "title": "nostrud voluptate",
                "content": "Id aliqua est exercitation Lorem tempor esse consequat ex enim nostrud mollit velit nostrud. Ut do quis exercitation eiusmod eu. Aute cupidatat esse aliquip nisi mollit velit. Sit proident est ad aute aliqua proident reprehenderit aute deserunt ex enim id dolor. Voluptate amet aute id sint laborum laborum ipsum consectetur id sit aliquip. In id voluptate incididunt sunt nisi sunt quis aute dolor quis.\r\n",
                "author": "jboyd8",
                "authorId": 9
            }
        ];
        var users = [{
                "id": 1,
                "registred": 1485903600000,
                "nickname": "wknight0",
                "email": "wknight0@discuz.net",
                "firstname": "Wayne",
                "lastname": "Knight",
                "picture": "https://robohash.org/inciduntmaiorestempore.png?size=150x150&set=set2",
                "jokes": 1,
                "admin": false,
                "password": "11111111"
            }, {
                "id": 2,
                "registred": 1485903600000,
                "nickname": "preyes1",
                "email": "preyes1@bravesites.com",
                "firstname": "Philip",
                "lastname": "Reyes",
                "picture": "https://robohash.org/placeatlaborumvoluptas.png?size=150x150&set=set2",
                "jokes": 2,
                "admin": false,
                "password": "22222222"
            }, {
                "id": 3,
                "registred": 1485903600000,
                "nickname": "cdixon2",
                "email": "cdixon2@google.com.br",
                "firstname": "Charles",
                "lastname": "Dixon",
                "picture": "https://robohash.org/reprehenderitoditunde.png?size=150x150&set=set2",
                "jokes": 3,
                "admin": false,
                "password": "33333333"
            }, {
                "id": 4,
                "registred": 1485903600000,
                "nickname": "hjenkins3",
                "email": "hjenkins3@dot.gov",
                "firstname": "Howard",
                "lastname": "Jenkins",
                "picture": "https://robohash.org/illoearumipsam.jpg?size=150x150&set=set2",
                "jokes": 4,
                "admin": false,
                "password": "44444444"
            }, {
                "id": 5,
                "registred": 1485903600000,
                "nickname": "jrussell4",
                "email": "jrussell4@ca.gov",
                "firstname": "Joshua",
                "lastname": "Russell",
                "picture": "https://robohash.org/magniaccusamusplaceat.jpg?size=150x150&set=set2",
                "jokes": 5,
                "admin": false,
                "password": "55555555"
            }, {
                "id": 6,
                "registred": 949359600000,
                "nickname": "tandrews5",
                "email": "tandrews5@timesonline.co.uk",
                "firstname": "Tammy",
                "lastname": "Andrews",
                "picture": "https://robohash.org/evenietquibusdamaut.bmp?size=150x150&set=set2",
                "jokes": 6,
                "admin": false,
                "password": "66666666"
            }, {
                "id": 7,
                "registred": 1485903600000,
                "nickname": "tkim6",
                "email": "tkim6@plala.or.jp",
                "firstname": "Todd",
                "lastname": "Kim",
                "picture": "https://robohash.org/magniconsequunturmolestiae.bmp?size=150x150&set=set2",
                "jokes": 7,
                "admin": false,
                "password": "77777777"
            }, {
                "id": 8,
                "registred": 1485903600000,
                "nickname": "rbrooks7",
                "email": "rbrooks7@earthlink.net",
                "firstname": "Richard",
                "lastname": "Brooks",
                "picture": "https://robohash.org/inventoreincidunteum.png?size=150x150&set=set2",
                "jokes": 8,
                "admin": false,
                "password": "88888888"
            }, {
                "id": 9,
                "registred": 1485903600000,
                "nickname": "jboyd8",
                "email": "jboyd8@wikia.com",
                "firstname": "Jeremy",
                "lastname": "Boyd",
                "picture": "https://robohash.org/solutavitaeinventore.png?size=150x150&set=set2",
                "jokes": 9,
                "admin": false,
                "password": "99999999"
            }, {
                "id": 10,
                "registred": 1485903600000,
                "nickname": "jfoster9",
                "email": "jfoster9@shop-pro.jp",
                "firstname": "Janice",
                "lastname": "Foster",
                "picture": "https://robohash.org/reiciendisrepellendustemporibus.bmp?size=150x150&set=set2",
                "jokes": 10,
                "admin": false,
                "password": "1010101"
            }, {
                "id": 11,
                "registred": 1486903600000,
                "nickname": "admin",
                "email": "admin@gmail.com",
                "firstname": "Pierre",
                "lastname": "Burton",
                "picture": "https://robohash.org/admin.bmp?size=150x150&set=set2",
                "jokes": 0,
                "admin": true,
                "password": "admin"
            }];
        return { jokes: jokes, users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map