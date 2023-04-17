export interface IPicture{
    id: number,
    picture: string,

}

export interface IPositive{
    pays: string,
    positiveOpinion: string,
}

export interface INegative{
    pays: string,
    negativeOpinion: string,
}

export interface IConseil{
    pays: string,
    newAdvise: string,

}

export interface Iblog{
    id: number,
    country: string,
    city: string,
    dateGo: string,
    dateBack: string,
    firstPicture: string,
    otherPicture: IPicture[],
    travelContent: string,
    positive: IPositive[],
    negative: INegative[],
    advise: IConseil[],
    resumeContent: string,
    IsDisplay: boolean,

}

export const BLOG: Iblog[] = [

{
    id: 1,
    country: 'Albanie',
    city: 'Tirana',
    dateGo: '14.04.22',
    dateBack: '17.05.22',
    firstPicture: 'assets/img/first-pics.png',
    otherPicture: [],
    travelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac. Donec commodo pellentesque sapien eu interdum.Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est.Nulla facilisi.Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi.Morbi eget elit ac velit porttitor sodales.Nulla scelerisque risus ex, a faucibus est eleifend sed.Aliquam ac facilisis lorem, ut ornare velit.dignissim metus.Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.',
    positive: [],
    negative: [],
    advise: [],
    resumeContent: 'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    IsDisplay: false
},

];

