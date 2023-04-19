

export interface INotebook{
    id: number,
    country: string,
    city: string,
    dateGo: Date,
    dateBack: Date,
    firstPicture: string,
    otherPicture: string[],
    travelContent: string,
    positive: string[],
    negative: string[],
    advise: string[],
    resumeContent: string,
    IsDisplay: boolean,

}

export const NOTEBOOK: INotebook[] = [

{
    id: 1,
    country: 'Sénégal',
    city: 'Dakar',
    dateGo: new Date(2022, 4, 14),
    dateBack: new Date(2022, 5, 17),
    firstPicture: 'assets/img/first-pics.png',
    otherPicture: [
        'assets/img/other-pics.png'
    ],
    travelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum.Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est.Nulla facilisi.Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi.Morbi eget elit ac velit porttitor sodales.Nulla scelerisque risus ex, a faucibus est eleifend sed.Aliquam ac facilisis lorem, ut ornare velit.dignissim metus.Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    positive: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité. Des habitants gentils, spontanés et qui cherchent le contact. Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
    ],
    negative: [
        "Le climat torride en juillet-août, sauf en montagne. La côte très fréquentée l’été et de plus en plus bétonnée"
    ],
    advise: [
        "Prenez une paire de tong !"
    ],
    resumeContent: 'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    IsDisplay: false
},

{
    id: 2,
    country: 'Ivory Coast',
    city: 'Abidjan',
    dateGo: new Date(2022, 4, 14),
    dateBack: new Date(2022, 5, 17),
    firstPicture: 'assets/img/first-pics.png',
    otherPicture: [
        'assets/img/other-pics.png'
    ],
    travelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum.Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est.Nulla facilisi.Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi.Morbi eget elit ac velit porttitor sodales.Nulla scelerisque risus ex, a faucibus est eleifend sed.Aliquam ac facilisis lorem, ut ornare velit.dignissim metus.Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    positive: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité. Des habitants gentils, spontanés et qui cherchent le contact. Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
    ],
    negative: [
        "Le climat torride en juillet-août, sauf en montagne. La côte très fréquentée l’été et de plus en plus bétonnée"
    ],
    advise: [
        "Prenez une paire de tong !"
    ],
    resumeContent: 'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    IsDisplay: false
},


{
    id: 3,
    country: 'Cameroun',
    city: 'Yaoundé',
    dateGo: new Date(2022, 4, 14),
    dateBack: new Date(2022, 5, 17),
    firstPicture: 'assets/img/first-pics.png',
    otherPicture: [
        'assets/img/other-pics.png'
    ],
    travelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum.Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est.Nulla facilisi.Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi.Morbi eget elit ac velit porttitor sodales.Nulla scelerisque risus ex, a faucibus est eleifend sed.Aliquam ac facilisis lorem, ut ornare velit.dignissim metus.Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    positive: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité. Des habitants gentils, spontanés et qui cherchent le contact. Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
    ],
    negative: [
        "Le climat torride en juillet-août, sauf en montagne. La côte très fréquentée l’été et de plus en plus bétonnée"
    ],
    advise: [
        "Prenez une paire de tong !"
    ],
    resumeContent: 'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    IsDisplay: false
},



{
    id: 4,
    country: 'Tanzania',
    city: 'Zanzibar',
    dateGo: new Date(2022, 4, 14),
    dateBack: new Date(2022, 5, 17),
    firstPicture: 'assets/img/first-pics.png',
    otherPicture: [
        'assets/img/other-pics.png'
    ],
    travelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum.Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est.Nulla facilisi.Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi.Morbi eget elit ac velit porttitor sodales.Nulla scelerisque risus ex, a faucibus est eleifend sed.Aliquam ac facilisis lorem, ut ornare velit.dignissim metus.Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    positive: [
        "Un pays très simple à sillonner, sans embrouilles ni complexité. Des habitants gentils, spontanés et qui cherchent le contact. Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"
    ],
    negative: [
        "Le climat torride en juillet-août, sauf en montagne. La côte très fréquentée l’été et de plus en plus bétonnée"
    ],
    advise: [
        "Prenez une paire de tong !"
    ],
    resumeContent: 'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    IsDisplay: false
},

];

