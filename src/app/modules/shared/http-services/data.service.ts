import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [{
      'id': '5c580a79a622395897c0b2b5',
      'username': 'Hodges',
      'password': 'pwd123',
      'name': {
        'first': 'Deleon',
        'last': 'Foster'
      },
      'profileImage': 'http://writingexercises.co.uk/images2/randomimage/toadstools.jpg'
    }, {
      'id': '5c580a79e14777d80743573c',
      'username': 'Burgess',
      'password': 'pwd123',
      'name': {
        'first': 'Erna',
        'last': 'Goodwin'
      },
      'profileImage': 'http://writingexercises.co.uk/images2/randomimage/boat.jpg'
    }, {
      'id': '5c580a79d25da7f3a3dfd4f4',
      'username': 'Marci',
      'password': 'pwd123',
      'name': {
        'first': 'Alvarado',
        'last': 'Klein'
      },
      'profileImage': 'http://writingexercises.co.uk/images2/randomimage/waterfall.jpg'
    }, {
      'id': '5c580a79d14c36e65db68f2f',
      'username': 'Miller',
      'password': 'pwd123',
      'name': {
        'first': 'Craft',
        'last': 'Bruce'
      },
      'profileImage': 'http://writingexercises.co.uk/images2/randomimage/boat.jpg'
    }, {
      'id': '5c580a7922b221ca8c3abea4',
      'username': 'Tia',
      'password': 'pwd123',
      'name': {
        'first': 'Ebony',
        'last': 'Evans'
      },
      'profileImage': 'http://writingexercises.co.uk/images2/randomimage/fortress.jpg'
      }
    ];

    const clients = [
      {
        'id': '5c5815ae1061dd9bb2a298a7',
        'name': {
          'first': 'Contreras',
          'last': 'Stanley'
        },
        'isActive': false,
        'age': 37,
        'company': 'ESCENTA',
        'email': 'contreras.stanley@escenta.net',
        'phone': '+1 (990) 486-3396',
        'address': '139 Montrose Avenue, Tryon, Indiana, 1992',
        'about': 'Ullamco ad et aliqua aliqua non duis. Veniam cupidatat eu cillum proident deserunt velit. Et non nisi cupidatat eu commodo deserunt id. Elit commodo adipisicing eiusmod ea enim mollit officia. Aliqua laborum eiusmod id qui tempor pariatur labore sunt elit occaecat.',
        'registered': 'Friday, April 10, 2015 6:00 AM'
      },
      {
        'id': '5c5815aecbde2c1364fdcdc7',
        'name': {
          'first': 'Beatrice',
          'last': 'Mathis'
        },
        'isActive': true,
        'age': 26,
        'company': 'INJOY',
        'email': 'beatrice.mathis@injoy.io',
        'phone': '+1 (860) 562-3865',
        'address': '629 Morgan Avenue, Englevale, Massachusetts, 8737',
        'about': 'Sunt enim tempor ad fugiat sit velit proident deserunt qui reprehenderit exercitation incididunt. Incididunt commodo proident sunt ex in occaecat consequat. Voluptate ut nostrud proident consequat nulla esse duis proident eu velit est veniam. Tempor eiusmod aliqua fugiat reprehenderit laborum amet sit.',
        'registered': 'Saturday, July 30, 2016 6:32 AM'
      },
      {
        'id': '5c5815ae492630aa44a3c69f',
        'name': {
          'first': 'Francisca',
          'last': 'Burton'
        },
        'isActive': false,
        'age': 27,
        'company': 'LEXICONDO',
        'email': 'francisca.burton@lexicondo.info',
        'phone': '+1 (879) 453-2037',
        'address': '645 Columbia Street, Sanford, Kansas, 9284',
        'about': 'Anim reprehenderit nostrud elit occaecat in. Fugiat ad deserunt aliqua ad ex laboris adipisicing in. Laboris consectetur deserunt tempor irure veniam mollit et Lorem labore.',
        'registered': 'Friday, April 10, 2015 4:32 PM'
      },
      {
        'id': '5c5815ae60aeadf7f25e9bd4',
        'name': {
          'first': 'Huff',
          'last': 'Preston'
        },
        'isActive': false,
        'age': 35,
        'company': 'NIPAZ',
        'email': 'huff.preston@nipaz.com',
        'phone': '+1 (876) 418-2585',
        'address': '247 Dobbin Street, Jessie, Virgin Islands, 3832',
        'about': 'Cupidatat sunt nulla exercitation dolor sint magna quis excepteur excepteur qui excepteur et eiusmod. Enim laborum aliquip esse duis consequat. Culpa sunt commodo proident in do. Aliqua magna occaecat veniam cupidatat deserunt cupidatat eu deserunt culpa quis dolore voluptate fugiat anim. Nostrud cillum deserunt officia consequat in quis proident quis id. Enim qui enim laboris esse do culpa reprehenderit commodo amet.',
        'registered': 'Sunday, October 25, 2015 10:37 AM'
      },
      {
        'id': '5c5815aedc59ad9c99a494cd',
        'name': {
          'first': 'Aline',
          'last': 'Sutton'
        },
        'isActive': false,
        'age': 26,
        'company': 'APPLIDEC',
        'email': 'aline.suttonapplidec.ca',
        'phone': '+1 (986) 515-2676',
        'address': '374 Stone Avenue, Gordon, Montana, 4468',
        'about': 'Nostrud ullamco ullamco enim excepteur. Deserunt fugiat consequat id consectetur sint. In commodo excepteur et sunt officia laboris excepteur dolore aute. Ex non ex commodo labore eiusmod eiusmod ea et enim. Labore ipsum ea Lorem tempor est do ex aute Lorem adipisicing id. Nisi ullamco qui ut dolore cillum.',
        'registered': 'Sunday, May 25, 2014 10:13 PM'
      },
      {
        'id': '5c5815ae5d0ff562413afdce',
        'name': {
          'first': 'Morales',
          'last': 'Duffy'
        },
        'isActive': false,
        'age': 25,
        'company': 'UPLINX',
        'email': 'morales.duffy@uplinx.us',
        'phone': '+1 (967) 477-3106',
        'address': '786 Union Street, Wells, Nevada, 8781',
        'about': 'Laboris ullamco non culpa nulla laboris consequat Lorem nisi incididunt. Veniam ea occaecat laborum ipsum commodo et sint cupidatat reprehenderit. Laborum dolor sit incididunt voluptate commodo eiusmod adipisicing exercitation. Adipisicing voluptate commodo magna ex magna labore dolor et minim exercitation. Incididunt sit ut deserunt eiusmod sint voluptate voluptate irure voluptate laboris velit.',
        'registered': 'Wednesday, December 16, 2015 7:41 PM'
      },
      {
        'id': '5c5815aea64200541cede0e3',
        'name': {
          'first': 'Jensen',
          'last': 'Sharpe'
        },
        'isActive': false,
        'age': 28,
        'company': 'RONELON',
        'email': 'jensen.sharpe@ronelon.biz',
        'phone': '+1 (901) 563-2765',
        'address': '989 Maple Street, Bakersville, District Of Columbia, 4177',
        'about': 'Cillum sit cupidatat labore id incididunt irure ut. Et cillum incididunt Lorem anim mollit non sint est id adipisicing. In elit minim ut in mollit enim id ad non eiusmod sint ut. Ad adipisicing veniam ut non tempor. Ut culpa ad do amet. Quis nostrud amet adipisicing qui aliquip aliquip ex. Dolor proident Lorem ex incididunt elit incididunt mollit et sint dolor.',
        'registered': 'Saturday, April 28, 2018 8:30 PM'
      },
      {
        'id': '5c5815ae1a7cdb95be01d3d1',
        'name': {
          'first': 'Dixie',
          'last': 'Mccarty'
        },
        'isActive': true,
        'age': 28,
        'company': 'DRAGBOT',
        'email': 'dixie.mccarty@dragbot.me',
        'phone': '+1 (926) 475-2422',
        'address': '381 Hamilton Walk, Sattley, New Jersey, 7689',
        'about': 'Deserunt amet ipsum est laborum qui dolore in minim et cillum duis ut. Officia do elit et qui do est. Do enim est consectetur occaecat eu in sint aliquip. Cillum excepteur ullamco irure aute exercitation veniam velit cupidatat amet et ea cupidatat. Tempor consequat consequat amet ea.',
        'registered': 'Saturday, May 20, 2017 12:51 PM'
      },
      {
        'id': '5c5815aed1312136f58962bc',
        'name': {
          'first': 'Megan',
          'last': 'Rollins'
        },
        'isActive': true,
        'age': 26,
        'company': 'BOVIS',
        'email': 'megan.rollins@bovis.tv',
        'phone': '+1 (983) 576-2079',
        'address': '260 Wolcott Street, Westerville, South Dakota, 1601',
        'about': 'Esse sint cillum exercitation sit qui dolore adipisicing amet tempor ipsum magna sit. Nisi elit commodo aliquip tempor nulla commodo aute labore reprehenderit est ullamco incididunt. Nisi nulla consectetur irure et magna. Ipsum cillum id id duis sint cupidatat. Id excepteur do laboris id laboris labore labore qui eiusmod officia non elit elit irure. Exercitation adipisicing sit cupidatat sint sint reprehenderit anim minim ea.',
        'registered': 'Friday, May 26, 2017 1:20 PM'
      },
      {
        'id': '5c5815ae1993291d70ccb542',
        'name': {
          'first': 'Helene',
          'last': 'Santiago'
        },
        'isActive': true,
        'age': 24,
        'company': 'OZEAN',
        'email': 'helene.santiago@ozean.name',
        'phone': '+1 (822) 439-2128',
        'address': '890 Kane Street, Harleigh, Minnesota, 3543',
        'about': 'Pariatur aute fugiat nisi tempor esse. Fugiat ea anim eiusmod sit. Cillum dolor nulla fugiat anim veniam magna cillum do et magna amet et. Culpa nisi sint culpa do sit. Commodo ex adipisicing nostrud non cupidatat quis in ullamco.',
        'registered': 'Tuesday, June 13, 2017 2:46 PM'
      },
      {
        'id': '5c5815ae99b57087ddc3cf5b',
        'name': {
          'first': 'Krista',
          'last': 'Robertson'
        },
        'isActive': true,
        'age': 20,
        'company': 'CIPROMOX',
        'email': 'krista.robertson@cipromox.co.uk',
        'phone': '+1 (825) 573-3507',
        'address': '196 Division Place, Ezel, Marshall Islands, 7050',
        'about': 'Aliquip sint ullamco consectetur in elit eiusmod aliquip Lorem excepteur nostrud ex aliqua mollit. Aliquip in aute eiusmod tempor aliqua reprehenderit laboris consequat ipsum sit. Non quis id tempor esse deserunt quis nostrud occaecat proident ut dolor. Ea esse reprehenderit ad amet labore excepteur Lorem. Tempor sint commodo veniam irure labore exercitation qui.',
        'registered': 'Friday, April 17, 2015 11:56 PM'
      },
      {
        'id': '5c5815aebea2938de30145b8',
        'name': {
          'first': 'Michelle',
          'last': 'Gray'
        },
        'isActive': false,
        'age': 38,
        'company': 'DIGIGENE',
        'email': 'michelle.gray@digigene.org',
        'phone': '+1 (850) 587-2277',
        'address': '504 Dekalb Avenue, Brandywine, Vermont, 9203',
        'about': 'Commodo duis ad anim laboris. Deserunt eu et sint ipsum. Commodo magna qui esse pariatur labore commodo aliqua nostrud ipsum cupidatat fugiat. Ullamco laboris exercitation sunt dolor ullamco fugiat ad occaecat. Ut voluptate aliqua laboris non reprehenderit aute nulla occaecat deserunt laboris esse et aute tempor.',
        'registered': 'Wednesday, July 4, 2018 5:59 PM'
      },
      {
        'id': '5c5815aee3991fd6de7f5528',
        'name': {
          'first': 'Effie',
          'last': 'Powell'
        },
        'isActive': true,
        'age': 39,
        'company': 'IZZBY',
        'email': 'effie.powell@izzby.net',
        'phone': '+1 (838) 492-3258',
        'address': '628 Tompkins Place, Healy, Colorado, 8474',
        'about': 'Id sunt aliqua deserunt eiusmod et ad nulla. Dolore dolor consectetur anim exercitation enim laborum voluptate cupidatat incididunt nisi laboris veniam cupidatat voluptate. Cupidatat veniam amet aute ipsum. Nostrud deserunt culpa deserunt reprehenderit ad.',
        'registered': 'Monday, September 28, 2015 1:25 PM'
      },
      {
        'id': '5c5815ae10a6276348c75fc8',
        'name': {
          'first': 'Nielsen',
          'last': 'Garza'
        },
        'isActive': true,
        'age': 33,
        'company': 'CEPRENE',
        'email': 'nielsen.garza@ceprene.io',
        'phone': '+1 (908) 478-2751',
        'address': '864 Ferry Place, Iola, California, 9198',
        'about': 'Eiusmod sunt ex officia adipisicing reprehenderit voluptate do deserunt elit nostrud ut. Sit ex Lorem magna occaecat officia et velit deserunt duis. Officia sit eu reprehenderit enim. Quis aute mollit eiusmod qui sint. Veniam dolor exercitation id do fugiat occaecat cupidatat nisi laborum sint eu. Nulla quis ut consectetur ea commodo. Laboris dolor labore aute est eiusmod minim commodo cupidatat.',
        'registered': 'Sunday, June 10, 2018 11:53 PM'
      },
      {
        'id': '5c5815ae6cdaa3a5781a54be',
        'name': {
          'first': 'Campos',
          'last': 'Fitzpatrick'
        },
        'isActive': false,
        'age': 40,
        'company': 'LIQUIDOC',
        'email': 'campos.fitzpatrick@liquidoc.info',
        'phone': '+1 (821) 535-2953',
        'address': '161 Canton Court, Springville, Delaware, 3966',
        'about': 'Adipisicing ad ea elit exercitation quis fugiat tempor eu. Sint officia ea minim minim. Ullamco velit laboris excepteur commodo sint occaecat sit enim.',
        'registered': 'Monday, February 3, 2014 10:24 PM'
      },
      {
        'id': '5c5815ae8368b10fc4f588c8',
        'name': {
          'first': 'Parrish',
          'last': 'Cherry'
        },
        'isActive': false,
        'age': 23,
        'company': 'ORBIXTAR',
        'email': 'parrish.cherry@orbixtar.com',
        'phone': '+1 (816) 594-3802',
        'address': '425 Quay Street, Rushford, Alabama, 3611',
        'about': 'Lorem occaecat id ut deserunt reprehenderit. Dolor qui dolor commodo eiusmod qui officia sit cillum fugiat. Sint labore sint laborum pariatur reprehenderit labore officia consectetur ut labore culpa deserunt sunt. Voluptate consequat do deserunt irure occaecat ullamco.',
        'registered': 'Saturday, January 17, 2015 12:53 PM'
      },
      {
        'id': '5c5815ae7ca7ef05f16dc5ef',
        'name': {
          'first': 'Sweet',
          'last': 'Kennedy'
        },
        'isActive': true,
        'age': 27,
        'company': 'VERAQ',
        'email': 'sweet.kennedy@veraq.ca',
        'phone': '+1 (833) 552-2638',
        'address': '417 Highland Place, Gracey, Missouri, 4969',
        'about': 'Ad esse cillum veniam laboris aliquip exercitation velit esse deserunt consequat excepteur quis aliquip quis. Deserunt sunt consequat eiusmod nulla anim voluptate labore reprehenderit dolor amet. Aliqua veniam nulla amet minim ut anim excepteur ad sunt esse.',
        'registered': 'Friday, October 13, 2017 1:10 AM'
      },
      {
        'id': '5c5815ae6314185b3573bf2e',
        'name': {
          'first': 'Bernard',
          'last': 'Witt'
        },
        'isActive': true,
        'age': 36,
        'company': 'VORATAK',
        'email': 'bernard.witt@voratak.us',
        'phone': '+1 (843) 521-2789',
        'address': '261 Oak Street, Holcombe, Idaho, 4713',
        'about': 'Deserunt consectetur nostrud nulla mollit voluptate qui consectetur. Ex ad occaecat commodo nostrud qui sunt enim Lorem dolore excepteur minim. Consequat eiusmod ut laboris cillum exercitation consectetur. Incididunt reprehenderit nulla duis do consequat velit quis. Occaecat exercitation dolor irure consectetur Lorem. Proident et anim ipsum quis cupidatat officia dolore consectetur ex aliqua consequat culpa exercitation deserunt. Qui nisi sint irure proident officia.',
        'registered': 'Tuesday, January 27, 2015 9:58 AM'
      },
      {
        'id': '5c5815aecb9e3d59a677068e',
        'name': {
          'first': 'Naomi',
          'last': 'Cantu'
        },
        'isActive': true,
        'age': 40,
        'company': 'UTARIAN',
        'email': 'naomi.cantu@utarian.biz',
        'phone': '+1 (912) 446-2356',
        'address': '345 Pitkin Avenue, Martinez, Iowa, 2817',
        'about': 'Deserunt quis laboris laboris adipisicing veniam nulla qui quis commodo aute. Pariatur nostrud fugiat laboris incididunt quis in pariatur. Dolore laboris cillum deserunt laboris et culpa ad occaecat aliqua velit. Minim duis elit fugiat incididunt exercitation est id duis ut excepteur id.',
        'registered': 'Wednesday, August 17, 2016 2:29 PM'
      },
      {
        'id': '5c5815ae49ae5ee1f6c531e8',
        'name': {
          'first': 'Margaret',
          'last': 'Matthews'
        },
        'isActive': true,
        'age': 29,
        'company': 'COMVEX',
        'email': 'margaret.matthews@comvex.me',
        'phone': '+1 (941) 433-2693',
        'address': '151 Jerome Avenue, Hiseville, Mississippi, 4604',
        'about': 'Cillum reprehenderit magna do eiusmod culpa officia. Aliqua aliqua nostrud est dolore aliquip velit cupidatat ex amet cillum commodo culpa. Aliqua ad elit amet non laboris anim.',
        'registered': 'Wednesday, August 5, 2015 2:06 AM'
      }
    ];

    const articles = [
      {
        'id': '5c58170edc91e347df08e1dd',
        'title': 'President Street Veyo Georgia 2373',
        'content': '',
        'about': 'Ea dolor labore Lorem sint aliquip adipisicing aliqua tempor sunt elit nulla incididunt amet. Deserunt amet consequat consectetur veniam esse id qui tempor nulla deserunt. Laboris Lorem sunt proident Lorem non. Consequat eiusmod enim reprehenderit ipsum id est nisi pariatur fugiat cupidatat.',
        'created': 'Monday, April 13, 2015 9:15 PM',
        'tags': [
          'excepteur',
          'deserunt',
          'ut',
          'ex',
          'voluptate'
        ]
      },
      {
        'id': '5c58170e7429167076d56c92',
        'title': 'Hinckley Place Rehrersburg Delaware 3371',
        'content': '',
        'about': 'Fugiat eu cupidatat duis cupidatat ea amet occaecat eu eu aliqua anim. In sunt eiusmod elit dolore consectetur. Sint labore proident consectetur sint in adipisicing nisi mollit.',
        'created': 'Saturday, July 29, 2017 9:49 PM',
        'tags': [
          'Lorem',
          'commodo',
          'laborum',
          'esse',
          'eu'
        ]
      },
      {
        'id': '5c58170e457cd8a7da34947e',
        'title': 'Sullivan Place Summertown Puerto Rico 3246',
        'content': '',
        'about': 'Voluptate occaecat anim amet ullamco tempor. Do ipsum aute in non aute velit amet amet et. Enim deserunt duis tempor aute ea incididunt et dolor deserunt laboris. Consequat nisi magna nulla ea consectetur aliqua amet anim id eiusmod exercitation excepteur deserunt.',
        'created': 'Saturday, December 16, 2017 11:44 AM',
        'tags': [
          'qui',
          'sit',
          'laborum',
          'quis',
          'enim'
        ]
      },
      {
        'id': '5c58170e7a41b2f3b735d9ec',
        'title': 'Schweikerts Walk Mulberry Hawaii 5453',
        'content': '',
        'about': 'Magna fugiat veniam do dolore adipisicing. Ullamco dolore nostrud commodo laborum deserunt commodo enim nisi laboris ex. Elit aute aute duis est qui Lorem exercitation aliquip Lorem ex enim deserunt laborum. Magna sunt esse duis Lorem dolor excepteur exercitation culpa reprehenderit do dolor culpa enim.',
        'created': 'Sunday, January 12, 2014 5:40 AM',
        'tags': [
          'cupidatat',
          'non',
          'labore',
          'sunt',
          'amet'
        ]
      },
      {
        'id': '5c58170ed08252b73ec37208',
        'title': 'Wallabout Street Rockhill Palau 3485',
        'content': '',
        'about': 'In ea occaecat voluptate labore ipsum fugiat sit dolor. Sit excepteur sit ea quis sunt magna laboris. Non dolor irure anim aliqua eu occaecat labore Lorem ipsum commodo non in occaecat excepteur. Tempor culpa id sunt sit sit sit duis laborum enim incididunt ullamco mollit aliqua. Nisi ipsum aute pariatur Lorem. Eu labore reprehenderit pariatur incididunt. Aute elit ex ea proident qui enim sunt cupidatat commodo.',
        'created': 'Saturday, May 31, 2014 8:17 AM',
        'tags': [
          'non',
          'aliqua',
          'qui',
          'excepteur',
          'mollit'
        ]
      },
      {
        'id': '5c58170e7a1ac0921cb5e735',
        'title': 'Terrace Place Bennett Missouri 762',
        'content': '',
        'about': 'Laborum qui dolore cupidatat quis anim commodo ex irure id Lorem. Lorem excepteur anim dolore ut adipisicing nostrud ad. Est magna pariatur eiusmod duis tempor nisi et sint magna nisi. Consequat Lorem minim officia ut adipisicing fugiat exercitation nisi dolore aute Lorem incididunt. Sint elit ullamco dolor reprehenderit est consectetur eu ea est enim aliquip enim mollit. Nostrud nostrud nulla amet non consequat nisi qui ea incididunt duis dolore veniam consequat.',
        'created': 'Friday, August 5, 2016 8:55 PM',
        'tags': [
          'ut',
          'anim',
          'qui',
          'cillum',
          'ipsum'
        ]
      },
      {
        'id': '5c58170ee469708b19fd98c8',
        'title': 'Brightwater Court Allamuchy Northern Mariana Islands 5545',
        'content': '',
        'about': 'Excepteur occaecat sint ea ullamco consectetur cupidatat commodo magna culpa voluptate amet veniam Lorem. Ullamco consequat ea quis consectetur aliqua sint irure. Ullamco dolore veniam exercitation dolor eu adipisicing do. Tempor voluptate ipsum commodo aliquip cillum deserunt incididunt occaecat. Est duis anim veniam ipsum culpa voluptate elit consectetur sunt sunt ipsum. Irure adipisicing irure exercitation irure commodo aute sit incididunt anim magna sunt in. Esse fugiat labore enim ad ut magna officia Lorem laboris.',
        'created': 'Sunday, June 11, 2017 11:01 PM',
        'tags': [
          'officia',
          'Lorem',
          'pariatur',
          'consectetur',
          'quis'
        ]
      },
      {
        'id': '5c58170e57802ef4511fd006',
        'title': 'Nevins Street Ventress Texas 1177',
        'content': '',
        'about': 'Consequat fugiat magna magna occaecat. Nulla non Lorem ut ea proident eu mollit culpa velit. Minim sint ad esse aute adipisicing amet. Aliqua excepteur eu commodo sit incididunt minim labore commodo dolor ex. Ipsum et ad ex proident dolor id ea adipisicing mollit incididunt incididunt culpa nisi. Do nulla labore consequat velit adipisicing exercitation sit minim consectetur labore veniam irure fugiat.',
        'created': 'Monday, April 7, 2014 7:21 PM',
        'tags': [
          'eiusmod',
          'est',
          'Lorem',
          'pariatur',
          'sint'
        ]
      },
      {
        'id': '5c58170e55871bde96970301',
        'title': 'Ditmars Street Walker Vermont 7158',
        'content': '',
        'about': 'Consequat fugiat culpa irure eu commodo deserunt Lorem. Commodo do ad ad adipisicing. Commodo amet labore cupidatat tempor. Id ullamco commodo nostrud consectetur nisi cupidatat adipisicing et enim. Officia est irure dolore tempor magna. Irure aliquip est mollit reprehenderit magna duis veniam voluptate ex exercitation commodo eu. Do irure nisi laborum elit reprehenderit culpa Lorem occaecat excepteur nulla ut id.',
        'created': 'Tuesday, October 3, 2017 3:07 AM',
        'tags': [
          'nostrud',
          'et',
          'ut',
          'non',
          'tempor'
        ]
      },
      {
        'id': '5c58170e376f1df7870fa7e5',
        'title': 'Girard Street Inkerman Kansas 2542',
        'content': '',
        'about': 'Labore eiusmod fugiat ex laboris duis excepteur ut. Cupidatat ad consequat dolore officia id consequat cupidatat consectetur enim nulla minim commodo ea minim. Ut mollit ipsum est minim commodo veniam velit. Occaecat non pariatur ullamco officia veniam nostrud ut magna cupidatat tempor.',
        'created': 'Tuesday, April 17, 2018 11:59 AM',
        'tags': [
          'reprehenderit',
          'anim',
          'eu',
          'nulla',
          'incididunt'
        ]
      }
    ];

    const comments = [
      {
        'id': '5c58193e672cdd0918d8fc43',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Non quis et proident sit excepteur cillum eiusmod dolore nisi. Nulla nostrud dolore nostrud anim amet cupidatat reprehenderit consectetur. Officia ea aute quis sit nostrud Lorem sit laboris non. Cupidatat ad duis nostrud labore cillum. Ad irure occaecat officia ad ad irure aliquip.',
        'posted': 'Thursday, July 19, 2018 8:26 PM',
        'articalId': '5c58170e55871bde96970301'
      },
      {
        'id': '5c58193eb726623977e3e029',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Esse ipsum laborum laborum cupidatat ut. Adipisicing sit officia ut tempor enim incididunt. Est cillum incididunt magna cupidatat.',
        'posted': 'Friday, December 14, 2018 1:55 AM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193eb0ff90363cd8b6d2',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Culpa fugiat cupidatat sunt incididunt in deserunt pariatur do id qui. Aute ad pariatur incididunt sit. Cillum ut adipisicing mollit veniam magna. Incididunt nisi sunt laboris dolor adipisicing ad voluptate. Non Lorem commodo occaecat culpa Lorem consectetur nostrud dolor ipsum ullamco aliquip dolore nisi adipisicing. Ea laborum sunt eiusmod ullamco duis duis magna ullamco commodo qui mollit fugiat minim Lorem.',
        'posted': 'Monday, January 20, 2014 4:36 AM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193ee85687561cb5ddce',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Veniam ullamco officia incididunt do laboris veniam incididunt aute nostrud dolor velit sit est. Ex deserunt ad culpa duis dolor mollit anim reprehenderit exercitation. Occaecat officia sint velit dolor enim commodo est eiusmod duis elit magna commodo amet. Lorem reprehenderit cupidatat mollit voluptate fugiat veniam. Sint laboris incididunt ea dolor velit excepteur ex.',
        'posted': 'Saturday, October 3, 2015 7:32 AM',
        'articalId': '5c58170e55871bde96970301'
      },
      {
        'id': '5c58193e04d5283d715124fc',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Eu do qui Lorem elit laborum ad occaecat Lorem eu fugiat. Ut aute culpa amet exercitation mollit ea. Commodo ullamco ut ad proident anim eiusmod ad eiusmod. Duis fugiat Lorem est incididunt nisi reprehenderit. Commodo elit ut minim aute sint. Laboris excepteur sint culpa dolor deserunt velit. Nulla occaecat voluptate cillum in pariatur.',
        'posted': 'Sunday, March 9, 2014 6:35 PM',
        'articalId': '5c58170edc91e347df08e1dd'
      },
      {
        'id': '5c58193e6adab7aa288b9c35',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Non nostrud laborum occaecat pariatur occaecat ullamco in culpa. Dolor nisi ad aliquip enim sit reprehenderit voluptate non magna occaecat non ipsum qui. Ea deserunt exercitation culpa anim nostrud nostrud proident nulla pariatur adipisicing occaecat reprehenderit. Pariatur aliqua ex mollit aute et elit commodo fugiat non eiusmod incididunt nulla adipisicing. Veniam cupidatat excepteur laboris quis dolore.',
        'posted': 'Friday, May 5, 2017 8:25 AM',
        'articalId': '5c58170e7429167076d56c92'
      },
      {
        'id': '5c58193e6ae938f3759bfd73',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Elit deserunt irure est excepteur magna excepteur duis quis exercitation ex. Labore non nisi ea ad aliqua non deserunt deserunt consectetur ad ea id. Officia voluptate anim ipsum fugiat proident ullamco consectetur sint labore cupidatat cupidatat. Labore nulla pariatur aute nostrud commodo officia aute eiusmod exercitation consectetur pariatur exercitation. Aliquip cupidatat nostrud aute id et commodo eu. Ipsum do laboris officia consequat ad.',
        'posted': 'Friday, August 19, 2016 5:45 AM',
        'articalId': '5c58170e55871bde96970301'
      },
      {
        'id': '5c58193e70058cae53dd7b6e',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ullamco ullamco velit in et mollit laborum sunt labore sint. Veniam ullamco ex dolore proident ea deserunt officia magna reprehenderit adipisicing do magna tempor. Lorem ex anim incididunt dolore nostrud elit aute officia. Dolore incididunt exercitation veniam commodo in magna consectetur nulla sunt laborum. Adipisicing laboris anim magna minim quis id ex irure occaecat.',
        'posted': 'Saturday, February 8, 2014 11:53 PM',
        'articalId': '5c58170e7a41b2f3b735d9ec'
      },
      {
        'id': '5c58193ee9df605a4dbcadea',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Lorem elit nostrud voluptate aliqua nulla ullamco nulla et do do enim consectetur eiusmod. Non sit incididunt adipisicing deserunt anim aliqua esse in esse pariatur excepteur est. Adipisicing id mollit fugiat eu labore labore dolor deserunt cupidatat. Sit consectetur enim ex ex ad sunt est laboris. Culpa irure excepteur non officia voluptate non. Sunt ea consequat magna exercitation non ut dolore sunt. Velit nisi esse ipsum aute sunt sit labore anim ut.',
        'posted': 'Friday, June 5, 2015 4:30 PM',
        'articalId': '5c58170e57802ef4511fd006'
      },
      {
        'id': '5c58193e5f0e3f5542786224',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ut in et esse qui est. Quis est et pariatur irure nostrud reprehenderit officia. Nulla ut quis fugiat ex anim reprehenderit.',
        'posted': 'Monday, October 20, 2014 4:17 AM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193e7b5526a6ee2e5428',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Velit anim fugiat consectetur ullamco anim ex fugiat eiusmod. Sit eiusmod ullamco dolor velit incididunt mollit mollit nostrud occaecat ipsum nisi dolor esse aliquip. Consectetur culpa sint reprehenderit anim ipsum dolore dolor aliqua commodo magna. Mollit magna incididunt do in in duis mollit ullamco commodo ea laborum. Culpa sunt occaecat amet do sunt veniam ex mollit magna eu do sint aliquip fugiat. Qui consequat fugiat laborum labore veniam enim anim sit proident fugiat minim velit consectetur.',
        'posted': 'Friday, September 14, 2018 8:20 AM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193ee05fd50fa1c64d65',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Occaecat enim id aliquip et est minim mollit tempor commodo veniam culpa nulla sit. Occaecat do nulla adipisicing enim proident cupidatat excepteur esse elit. Eu laboris exercitation voluptate do veniam nisi consequat ullamco dolore in laborum. In non ex voluptate occaecat. Aliqua consequat velit ipsum aliqua culpa id elit et laboris cupidatat.',
        'posted': 'Monday, December 11, 2017 8:50 AM',
        'articalId': '5c58170edc91e347df08e1dd'
      },
      {
        'id': '5c58193eb5ecacf9007a02c3',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Non officia sit veniam pariatur fugiat est ipsum enim sit adipisicing exercitation dolore labore enim. Laborum deserunt eiusmod reprehenderit incididunt reprehenderit labore elit. Enim incididunt occaecat id tempor ut aliqua nostrud occaecat adipisicing amet in velit velit. Qui voluptate est fugiat consectetur proident ullamco in adipisicing consequat in amet consectetur pariatur officia.',
        'posted': 'Friday, January 5, 2018 1:56 AM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193eb165390e494b54fb',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Magna consectetur laborum sint commodo est quis quis enim amet. Officia in Lorem ex ullamco cupidatat dolor dolor. Duis dolor veniam veniam pariatur incididunt dolore deserunt excepteur excepteur ut pariatur ad enim do.',
        'posted': 'Thursday, June 14, 2018 11:02 AM',
        'articalId': '5c58170e57802ef4511fd006'
      },
      {
        'id': '5c58193ecb6f7a5e5a981bca',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ipsum fugiat enim aliquip est sint tempor laboris sint adipisicing laboris velit reprehenderit mollit. Magna aliquip ut Lorem excepteur. Est exercitation ex minim sunt do deserunt dolore qui. Sit eiusmod dolor esse velit dolore incididunt deserunt cillum sunt ex eiusmod tempor id.',
        'posted': 'Saturday, December 30, 2017 1:59 AM',
        'articalId': '5c58170e457cd8a7da34947e'
      },
      {
        'id': '5c58193ec5326f2ab812d45b',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Reprehenderit deserunt ea proident in reprehenderit ullamco dolore sunt cillum officia pariatur labore enim elit. Esse magna excepteur nulla ipsum aliquip officia proident nulla enim eu ex elit aliqua ex. Eu ullamco labore dolor laborum laborum est elit minim do aute. Consectetur commodo consectetur non non nulla.',
        'posted': 'Thursday, February 18, 2016 5:34 AM',
        'articalId': '5c58170ed08252b73ec37208'
      },
      {
        'id': '5c58193ed99e676a996e3894',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ipsum id ea laborum eu. Eu occaecat sint minim aliqua. Esse fugiat aliqua cillum laboris ex culpa ut exercitation id.',
        'posted': 'Saturday, September 15, 2018 2:46 PM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193e749d6c7a8d2fe20e',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ipsum aliqua velit proident nisi officia pariatur elit eu et enim. Labore ad Lorem minim occaecat voluptate incididunt proident qui deserunt ipsum labore mollit. Ullamco cupidatat culpa aliquip sint velit deserunt enim quis culpa proident consequat ullamco non. Ut exercitation do ea dolor minim laborum ex voluptate consequat proident esse. Ex in in dolore veniam do sit aliqua cupidatat id do aliquip ut. Culpa nostrud eiusmod culpa est ex veniam amet amet veniam sit esse nisi incididunt sit.',
        'posted': 'Tuesday, February 7, 2017 1:48 AM',
        'articalId': '5c58170e55871bde96970301'
      },
      {
        'id': '5c58193e3e70136ed4576922',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Minim amet ullamco laboris aliquip fugiat officia aliqua sit aliquip sunt est. Nostrud Lorem nulla labore officia. Aute cupidatat in fugiat nostrud labore amet tempor cillum ad consequat qui est enim eu. Quis aliqua cupidatat in veniam duis laborum laboris veniam deserunt aute voluptate dolor officia. Elit veniam reprehenderit commodo in magna. Ea aliqua duis qui Lorem adipisicing et dolor adipisicing elit. Nisi elit fugiat cupidatat voluptate reprehenderit dolore.',
        'posted': 'Monday, July 17, 2017 10:47 PM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193ef499432161ab8dca',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Tempor fugiat labore adipisicing nisi do excepteur ut in reprehenderit. Consectetur sit anim sunt laboris in nostrud Lorem ullamco laborum ex pariatur fugiat aliqua. Commodo labore adipisicing ipsum sunt sunt aliqua sit.',
        'posted': 'Saturday, March 18, 2017 7:26 AM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193ea70e37c50f0bb193',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Eiusmod officia cupidatat voluptate non magna cillum consectetur id. Sint pariatur reprehenderit in mollit non ullamco. Enim do deserunt velit commodo ex et nulla velit consectetur ex et. Excepteur labore voluptate fugiat reprehenderit sint occaecat officia aute laborum velit magna reprehenderit.',
        'posted': 'Friday, April 27, 2018 2:31 AM',
        'articalId': '5c58170e57802ef4511fd006'
      },
      {
        'id': '5c58193e94b7465dd149ad4c',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Exercitation occaecat ea id labore. Culpa irure voluptate adipisicing et ex eu et labore proident. Voluptate duis minim minim ad consectetur duis non exercitation consequat veniam esse nostrud ipsum.',
        'posted': 'Tuesday, February 11, 2014 8:32 AM',
        'articalId': '5c58170e7429167076d56c92'
      },
      {
        'id': '5c58193ee64e013b4534e59f',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Anim incididunt Lorem aliquip quis ad reprehenderit. Deserunt occaecat ut occaecat eiusmod in minim et sunt irure elit cupidatat nisi cillum non. Adipisicing Lorem aute reprehenderit sunt fugiat. Lorem elit labore magna duis eu incididunt qui.',
        'posted': 'Wednesday, September 23, 2015 6:02 PM',
        'articalId': '5c58170e7a41b2f3b735d9ec'
      },
      {
        'id': '5c58193e66b5adbef1ad402a',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Duis qui voluptate nisi dolore aute voluptate laboris irure duis duis incididunt. Nisi aliquip laborum reprehenderit nulla laboris quis sit non consequat commodo irure excepteur dolore ut. Irure culpa velit anim consequat. Ea est ut non laborum sint fugiat. Adipisicing est et pariatur adipisicing aliqua eu qui sint ex qui aliquip incididunt occaecat. Consectetur aliquip dolor cupidatat do anim mollit. Duis anim adipisicing ipsum officia magna.',
        'posted': 'Tuesday, January 26, 2016 1:10 PM',
        'articalId': '5c58170e7429167076d56c92'
      },
      {
        'id': '5c58193e7ecdda52e04b1c6f',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Incididunt adipisicing labore culpa cillum id et aliquip sunt veniam. Eu irure id anim nostrud irure amet non anim veniam enim dolor. Aliqua excepteur fugiat fugiat enim do laboris pariatur id est nulla. Mollit anim elit deserunt velit culpa nostrud sit pariatur. Velit voluptate cillum pariatur elit do tempor ut cupidatat. Fugiat cillum exercitation irure anim veniam do anim laborum dolore velit magna. Anim eu ex veniam ex labore aliqua laborum exercitation in commodo labore eu cupidatat pariatur.',
        'posted': 'Saturday, November 18, 2017 12:26 AM',
        'articalId': '5c58170ed08252b73ec37208'
      },
      {
        'id': '5c58193ef236def04d3adda4',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ipsum incididunt deserunt commodo mollit sunt ex. Culpa occaecat consectetur ea in nulla eu ut anim id ea excepteur aute adipisicing consequat. Nulla eu consectetur deserunt labore nulla dolor laborum consequat officia excepteur ut voluptate. Adipisicing irure cupidatat deserunt Lorem qui duis anim deserunt veniam dolore. Non officia qui incididunt do eiusmod amet proident labore eu.',
        'posted': 'Saturday, August 11, 2018 12:57 AM',
        'articalId': '5c58170e7a41b2f3b735d9ec'
      },
      {
        'id': '5c58193e396d4e5110658595',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ut consectetur esse veniam sunt commodo dolore cillum magna mollit ipsum veniam cillum ut. Ex tempor magna commodo enim. Eu laboris duis enim aliquip mollit esse mollit commodo est velit consectetur. Ut ex cillum ut ullamco. Duis Lorem qui proident elit proident esse ullamco adipisicing ipsum laborum. Occaecat ad do occaecat ullamco magna eu ad nostrud tempor aute quis. Et veniam quis culpa magna fugiat.',
        'posted': 'Thursday, August 16, 2018 3:21 PM',
        'articalId': '5c58170e7a41b2f3b735d9ec'
      },
      {
        'id': '5c58193eb87f953ccd511a14',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Cillum ut elit nisi sit incididunt ad exercitation consectetur occaecat dolore mollit sunt adipisicing. Irure aute sit duis irure tempor. Ullamco enim consectetur in minim. Lorem veniam in incididunt labore commodo. Tempor proident officia veniam sit in ad id Lorem. Mollit eiusmod excepteur esse occaecat velit cillum minim magna.',
        'posted': 'Monday, August 29, 2016 3:15 AM',
        'articalId': '5c58170edc91e347df08e1dd'
      },
      {
        'id': '5c58193e796b7fae10a51f9b',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Sint commodo duis cupidatat aute irure Lorem proident incididunt cillum. Amet mollit non pariatur ea aliqua quis et nisi magna id reprehenderit et est sit. Et aliqua proident eiusmod incididunt et fugiat.',
        'posted': 'Tuesday, May 6, 2014 3:03 PM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193eb9c2a3ea29ba56cb',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Dolor sit minim id aliquip commodo nostrud ad officia. Cupidatat culpa cillum nulla dolor Lorem esse enim ullamco nostrud sint in sunt. Veniam id consequat nulla ut anim anim exercitation ullamco.',
        'posted': 'Monday, June 8, 2015 5:58 AM',
        'articalId': '5c58170ee469708b19fd98c8'
      },
      {
        'id': '5c58193eeedd9804ad96e055',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Reprehenderit ad ut sint nisi ipsum velit. Nulla labore reprehenderit id et ullamco sit velit est nisi magna pariatur proident commodo officia. Incididunt laboris fugiat ea culpa duis laborum eiusmod veniam Lorem veniam pariatur dolore mollit.',
        'posted': 'Friday, January 10, 2014 3:32 AM',
        'articalId': '5c58170e7429167076d56c92'
      },
      {
        'id': '5c58193eef7aed3ae8078652',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ullamco ea veniam fugiat dolor magna nulla aliquip ad. Commodo consequat tempor laboris veniam sint dolor exercitation laboris pariatur laborum qui anim consequat ipsum. Mollit ut enim enim nostrud exercitation laboris excepteur nostrud exercitation. Eu voluptate velit culpa incididunt aute irure in dolor. Est nulla occaecat fugiat excepteur elit do irure nulla anim est minim laborum veniam. Labore amet exercitation irure cillum consectetur aliquip exercitation ex incididunt laborum veniam commodo.',
        'posted': 'Thursday, February 25, 2016 4:24 AM',
        'articalId': '5c58170ee469708b19fd98c8'
      },
      {
        'id': '5c58193eb1074c93ba24b5ae',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Reprehenderit do adipisicing tempor eiusmod. Id eiusmod ex consectetur laborum nulla irure incididunt. Ullamco aliquip in ad laboris in ipsum ea. Cupidatat consectetur laboris sit ipsum sint fugiat elit. Aliqua ut aliqua reprehenderit est cupidatat cupidatat ex id in mollit exercitation consequat. Amet id quis nulla qui do laborum. Cupidatat id ut reprehenderit eu cupidatat nulla magna exercitation ex.',
        'posted': 'Tuesday, October 18, 2016 5:13 AM',
        'articalId': '5c58170e7a41b2f3b735d9ec'
      },
      {
        'id': '5c58193e9966c982f508ee51',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Esse amet laborum ut consectetur ex consectetur quis duis nostrud dolor nostrud incididunt amet irure. Velit occaecat ad esse adipisicing nisi voluptate labore in dolor id pariatur adipisicing ipsum veniam. Est velit sunt anim eiusmod exercitation ut aute occaecat. Et irure nulla magna officia deserunt. Veniam velit Lorem labore duis do elit ex ex velit id esse nisi est ad. Non ea quis anim incididunt commodo esse proident incididunt occaecat nulla velit aute.',
        'posted': 'Wednesday, November 23, 2016 3:33 PM',
        'articalId': '5c58170e7a41b2f3b735d9ec'
      },
      {
        'id': '5c58193e6fca917f1ef03b8d',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Cupidatat do pariatur eiusmod et reprehenderit incididunt cillum adipisicing enim duis et nisi dolor aliqua. Aute irure culpa labore eiusmod. Laboris occaecat exercitation sint anim nulla cillum reprehenderit nisi esse sunt deserunt. Non duis occaecat enim consectetur nisi voluptate aliqua commodo dolore. Est excepteur minim dolor fugiat do irure.',
        'posted': 'Thursday, February 13, 2014 10:55 AM',
        'articalId': '5c58170e7429167076d56c92'
      },
      {
        'id': '5c58193eac4aeec2368c542c',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Exercitation id excepteur nisi nisi. Id Lorem excepteur aute commodo ullamco ea id eu cupidatat Lorem occaecat exercitation. Eu nisi dolore officia aute sit aliquip elit voluptate.',
        'posted': 'Friday, December 23, 2016 5:12 PM',
        'articalId': '5c58170edc91e347df08e1dd'
      },
      {
        'id': '5c58193e372394e4f3df5995',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ipsum id fugiat duis incididunt Lorem duis voluptate anim ea voluptate sunt non minim ea. Qui labore elit in cillum culpa est pariatur veniam eiusmod nisi consectetur nulla. Sint sint officia occaecat est tempor labore ea aliquip labore et consequat.',
        'posted': 'Saturday, January 4, 2014 7:58 AM',
        'articalId': '5c58170e457cd8a7da34947e'
      },
      {
        'id': '5c58193e612a64fd8cd963c7',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Fugiat est quis est ullamco aliqua mollit sit tempor consectetur dolore ipsum sit sit laboris. Do officia quis officia dolore ad ipsum qui tempor voluptate id nulla labore consectetur est. Ex nostrud incididunt consectetur voluptate minim cillum.',
        'posted': 'Sunday, February 21, 2016 8:46 AM',
        'articalId': '5c58170ed08252b73ec37208'
      },
      {
        'id': '5c58193ef28f879ac60ed237',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Veniam adipisicing in incididunt Lorem enim. Ut non aliquip magna elit enim ipsum laboris aute eu non. Nulla cillum non ipsum aliquip culpa ut quis do cupidatat velit ipsum do mollit sint. Velit culpa esse minim eu commodo cillum enim sit anim cupidatat ipsum dolor laboris ut. Voluptate officia nulla proident sit exercitation qui. Reprehenderit minim incididunt in duis et exercitation est laborum culpa.',
        'posted': 'Friday, June 30, 2017 7:13 AM',
        'articalId': '5c58170e457cd8a7da34947e'
      },
      {
        'id': '5c58193ec0a109ab2dbd18aa',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Nostrud anim velit exercitation enim ea fugiat. Sunt ullamco sunt adipisicing irure id exercitation deserunt ullamco cupidatat deserunt deserunt id est officia. Velit veniam ad reprehenderit sint. Adipisicing culpa magna deserunt non cillum reprehenderit eiusmod sint laboris excepteur est. Incididunt occaecat aliqua deserunt enim. Nostrud culpa pariatur magna exercitation esse eu Lorem esse ut dolor mollit amet in. Nisi nostrud eiusmod elit do pariatur.',
        'posted': 'Saturday, March 4, 2017 5:12 AM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193e811a1362393862ec',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Enim quis dolor magna in laboris. Eu commodo magna eiusmod culpa voluptate et amet dolore commodo do ex culpa tempor. Dolor veniam eu aliqua laboris elit labore aliqua sunt cupidatat consectetur officia nisi. Elit incididunt enim nulla in elit veniam minim irure eu laborum aliqua commodo magna ad. Nisi irure tempor ullamco in commodo incididunt sunt ad cupidatat. Reprehenderit reprehenderit et minim exercitation nostrud nisi ea esse id amet adipisicing magna deserunt pariatur. Est proident sit tempor aliqua officia nulla amet nulla veniam ullamco deserunt velit culpa labore.',
        'posted': 'Saturday, October 4, 2014 6:04 PM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193e6dde6e4544c5f5da',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Consectetur sunt veniam eu adipisicing duis labore qui. Labore minim adipisicing ad consectetur elit cillum laborum. Sit incididunt excepteur aute quis eu nostrud magna. Minim pariatur esse est irure qui.',
        'posted': 'Tuesday, May 15, 2018 3:48 PM',
        'articalId': '5c58170e7429167076d56c92'
      },
      {
        'id': '5c58193e50b6f826981da287',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Aliquip culpa duis commodo commodo voluptate ea. Ad proident proident aute magna nostrud ad ex nostrud fugiat. Elit non non proident pariatur in commodo occaecat aute labore ullamco.',
        'posted': 'Thursday, June 8, 2017 11:01 PM',
        'articalId': '5c58170e55871bde96970301'
      },
      {
        'id': '5c58193e826e9929b2aa9d46',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Nisi consequat sint ipsum sunt anim eu eu amet consectetur adipisicing eiusmod. In ipsum cillum occaecat nisi nostrud sit velit amet sint ea. Dolor excepteur veniam duis occaecat nostrud anim. Cillum voluptate voluptate culpa do elit nostrud do incididunt id est sunt. Sunt do laborum labore consequat labore eu eu enim est anim et aliqua eiusmod. Eu dolor ex qui tempor nulla duis est id deserunt exercitation magna aute.',
        'posted': 'Monday, August 13, 2018 7:51 AM',
        'articalId': '5c58170e376f1df7870fa7e5'
      },
      {
        'id': '5c58193e5756105a0735f3a9',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ea aliqua consectetur aute ex culpa proident consectetur. Anim cupidatat pariatur amet mollit voluptate tempor. Sunt aliqua minim magna mollit. Non velit Lorem deserunt labore duis aliquip reprehenderit ut consectetur dolore irure ea culpa. In reprehenderit non veniam non enim aliquip ex et. Qui labore ullamco labore excepteur tempor id anim cillum sit exercitation non commodo nostrud.',
        'posted': 'Wednesday, March 15, 2017 7:54 AM',
        'articalId': '5c58170ee469708b19fd98c8'
      },
      {
        'id': '5c58193ed45a16e9087bafbe',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Culpa sit sunt veniam ipsum. Deserunt consectetur cupidatat est aliquip adipisicing dolore labore eu elit est. Mollit nostrud sunt id mollit reprehenderit esse sit consectetur ad ullamco. Laborum proident proident ullamco tempor laborum est eu elit sint sit qui.',
        'posted': 'Monday, November 2, 2015 3:45 AM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193ed10f6d321c07703e',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Pariatur nostrud minim esse amet mollit irure ut esse. Proident incididunt aliquip Lorem ex sunt ea duis nulla laboris aute est. Duis officia est amet fugiat Lorem sint. Anim dolore dolor nostrud commodo ea laboris nostrud et. Culpa est excepteur ullamco reprehenderit cupidatat id occaecat in Lorem sunt fugiat proident. Aute anim aute pariatur nisi.',
        'posted': 'Saturday, December 9, 2017 4:54 PM',
        'articalId': '5c58170edc91e347df08e1dd'
      },
      {
        'id': '5c58193e49d672bcbcc52415',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ad tempor consectetur sunt nulla ullamco qui proident aliquip proident mollit. Ea ut cupidatat ea voluptate commodo ea dolore ipsum ad labore sit deserunt sunt mollit. Deserunt laborum quis anim officia velit do do aliqua.',
        'posted': 'Thursday, October 27, 2016 10:16 AM',
        'articalId': '5c58170e7a1ac0921cb5e735'
      },
      {
        'id': '5c58193ec6bacd65e9636c50',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Ut nisi labore magna esse proident incididunt dolore ea amet. Ea occaecat eiusmod irure aute enim reprehenderit tempor. Ullamco excepteur velit sint culpa magna sint est adipisicing pariatur.',
        'posted': 'Thursday, January 2, 2014 1:36 PM',
        'articalId': '5c58170edc91e347df08e1dd'
      },
      {
        'id': '5c58193ec4f76f82f22be848',
        'from': '<SyntaxError: Unexpected identifier>',
        'content': 'Irure elit ullamco deserunt proident laborum consequat ad quis id qui. Tempor elit irure adipisicing cupidatat magna tempor. Magna reprehenderit duis occaecat eu nostrud. Sunt dolor ullamco deserunt ullamco adipisicing ex officia ut quis irure elit. Reprehenderit mollit aliqua nostrud Lorem non anim occaecat cupidatat nulla in consectetur nostrud nisi.',
        'posted': 'Wednesday, December 9, 2015 4:29 AM',
        'articalId': '5c58170e57802ef4511fd006'
      }
    ];

    return {users, clients, articles, comments};
  }

  genId<T>(myTable: T[]): string {
    return Math.random().toString(36).substring(2)
    + Math.random().toString(36).substring(2)
    + Math.random().toString(36).substring(10);
  }
}
